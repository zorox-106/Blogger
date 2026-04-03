import Sidebar from "@/Components/AdminComponents/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/Assets/assets";

export default function Layout({ children }) { 
    return (
        <div className="flex min-h-screen bg-background">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <header className="flex items-center justify-between h-[84px] px-8 sm:px-12 bg-white border-b-2 border-border sticky top-0 z-40">
                    <div className="flex flex-col">
                        <h2 className="text-xl font-extrabold font-heading text-foreground uppercase tracking-tight">Admin Dashboard</h2>
                        <p className="text-[10px] font-bold text-mutedForeground uppercase tracking-widest">Management Panel</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex flex-col items-end">
                            <span className="text-sm font-bold">Admin User</span>
                            <span className="text-[10px] text-accent font-bold uppercase tracking-tighter">Super Admin</span>
                        </div>
                        <Link href="/profile" className="w-12 h-12 rounded-blob border-2 border-border shadow-pop bg-secondary flex items-center justify-center overflow-hidden hover:scale-105 transition-transform active:scale-95">
                            <Image src={assets.profile_icon} width={40} height={40} alt="profile" />
                        </Link>
                    </div>
                </header>
                <main className="flex-1 bg-dot-pattern">
                    <div className="p-8 sm:p-12 animate-popIn">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}