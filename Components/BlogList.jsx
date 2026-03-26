import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios';
import { cn } from '@/lib/utils';

const BlogList = () => {

    const [menu,setMenu] = useState("All");
    const [blogs,setBlogs] = useState([]);

    const fetchBlogs = async () =>{
      try {
        const response = await axios.get('/api/blog');
        setBlogs(response.data.blogs || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
      }
    }

    useEffect(()=>{
      fetchBlogs();
    },[])

    const filterOptions = ["All", "Technology", "Startup", "Lifestyle"];

  return (
    <div className="relative py-12 bg-dot-pattern">
      <div className='flex justify-center gap-4 my-10 flex-wrap px-4'>
        {filterOptions.map((option) => (
          <button 
            key={option}
            onClick={() => setMenu(option)} 
            className={cn(
              'py-2 px-6 rounded-full font-bold text-sm transition-all duration-300 border-2 border-border',
              menu === option 
                ? 'bg-accent text-white shadow-[2px_2px_0px_#1E293B] -translate-y-1' 
                : 'bg-white text-foreground hover:bg-muted hover:-translate-y-1 hover:shadow-[2px_2px_0px_#1E293B]'
            )}
          >
            {option}
          </button>
        ))}
      </div>
      <div className='flex flex-wrap justify-center gap-8 gap-y-12 mb-16 xl:mx-24 px-4'>
        {blogs.filter((item)=> menu==="All"?true:item.category===menu).map((item,index)=>{
            return <BlogItem key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category} />
        })}
        {blogs.length === 0 && (
          <div className="text-center py-20 bg-white border-2 border-border border-dashed rounded-xl w-full max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-heading text-mutedForeground">No blogs found.</h3>
            <p className="mt-2 text-foreground/70">Start writing some fresh thoughts!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogList
