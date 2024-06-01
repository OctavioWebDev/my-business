import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPhone,
    faEnvelope,
    faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebookF,
    faXTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
// import "leaflet/dist/leaflet.css";
import ContactForm from './ContactForm';

export default function Footer() {
    return (
        <footer className="flex flex-col w-full shrink-0 items-center bg-gradient-to-b from-emerald-950 to-transparent px-4 md:px-6">
            <div className="flex flex-col lg:flex-row justify-between w-full items-start gap-2 sm:gap-6 py-6">
                <div className="flex-1">
                    <Image
                        src="/assets/logos/questwebtech9.png"
                        alt="Quest Web Tech Logo"
                        width={200}
                        height={50}
                    />
                    <p className="font-eurostile py-2">
                        <a href="https://maps.google.com/?q=+Toledo,+Ohio" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />Toledo, Ohio
                        </a>
                    </p>
                    <p className="font-eurostile py-2">
                        <a href="tel:+14193439894">
                            <FontAwesomeIcon icon={faPhone} /> Phone: (419)343-9894
                        </a>
                    </p>
                    <p className="font-eurostile py-2">Open M-F: 9:00 AM – 5:00 PM</p>
                    <p className="font-eurostile py-2">
                        <a href="mailto:contact@questwebtech.com">
                            <FontAwesomeIcon icon={faEnvelope} /> contact@questwbtech.com
                        </a>
                    </p>
                    <div className="flex font-eurostile space-x-3">
                        <p>
                            <a href="https://www.facebook.com/profile.php?id=61560109583746" target="_blank" rel="noopener noreferrer" className="text-md">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </p>
                        <p>
                            <a href="https://x.com/octavio31848" target="_blank" rel="noopener noreferrer" className="text-md">
                                <FontAwesomeIcon icon={faXTwitter} />
                            </a>
                        </p>
                        <p>
                            <a href="https://www.youtube.com/channel/UCCzbH0XewYk6iVosUO-h9kQ" target="_blank" rel="noopener noreferrer" className="text-md">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </p>
                    </div>
                </div>

                <div className='py-5 px-5 w-full sm:w-1/2 md:w-1/4 lg:order-2'>
                    <h5 className="text-3xl font-eurostile text-yellow-700 font-bold">Help</h5>
                    <p className="font-eurostile py-2">
                        <Link href="/Contact" className="hover:underline">Contact</Link>
                    </p>
                    <p className="font-eurostile py-2">
                        <Link href="/Blog" className="hover:underline">Blog</Link>
                    </p>
                    <p className="font-eurostile py-2">
                        <Link href="/Design" className="hover:underline">Design</Link>
                    </p>
                    <p className="font-eurostile py-2">
                        <Link href="/Maintenance" className="hover:underline">Maintenance</Link>
                    </p>
                    {/* <p className="font-eurostile py-2">
                        <Link href="/OurWork" className="hover:underline">Our Work</Link>
                    </p> */}
                    {/* <p className="font-eurostile py-2">
                        <Link href="/Rescources" className="hover:underline">Resources</Link>
                    </p> */}
                    <p className="font-eurostile py-2">
                        <Link href="/WhyUs" className="hover:underline">Why Us</Link>
                    </p>
                </div>

                <div className='py-5 px-5 lg:order-3'>
                    <ContactForm />
                </div>
            </div>
        </footer>
    );
}

