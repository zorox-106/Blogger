'use client'
import BlogTableItem from '@/Components/AdminComponents/BlogTableItem'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/Card'
import { List } from 'lucide-react'

const Page = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('/api/blog');
      setBlogs(response.data.blogs || []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      toast.error("Error fetching blogs");
    }
  }

  const deleteBlog = async (mongoId) => {
    try {
      const response = await axios.delete('/api/blog', {
        params: { id: mongoId }
      })
      toast.success(response.data.msg);
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("Error deleting blog");
    }
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <div className='max-w-5xl mx-auto'>
      <Card className="shadow-pop-soft">
        <CardHeader className="bg-secondary text-white py-6 border-b-2 border-border flex flex-row items-center justify-between rounded-t-xl">
          <div>
            <CardTitle className="text-2xl text-white">All Published Blogs</CardTitle>
            <p className="text-white/80 font-bold text-[10px] uppercase tracking-widest mt-1">Manage your content library</p>
          </div>
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <List className="text-white" size={24} />
          </div>
        </CardHeader>
        
        <CardContent className="p-0">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-[10px] font-bold text-mutedForeground uppercase tracking-widest bg-muted border-b-2 border-border">
                <tr>
                  <th scope="col" className="px-6 py-4">Author</th>
                  <th scope="col" className="px-6 py-4">Blog Title</th>
                  <th scope="col" className="px-6 py-4">Date</th>
                  <th scope="col" className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-border">
                {blogs.map((item, index) => (
                  <BlogTableItem 
                    key={index} 
                    mongoId={item._id} 
                    title={item.title} 
                    author={item.author} 
                    authorImg={item.authorImg} 
                    date={item.date} 
                    deleteBlog={deleteBlog}
                  />
                ))}
                {blogs.length === 0 && (
                  <tr>
                    <td colSpan="4" className="px-6 py-20 text-center text-mutedForeground font-bold">
                      No blogs found. Go to &quot;Add Blog&quot; to create your first post!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Page

