
import React from 'react'

// slug should be same as the directory name. Ex. both can be id. -> sadece blog/[slug] bu şekilde çalışoır blog/123
// ...slug olursa url bunda ise blog/category/tarih/id -> blogtan sonra birden fazla değer gelebilir.
// ...slug liste olarak döner
const BlogSlugPage = async({params}: {params : Promise<{ slug: string}>}) => {
    const slug = (await params). slug
  return (
    <div>{slug}</div>
  )
}

export default BlogSlugPage