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

export default function ProgramsPage() {
    const [isOpen, setIsOpen] = useState(false);

    let id = "";

    const [boardmember, setBoardmember] = useState([]);
    const [leadershipTeam, setLeadershipTeam] = useState([]);

    const fetchChapterTeam = async () => {
        try {
        const response = await fetch(`https://nalongo-dashboard-server.onrender.com/api/v1/leaders`);
        const data = await response.json();
        const leadershipTeam = data.filter(item => item.leaderShipType === "leadership-team");
        const boardmember = data.filter(item => item.leaderShipType === "board-member");
        setBoardmember(boardmember);
        setLeadershipTeam(leadershipTeam);
        } catch (error) {
        console.error('Error fetching leaders:', error);
        }
    };

    useEffect(() => {
        fetchChapterTeam();
    }, []);
    

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="scroll-smooth text-gray-800">

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
                        <h1><span>Meet Our Team </span></h1>
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
                                            <Link href="/team" className="link block px-4 py-2 text-gray-700 bg-[#1f8cad] rounded-md">OUR LEADERSHIP</Link>
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

            {/* Home section ends here */}

            {/* <section className="fullContainer" id="aboutSection"> */}
                <div className="container">
                    <h2 className="sectionTitle text-[#1f8cad]">
                       Board Members
                    </h2>
                </div>
                <div className="boxContainer md:flex flex flex-wrap md:flex-row justify-center">  
                    {boardmember.map((chapter) => (
                        <div className={`flex justify-center hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out `}>
                            <Link href={`/ala/${id=chapter._id}`} className="section col-4" style={{ marginRight: '80px', cursor: 'pointer' }}>
                                <div className="frame2 text-center p-4 border rounded shadow">
                                    <img src={chapter.photo} alt={chapter.name} className="rounded-circle2"/>
                                    <h2 className="mt-4 font-bold">{chapter.name}</h2>
                                    <h3 className="mt-2">{chapter.position}</h3>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

            {/* </section> */}

            {/* <section className="fullContainer -mt-20" id="aboutSection"> */}
            <div className="container flex items-center justify-center">
                <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#1f8cad] ">
                    Senior Leadership Team
                </h3>
            </div>

                <div className="boxContainer md:flex flex flex-wrap md:flex-row justify-center"> 
                    {leadershipTeam.map((chapter, index) => (
                        <div key={index} className={`flex justify-center hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out ${index % 4 === 0 }`}>
                            <Link href={`/ala/${id=chapter._id}`} className="section col-4" style={{ marginRight: '80px', cursor: 'pointer' }}>
                                <div className="frame2 text-center p-4 border rounded shadow">
                                    <img src={chapter.photo} alt={chapter.name} className="rounded-circle2"/>
                                    <h2 className="mt-4 font-bold">{chapter.name}</h2>
                                    <h3 className="mt-2">{chapter.position}</h3>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            <SponsorSection />
            {/* Join us section ends here */}

            <FooterSection />



        </div>
    )
}