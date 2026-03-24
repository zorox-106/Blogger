import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/Card'
import { ArrowRight } from 'lucide-react'

const BlogItem = ({title, description, category, image, id}) => {

  return (
    <Card hoverEffect className='max-w-[330px] sm:max-w-[300px] flex flex-col group'>
      <Link href={`/blogs/${id}`} className="overflow-hidden rounded-t-lg border-b-2 border-border">
        <Image 
          src={image} 
          alt={title} 
          width={400} 
          height={400} 
          className='object-cover w-full h-[200px] transition-transform duration-500 group-hover:scale-105' 
        />
      </Link>
      
      <CardHeader className="pb-2 relative pt-8">
        <span className='absolute top-[-14px] left-6 bg-accent text-white font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full border-2 border-border shadow-[2px_2px_0px_#1E293B]'>
          {category}
        </span>
        <CardTitle className="text-xl line-clamp-2">{title}</CardTitle>
      </CardHeader>

      <CardContent className="flex-1">
        <p className='text-sm text-mutedForeground line-clamp-3'>
          {description.replace(/<[^>]*>?/gm, '').slice(0, 120)}...
        </p>
      </CardContent>

      <CardFooter>
        <Link href={`/blogs/${id}`} className='inline-flex items-center font-bold text-accent hover:text-foreground transition-colors group/link'>
          Read more 
          <ArrowRight className='ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1' />
        </Link>
      </CardFooter>
    </Card>
  )
}

export default BlogItem
