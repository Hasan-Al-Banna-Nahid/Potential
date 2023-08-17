import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { useLoaderData, useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [blog, setBlog] = useState(null);
  console.log(blog);
  useEffect(() => {
    fetch(`blog.json/${id}`)
      .then((response) => response.json())
      .then((data) => setBlog(data))
      .catch((error) => console.error("Error fetching blog details:", error));
  }, [id]);

  return (
    <div>
      <Header />
      {blog?.map((blog) => {
        return (
          <div key={blog.id}>
            <h2>{blog.description}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default BlogDetails;
