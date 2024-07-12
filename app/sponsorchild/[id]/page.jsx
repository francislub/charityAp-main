"use client";
import { useRef } from "react";
import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logoImage from "../../public/images/logo1.png";
import logoImage1 from "../../public/icons/face.png";
import logoImage2 from "../../public/icons/ins.png";
import logoImage3 from "../../public/icons/link.png";
import logoImage4 from "../../public/icons/twi.png";
import logoImage5 from "../../public/icons/you.png";
import bannerImage from "../../public/images/education1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import PaginationControls from "../../../components/PaginationControls";

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

export default function ProgramsPage({ searchParams }) {
  const aboutSectionRef = useRef(null);

  const [children, setChildren] = useState([]);
  const [allChildren, setAllChildren] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const response = await fetch(
          "https://nalongo-dashboard-server.onrender.com/api/v1/children",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        const filteredData = data.filter(item => item._id === searchParams.id);
        console.log(filteredData)
        setAllChildren(data); 
        setChildren(filteredData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchChildren();
  }, [searchParams]);

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "1";

  // mocked, skipped and limited in the real app
  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = allChildren.slice(start, end);
  const length = allChildren.length;

  return (
    <div className="scroll-smooth text-gray-800">
      <Image
        src={logoImage}
        height={90}
        alt="Foundation Logo"
        className="rounded-md"
      />
      <div className="" id="homeSection">
        <div className="row background-color button-container">
          <div className="col-lg-7">
            <Image
              src={bannerImage}
              alt="An image"
              width="800"
              className="educationImage"
            />
          </div>
          <div className="col-lg-5">
            <br />
            <h1>
              <span>Sponsor A Child</span>
            </h1>
            <h4 className="text-1g">
              Help us keep refugee children in School. Below is the cost of
              education per child per year:
            </h4>
            <br />
            <h5>
              <b>$200 :</b> Covers tuition per child per year{" "}
            </h5>
            <h5>
              <b>$50 :</b> Covers meals per child per year{" "}
            </h5>
            <h5>
              <b>$20 :</b> Covers books per child per year{" "}
            </h5>
            <h5>
              <b>$30 :</b> Covers school uniform per child{" "}
            </h5>
            <div className="buttonContainer">
              <div>
                <Link href="#aboutSection">
                  <button className="green-button">Sponsor A Child</button>
                </Link>
              </div>
              <div>
                <Link href="#">
                  <button className="blue-button">
                    Give to a different cause
                  </button>
                </Link>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
      {/* Home section ends here */}

      <section className="fullContainer -mt-20" id="aboutSection">
        <div className="container ">
          <h2 className="text-center">NALONGO FOUNDATION</h2>
          <h5 className="text-center">
            Choose below a child you would like to support
          </h5>
          <div className="space-y-20">
            <div className="row background-color row-cols-1 row-cols-sm-2">
              <div className="col">
                {error && <p>{error}</p>}
                {children.length > 0 && (
                  <div className="row">
                    {/* {children.map((child) => ( */}
                    <div className="col-5 flex flex-col lg:flex-row">
                      <br />
                      <img
                        src={children.photo}
                        alt={children[currentIndex].name}
                        className=""
                      />
                    </div>
                    <div className="col-7">
                      <br />
                      <h2>About</h2>
                      <h5>
                        <b>Name: </b>
                        {children[currentIndex].name}
                      </h5>
                      <h5>
                        <b>Student ID:</b>{" "}
                      </h5>
                      <h5>
                        <b>Gender:</b>{" "}
                      </h5>
                      <h5>
                        <b>Age:</b>{" "}
                      </h5>
                      <h5>
                        <b>Class:</b>{" "}
                      </h5>
                      <h5>
                        <b>Nationality:</b>{" "}
                      </h5>
                      <h5>
                        <b>Parent Status:</b>{" "}
                      </h5>
                      <h5>
                        <b>Level of Need: </b>
                        {children[currentIndex].levelOfNeed}
                      </h5>
                      <h5>
                        <b>Years left to graduate: </b>{" "}
                      </h5>
                    </div>
                  </div>
                )}
                {children.length > 0 && (
                  <div>
                    <h5>{children[currentIndex].description}</h5>
                  </div>
                )}

                <div className="button-container">
                  <button className="previous rounded">Previous</button>
                  <button className="next rounded">Next</button>

                  <Link href="/sponsor">
                    <button className="close rounded">Close</button>
                  </Link>
                </div>
              </div>
              <div className="col">
                {children.length > 0 && (
                  <h2>Sponsor {children[currentIndex].name}</h2>
                )}
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
                    {children.length > 0 && (
                      <h2>Sponsor {children[currentIndex].name}</h2>
                    )}
                    <h5>
                      <b>with</b>
                    </h5>

                    <div className="buttonContainer">
                      <div>
                        {/* <Link href='#'> */}
                        <h3>USD$ 50</h3>
                        <PayPalScriptProvider
                          options={{
                            clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
                          }}
                        >
                          {/* <PayPalScriptProvider > */}
                          <PayPalButtons
                            style={{
                              color: "blue",
                              layout: "horizontal",
                            }}
                            createOrder={async () => {
                              const res = await fetch("api/checkout", {
                                method: "POST",
                              });
                              const order = await res.json();
                              console.log(order);
                              return order.id;
                            }}
                            onApprove={(data, actions) => {
                              console.log(data);
                            }}
                            onCancel={(data) => {
                              console.log("Cancelled:", data);
                            }}
                          />
                        </PayPalScriptProvider>
                        {/* </Link> */}
                      </div>
                      <div>
                        {/* <Link href='#'> */}
                        <h3>USD$ 100</h3>
                        <PayPalScriptProvider
                          options={{
                            clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
                          }}
                        >
                          {/* <PayPalScriptProvider > */}
                          <PayPalButtons
                            style={{
                              color: "blue",
                              layout: "horizontal",
                            }}
                            createOrder={async () => {
                              const res = await fetch("api/checkout", {
                                method: "POST",
                              });
                              const order = await res.json();
                              console.log(order);
                              return order.id;
                            }}
                            onApprove={(data, actions) => {
                              console.log(data);
                            }}
                            onCancel={(data) => {
                              console.log("Cancelled:", data);
                            }}
                          />
                        </PayPalScriptProvider>
                        {/* </Link> */}
                      </div>
                      <div>
                        {/* <Link href='#'> */}
                        <h3>USD$ 150</h3>
                        <PayPalScriptProvider
                          options={{
                            clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
                          }}
                        >
                          {/* <PayPalScriptProvider > */}
                          <PayPalButtons
                            style={{
                              color: "blue",
                              layout: "horizontal",
                            }}
                            createOrder={async () => {
                              const res = await fetch("api/checkout", {
                                method: "POST",
                              });
                              const order = await res.json();
                              console.log(order);
                              return order.id;
                            }}
                            onApprove={(data, actions) => {
                              console.log(data);
                            }}
                            onCancel={(data) => {
                              console.log("Cancelled:", data);
                            }}
                          />
                        </PayPalScriptProvider>
                        {/* </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center">
          {entries.map((entry) => (
            <p key={entry}>{entry.name}</p>
          ))}

          <PaginationControls
            hasNextPage={end < allChildren.length}
            hasPrevPage={start > 0}
            childId={searchParams.id}
            length={length}
          />
        </div>
      </section>
      {/* About section ends here */}

      <footer className="">
        <div className="container flex md:flex-row md:justify-between md:space-x-10 space-y-5 flex-col">
          <div className="newsLetterContainer md:w-96">
            <Image
              src={logoImage}
              width={80}
              className="rounded-md pb-5"
              alt="Logo Image"
            />
            <p>
              For 15 years, we have committed to providing access to quality
              education for volunarable yet talented refugees. Donate today and
              help us create more refugee change makers like Ntakamaze
              Nziyonvira.
            </p>
            <input type="text" placeholder="Enter your email address" />
          </div>
          {/* NewsLetter container ends here */}

          <div className="linksContainer">
            <div className="title">Useful Links</div>
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
            <div className="title flex items-center">follow us</div>
            <div className="flex items-center gap-4">
              <Image
                src={logoImage1}
                width={50}
                className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-blue-500"
                alt="Logo Image"
              />
              <Image
                src={logoImage2}
                width={50}
                className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-green-500"
                alt="Logo Image"
              />
              <Image
                src={logoImage3}
                width={50}
                className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-red-500"
                alt="Logo Image"
              />
              <Image
                src={logoImage4}
                width={50}
                className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-purple-500"
                alt="Logo Image"
              />
              <Image
                src={logoImage5}
                width={50}
                className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-yellow-600"
                alt="Logo Image"
              />
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
  );
}
