'use client';
// import { useState } from 'react';


import Link from "next/link";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

import { useRouter } from 'next/navigation';
import logoImage from '../public/images/logo1.png'
import educationImage3 from '../public/images/programs/3.jpg';
import FooterSection from "../../components/footer";
import HeaderSection from "../../components/header";
import SponsorSection from "../../components/sponsor";

export default function HomePage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="scroll-smooth text-gray-800">
            <div className="fullContainer bannerw" id="homeSection">
                <header>
                    <div className="container">
                    <Link href="/">
                        <Image 
                        src={logoImage} 
                        height={100} 
                        width={100} // Add width to prevent layout shift
                        alt="Foundation Logo" 
                        className="rounded-md"
                        />
                    </Link>

                        <nav className="pt-5 relative">
                            <div className="flex items-center justify-between px-4 py-3 md:flex md:space-x-4">
                                <div className="flex justify-between items-center w-full md:w-auto">
                                {!isOpen && (
                                    <button
                                        className="md:hidden text-gray-900 focus:outline-none relative top-4 right-4 z-50"
                                        onClick={() => setIsOpen(!isOpen)}
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                        </svg>
                                    </button>
                                )}
                                </div>
                                <ul className={`mt-4 md:mt-0 md:flex md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
                                    <li className="dropdown relative">
                                        <a href="#" className="dropbtn link ">ABOUT</a>
                                        <div className="dropdown-content absolute hidden shadow-lg rounded-md">
                                            <Link href="/about" className="link block px-4 py-2 text-gray-700">WHO WE ARE</Link>
                                            <Link href="/wedo" className="link block px-4 py-2 text-gray-700 bg-[#1f8cad] rounded-md">WHAT WE DO</Link>
                                            <Link href="/impact" className="link block px-4 py-2 text-gray-700">OUR IMPACT</Link>
                                            <Link href="/team" className="link block px-4 py-2 text-gray-700">OUR LEADERSHIP</Link>
                                            <Link href="/joinus" className="link block px-4 py-2 text-gray-700">JOIN OUR TEAM</Link>
                                            <Link href="/benef" className="link block px-4 py-2 text-gray-700">BENEFICIARIES</Link>
                                        </div>
                                    </li>
                                    <li className="dropdown relative">
                                        <a href="#" className="dropbtn link">PROGRAMS</a>
                                        <div className="dropdown-content absolute hidden shadow-lg rounded-md">
                                            <Link href="/education" className="link block px-4 py-2 text-gray-700">EDUCATION</Link>
                                            <Link href="/community" className="link block px-4 py-2 text-gray-700">COMMUNITY ENGAGEMENT</Link>
                                        </div>
                                    </li>
                                    <li className="dropdown relative">
                                        <a href="#" className="dropbtn link">CHAPTERS</a>
                                        <div className="dropdown-content absolute hidden shadow-lg rounded-md">
                                            <Link href="/denmark" className="link block px-4 py-2 text-gray-700">DENMARK</Link>
                                            <Link href="/switzerland" className="link block px-4 py-2 text-gray-700">SWITZERLAND</Link>
                                            <Link href="/germany" className="link block px-4 py-2 text-gray-700">GERMANY</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <Link href="/gallery" className="link block px-4 py-2 text-gray-700">Gallery</Link>
                                    </li>
                                    <li>
                                        <Link href="/paypal" className="link bg-amber-700 rounded-lg block px-4 py-2 text-white">Donate</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                    </div>
                </header>
                {/* Header ends here */}

                <div className="container">
                    <h1>WHAT WE DO</h1>
                    <p className="text-lg">
                    
                    </p>
                    <button className="mb-5">
                        <Link href="#joinusSection">
                            JOIN US NOW
                        </Link>
                    </button>
                </div>
            </div>
            {/* Home section ends here */}

            <section className="fullContainer" id="aboutSection">
                <div className="container" id="joinusSection">
                    <h2 className="sectionTitle text-[#1f8cad]">
                       WHAT WE DO
                    </h2>
                    <br/>
                    <br/>
                        <div className="bg-gray-400" >
                            <div className=" box flex flex-col P-4">

                             <div className="flex justify-between xl:flex-row flex-col  xl:space-x-20 space-y-4 xl:space-y-0">

                                <div className="space-y-3">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1f8cad]">Education</h2>
                                    <p className="text-base sm:text-lg">
                                       Nalongo Lwokyaza Foundation serves one of the world’s most vulnerable communities by providing education to those least likely to be educated: those who come from families that cannot afford.  A case story is from Mbirabira primary school.  
                                    </p> 
                                    <button className="hover:bg-[#197996] w-32 sm:w-40 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
                                        <Link href="/education">
                                            Learn More
                                        </Link>
                                    </button>
                                </div>
                                <Image className="rounded-circle1" src={educationImage3} alt="Education Image" />
                               
                             </div>
                            </div>
                        </div>

                        <br/>
                        <br/>

                        <div className="bg-gray-600" >
                            <div className=" box flex flex-col">

                            <div className="flex justify-between xl:flex-row flex-col  xl:space-x-20 space-y-4 xl:space-y-0">
                                    <Image className="rounded-circle1" src={educationImage3} alt="Education Image" />
                                        {/* <Image 
                                            className="rounded w-full hidden xl:flex" 
                                            src={educationImage3}
                                        /> */}
                                    <div className="space-y-3">
                                        <h2 className="text-4xl text-[#1f8cad]">Community Building</h2>
                                        <p className="text-lg">
                                          Our community-based program seeks to improve the livelihoods of the community members,
                                        </p> 
                                        <button className="hover:bg-[#197996] w-40 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
                                            <Link href="/community">
                                                Learn More
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <br/>
                        <br/>

                        <div className="bg-gray-400" >
                            <div className=" box flex flex-col">

                            <div className="flex justify-between xl:flex-row flex-col  xl:space-x-20 space-y-4 xl:space-y-0">

                                <div className="space-y-3">
                                    <h2 className="text-4xl text-[#1f8cad]"></h2>
                                    {/* <p className="text-lg">
                                    Bringing multiple tribes together to build innovative enterprises for sustainable peace, and development in the DRC. 
                                    </p>  */}
                                    <button className="hover:bg-[#197996] w-40 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
                                        <Link href="#">
                                            Learn More
                                        </Link>
                                    </button>
                                </div>
                                <Image className="rounded-circle1" src={educationImage3} alt="Education Image" />
                                {/* <Image 
                                    className="rounded w-full hidden xl:flex" 
                                    src={educationImage3}
                                /> */}
                                </div>
                            </div>
                        </div>
                </div>
            </section>
            {/* About section ends here */}
            
            <SponsorSection />
            {/* Join us section ends here */}

            <FooterSection />



        </div>
    )
}