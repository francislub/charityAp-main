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
            <HeaderSection />
                {/* Header ends here */}

                <div className="container space-y-10">
                    <h1>Our Impact</h1>
                    <p className="text-lg">
                    </p>
                </div>
            </div>
            {/* Home section ends here */}

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