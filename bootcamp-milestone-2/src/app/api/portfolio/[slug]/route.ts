import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/helpers/db"
import portfolioSchema from '@/database/portfolioSchema'

type IParams = {
		params: {
			slug: string
		}
}

/* 
	In order to use params, you need to have a request parameter before

	The reason why we do { params }, is to destructure, the object, meaning,
	it allows us to obtain the individual properties within the "IParams" 
	object directly and conveniently, 
	such as the `params` property.

	If we didn't do this, to obtain slug would look messy,
	ex.
	const slug = params.params.slug

	There are more ways to destructure this, but that is up to you to find out
	lol.

 */
export async function GET(req: NextRequest, { params }: IParams) {
    await connectDB() // function from db.ts before
		const { slug } = params // another destructure
		console.log("Searching for portfolio atm");
	   try {
	        const blog = await portfolioSchema.findOne({ slug }).orFail()
	        return NextResponse.json(blog)
	    } catch (err) {
	        return NextResponse.json('Portfolio not found.', { status: 404 })
	    }
}

export async function POST(req: NextRequest, { params }: IParams) {
	await connectDB();
	const { slug } = params;

	console.log(slug + " is the slug for portfolio");

	try {
		const blog = await portfolioSchema.findOne({ slug }).orFail(); // get the particular portfolio
		const body = await req.json();

		console.log("body");
		blog.comments.push(body);

		console.log("pushed");
		const res = blog.save();
		
		console.log("Portfolio comment successfully added!");
		return NextResponse.json('Successfully added comment');
	}
	catch (err) {
		console.log("FAILED to add comment for portfolio :(");
		return NextResponse.json('Unable to add comment', { status: 404 });
	}

	
}