import React from 'react'

const getBlogData = async(id:number)=>{
    const res = await fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`)
    if(!res.ok){
        throw new Error("no data")
    }
    return await res.json()
}

async function BlogDetail({params}:any) {
    const { blog }= await getBlogData(params.id)
    
  return (
    <div className='bg-blue-100 p-24 flex flex-col gap-1 flex-wrap'>
       <h1 className='scroll-m-20 text-4xl font-bold mb-4'>
       Title: {blog.title}
       </h1>
       <p className='text-gray-600 text-xl mb-4'>Description : {blog.description}</p>
       <p>
        {`${blog.content_text}`}
       </p>
    </div>
  )
}

export default BlogDetail