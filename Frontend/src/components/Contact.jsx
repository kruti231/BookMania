import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useForm } from 'react-hook-form'


function Contact() {
    const {
            register,
            handleSubmit,
            formState: { errors },
            } = useForm()
        
        const onSubmit = (data) => console.log(data)
        
  return (
    <>
        <Navbar />
        <div className='max-w-screen-2xl-container mx-auto md:px-20 px-4  dark:bg-slate-900 dark:text-white'>
            <form className='box-border h-1/2 w-1/2 m-16 border-2 justify-center items-center ml-64' onSubmit={handleSubmit(onSubmit)}>
            <div className='mt-4 items-center justify-center text-center'>
                <h2 className="text-4xl font-semibold text-center mb-6 text-black dark:bg:slate-900 dark:text-white">
                Contact Us
                </h2>
                <span className='flex ml-20'> Name</span><br/>
                <input type="text" placeholder='Enter your name' className='flex w-80 px-4 py-1 border rounded-md outline-none ml-20' {...register("name", { required: true })}/><br />
                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                
                <span className='flex ml-20'> Email </span><br/>
                <input type="email" placeholder='Enter your email' className='flex w-80 px-3 py-1 border rounded-md outline-none ml-20' {...register("email", { required: true })}/><br />
                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                
                <span className='flex ml-20'> Message </span><br/>
                <textarea rows="5" placeholder='Type your message' className='flex  w-80 px-3 py-1 border rounded-md outline-none ml-20' {...register("message", { required: true })}/><br />
                {errors.message && <span className='text-sm text-red-500'>This field is required</span>}<br />
                <button className='bg-blue-700 border mb-3 p-2 rounded-md hover:bg-blue-400 text-white'>Submit</button>
            </div>    
            </form>
        </div>
        <Footer />
    
    </>
  )
}

export default Contact
