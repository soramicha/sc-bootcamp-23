import React from 'react';
//import type { Blog } from "@/app/blogData.js"
import type { IBlog } from "@/database/blogSchema"
import style from './blogPreview.module.css'
import Link from "../../node_modules/next/link";

export default function BlogPreview(props: IBlog) {
  return (
    <div className={style.div}>
        <div className="mystyle">
            <br></br>
        <h1>{props.title}</h1>
            <p>{new Date(props.date).toLocaleDateString()}</p>
            <p>{props.description}</p>
            <img className="image" alt="img" height={250} src={props.image}></img>
            <Link href={`/blog/${props.slug}`}>Read More</Link>
            <br></br>
        </div>
	  </div>
  );
}