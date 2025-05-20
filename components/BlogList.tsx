"use client";
import React, { useEffect, useState } from "react";
// bağımlılıklar useEffectte en alttaki köşeli parantezde belirtiyoruz.
// blog2 için kullandık
// ceo için pek doğru değil
const BlogList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:3000/api/blog", {
        cache: "no-store",
      });
      const data = await res.json();
      setPosts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id}>
            <h2 className="text-xl">{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
