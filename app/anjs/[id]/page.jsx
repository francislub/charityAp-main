'use client';

import Link from "next/link";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logoImage from '../../public/images/logo1.png'
import FooterSection from "../../components/footer";
import HeaderSection from "../../components/header";
import SponsorSection from "../../components/sponsor";

export default function HomePage({params}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const router = useRouter();

  const [chapterSwitzerland, setChapterSwitzerland] = useState([]);

    const fetchChapterSwitzerland = async () => {
        try {
        const response = await fetch('https://nalongo-dashboard-server.onrender.com/api/v1/chapter-switzerland');
        const data = await response.json();
        const filteredData = data.filter(item => item._id === params.id);
        // console.log(filteredData);
        setChapterSwitzerland(filteredData);
        } catch (error) {
        console.error('Error fetching chapter-switzerland:', error);
        }
        
    };

    useEffect(() => {
        fetchChapterSwitzerland();
    }, []);

//   if (!chapter) return <p>Loading...</p>;
    return (
        <div className="scroll-smooth">
            <div className="fullContainer" id="homeSection">
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
            <section className="programs" id="programsSection">
                <div className="container mx-5">
           
                <div className="boxContainer md:flex flex-col md:flex-row md:space-x-12">
                {chapterSwitzerland.map((chapter) => (
                    <div className="box flex flex-col md:flex-row md:w-[600px] lg:w-[700px] xl:w-[800px] 2xl:w-[900px] p-4 md:max-w-[100%] md:p-4 hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer" key={chapter._id}>
                        <div className="md:w-2/5">
                            <img src={chapter.photo} alt={chapter.name} className="w-full h-40 object-cover" style={{ height: "100%", width: "100%" }}/>
                        </div>
                        <div className="programDetails md:w-3/5 px-5 flex flex-col">
                            <div className="programTitle">
                                <span className="text-xl text-[#1f8cad]">{chapter.name}</span>
                            </div>
                            <div className="programDesc">
                                <h2>{chapter.description}</h2>
                            </div>
                        </div>
                    </div>
                ))}

                    {/* <div className="cardImage md:flex w-1/2"  key={chapterDenmark._id}>
                        <img src={chapterDenmark.photo} alt={chapterDenmark.name} className="w-full h-auto object-cover" />
                    </div>
                    <div className="programDesc w-1/2">
                        <span className="text-xl text-[#1f8cad]">{chapterDenmark.name}</span>
                        <h1>{chapterDenmark.description}</h1>
                    </div> */}
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