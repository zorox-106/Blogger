import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'
import { Trash2 } from 'lucide-react'

const BlogTableItem = ({authorImg, title, author, date, deleteBlog, mongoId}) => {
    const BlogDate = new Date(date);
    
    return (
        <tr className='bg-white group hover:bg-muted transition-colors'>
            <th scope='row' className='px-6 py-4 font-bold text-foreground whitespace-nowrap'>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border-2 border-border overflow-hidden bg-muted">
                        <Image width={40} height={40} src={authorImg ? authorImg : assets.profile_icon} alt="author" className="object-cover" />
                    </div>
                    <p className="font-heading">{author ? author : "No author"}</p>
                </div>
            </th>
            <td className='px-6 py-4 font-medium'>
                {title ? title : "no title"}
            </td>
            <td className='px-6 py-4 text-mutedForeground font-bold text-xs uppercase'>
                {BlogDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
            </td>
            <td className='px-6 py-4 text-center'>
                <button 
                    onClick={() => deleteBlog(mongoId)} 
                    className='w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all border-2 border-transparent hover:border-border hover:shadow-[2px_2px_0px_#1E293B] mx-auto'
                >
                    <Trash2 size={18} />
                </button>
            </td>
        </tr>
    )
}

export default BlogTableItem
