import React from 'react'
import Link from "next/link"
import Image from 'next/image';
import { FaCalendarAlt as CalendarIcon, FaClock as ClockIcon } from 'react-icons/fa';

export default function Blog() {
  return (
    <>
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-transparent to-emerald-950">
      <main className="flex-1 container mx-auto px-4 md:px-6 py-8 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
        <div>
          <article className="mb-8">
            <Image
              src="/assets/images/andrew-neel-cckf4TsHAuw-unsplash.jpg"
              alt="Featured blog post"
              width={800}
              height={400}
              className="rounded-lg mb-4 w-full h-[300px] object-cover"
            />
            <div className="space-y-2">
              <div className="inline-block bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400">
                Web Development
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Why A Good Website Matters</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Explore the latest trends and technologies shaping the future of web development.
              </p>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                <CalendarIcon className="w-4 h-4" />
                <span>May 1, 2023</span>
                <ClockIcon className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>
          </article>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="space-y-2">
              <img
                src="/placeholder.svg"
                alt="Recent blog post"
                width={400}
                height={200}
                className="rounded-lg mb-2 w-full h-[150px] object-cover"
              />
              <div className="inline-block bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400">
                Design
              </div>
              <h3 className="text-lg font-semibold">Designing for Accessibility</h3>
              <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                Explore the principles of accessible design and how to create inclusive experiences for all users.
              </p>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                <CalendarIcon className="w-4 h-4" />
                <span>April 15, 2023</span>
                <ClockIcon className="w-4 h-4" />
                <span>3 min read</span>
              </div>
            </article>
            <article className="space-y-2">
              <img
                src="/placeholder.svg"
                alt="Recent blog post"
                width={400}
                height={200}
                className="rounded-lg mb-2 w-full h-[150px] object-cover"
              />
              <div className="inline-block bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400">
                Productivity
              </div>
              <h3 className="text-lg font-semibold">Boost Your Productivity with These Tips</h3>
              <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                Discover practical strategies to help you work smarter, not harder, and achieve your goals more
                efficiently.
              </p>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                <CalendarIcon className="w-4 h-4" />
                <span>March 28, 2023</span>
                <ClockIcon className="w-4 h-4" />
                <span>4 min read</span>
              </div>
            </article>
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
            <div className="space-y-4">
              <Link
                href="#"
                className="flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-3 transition-colors"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
                  alt="Recent blog post"
                  width={80}
                  height={80}
                  className="rounded-lg w-20 h-20 object-cover"
                />
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold">The Rise of Artificial Intelligence</h4>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                    <CalendarIcon className="w-4 h-4" />
                    <span>April 20, 2023</span>
                  </div>
                </div>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-3 transition-colors"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
                  alt="Recent blog post"
                  width={80}
                  height={80}
                  className="rounded-lg w-20 h-20 object-cover"
                />
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold">The Future of Remote Work</h4>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                    <CalendarIcon className="w-4 h-4" />
                    <span>March 15, 2023</span>
                  </div>
                </div>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-3 transition-colors"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
                  alt="Recent blog post"
                  width={80}
                  height={80}
                  className="rounded-lg w-20 h-20 object-cover"
                />
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold">The Importance of Cybersecurity</h4>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                    <CalendarIcon className="w-4 h-4" />
                    <span>February 28, 2023</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="#"
                className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                prefetch={false}
              >
                Technology
              </Link>
              <Link
                href="#"
                className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                prefetch={false}
              >
                Design
              </Link>
              <Link
                href="#"
                className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                prefetch={false}
              >
                Productivity
              </Link>
              <Link
                href="#"
                className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                prefetch={false}
              >
                Lifestyle
              </Link>
              <Link
                href="#"
                className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                prefetch={false}
              >
                Marketing
              </Link>
              <Link
                href="#"
                className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                prefetch={false}
              >
                Business
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  )
}


