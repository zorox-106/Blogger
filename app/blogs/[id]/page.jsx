'use client'
import { assets } from '@/Assets/assets';
import Footer from '@/Components/Footer';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Button } from '@/Components/ui/Button';
import { ArrowRight } from 'lucide-react';

const Page = ({ params }) => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get('/api/blog', {
          params: { id: params.id }
        })
        setData(response.data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    }
    fetchBlogData();
  }, [params.id])

  return (data ? <>
    <div className='relative bg-tertiary py-5 px-5 md:px-12 lg:px-28 border-b-2 border-border overflow-hidden'>
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-30 -z-10"></div>
      <div className="absolute bottom-[-100px] right-[-50px] w-80 h-80 bg-accent rounded-full mix-blend-multiply opacity-20 -z-10"></div>

      <div className='flex justify-between items-center relative z-10'>
        <Link href='/'>
          <Image src={assets.logo} width={180} alt='logo' className='w-[130px] sm:w-auto' />
        </Link>
        <Link href="/">
          <Button variant="primary" className="bg-white text-foreground" icon={<ArrowRight className="w-4 h-4 text-accent" />}>
            Back Home
          </Button>
        </Link>
      </div>
      
      <div className='text-center my-24 relative z-10'>
        <span className="bg-white text-foreground font-bold px-4 py-1 rounded-full border-2 border-border shadow-[2px_2px_0px_#1E293B] text-sm uppercase tracking-wide mb-6 inline-block">
          {data.category}
        </span>
        <h1 className='text-3xl sm:text-6xl font-extrabold max-w-[800px] mx-auto leading-tight tracking-tight text-foreground'>
          {data.title}
        </h1>
        
        <div className="mt-10 flex items-center justify-center gap-4">
          <Image className='border-2 border-border shadow-[4px_4px_0px_#1E293B] rounded-blob object-cover' src={data.authorImg} width={64} height={64} alt={data.author} />
          <div className="text-left">
            <p className='text-xl font-bold font-heading'>{data.author}</p>
            <p className='text-sm font-bold text-foreground/70 uppercase tracking-wide'>Author</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-80px] mb-20 relative z-20'>
      <Image 
        className='border-2 border-border shadow-pop-soft rounded-2xl bg-white p-2 object-cover w-full h-[300px] md:h-[500px]' 
        src={data.image} 
        width={1280} 
        height={720} 
        alt={data.title} 
      />
      
      <div className='blog-content bg-white p-8 sm:p-12 mt-8 border-2 border-border shadow-[8px_8px_0px_#E2E8F0] rounded-xl' dangerouslySetInnerHTML={{__html:data.description}}>
      </div>
      
      <div className='my-16 bg-muted p-8 rounded-xl border-2 border-border border-dashed text-center'>
        <p className='text-foreground font-heading text-2xl font-bold mb-6'>Share this fresh thought!</p>
        <div className='flex justify-center gap-4'>
          <Image src={assets.facebook_icon} className="cursor-pointer hover:-translate-y-1 transition-transform" width={50} alt='fb' />
          <Image src={assets.twitter_icon} className="cursor-pointer hover:-translate-y-1 transition-transform" width={50} alt='tw' />
          <Image src={assets.googleplus_icon} className="cursor-pointer hover:-translate-y-1 transition-transform" width={50} alt='gp' />
        </div>
      </div>
    </div>
    <Footer />
  </> : <div className="h-screen flex items-center justify-center bg-background"><div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin"></div></div>
  )
}

export default Page
