import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl' data-aos="zoom-in">Get in touch</h2>
            <p className='text-gray-50 text-[18px] pt-2' data-aos="zoom-in">
            Feel free to reach out if you have any questions, project ideas, or collaboration opportunities. I am always open to connecting with fellow developers and clients who value innovation and creativity.
            </p>
            <div className='flex gap-3 items-center' data-aos="zoom-in">
            <MdOutlineEmail size={30}/>fati.salman31@gmail.com
            </div>
            <div className='flex gap-3 items-center' data-aos="zoom-in">
            <BsTelephone size={30}/>+92 333 2403784
            </div>
        </div>
        <div className='space-y-8'>
            <div className='flex flex-col gap-1' data-aos="zoom-in">
                <label htmlFor='name'>Name</label>
                <input type='text' className='h-[40px] bg-transparent border border-blue-400 ' id='name' />
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in">
                <label htmlFor='email'>Email</label>
                <input type='text' className='h-[40px]
                 bg-transparent border border-blue-400 ' id='email' />
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in">
                <label htmlFor='message'>Message</label>
                <textarea  className=' bg-transparent
                 border border-blue-400 ' id='message'rows={8}>
                </textarea>
            </div >
            <button className='bg-blue-300 p-2 px-6' data-aos="zoom-in">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
