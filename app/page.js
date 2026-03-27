'use client'
import BlogList from "@/Components/BlogList";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <>
      <Header/>
      <BlogList/>
      <Footer/>
    </>
  )
}
