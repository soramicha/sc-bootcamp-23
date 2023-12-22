import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import blogSchema from "@/database/blogSchema";

type IParams = {
  params: {
    slug: string;
  };
};

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
  console.log("get blog b");
  await connectDB(); // function from db.ts before
console.log("get blog a"); 
  const { slug } = params; // another destructure
  console.log("fetched data for blog");
  try {
    const blog = await blogSchema.findOne({ slug }).orFail();
    console.log("found the blog");
    return NextResponse.json(blog);
  } catch (err) {
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}*/

export async function POST(req: NextRequest, { params }: IParams) {
	await connectDB();
	const { slug } = params;

	console.log(slug);

	try {
		const blog = await blogSchema.findOne({ slug }).orFail(); // get the particular blog
		const body = await req.json();
		blog.comments.push(body);

		blog.save();

		console.log("Blog comment successfully added!");
		return NextResponse.json('Successfully added comment');
	}
	catch (err) {
		console.log("FAILED :(");
		return NextResponse.json('Unable to add comment', { status: 404 });
	}
}