import React from 'react'
import { Trash2 } from 'lucide-react'

const SubsTableItem = ({email, mongoId, deleteEmail, date}) => {
    const emailDate = new Date(date);

    return (
        <tr className='bg-white group hover:bg-muted transition-colors'>
            <th scope='row' className='px-6 py-4 font-bold text-foreground font-body whitespace-nowrap'>
                {email ? email : "No Email"}
            </th>
            <td className='px-6 py-4 text-mutedForeground font-bold text-xs uppercase'>
                {emailDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
            </td>
            <td className='px-6 py-4 text-center'>
                <button 
                    onClick={() => deleteEmail(mongoId)} 
                    className='w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all border-2 border-transparent hover:border-border hover:shadow-[2px_2px_0px_#1E293B] mx-auto'
                >
                    <Trash2 size={18} />
                </button>
            </td>
        </tr>
    )
}

export default SubsTableItem
