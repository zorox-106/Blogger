'use client'
import { assets } from '@/Assets/assets'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Button } from '@/Components/ui/Button'
import { Input } from '@/Components/ui/Input'
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/Card'
import { Plus, UploadCloud } from 'lucide-react'

const Page = () => {
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        title: "",
        description: "",
        category: "Startup",
        author: "Alex Bennett",
        authorImg: "/author_img.png"
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        
        if (!image) {
            toast.error("Please upload a thumbnail image");
            return;
        }

        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('category', data.category);
        formData.append('author', data.author);
        formData.append('authorImg', data.authorImg);
        formData.append('image', image);
        
        try {
            const response = await axios.post('/api/blog', formData);
            if (response.data.success) {
                toast.success(response.data.msg);
                setImage(false);
                setData({
                    title: "",
                    description: "",
                    category: "Startup",
                    author: "Alex Bennett",
                    authorImg: "/author_img.png"
                });
            } else {
                toast.error("Error");
            }
        } catch (error) {
            toast.error("Failed to add blog");
        }
    }

    return (
        <div className="max-w-4xl mx-auto">
            <Card className="shadow-pop-soft overflow-hidden">
                <CardHeader className="bg-accent text-white py-8 border-b-2 border-border flex flex-row items-center justify-between">
                    <div>
                        <CardTitle className="text-3xl text-white">Add New Blog</CardTitle>
                        <p className="text-white/80 font-bold text-xs uppercase tracking-widest mt-1">Share your fresh thoughts</p>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Plus className="text-white" size={32} />
                    </div>
                </CardHeader>
                
                <CardContent className="pt-10">
                    <form onSubmit={onSubmitHandler} className="space-y-8">
                        <div>
                            <p className='text-lg font-bold mb-4 font-heading'>Upload Thumbnail</p>
                            <label htmlFor="image" className="group cursor-pointer">
                                <div className="w-full h-[200px] sm:w-[400px] rounded-xl border-2 border-border border-dashed bg-muted flex flex-col items-center justify-center gap-2 hover:bg-tertiary/20 transition-colors overflow-hidden relative shadow-pop-soft">
                                    {!image ? (
                                        <>
                                            <UploadCloud className="text-mutedForeground group-hover:scale-110 transition-transform" size={48} />
                                            <p className="text-sm font-bold text-mutedForeground">Click to select image</p>
                                        </>
                                    ) : (
                                        <Image className='object-cover w-full h-full' src={URL.createObjectURL(image)} fill alt='' />
                                    )}
                                </div>
                            </label>
                            <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <label className='text-lg font-bold font-heading'>Blog Title</label>
                                <Input name='title' onChange={onChangeHandler} value={data.title} placeholder='Type catching title here' required />
                            </div>
                            
                            <div className="space-y-4">
                                <label className='text-lg font-bold font-heading'>Blog Category</label>
                                <select 
                                    name="category" 
                                    onChange={onChangeHandler} 
                                    value={data.category} 
                                    className='w-full h-12 px-4 rounded-lg border-2 border-slate-300 bg-white font-body focus:outline-none focus:border-accent'
                                >
                                    <option value="Startup">Startup</option>
                                    <option value="Technology">Technology</option>
                                    <option value="Lifestyle">Lifestyle</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className='text-lg font-bold font-heading'>Blog Description</label>
                            <textarea 
                                name='description' 
                                onChange={onChangeHandler} 
                                value={data.description} 
                                className='w-full p-4 rounded-lg border-2 border-slate-300 bg-white font-body focus:outline-none focus:border-accent min-h-[150px]' 
                                placeholder='Write your amazing content here...' 
                                required 
                            />
                        </div>

                        <div className="pt-4">
                            <Button type="submit" variant="primary" size="lg" className="w-full sm:w-60" icon={<ArrowRight className="w-5 h-5 text-accent" />}>
                                PUBLISH BLOG
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

const ArrowRight = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
)

export default Page

