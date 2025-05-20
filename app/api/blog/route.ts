import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const posts = [
    {
      id: 1,
      title: "Next.js 15 New Features",
      content: "Details about Server Components and Client Components",
    },
    {
      id: 2,
      title: "Migrating to React 18",
      content: "Updates with Concurrent Mode...",
    },
    {
      id: 3,
      title: "Modern UI with TailwindCSS",
      content: "Advantages of TailwindCSS",
    },
  ];

  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
