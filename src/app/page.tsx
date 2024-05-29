import React from 'react'
import { Boxes } from '../components/ui/background-bokex';
import { cn } from '@/utils/cn'; 
import ServiceLinks from '@/components/ServiceLinks';

export default function Home() {
  return (
    <>
    <div className="flex flex-col relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-950 flex items-center justify-center clip-sloped">
          <Boxes/>
          <h1 className={cn("font-eurostile text-center text-4xl md:text-5xl lg:text-6xl z-20")}>
            Navigating
            <br />
            <strong className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-amber-950 to-yellow-600 md:text-7xl lg:text-8xl z-20">
              Your
            </strong>
            <br />
            Digital Success
          </h1>
        </div>
      </div>
      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-950 flex items-center justify-center">
          <h1 className="font-eurostile text-center text-4xl md:text-5xl lg:text-6xl">
            WEBSITE DESIGN
            <br />
            <strong className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-amber-950 to-yellow-600 md:text-7xl lg:text-8xl">
              &
            </strong>
            <br />
            DEPLOYMENT
          </h1>
          <div>
            
          </div>
        </div>
      </div>
      <ServiceLinks/>
      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b to-transparent from-emerald-950 flex items-center justify-center clip-sloped">
          <h1 className="font-eurostile text-center text-4xl md:text-5xl lg:text-6xl">
            API DEVELOPMENT
            <br />
            <strong className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-amber-950 to-yellow-600 md:text-7xl lg:text-8xl">
              &
            </strong>
            <br />
            INTERGRATION
          </h1>
        </div>
      </div>
      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b to-transparent from-emerald-950 flex items-center justify-center clip-sloped-right">
          <Boxes/>
          <h1 className="font-eurostile text-center text-4xl md:text-5xl lg:text-6xl z-20">
            DATABASE CREATION
            <br />
            <strong className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-amber-950 to-yellow-600 md:text-7xl lg:text-8xl z-20">
              &
            </strong>
            <br />
            MAINTANENCE
          </h1>
        </div>
      </div>
    </>
  )
}

