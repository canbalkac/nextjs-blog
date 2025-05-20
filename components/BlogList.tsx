"use client";
import React, { useEffect, useState } from "react";

export interface Post {
  id: number;
  title: string;
  content: string;
}

const BlogList: React.FC = () => {
  // boş array infer edilemediği için default <Post[]> olarak belirtiyoruz
  const [fetchedPosts, setFetchedPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/blog", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const data = (await res.json()) as Post[];
        setFetchedPosts(data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
    fetchPosts();
  }, []); // bağımlılık dizisi boş, component mount olur olmaz bir kere çalışacak

  return (
    <div>
      <ul className="space-y-4">
        {fetchedPosts.map((post) => (
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
