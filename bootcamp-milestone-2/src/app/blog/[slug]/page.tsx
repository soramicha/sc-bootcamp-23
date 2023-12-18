//import { NextRequest, NextResponse } from 'next/server'
//import connectDB from "@/helpers/db"
import type { IComment } from '@/database/blogSchema'
import Comment from '@/components/commentPreview';
import React from 'react'
import "./page.css"

type Props = {
    params: { slug: string };
}

async function getBlog(slug: string) {
	try {
		const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
			cache: "no-store",	
		})

		if (!res.ok) {
			throw new Error("Failed to fetch blog");
		}

		return res.json();
	} catch (err: unknown) {
		console.log(`error: ${err}`);
		return null;
	}
}

export default async function Blog({ params }: Props) {
	const slug = params.slug;
	const blog = await getBlog(slug);

	if (blog == null) {
		return (
            <div>
                <title>Blogs</title>
                <h1>No blogs yet</h1>
            </div>
        );
	}
	else {
		return (
			<div>
			<title>{blog.title}</title>
			<main>
				<br></br>
				<h1 className="page-title">{blog.title}</h1>
				<img className="blogimg" alt="img" src={`/${blog.image}`}></img>
				<br></br>
				<p>{new Date(blog.date).toDateString()}</p>
				<p>{blog.description}</p>
				<br></br>
				<h1>Comments</h1>
				<br></br>
				<p>{blog.comments.map((comment: IComment, index: number) => (
	                <div className="boxdiv">
						<Comment key={index} comment={comment} />
						<br></br>
					</div>
	            ))}</p>
			</main>
			</div>
		);
	}
}


/*type IParams = {
		params: {
			slug: string
		}
}*/

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
/*export async function GET(req: NextRequest, { params }: IParams) {
    await connectDB() // function from db.ts before
		const { slug } = params // another destructure

	   try {
	        const blog = await blogSchema.findOne({ slug }).orFail()
	        return NextResponse.json(blog)
	    } catch (err) {
	        return NextResponse.json('Blog not found.', { status: 404 })
	    }
}*/