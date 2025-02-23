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

import bannerImage from '../public/images/1.jpg'
import educationImage from '../public/images/gallery/8.jpg'
import galleryImage1 from '../public/images/gallery/1.jpg'
import galleryImage2 from '../public/images/gallery/2.jpg'
import galleryImage3 from '../public/images/gallery/3.jpg'
import galleryImage4 from '../public/images/gallery/4.jpg'
import galleryImage5 from '../public/images/gallery/5.jpg'
import galleryImage6 from '../public/images/gallery/6.jpg'
import galleryImage7 from '../public/images/gallery/7.jpg'
import galleryImage8 from '../public/images/gallery/8.jpg'

export default function HomePage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="scroll-smooth">
            <div className="fullContainer bannerd" id="homeSection">
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

            </div>
            {/* Home section ends here */}
            <section className="fullContainer" id="aboutSection">
                <div className="container mx-5">

                    <div className="space-y-20 md:flex flex flex-col md:flex-row">
                        <div className="row">
                            <div className="box flex flex-col">
                                
                                <div className="programDesc">
                                  <span className="text-xl text-[#1f8cad]">Scholarships</span>
                                    <p className="text-lg">
                                      Nalongo Lwokyaza Foundation offers financial scholarships or material support to students in Primary school, Secondary school or at the University. Financial support in form of school tuition fees, scholastic material, accommodation and mentorship from the Foundation or through the Foundation partnerships. Such educational measures enable students to realize their visions. 
                                    </p>
                                    <br />
                                    <p className="text-lg">A need assessment of the individual students is made. Full scholarships are given to those who come from families that cannot afford paying tuition at all; Half Scholarships are given to those who have some few means. All this depends on the available resources from the Foundation and also in partnership with some schools. </p>
                                    <br />
                                    <span className="text-2xl text-[#1f8cad]">SCHOLARSHIP SELECTION PROCESS</span>
                                    <p className="text-lg">Nalongo Lwokyaza Foundation identifies the students. There is an agreement with Mbirabira primary school to spot the poor and promising students. It is also possible for the students to apply for a scholarship.</p>
                                    <br />
                                    <h1 className="text-lg">Application forms are filled in and submitted to the scholarship committee. This criterion is as follows:</h1>
                                    <ul class="text-lg">
                                        <li>   . High academic performance: Division one and two (D1 & D2). D3 can be considered in case the student had disruptions and valid reasons (illness, etc). A ‘Level requirement is 10 points and two principle passes.<br/></li>
                                        <li>   . Students from financially disadvantaged families. <br/></li>
                                        {/* <li>Be from an area ravaged by poverty or have a disability.<br/></li> */}
                                        <li>   . The student commits to giving back to the community after education.<br/></li>
                                    </ul>
                                    <br />
                                    <h1 className="text-lg">For more details, contact</h1> <p className="text-1xl text-[#1f8cad]">scholarshipmanager@foundationname.org</p>
                                </div>
                            </div>
                        </div>
                        {/* Box ends here */}

                    </div>
                    {/* Box container ends here */}

                </div>
            </section>
            {/* Programs section ends here */}
            
            <SponsorSection />
            {/* Join us section ends here */}

            <FooterSection />


        </div>
    )
}