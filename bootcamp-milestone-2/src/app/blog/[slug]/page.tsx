import type { IComment } from "@/database/blogSchema";
import CreateComment from "@/components/createComment";
import Comment from "@/components/commentPreview";
import React from "react";
import "./page.css";
import Image from 'next/image'

type Props = {
  params: { slug: string };
};

async function getBlog(slug: string | null) {
  try {
    const res = await fetch(`https://sc-bootcamp-23.vercel.app/blog/${slug}`, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function IndivBlog({ params }: Props) {
  const slug = params.slug;
  const blog = await getBlog(slug);
  
  if (blog == null) {
    return (
      <div>
        <title>Blogs</title>
        <h1>No blogs yet</h1>
      </div>
    );
  } else {
    return (
      <div key={blog._id}>
        <title>{blog.title}</title>
        <main>
          <br></br>
          <h1 className="page-title">{blog.title}</h1>
          <Image className="blogimg" width="300" height="250" alt="img" src={`${blog.image}`}></Image>
          <br></br>
          <p>{new Date(blog.date).toDateString()}</p>
          <p>{blog.description}</p>
          <br></br>
          <h1><b>Comments</b></h1>
          <br></br>
            {blog.comments.map((comment: IComment, index: number) => (
              <div key={index} className="boxdiv">
                <Comment key={index} comment={comment} />
                <br></br>
              </div>
            ))}
          <CreateComment slug={blog.slug}></CreateComment>
          <br></br>
        </main>
      </div>
    );
  }
}