'use client';
import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBars } from '@fortawesome/free-solid-svg-icons';

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("gXzVIl4DI-2qHQmWy");
  }, []);

  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState({
    message: '',
    isError: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitStatus({ message: '', isError: false });

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
      event.currentTarget,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ""
    )
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        setSubmitStatus({ message: 'Your request has been sent successfully!', isError: false });
        setFormState({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        });

        if (formRef.current) {
          formRef.current.reset();
        }

      }, (error) => {
        console.log('Failed to send the email:', error.text);
        setSubmitStatus({ message: 'Failed to send request. Please try again.', isError: true });
      });
  };

  return (
    <>
      <main className="flex-1 px-4 md:px-6 py-12 grid md:grid-cols-[2fr_1fr] gap-12 bg-gradient-to-b from-transparent to-emerald-950 text-white">
        <article className="prose max-w-none">
          <div className="space-y-2 not-prose">
            <h1 className="text-4xl text-yellow-700 font-extrabold tracking-tight lg:text-5xl">Contact Us</h1>
            <div className="flex items-center gap-4">
              <div>
                <Image src="/assets/images/myHeadshot.png" alt="Author" width={40} height={40} className="rounded-full" />
              </div>
              <div>
                <span className="font-medium">Octavio Sanchez</span>
                <span className="mx-2">•</span>
                <time dateTime="2023-05-01">May 1, 2023</time>
              </div>
            </div>
          </div>
          <p className='text-white'>
            At Quest Web Tech, we are dedicated to providing exceptional customer service. Our commitment to helping small businesses achieve their goals is at the core of everything we do. Whether you have a question, need support, or want to discuss a new project, we are here to assist you every step of the way.
          </p>
          <figure>
            <Image
              src="/assets/images/kelly-sikkema-gcHFXsdcmJE-unsplash.jpg"
              alt="Customer Service"
              width={1250}
              height={340}
              className="aspect-video overflow-hidden rounded-lg object-cover"
            />
            <figcaption className="text-center">Picture by: Kelly Sikkems on Unsplash</figcaption>
          </figure>
          <h2 className="font-extrabold text-white text-2xl">Our Commitment</h2>
          <p className='text-white'>
            We understand the challenges small businesses face and are dedicated to offering tailored solutions that drive success. Our team is passionate about technology and innovation, and we strive to deliver the highest quality of service to ensure your business thrives in the digital landscape.
          </p>
          <h2 className="font-extrabold text-white text-2xl">Get in Touch</h2>
          <p className='text-white'>
            We look forward to hearing from you. Please fill out the contact form below, and one of our team members will get back to you shortly.
          </p>
        </article>
        <div>
          <div className="p-3 rounded-lg bg-slate-900 bg-opacity-75 mb-8">
            <h2 className="font-eurostile text-yellow-700 text-2xl mb-4">Contact Form</h2>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="firstName" className="block font-eurostile text-white mb-2">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full p-2 bg-slate-800 border border-gray-700 rounded"
                  value={formState.firstName}
                  onChange={handleChange}
                  required
                  placeholder='First Name'
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block font-eurostile text-white mb-2">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full p-2 bg-slate-800 border border-gray-700 rounded"
                  value={formState.lastName}
                  onChange={handleChange}
                  required
                  placeholder='Last Name'
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-eurostile text-white mb-2">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 bg-slate-800 border border-gray-700 rounded"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder='Email'
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block font-eurostile text-white mb-2">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-2 bg-slate-800 border border-gray-700 rounded"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder='Your Message'
                  required
                />
              </div>
              <button type="submit" className="bg-yellow-700 font-eurostile hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                Send
              </button>
            </form>

            {submitStatus.message && (
              <p className={`mt-4 text-sm ${submitStatus.isError ? 'text-red-500' : 'text-green-500'}`}>
                {submitStatus.message}
              </p>
            )}
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Recent Posts</h2>
            <div className="grid gap-4">
              <Link href="/Design" className="flex items-center gap-4" prefetch={false}>
                <Image
                  src="/assets/images/andrew-neel-cckf4TsHAuw-unsplash.jpg"
                  alt="Recent Post"
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-lg font-medium">Why A Good Website Matters</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">May 31, 2024</p>
                </div>
              </Link>
              <Link href="/Maintenance" className="flex items-center gap-4" prefetch={false}>
                <Image
                  src="/assets/images/vitolda-klein-lAqSzwr5eQc-unsplash.jpg"
                  alt="Recent Post"
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-lg font-medium">The Importance of Web Maintenance</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">May 31, 2024</p>
                </div>
              </Link>
              <Link href="/Marketing" className="flex items-center gap-4" prefetch={false}>
                <Image
                  src="/assets/images/nasa-Q1p7bh3SHj8-unsplash (1).jpg"
                  alt="Recent Post"
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-lg font-medium">The Art of Marketing</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">May 31, 2024</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

