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
        <Link href="/Design">    
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
                Learn why a good website is crucial for your business success.
              </p>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                <CalendarIcon className="w-4 h-4" />
                <span>May 31, 2024</span>
                <ClockIcon className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>
          </article>
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="Maintenance"> 
            <article className="space-y-2">
              <Image
                src="/assets/images/vitolda-klein-lAqSzwr5eQc-unsplash.jpg"
                alt="Recent blog post"
                width={400}
                height={200}
                className="rounded-lg mb-2 w-full h-[150px] object-cover"
              />
              <div className="inline-block bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400">
                Web Development
              </div>
              <h3 className="text-lg font-semibold">The Importance of Web Maintenance</h3>
              <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                Explore the principles of accessible design and how to create inclusive experiences for all users.
              </p>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                <CalendarIcon className="w-4 h-4" />
                <span>May 31, 2024</span>
                <ClockIcon className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </article>
            </Link>
            <Link href="Marketing">  
            <article className="space-y-2">
              <Image
                src="/assets/images/nasa-Q1p7bh3SHj8-unsplash (1).jpg"
                alt="Recent blog post"
                width={400}
                height={200}
                className="rounded-lg mb-2 w-full h-[150px] object-cover"
              />
              <div className="inline-block bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400">
              Business
              </div>
              <h3 className="text-lg font-semibold">The Art of Marketing</h3>
              <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
              Best Practices and Strategic Insights
              </p>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                <CalendarIcon className="w-4 h-4" />
                <span>May 31, 2024</span>
                <ClockIcon className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </article>
            </Link>
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
            <div className="space-y-4">
              <Link
                href="/Design"
                className="flex items-center gap-4 hover:bg-yellow-700 dark:hover:bg-gray-800 rounded-lg p-3 transition-colors"
                prefetch={false}
              >
                <Image
                  src="/assets/images/andrew-neel-cckf4TsHAuw-unsplash.jpg"
                  alt="Recent blog post"
                  width={80}
                  height={80}
                  className="rounded-lg w-20 h-20 object-cover"
                />
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold">Why A Good Website Matters</h4>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                    <CalendarIcon className="w-4 h-4" />
                    <span>May 31, 2024</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/Maintenance"
                className="flex items-center gap-4 hover:bg-yellow-700 dark:hover:bg-gray-800 rounded-lg p-3 transition-colors"
                prefetch={false}
              >
                <Image
                  src="/assets/images/vitolda-klein-lAqSzwr5eQc-unsplash.jpg"
                  alt="Recent blog post"
                  width={80}
                  height={80}
                  className="rounded-lg w-20 h-20 object-cover"
                />
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold">The Importance Of Web Maintenance</h4>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                    <CalendarIcon className="w-4 h-4" />
                    <span>May 31, 2024</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/Marketing"
                className="flex items-center gap-4 hover:bg-yellow-700 dark:hover:bg-gray-800 rounded-lg p-3 transition-colors"
                prefetch={false}
              >
                <Image
                  src="/assets/images/nasa-Q1p7bh3SHj8-unsplash (1).jpg"
                  alt="Recent blog post"
                  width={80}
                  height={80}
                  className="rounded-lg w-20 h-20 object-cover"
                />
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold">The Art Of Marketing</h4>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                    <CalendarIcon className="w-4 h-4" />
                    <span>May 31, 2024</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/DataBaseCreationMaintenance"
                className="flex items-center gap-4 hover:bg-yellow-700 dark:hover:bg-gray-800 rounded-lg p-3 transition-colors"
                prefetch={false}
              >
                <Image
                  src="/assets/images/matthieu-beaumont-iYnpYeyu57k-unsplash.jpg"
                  alt="Recent blog post"
                  width={80}
                  height={80}
                  className="rounded-lg w-20 h-20 object-cover"
                />
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold">Understanding Databases and Their Maintenance</h4>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                    <CalendarIcon className="w-4 h-4" />
                    <span>May 31, 2024</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/API"
                className="flex items-center gap-4 hover:bg-yellow-700 dark:hover:bg-gray-800 rounded-lg p-3 transition-colors"
                prefetch={false}
              >
                <Image
                  src="/assets/images/gabriel-heinzer-g5jpH62pwes-unsplash.jpg"
                  alt="Recent blog post"
                  width={80}
                  height={80}
                  className="rounded-lg w-20 h-20 object-cover"
                />
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold">Understanding APIs and Their Importance</h4>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                    <CalendarIcon className="w-4 h-4" />
                    <span>May 31, 2024</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/WebDevDeploy"
                className="flex items-center gap-4 hover:bg-yellow-700 dark:hover:bg-gray-800 rounded-lg p-3 transition-colors"
                prefetch={false}
              >
                <Image
                  src="/assets/images/annie-spratt-QckxruozjRg-unsplash.jpg"
                  alt="Recent blog post"
                  width={80}
                  height={80}
                  className="rounded-lg w-20 h-20 object-cover"
                />
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold">The Essence of Web Development and the Power of a Strong Development Team</h4>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                    <CalendarIcon className="w-4 h-4" />
                    <span>May 31, 2024</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          {/* <div>
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
          </div> */}
        </div>
      </main>
    </div>
    </>
  )
}


