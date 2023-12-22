import "./page.css";
import React from "react";
import BlogPreview from "@/components/blogPreview";
import connectDB from "@/helpers/db";
import Blog from "@/database/blogSchema";

/*export default function Blog() {
    return ( 
        <>
        {blogs.map(blog => 
            <BlogPreview
            title={blog.title}
            description={blog.description}
            image={blog.image}
            date={blog.date}
            slug={blog.slug}
            /> // This is how we call the component
        )}
   
    <div>
<html>
    <title>Blogs</title>
    <main>
      <title>title thing</title>
      <div className="indivblog"></div>
    </main>
</html>

<script src="/Users/sophia/Desktop/scH4I/mywebh4i/bootcamp-milestone-2/src/app/blogData.ts"></script>

</div> </>)
}*/

async function getBlogs() {
console.log("getting blogs");
  await connectDB(); // function from db.ts before
console.log("collected blogs");

  try {
    // query for all blogs and sort by date
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return null;
  }
}

export default async function BlogList() {
  const listofblogs = await getBlogs();
  if (listofblogs == null) {
    return (
      <div>
        <title>Blogs</title>
        <h1>No blogs yet</h1>
      </div>
    );
  } else {
    return (
      <main>
        <title>Blogs</title>
        <div className="indivblog">
          {listofblogs.map((blog) => (
            <BlogPreview
              key={blog._id}
              title={blog.title}
              slug={blog.slug}
              date={blog.date.toLocaleString()}
              description={blog.description}
              image={blog.image}
              comments={[]}
            /> // This is how we call the component
          ))}
        </div>
      </main>
    );
  }
}
