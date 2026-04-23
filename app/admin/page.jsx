import { redirect } from 'next/navigation'

const page = () => {
  redirect('/admin/addBlog')
  return null
}

export default page

