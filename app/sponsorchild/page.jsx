'use client';
import { useRef } from 'react';
import React, { useState } from 'react';
// import { useClient } from 'next/react';
// import { Child } from '../../models/childModel';
import Link from "next/link";
// import { useEffect, useState } from 'react'; // Importing useEffect and useState directly
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logoImage from '../public/images/logo1.png'
import logoImage1 from '../public/icons/face.png'
import logoImage2 from '../public/icons/ins.png'
import logoImage3 from '../public/icons/link.png'
import logoImage4 from '../public/icons/twi.png'
import logoImage5 from '../public/icons/you.png'
import educationImage1 from '../public/images/programs/1.jpg';
import educationImage2 from '../public/images/programs/2.jpg';
import educationImage3 from '../public/images/programs/3.jpg';
import bannerImage from '../public/images/education1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { connect } from '../../dbConfig/dbConfig';

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

export default function ProgramsPage() {
    const aboutSectionRef = useRef(null);

// Mark the component as a client entry
// useClient();

const students = [
    {
        name: "Jemima Katabuka",
        studentId: "C13 - 2",
        gender: "Female",
        age: 18,
        class: 9,
        nationality: "Refugee",
        parentStatus: "Orphan",
        levelOfNeed: "High",
        yearsLeftToGraduate: -2,
        description: "Jemima came from DRC in 2019. She lost her Father in the war and came to Uganda with her mother. She had no shelter. She slept in the church. Few days later her mother also passed away and was left a total orphan without even a single family member or relative. A pastor of the church where the mother used to worship from provided her with shelter. Another church member offered to live with her. She took care of Jamima and her sisters for a short time and later left her and her sisters. katabuka Jemima is the elder sister aged of 15 among her 2 other sisters. They currently live with another kind hearted lady who offered to help as a guardian but is unable to pay their school fees.",
        image: educationImage1
    },
    {
        name: "Wivine Aifa",
        studentId: " C13 - 35",
        gender: "Female",
        age: 19,
        class: 9,
        nationality: "Refugee",
        parentStatus: "Both parents",
        levelOfNeed: "High",
        yearsLeftToGraduate: -2,
        description: "Aifa’s from a large family and the third child of eleven children. Her father works as a sales clerk at a drug store and her mother sells goods at the market.Aifa likes to sing and dance. She especially enjoys to dance and would love to promote her cultural dance. In the future, she wants to become a teacher and would love to teach children.",
        image: educationImage2
    },
    {
        name: "Alice Nyirahabimana",
        studentId: " C13 - 2",
        gender: "Female",
        age: 17,
        class: 9,
        nationality: "Refugee",
        parentStatus: "Both parents",
        levelOfNeed: "High",
        yearsLeftToGraduate: -2,
        description: "Alice is the fourth child born in a family of seven children. Her parents work on their small farm plot and struggle to find jobs to provide supplemental income to their family.Alice likes to sing and dance. However, her favorite activity is playing netball because she likes the exercise and wants to be a world class netballer. In the future, she wants to become a nurse and work in a hospital where she can help treat people.",
        image: educationImage3
    },
    {
        name: "Aminah Tushabe",
        studentId: " C13 - 3",
        gender: "Female",
        age: 21,
        class: 9,
        nationality: "Refugee",
        parentStatus: "Single mother",
        levelOfNeed: "High",
        yearsLeftToGraduate: -2,
        image: educationImage1,
        description: "Amina is Congolese and the only child of a single mother. Amina likes to dance and sing. She especially enjoys singing because the songs usually lifts up her spirits and makes her feel happier. She wants to become a doctor in the future so she can help her community and treat sick people."
    
    }
];
// const StudentProfile = () => {
    const [currentStudentIndex, setCurrentStudentIndex] = useState(0);

    const handleNext = () => {
        setCurrentStudentIndex((prevIndex) => (prevIndex + 1) % students.length);
    };

    const handlePrevious = () => {
        setCurrentStudentIndex((prevIndex) => (prevIndex - 1 + students.length) % students.length);
    };

    const currentStudent = students[currentStudentIndex];

    return (
        <div className="scroll-smooth text-gray-800">
            <Image 
                src={logoImage} 
                height={90} 
                alt="Foundation Logo" 
                className="rounded-md"/>
            <div className="" id="homeSection">

                <div className="row background-color button-container">
                    <div className="col-lg-7">
                      <Image src={bannerImage} alt="An image" width="800" className="educationImage"/>
                    </div>
                    <div className="col-lg-5">
                        <br />
                    <h1 ><span>Sponsor A Child</span></h1>
                        <h4 className="text-1g">
                          Help us keep refugee children in School. Below is the cost of education per child per year: 
                        </h4>
                        <br />
                        <h5><b>$200 :</b> Covers tuition per child per year </h5>
                        <h5><b>$50 :</b> Covers meals per child per year </h5>
                        <h5><b>$20 :</b> Covers books per child per year </h5>
                        <h5><b>$30 :</b> Covers school uniform per child </h5>
                        <div className="buttonContainer">
                            <div>
                                <Link href='#aboutSection'>
                                <button className="green-button">Sponsor A Child</button>
                                </Link>
                            </div>
                            <div>
                            <Link href='#'>
                                <button className="blue-button">Give to a different cause</button>
                                </Link>
                            </div>
                        </div>
                        <br /><br />
                    </div>
                </div>

            </div>
            {/* Home section ends here */}

            <section className="fullContainer -mt-20" id="aboutSection">
                <div className="container ">
                    <h2 className="text-center">
                        NALONGO FOUNDATION
                    </h2>
                    <h5 className="text-center">
                        Choose below a child you would like to support
                    </h5>
                    <div className="space-y-20">
                        <div className="row background-color row-cols-1 row-cols-sm-2">
                            <div className="col">
                                <div className='row'>
                                    <div className="col-5">
                                        <br />
                                        <Image className="" src={currentStudent.image} alt="Education Image" />
                                    </div>
                                    <div className="col-7">
                                        <br />
                                        <h2>About</h2>
                                        <h5><b>Name: </b>{currentStudent.name}</h5>
                                        <h5><b>Student ID:</b>  {currentStudent.studentId}</h5>
                                        <h5><b>Gender:</b> {currentStudent.gender}</h5>
                                        <h5><b>Age:</b> {currentStudent.age}</h5>
                                        <h5><b>Class:</b> {currentStudent.class}</h5>
                                        <h5><b>Nationality:</b> {currentStudent.nationality}</h5>
                                        <h5><b>Parent Status:</b> {currentStudent.parentStatus}</h5>
                                        <h5><b>Level of Need: </b>{currentStudent.levelOfNeed}</h5>
                                        <h5><b>Years left to graduate: </b>{currentStudent.yearsLeftToGraduate}</h5>
                                    </div>
                                </div>
                                <div>
                                    <h5>{currentStudent.description}</h5>
                                </div>

                                <div className="button-container">
                                <button className="previous rounded" onClick={handlePrevious}>Previous</button>
                                <button className="next rounded" onClick={handleNext}>Next</button>
                                    <Link href="/sponsor">
                                        <button className="close rounded" >
                                        Close
                                        </button>
                                    </Link>
                                    
                                </div>
                            </div>
                            <div className="col">
                                <h2>Sponsor {currentStudent.name}</h2>
                                <div className="frame">
                                    <div className="frame1 text-center">
                                        <div className="row background-color1">
                                            <div className="col-6">
                                               <h4>Choose amount</h4>
                                               
                                             <div className="col-6">
                                               {/* <h3>Choose amount</h3> */}
                                             </div>
                                        </div>
                                    </div>
                                        <h5><b>Sponsor this child</b></h5>
                                        <br/>
                                               <div className="buttonContainer">
                                                    <div>
                                                        <Link href='#'>
                                                        <button className="blue-button">USD$ 50</button>
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <Link href='#'>
                                                        <button className="blue-button">USD$ 100</button>
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <Link href='#'>
                                                        <button className="blue-button">USD$ 150</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                             {/* </div> */}
                                        {/* <div className="buttonContainer">
                                            <div>
                                                <Link href='#'>
                                                <button className="blue-button1">Next</button>
                                                </Link>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About section ends here */}

            <footer className="">
                <div className="container flex md:flex-row md:justify-between md:space-x-10 space-y-5 flex-col">

                    <div className="newsLetterContainer md:w-96">
                        <Image src={logoImage} 
                        width={80}
                        className="rounded-md pb-5" 
                        alt="Logo Image"/>
                        <p>
                            For 15 years, we have committed to providing access to quality education for volunarable yet talented refugees. Donate today and help us create more refugee change makers like Ntakamaze Nziyonvira.
                        </p>
                        <input 
                            type="text" 
                            placeholder="Enter your email address" />
                    </div>
                    {/* NewsLetter container ends here */}

                    <div className="linksContainer">
                        <div className="title">
                            Useful Links
                        </div>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="link">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="link">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/programs" className="link">
                                    Programs
                                </Link>
                            </li>
                            <li>
                                <Link href="/education" className="link">
                                    Education
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="link">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/joinus" className="link">
                                    Join Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* LinksContainer ends here */}

                    <div className="connectContainer space-y-6">
                        <div className="title flex items-center">
                            follow us 
                            
                        </div>
                        <div className="flex items-center gap-4">
                            <Image src={logoImage1} width={50} className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-blue-500" alt="Logo Image"/>
                            <Image src={logoImage2} width={50} className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-green-500" alt="Logo Image"/>
                            <Image src={logoImage3} width={50} className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-red-500" alt="Logo Image"/>
                            <Image src={logoImage4} width={50} className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-purple-500" alt="Logo Image"/>
                            <Image src={logoImage5} width={50} className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-yellow-600" alt="Logo Image"/>
                        </div>




                        <span>Mailing address:</span>
                        <br />
                        <span>Phone:</span>
                        <span>Email:</span> info@abcde.org
                        <br />
                        <p>
                            Contact - Uganda <br />
                        </p>
                        <p>
                            Contact - Denmark <br />
                        </p>
                        <p>
                            Contact - Switzerland <br />
                        </p>
                        <span>Mailing address:</span>
                        <br />
                        <span>Physical address:</span>
                        <br />
                        <span>Phone:</span> +256-
                        <span>Email:</span> info@abced.org
                    </div>
                    {/* ConnectContainer ends here */}

                </div>
            </footer>

        </div>
    )
}
