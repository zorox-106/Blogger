import { Outfit, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const outfit = Outfit({ 
  subsets: ['latin'], 
  weight: ["400", "500", "600", "700", "800"],
  variable: '--font-outfit',
})

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'], 
  weight: ["400", "500", "600", "700"],
  variable: '--font-plus-jakarta',
})

export const metadata = {
  title: 'Playful Blog App',
  description: 'A playful geometric blog platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${plusJakartaSans.variable} font-body bg-background text-foreground antialiased selection:bg-tertiary selection:text-foreground`}>
        <ToastContainer theme="light" className="font-body" />
        {children}
      </body>
    </html>
  )
}
