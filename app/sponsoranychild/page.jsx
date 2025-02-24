"use client";
import { useRef } from "react";
import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import FooterSection from "../../components/footer";
import HeaderSection from "../../components/header";
import SponsorSection from "../../components/sponsor";
import bannerImage from "../public/images/education1.jpg";
import PaginationControls from "../../components/PaginationControls";

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

export default function ProgramsPage({ searchParams }) {
  let id = "";

  const [allChildren, setAllChildren] = useState([]);
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

        const filteredData = data.filter(
          (item) => item._id === searchParams.id
        );

        setAllChildren(data);
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
        <HeaderSection />
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
        </div>

        <div className="flex flex-col gap-2 items-center">
          {entries.map((child) => (
            <div
              key={child._id}
              className="flex flex-col justify-center items-center gap-2"
            >
              <Image src={child.photo} width={300} height={300} />
              <div className="flex flex-col justify-start text-start">
                <p className="text-xl uppercase">Name: {child.name}</p>
                <p className="text-xl">Age: {child.age}</p>
                <p className="text-xl capitalize">
                  Level of need: {child.levelOfNeed}
                </p>
                <Link
                  href={`/sponsorchild/${(id = child._id)}`}
                  className="green-button text-xl hover:bg-green-600 mb-3"
                >
                  VIEW TO SPONSOR
                </Link>
              </div>
            </div>
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

      <SponsorSection />
            {/* Join us section ends here */}

       <FooterSection />
    </div>
  );
}
