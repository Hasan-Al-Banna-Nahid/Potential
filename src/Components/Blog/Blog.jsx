import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Link, Route } from "react-router-dom";
import BlogDetails from "../BlogDetails/BlogDetails";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      {blog.map((blog) => {
        return (
          <div key={blog.id} className="font-bold text-center p-6 text-3xl">
            <h2>
              {blog.quote}
              <hr className="p-4 my-6" />
              <Link to={`/blog/${blog.id}`}> </Link>
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
