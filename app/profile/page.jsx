'use client'
import { assets } from '@/Assets/assets'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/Card'
import { Button } from '@/Components/ui/Button'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { MessageSquare, Code, Globe, MapPin, Calendar, FileText, Users } from 'lucide-react'
import BlogItem from '@/Components/BlogItem'

const ProfilePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUserBlogs = async () => {
    try {
      const response = await axios.get('/api/blog');
      // Filter for "Alex Bennett" as he is our current author
      const userBlogs = (response.data.blogs || []).filter(blog => blog.author === "Alex Bennett");
      setBlogs(userBlogs);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user blogs:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUserBlogs();
  }, []);

  const stats = [
    { label: 'Articles', value: blogs.length, icon: <FileText size={20} className="text-accent" />, color: 'bg-accent/10' },
    { label: 'Followers', value: '1.2k', icon: <Users size={20} className="text-secondary" />, color: 'bg-secondary/10' },
    { label: 'Since', value: '2024', icon: <Calendar size={20} className="text-tertiary" />, color: 'bg-tertiary/10' },
  ];

  return (
    <div className="bg-background min-h-screen">
      <Header />
      
      <main className="max-w-6xl mx-auto px-5 py-20">
        <div className="grid lg:grid-cols-[350px_1fr] gap-12">
          
          {/* Sidebar / Profile Card */}
          <div className="space-y-8">
            <Card className="shadow-pop-soft overflow-hidden border-3">
              <div className="h-32 bg-accent relative">
                <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
              </div>
              <CardContent className="pt-0 flex flex-col items-center text-center -mt-16 relative z-10">
                <div className="w-32 h-32 rounded-blob border-4 border-white shadow-pop bg-white overflow-hidden mb-6">
                  <Image src={assets.profile_icon} width={128} height={128} alt="Alex Bennett" className="object-cover" />
                </div>
                <CardTitle className="text-3xl">Alex Bennett</CardTitle>
                <p className="text-mutedForeground font-bold text-xs uppercase tracking-widest mt-1">Creative Content Creator</p>
                
                <p className="mt-6 text-foreground/80 leading-relaxed font-medium">
                  Passionate about technology, startups, and minimal design. Writing about the future of the web and how we interact with it.
                </p>

                <div className="flex gap-4 mt-8">
                  <Button variant="secondary" size="icon" className="w-10 h-10 bg-muted border-none">
                    <Globe size={18} />
                  </Button>
                  <Button variant="secondary" size="icon" className="w-10 h-10 bg-muted border-none">
                    <Code size={18} />
                  </Button>
                  <Button variant="secondary" size="icon" className="w-10 h-10 bg-muted border-none">
                    <MessageSquare size={18} />
                  </Button>
                </div>

                <hr className="w-full border-border border-dashed my-8" />

                <div className="w-full space-y-4">
                  <div className="flex items-center gap-3 text-sm font-bold text-foreground/70">
                    <MapPin size={16} className="text-secondary" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-bold text-foreground/70">
                    <Link href="https://alexbennett.com" className="hover:text-accent transition-colors flex items-center gap-3">
                      <Users size={16} className="text-quaternary" />
                      <span>alexbennett.com</span>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-tertiary border-3 shadow-pop border-border">
              <CardHeader>
                <CardTitle className="text-xl">Newsletter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium mb-4 text-foreground/80">Get my weekly thoughts delivered straight to your inbox.</p>
                <Button className="w-full bg-white text-foreground" variant="secondary">Subscribe Me</Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content / Blogs */}
          <div className="space-y-12">
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, idx) => (
                <Card key={idx} className="border-2 border-border shadow-pop-soft hover:shadow-pop transition-all">
                  <CardContent className="p-6 flex flex-col items-center justify-center gap-2">
                    <div className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center`}>
                      {stat.icon}
                    </div>
                    <span className="text-2xl font-extrabold font-heading">{stat.value}</span>
                    <span className="text-[10px] font-bold text-mutedForeground uppercase tracking-widest">{stat.label}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Blogs Section */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-4xl font-extrabold font-heading tracking-tight">Recent Articles</h2>
                <div className="h-1 flex-1 bg-border mx-6 border-dashed border-t-2"></div>
              </div>

              {loading ? (
                <div className="grid sm:grid-cols-2 gap-8">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-[400px] bg-muted animate-pulse rounded-xl border-2 border-border"></div>
                  ))}
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-8">
                  {blogs.length > 0 ? (
                    blogs.map((item, index) => (
                      <BlogItem key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category} />
                    ))
                  ) : (
                    <div className="col-span-full py-20 text-center bg-white border-2 border-border border-dashed rounded-xl">
                      <p className="text-mutedForeground font-bold">No articles found for this author yet.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ProfilePage
