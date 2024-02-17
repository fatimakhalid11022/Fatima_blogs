import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dayjs from "dayjs"
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
  } from "@/components/ui/card"
  import { Badge } from "@/components/ui/badge"

const getBlogs = async()=>{
    const res = await fetch("https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30")
    if(!res.ok){
        throw new Error("Could not retreive blog Posts")
    }
    return await res.json()
}


async function BlogsPage ()  {
 const blogs = await getBlogs()
 
 
//  console.log(blogs)
  return (
    <div className='p-16 bg-blue-100'>
      <div className='text-center font-bold text-3xl underline mb-7'> Blogs </div>
        {blogs.blogs.length>0 ?(
        <div className='flex gap-5 flex-wrap'>
           {blogs.blogs.map((post:any)=>(
            
            <Link href={`/APIss/${post.id}`} key={post.id}>
                 <Card>
                 <CardContent className='max-w-xs flex flex-col gap-1 p-4'>
                <Image 
                src={post.photo_url} 
                alt={post.title} 
                height={400} 
                width={400} 
                className='object-cover' />
               
                 <CardTitle>{post.title}</CardTitle>
                         <CardDescription>{post.description}</CardDescription>
                         <div className='flex justify-between'>
                         <Badge variant="default" className='capitalize'>{post.category}</Badge>
                         <p className='font-semibold '>Posted:{dayjs(post.created_at).format("DD-MMM-YYYY")}</p>
                         </div>
                 </CardContent>
                   
                
                </Card>
            </Link>
           
           ))}
        </div>):(
        <div>No blog found</div>)
        }
           
        </div>
       
  )
}

export default  BlogsPage