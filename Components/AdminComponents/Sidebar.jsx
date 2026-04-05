'use client'
import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { PlusCircle, List, Users, Home } from 'lucide-react'

const Sidebar = () => {
    const pathname = usePathname();

    const menuItems = [
        { name: 'Add Blog', path: '/admin/addBlog', icon: <PlusCircle size={20} /> },
        { name: 'Blog Lists', path: '/admin/blogList', icon: <List size={20} /> },
        { name: 'Subscriptions', path: '/admin/subscriptions', icon: <Users size={20} /> },
    ];

    return (
        <div className='flex flex-col bg-white border-r-2 border-border h-screen sticky top-0'>
            <div className='px-6 py-6 border-b-2 border-border bg-tertiary flex items-center justify-center'>
                <Link href="/">
                    <Image src={assets.logo} width={120} alt='logo' />
                </Link>
            </div>
            
            <div className='w-20 sm:w-72 flex-1 py-10 px-4 space-y-4'>
                <Link href='/' className="flex items-center gap-3 px-4 py-3 font-bold text-foreground/60 hover:text-accent transition-colors mb-8 group">
                    <Home size={20} className="group-hover:scale-110 transition-transform" />
                    <span className='hidden sm:inline-block'>Back to Site</span>
                </Link>

                {menuItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link 
                            key={item.path}
                            href={item.path} 
                            className={cn(
                                'flex items-center gap-3 font-bold px-4 py-3 rounded-xl border-2 transition-all duration-300',
                                isActive 
                                    ? 'bg-accent text-white border-border shadow-pop -translate-y-1' 
                                    : 'bg-white text-foreground border-transparent hover:border-border hover:bg-muted'
                            )}
                        >
                            {item.icon}
                            <span className='hidden sm:inline-block'>{item.name}</span>
                        </Link>
                    )
                })}
            </div>
            
            <div className="p-4 border-t-2 border-border bg-dot-pattern h-24 flex items-center justify-center opacity-50">
                <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-secondary"></div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar

