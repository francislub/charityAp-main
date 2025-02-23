"use client"

import Link from "next/link"
import Image from "next/image"
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
import { MdKeyboardArrowRight } from "react-icons/md"
import logoImage from '../public/images/logo1.png'

export default function SponsorSection() {
  return (
    <section className="join" id="joinSection">
        <div className="container">
            <div className="joinTitle">
                SPONSOR A CHILD 
                {/* & <span>SAVE LIVES</span> */}
            </div>
            <p className="text-lg">
              Nalongo Lwokyaza Foundation is a family-based, non-profit organization established in 2020 in Jinja, Uganda, in memory of the late Nalongo Mukyala Lwokyaza, a wife, mother, educator, mentor - in order to keep her legacy.
            </p>
            <button className="joinNow rounded">
            <Link href="/joinus">JOIN US </Link>
            </button>
            <button className="adoptBtn rounded">
                <Link href="/sponsor">Sponsor A Child Now</Link>
            </button>
        </div>
            </section>
  )
}

