import { ConnectDB } from "@/lib/config/db"
import BlogModel from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";
import { writeFile } from 'fs/promises';
import fs from 'fs';
import path from 'path';

// API Endpoint to get all blogs
export async function GET(request) {
  try {
    await ConnectDB();
    const blogId = request.nextUrl.searchParams.get("id");
    if (blogId) {
      const blog = await BlogModel.findById(blogId);
      if (!blog) {
        return NextResponse.json({ success: false, msg: "Blog not found" }, { status: 404 });
      }
      return NextResponse.json(blog);
    }
    else {
      const blogs = await BlogModel.find({});
      return NextResponse.json({ blogs })
    }
  } catch (error) {
    console.error("GET Blog Error:", error);
    return NextResponse.json({ success: false, msg: "Error fetching blogs" }, { status: 500 });
  }
}


// API Endpoint For Uploading Blogs
export async function POST(request) {
  try {
    await ConnectDB();
    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get('image');
    if (!image) {
      return NextResponse.json({ success: false, msg: "Image is required" }, { status: 400 });
    }

    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    
    // Ensure the filename is safe
    const fileName = `${timestamp}_${image.name.replace(/\s+/g, '_')}`;
    const filePath = path.join(process.cwd(), 'public', fileName);
    
    await writeFile(filePath, buffer);
    const imgUrl = `/${fileName}`;

    const blogData = {
      title: `${formData.get('title')}`,
      description: `${formData.get('description')}`,
      category: `${formData.get('category')}`,
      author: `${formData.get('author')}`,
      image: `${imgUrl}`,
      authorImg: `${formData.get('authorImg')}`
    }

    await BlogModel.create(blogData);
    console.log("Blog Saved");

    return NextResponse.json({ success: true, msg: "Blog Added" })
  } catch (error) {
    console.error("POST Blog Error:", error);
    return NextResponse.json({ success: false, msg: "Error saving blog" }, { status: 500 });
  }
}

// Creating API Endpoint to delete Blog
export async function DELETE(request) {
  try {
    await ConnectDB();
    const id = request.nextUrl.searchParams.get('id');
    if (!id) {
      return NextResponse.json({ success: false, msg: "ID is required" }, { status: 400 });
    }

    const blog = await BlogModel.findById(id);
    if (!blog) {
      return NextResponse.json({ success: false, msg: "Blog not found" }, { status: 404 });
    }

    // Fix unlink path
    const imagePath = path.join(process.cwd(), 'public', blog.image);
    if (fs.existsSync(imagePath)) {
      fs.unlink(imagePath, (err) => {
        if (err) console.error("Error deleting image file:", err);
      });
    }

    await BlogModel.findByIdAndDelete(id);
    return NextResponse.json({ success: true, msg: "Blog Deleted" });
  } catch (error) {
    console.error("DELETE Blog Error:", error);
    return NextResponse.json({ success: false, msg: "Error deleting blog" }, { status: 500 });
  }
}