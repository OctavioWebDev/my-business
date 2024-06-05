import React from 'react';
// import { Boxes } from '../components/ui/background-bokex';
//import { cn } from '@/utils/cn';
import ServiceLinks from '@/components/ServiceLinks';

export default function Home() {
  return (
    <>
      <div className="flex flex-col relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-950 flex items-center justify-center clip-sloped">

          <h1 className={"font-eurostile text-center text-2xl md:text-3xl lg:text-6xl z-20"}>
            Navigating
            <br />
            <strong className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-amber-950 to-yellow-600 md:text-2xl lg:text-5xl z-20">
              Your
            </strong>
            <br />
            Digital Success
          </h1>
        </div>
      </div>
      <ServiceLinks />
      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-950 flex flex-col items-center justify-center">
          <h1 className="font-eurostile mb-8 text-center text-2xl md:text-3xl lg:text-6xl">
            WEBSITE DESIGN
            <br />
            <strong className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-amber-950 to-yellow-600 md:text-2xl lg:text-5xl">
              &
            </strong>
            <br />
            DEPLOYMENT
          </h1>
          <div className="flex flex-col text-center px-6">
            <p>
              From design to deployment, our web development services ensure your
              <br/>
              website is not only visually appealing but also highly functional
              <br/>
              and optimized for performance.
            </p>
          </div>
        </div>
      </div>
      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b to-transparent from-emerald-950 flex flex-col items-center justify-center">
          <h1 className="font-eurostile text-center text-2xl md:text-3xl lg:text-6xl">
            API DEVELOPMENT
            <br />
            <strong className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-amber-950 to-yellow-600 md:text-2xl lg:text-5xl">
              &
            </strong>
            <br />
            INTEGRATION
          </h1>
          <div className="flex flex-col text-center py-6 px-6">
            <p>
            Understanding the APIs we use is crucial for integrating external 
            <br/>
            services and ensuring smooth communication between different parts 
            <br/>
            of our application.
            </p>
          </div>
        </div>
      </div>
      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-950 flex flex-col items-center justify-center">
          <h1 className="font-eurostile size-fit py-6 px-6 text-center text-2xl md:text-3xl lg:text-6xl z-20">
            DATABASE CREATION
            <br />
            <strong className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-amber-950 to-yellow-600 md:text-2xl lg:text-5xl z-20">
              &
            </strong>
            <br />
            MAINTENANCE
          </h1>
          <div className="flex flex-col text-center py-6 px-6 z-20">
            <p>
            Proper database creation and maintenance are essential for data integrity,
            <br/> 
            security, and efficient data retrieval, which are crucial for any application.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}



