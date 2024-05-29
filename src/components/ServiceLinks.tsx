'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer, faDatabase } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const ServiceLinks: React.FC = () => {
    return (
        <div className="flex flex-col items-center md:flex-row justify-around w-full py-8 bg-emerald-950">
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition m-2 w-40">
                <Link href="/api-explanation" className="text-emerald-950 flex flex-col items-center">
                    <FontAwesomeIcon icon={faCode} size="2x" />
                    <p className="mt-2 font-eurostile text-center">API Explanation</p>
                </Link>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition m-2 w-40">
                <Link href="/web-development" className="text-emerald-950 flex flex-col items-center">
                    <FontAwesomeIcon icon={faServer} size="2x" />
                    <p className="mt-2 font-eurostile text-center">Web Development & Deployment</p>
                </Link>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition m-2 w-40">
                <Link href="/database-maintenance" className="text-emerald-950 flex flex-col items-center">
                    <FontAwesomeIcon icon={faDatabase} size="2x" />
                    <p className="mt-2 font-eurostile text-center">Database Creation & Maintenance</p>
                </Link>
            </div>
        </div>
    );
};

export default ServiceLinks;



