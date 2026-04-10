'use client'
import SubsTableItem from '@/Components/AdminComponents/SubsTableItem'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/Card'
import { Users } from 'lucide-react'

const Page = () => {
  const [emails, setEmails] = useState([]);

  const fetchEmails = async () => {
    try {
      const response = await axios.get('/api/email');
      setEmails(response.data.emails || [])
    } catch (error) {
      console.error("Error fetching emails:", error);
      toast.error("Error fetching emails");
    }
  }

  const deleteEmail = async (mongoId) => {
    try {
      const response = await axios.delete('/api/email', {
        params: { id: mongoId }
      })
      if (response.data.success) {
        toast.success(response.data.msg);
        fetchEmails();
      } else {
        toast.error("Error");
      }
    } catch (error) {
      console.error("Error deleting email:", error);
      toast.error("Error deleting email");
    }
  }

  useEffect(() => {
    fetchEmails();
  }, [])

  return (
    <div className='max-w-4xl mx-auto'>
      <Card className="shadow-pop-soft">
        <CardHeader className="bg-quaternary text-foreground py-6 border-b-2 border-border flex flex-row items-center justify-between rounded-t-xl">
          <div>
            <CardTitle className="text-2xl">Newsletter Subscriptions</CardTitle>
            <p className="text-foreground/70 font-bold text-[10px] uppercase tracking-widest mt-1">Keep track of your audience</p>
          </div>
          <div className="w-10 h-10 bg-white/40 rounded-full flex items-center justify-center">
            <Users className="text-foreground" size={24} />
          </div>
        </CardHeader>
        
        <CardContent className="p-0">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-[10px] font-bold text-mutedForeground uppercase tracking-widest bg-muted border-b-2 border-border">
                <tr>
                  <th scope="col" className="px-6 py-4">Email Address</th>
                  <th scope="col" className="px-6 py-4">Subscription Date</th>
                  <th scope="col" className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-border">
                {emails.map((item, index) => (
                  <SubsTableItem 
                    key={index} 
                    mongoId={item._id} 
                    deleteEmail={deleteEmail} 
                    email={item.email} 
                    date={item.date}
                  />
                ))}
                {emails.length === 0 && (
                  <tr>
                    <td colSpan="3" className="px-6 py-20 text-center text-mutedForeground font-bold">
                      No subscriptions yet. Try promoting your blog more!
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

