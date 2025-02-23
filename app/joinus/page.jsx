'use client';
// import { useState } from 'react';


import Link from "next/link";
import React, { useState, useEffect } from 'react';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
  } from "react-icons/fa"
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logoImage from '../public/images/logo1.png'
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
            <div className="fullContainer bannerj" id="homeSection">
            <HeaderSection />
                {/* Header ends here */}

                <div className="container">
                    <h1>Join Us</h1>
                    <p className="text-lg">
                        Our foundation is committed to paying particular attention to children and youth within their programs who have suffered from violence and trauma, and aspires to sustain support for young people who have suffered trauma. Nalongo Lwokyaza Foundation also recognizes the power of functional education as a critical part of healing conflict and creating social cohesion in communities.
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
                        JOIN OUR TEAM
                    </h2>
                    <h1>Nalongo Lwokyaza Foundation is a family-based, non-profit organization established in 20xx in Jinja, Uganda, in memory of the late Nalongo Mukyala Lwokyaza, a wife, mother, educator, mentor, - - - ,  - - -.</h1>
                    <br/>
                    <h1>You can partner with us in the following ways: </h1>
                    <ul>
                        <li>Buy scholastic materials.</li>
                        <li>Give some upkeep to the children. </li>
                        <li>Donate books and other educational materials</li>
                        <li>Financial and Technical support in starting and operating a vocational school.  </li>
                        <li></li>
                    </ul>
                    <div className="title text-[#1f8cad]">
                         Open Positions:
                    </div>
                    <Link href="#">   
                        <div className="bg-gray-300" >
                            <div className=" box flex flex-col">
                                <div className="bg-gray-300  ">
                                    <div className="bg-gray-300  ">
                                        <div ><h2 >There are currently no open positions.  Follow us on our social media channels or subscribe to our newsletter to stay up to date for new job opportunities.</h2> </div> 
                                    </div>
                                </div>
                                <div className="flex justify-center space-x-4">
                                    {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube].map((Icon, index) => (
                                    <a key={index} href="#" className="hover:text-yellow-500 transition duration-300">
                                        <Icon className="w-8 h-8" />
                                    </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className="cards text-lg flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-4 mt-8 font-semibold">

                        

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