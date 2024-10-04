"use client";
import { useState, useRef } from 'react';
import React from 'react';
import { motion } from "framer-motion";
import { LampContainer } from './ui/Lamp';
import emailjs from "@emailjs/browser";
import { socialMedia } from '@/data';
import { profile } from 'console';
import { Grid } from '@react-three/drei';

const Contact = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    message: "",
  });

  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if(!form.username || !form.email || !form.message)
      {
        alert("Error:Some fields are empty");
        setLoading(false)
        return;
      }
       try {
      const templateParams = {
        from_name: form.username,
        to_name: "Saif-ur-Rehman",
        from_email: form.email,
        to_email: "saifijamil00@gmail.com",
        message: form.message,
      };

      // Use the send method
      await emailjs.send("service_vwejglx", "template_1v2l4sl", templateParams, "ibtu_sxcM3LOsDb3q");
      alert('Message sent successfully!');
      setForm({ username: "", email: "", message: "" }); // Reset form fields
    } catch (error) {
      console.error("Error sending message:", error);
      alert('Failed to send message, please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id='contact' className="py-17 pb-10">
      <LampContainer className='bg-transparent w-full'>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 py-4 text-center text-4xl font-medium tracking-tight text-white md:text-7xl"
        >
          Let's bring <br /> Innovation together
        </motion.h1>
      </LampContainer>










      <div className="flex xl:flex-row flex-col-reverse gap-10 overflow-hidden justify-center items-center mt-[-233px] relative z-10 backdrop-blur-lg backdrop-filter bg-blue-400/3 w-full xl:w-[60vw] md:w-[70vw] sm:w-[80vw] rounded-md mx-auto p-8">
  <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col gap-8 w-full'>
    <label className='flex flex-col w-full'>
      <span className='text-white font-medium mb-4'>Your Name</span>
      <input
        type="text"
        placeholder='Enter your Name'
        name='username'
        value={form.username}
        onChange={handleChange}
        className='bg-black-200 py-4 px-6 placeholder:text-white-100 outline-none border-none font-medium rounded-xl w-full focus:border-white focus:ring-2 focus:ring-white'
      />
    </label>
    <label className='flex flex-col w-full'>
      <span className='text-white font-medium mb-4'>Your Email</span>
      <input
        type="email"
        placeholder='Enter your Email'
        name='email'
        value={form.email}
        onChange={handleChange}
        className='bg-black-200 py-4 px-6 placeholder:text-white-100 outline-none border-none font-medium rounded-xl w-full focus:border-white focus:ring-2 focus:ring-white'
      />
    </label>
    <label className='flex flex-col w-full'>
      <span className='text-white font-medium mb-4'>Your Message</span>
      <textarea
        rows={7}
        placeholder='Write about the service you want!'
        name='message'
        value={form.message}
        onChange={handleChange}
        className='bg-black-200 py-4 px-6 placeholder:text-white-100 outline-none border-none font-medium rounded-xl w-full focus:border-white focus:ring-2 focus:ring-white'
      />
    </label>
    <div className='flex justify-center items-center'>
      <button type="submit" className='bg-black-200 outline-none font-bold py-3 px-10 w-fit rounded-xl hover:border border-white'>
        {loading ? "Sending..." : "Send"}
      </button>
    </div>
  </form>
</div>

         

      <div className='flex md:flex-row mt-16 flex-col justify-between items-center mb-2 gap-1'>

        <p className='md:text-base text-sm md:font-normal font-light'>CopyRight © 2024 Saif-ur-Rehman</p>
        <div className='flex items-center md:gap-5 gap-6'>
  {socialMedia.map((profile: { id: number; img: string }) => (
    <div
      key={profile.id}
      className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg backdrop-filter saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'
    >
      <img src={profile.img} alt={`${profile.id}`} width={20} height={20} />
    </div>
  ))}
</div>

</div>






    </div>
  );
};

export default Contact;
