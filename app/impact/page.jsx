'use client';

import Link from "next/link";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logoImage from '../public/images/logo1.png'
import FooterSection from "../../components/footer";
import HeaderSection from "../../components/header";
import SponsorSection from "../../components/sponsor";

import educationImage1 from '../public/images/programs/1.jpg';
import educationImage2 from '../public/images/programs/2.jpg';
import educationImage3 from '../public/images/programs/3.jpg';
import bannerImage from '../public/images/banner.jpg'

export default function ProgramsPage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="scroll-smooth text-gray-800">
            <div className="fullContainer banneri" id="homeSection">
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
                                            <Link href="/wedo" className="link block px-4 py-2 text-gray-700">WHAT WE DO</Link>
                                            <Link href="/impact" className="link block px-4 py-2 text-gray-700 bg-[#1f8cad] rounded-md">OUR IMPACT</Link>
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

                <div className="container space-y-10">
                    <h1>Our Impact</h1>
                    <p className="text-lg">
                    </p>
                </div>
            </div>
            {/* Home section ends here */}

            {/* <section className="fullContainer" id="aboutSection">
                <div className="container">
                    <h2 className="sectionTitle text-[#1f8cad]">
                        Our Programs
                    </h2>
                    <p className="text-lg font-normal">
                        81% of the refugees are women and children, some of these women are widowed by the wars but have families to fend for. The refugees depend on subsistence farming but due to the most recent influx of refugees from the Congo, there is no more land for farming. Most families are forced to entirely depend on the monthly food aid of $8 per head from UNHCR. These families; therefore face many challenges in the new environment; they lack quality medical care, enough food, shelter, and most importantly, means to educate their children.<br /><br />
                        This livelihood program generally seeks to address the actual needs for refugees through provision of seed funding and skills development in business management, livestock, and agricultural activities. We provide skills training and microfinance to the women to build their homes, feed and send their children to school. Assuredly, refugee families have supplementary income from these activities and can provide meals for their families and support their children in schools.
                    </p>
                </div>
            </section> */}

            <section className="fullContainer -mt-10" id="aboutSection">
                <div className="container ">
                    <div className="space-y-20">
                        <div className="flex justify-between xl:flex-row flex-col  xl:space-x-1 space-y-1 xl:space-y-0">
                            <div className="flex-1">
                                <div className="flex flex-col justify-between h-full space-y-4 background-gray p-4 hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                                    <h2 className="text-2xl text-[#1f8cad]">Education</h2>
                                    <h5 className="text-1xl text-bold">Some statistics about education here? Mbirabira? Busoga? Uganda? </h5>
                                    <p>
                                    Our goal is to provide quality education to xxxx  students affected by poverty in the next 5 years at Primary, Secondary and University levels. This will be achieved by:
                                    </p> 
                                    <ul>
                                        <li>•	Identifying and enrolling talented financially unable children.</li>
                                        <li>•	Retaining and progression rate of 90% </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col justify-between h-full space-y-4 background-blue p-4 hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                                    <h2 className="text-1xl text-[#1f8cad]">xx financially disadvantaged children</h2>
                                    <p >
                                    have been educated through our primary school education program
                                    </p> 
                                    <h2 className="text-1xl text-[#1f8cad]">xx secondary students</h2>
                                    <p >
                                    Have accessed quality secondary education on our scholarship scheme.
                                    </p> 
                                    <h2 className="text-1xl text-[#1f8cad]">xx university students</h2>
                                    <p >
                                    In Uganda have been matched to university scholarship programs to pursue university education.
                                    </p> 
                                    <h2 className="text-1xl text-[#1f8cad]">xx</h2>
                                    <p >
                                    Have been trained at the vocational institute in Busoga region.
                                    </p> 
                                </div>
                            </div>
                            <div className="flex-1 hidden xl:flex hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                            <Image 
                                className="rounded w-full hidden xl:flex" 
                                src={educationImage3}
                            />
                            </div>
                        </div>

                        <div className="flex justify-between xl:flex-row flex-col  xl:space-x-1 space-y-1 xl:space-y-0">
                            <div className="flex-1">
                                <div className="flex flex-col justify-between h-full space-y-4 background-blue p-4 hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                                  
                                    <h2 className="text-2xl text-[#1f8cad]">Community Building</h2>
                                    <p className="text-lg">
                                    Our community-based program seeks to improve the livelihoods of the community members,
                                    </p>
                                    <ul>
                                        <li>•	We constructed a borehole that serves xxx people in an area of xxx km</li>
                                        <li>•	We gave land for the construction of a local church. The foundation collaborates with the local nurse who provides health programs to the community once a quarter or after need.  </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex-1">
                                   <div className="flex flex-col justify-between h-full space-y-4 background-gray p-4 hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                                 
                                    <h2 className="text-2xl text-[#1f8cad]">xxxxx community members</h2>
                                    <p className="text-lg">
                                    benefited from Nalongo Lwokyaza Foundation's voluntary and community service programs.
                                    </p>
                                    <h2 className="text-2xl text-[#1f8cad]">xxx women</h2>
                                    <p>accessed micro loans;</p>
                                    <p className="text-lg">
                                    xxx families have easy access to the water facility that provides water needs for the community.
                                    </p>
                                    <h2 className="text-2xl text-[#1f8cad]">xx widows & single mothers</h2>
                                    <ul>
                                        <li>•	trained in tailoring and garment cutting. </li>
                                        <li>•	Also trained xxx community members.  </li>
                                    </ul>
                                    <h2 className="text-2xl text-[#1f8cad]">xxx men</h2>
                                    <p className="text-lg">
                                    trained in skills such as  - - - 
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1 hidden xl:flex hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                                <Image 
                                    className="rounded w-full hidden xl:flex" 
                                    src={educationImage1}
                                />
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