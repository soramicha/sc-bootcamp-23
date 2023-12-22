import type { IComment } from "@/database/blogSchema";
import CreateComment from "@/components/createCommentportfolio";
import Comment from "@/components/commentPreview";
import React from "react";
import "./page.css";
import Image from 'next/image'

type Props = {
  params: { slug: string };
};

async function getPortfolio(slug: string | null) {
  try {
    const res = await fetch(`http://localhost:3000/api/portfolio/${slug}`, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch portfolio");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function IndivBlog({ params }: Props) {
  const slug = params.slug;
  const blog = await getPortfolio(slug);

  if (blog == null) {
    return (
      <div>
        <title>Portfolio</title>
        <h1>No portfolios yet</h1>
      </div>
    );
  } else {
    return (
      <div key={blog._id}>
        <title>{blog.title}</title>
        <main>
          <br></br>
          <h1 className="page-title">{blog.title}</h1>
          <Image className="blogimg" width="500" height="250" alt="img" src={`${blog.image}`}></Image>
          <br></br>
          <p>{blog.description}</p>
          <br></br>
          <h1>
            <b>Comments</b>
          </h1>
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