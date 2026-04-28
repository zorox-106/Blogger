'use client'
import { assets } from '@/Assets/assets'
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { ArrowRight } from 'lucide-react';

const Header = () => {
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    try {
      const response = await axios.post('/api/email', formData);
      if (response.data.success) {
        toast.success(response.data.msg);
        setEmail("");
      } else {
        toast.error("Error")
      }
    } catch (error) {
      toast.error("Subscription failed. Check server logs.");
      console.error(error);
    }
  }

  return (
    <div className='relative overflow-hidden bg-background py-5 px-5 md:px-12 lg:px-28 border-b-2 border-border'>
      {/* Decorative Background Shapes */}
      <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-tertiary rounded-full mix-blend-multiply opacity-50 -z-10 animate-wiggle"></div>
      <div className="absolute top-[20%] right-[10%] w-32 h-32 bg-secondary rounded-blob mix-blend-multiply opacity-50 -z-10"></div>
      
      {/* Nav */}
      <div className='flex justify-between items-center relative z-10'>
        <div className="flex items-center gap-2">
          <Image src={assets.logo} width={130} alt='logo' className='w-[100px] sm:w-auto'/>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/admin">
            <Button variant="secondary" className="bg-white hidden sm:flex" icon={<ArrowRight className="w-4 h-4" />}>
              Admin Panel
            </Button>
          </Link>
          <Link href="/profile" className="w-12 h-12 rounded-full border-2 border-border shadow-pop bg-white flex items-center justify-center overflow-hidden hover:scale-105 transition-transform active:scale-95">
              <Image src={assets.profile_icon} width={40} height={40} alt="profile" />
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className='text-center my-20 relative z-10'>
        <div className="inline-block mb-4">
          <span className="bg-quaternary text-foreground font-bold px-4 py-1 rounded-full border-2 border-border shadow-[2px_2px_0px_#1E293B] text-sm uppercase tracking-wide">
            Playful & Fun
          </span>
        </div>
        <h1 className='text-5xl sm:text-7xl font-extrabold text-foreground leading-tight tracking-tight max-w-4xl mx-auto'>
          The freshest <span className="text-accent underline decoration-4 decoration-wavy underline-offset-8">thoughts</span> on the internet.
        </h1>
        <p className='mt-8 max-w-[600px] mx-auto text-lg sm:text-xl text-foreground/80 font-medium'>
          Explore ideas that pop. A playground for tech, startup stories, and lifestyle musings. Subscribe so you don&apos;t miss a beat.
        </p>

        {/* Subscribe Form */}
        <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-center max-w-[600px] mx-auto mt-12 gap-4'>
            <Input 
              onChange={(e)=>setEmail(e.target.value)} 
              value={email} 
              type="email" 
              placeholder='Enter your email address...' 
              className='flex-1 h-14 text-lg' 
              required 
            />
            <Button type='submit' variant="primary" size="lg" className="w-full sm:w-auto whitespace-nowrap" icon={<ArrowRight className="w-5 h-5 text-accent" />}>
              Subscribe Now
            </Button>
        </form>
      </div>
    </div>
  )
}

export default Header

