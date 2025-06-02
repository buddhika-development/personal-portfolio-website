"use client"

import React from 'react'
import { MdOutlineEmail } from "react-icons/md";

const EmailConnectButton = () => {

    const sendEmail = () => {
        window.location.href = "mailto:buddhikamadusanka2000@gmail.com"    
    }    

  return (
    <div>
        <button onClick={sendEmail} className='bg-green-600/70 border-[1px] border-dashed border-green-500 cursor-pointer duration-200 hover:bg-green-600/50 px-8 py-3 rounded-xl font-bold flex items-center gap-2'>
            Send Email
            <MdOutlineEmail className='text-[22px]' />
        </button>
    </div>
  )
}

export default EmailConnectButton