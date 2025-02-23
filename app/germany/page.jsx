'use client';

import Link from "next/link";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
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
import { useRouter, useSearchParams } from 'next/navigation';

export default function HomePage() {
    const [isOpen, setIsOpen] = useState(false);

    const [chapterGermany, setChapterGermany] = useState([]);
    
    let id = "";

    const fetchChapterGermany = async () => {
        try {
        const response = await fetch(`https://nalongo-dashboard-server.onrender.com/api/v1/chapter-germany`);
        const data = await response.json();
        setChapterGermany(data);
        } catch (error) {
        console.error('Error fetching chapter-germany:', error);
        }
    };

    useEffect(() => {
        fetchChapterGermany();
    }, []);
    
    // useEffect(() => {
    //     if (id) {
    //         fetchChapterDenmark();
    //     }
    // }, [id]);

    // Helper function to truncate description
    const truncateDescription = (description, wordLimit) => {
        const words = description.split(' ');
        if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...';
        }
        return description;
    };

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
                                            <Link href="/germany" className="link block px-4 py-2 text-gray-700 bg-[#1f8cad] rounded-md">GERMANY</Link>
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
                    <h1>Chapters</h1>
                    <p className="text-lg">
                    
                    </p>
                    <button className="mb-5 hover:bg-[#197996]">
                        <Link href="/sponsor">
                            <span className="text-lg">Sponsor A Child Now</span>
                        </Link>
                    </button>
                </div>
            </div>
            {/* Home section ends here */}
            <section className="programs" id="programsSection">
                <div className="container">
                    <h1><span>CIYOTA's approach to strengthening community engagement goes beyond local communities. We have friends around the world, who care and love our work to transform communities in Africa. We welcome these people and extend the opportunity to build the community. </span></h1>
                    
                </div>
                <div className="container mx-5">
                    <h2 className="sectionTitle text-[#1f8cad]">
                       GERMANY
                    </h2>

                    <div className="boxContainer md:flex flex flex-wrap md:flex-row">
                            {chapterGermany.map((chapter) => (
                                <div className="box flex flex-col md:w-[300px] lg:w-[350px] xl:w-[400px] 2xl:w-[450px] p-4 md:max-w-[25%] md:p-4 hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer" key={chapter._id}>
                                    <div className="">
                                    <img src={chapter.photo} alt={chapter.name} className="w-full h-40 object-cover" style={{ height: "200px", width: "300px" }}/>
                                    </div>
                                    <div className="programTitle px-5">
                                    <span className="text-xl text-[#1f8cad]">{chapter.name}</span>
                                    </div>
                                    <div className="programDesc">
                                     <h2>{truncateDescription(chapter.description, 30)}</h2>
                                    </div>
                                    <button className="hover:bg-[#197996] w-40">
                                    <Link href={`/anjg/${id=chapter._id}`}>
                                        Read More
                                    </Link>
                                    </button>
                                </div>
                            ))}
                    {/* </div> */}
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