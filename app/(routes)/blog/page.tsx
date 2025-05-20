// app/blog/page.tsx
import React from "react";

interface Post {
  id: number;
  title: string;
  content: string;
}

const BlogPage = async () => {
  const apiBaseUrl =
    process.env.NODE_ENV === "production"
      ? "https://your-production-domain.com"
      : "http://localhost:3000";

  // Başlangıçta boş bir dizi:
  let posts: Post[] = [];

  try {
    const res = await fetch(`${apiBaseUrl}/api/blog`, {
      // ISR/SSG değil tamamen SSR istiyorsan cache’i “no-store” yap:
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    // Zorunlu tip dönüşümü:
    posts = (await res.json()) as Post[];
  } catch (error) {
    console.error("Fetch error:", error);
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl">SSR Blog Post</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          // Artık post.id tanımlı:
          <li key={post.id}>
            <h2 className="text-xl">{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
