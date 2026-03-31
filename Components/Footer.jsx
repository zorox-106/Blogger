import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-8 sm:gap-0 bg-foreground py-10 px-10 md:px-28 items-center border-t-2 border-border'>
      <Image src={assets.logo_light} alt='logo' width={120} className="brightness-110" />
      
      <p className='text-xs sm:text-sm text-white/70 font-bold uppercase tracking-widest'>
        &copy; {new Date().getFullYear()} Playful Blogger. All rights reserved.
      </p>

      <div className='flex gap-4'>
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-all cursor-pointer border-2 border-transparent hover:border-white shadow-pop-soft hover:shadow-none">
            <Image src={assets.facebook_icon} alt='fb' width={24} height={24} className="invert" />
          </div>
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-all cursor-pointer border-2 border-transparent hover:border-white shadow-pop-soft hover:shadow-none">
            <Image src={assets.twitter_icon} alt='tw' width={24} height={24} className="invert" />
          </div>
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tertiary transition-all cursor-pointer border-2 border-transparent hover:border-white shadow-pop-soft hover:shadow-none">
            <Image src={assets.googleplus_icon} alt='gp' width={24} height={24} className="invert" />
          </div>
      </div>
    </div>
  )
}

export default Footer
