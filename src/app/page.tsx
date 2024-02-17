import Image from 'next/image'
import Link from "next/link"

export default function Home() {
  return (
     
    <div className=''>
    <div >
       
        <div className='bg-[url("https://www-static.cdn-one.com/cmsimages/en_what-is-a-blog-1.png")] bg-center sm:bg-fixed bg-cover h-screen w-screen'>
          
            <div className=' container mx-auto font-semibold text-xl sm:text-center  text-red-400 p-10' >
              <div className=' '>
            Do you know the Significance of Blog......
            
        
            </div>
             <Link href = "APIss">
             <div className='py-8 px-3 sm:text-2xl text-sm m-4 text-blue-700 max-w-full'>
                  `{"Focus on producing a BLOG that's great for your READERS"}`
                  </div>
                  
                  </Link>
                  
            </div>
            
        </div>
    </div>
    <div>
      <div className='md:flex justify-between px-[60px] py-[10px] text-center bg-red-300'>
        <div>
          <p className='font-semibold'>All rights reserved ©| <Link href="https://github.com/fatimakhalid11022?tab=repositories" target="_blank">Fatima Khalid </Link></p>
        </div>
        <div>
        <Link href="/">Legals</Link>|
            <Link href="/">Terms of Use</Link>|
            <Link href="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
    </div>
  )
}

