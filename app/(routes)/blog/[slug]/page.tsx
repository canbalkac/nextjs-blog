import React from "react";

// slug should be same as the directory name. Ex. both can be id. -> sadece blog/[slug] bu şekilde çalışoır blog/123
// ...slug olursa url bunda ise blog/category/tarih/id -> blogtan sonra birden fazla değer gelebilir.
// ...slug liste olarak döner
const BlogSlugPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;

  const res = await fetch("http://localhost:3000/api/blog");
  const posts = await res.json();

  const jsonld = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: slug,
    title: posts.title,
    description: posts.description,
  };
  return (
    <div>
      {slug}
      <script
        type="application/json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}
      ></script>
    </div>
  );
};

export default BlogSlugPage;
