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

export default function FooterSection() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
      <div className="container mx-auto px-6">
        {/* Logo and Mission Statement */}
        <div className="text-center mb-12">
          
          <Link href="/">
              <Image 
              src={logoImage} 
              height={200} 
              width={100} 
              alt="Foundation Logo" 
              className="mx-auto mb-6"
              />
          </Link>
          <h2 className="text-2xl font-bold mb-4">Empowering Refugees Through Education</h2>
          <p className="text-lg max-w-2xl mx-auto">
            For 15 years, we have committed to providing access to quality education for vulnerable yet talented
            refugees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-yellow-500">About Us</h3>
            <p className="mb-4">
              We are dedicated to creating opportunities for refugee students to access higher education and become
              changemakers in their communities.
            </p>
            <Link
              href="/about"
              className="text-yellow-500 hover:text-yellow-400 transition duration-300 flex items-center"
            >
              Learn More <MdKeyboardArrowRight className="ml-1" />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-yellow-500">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Programs", "Education", "Gallery", "Join Us", "Donate"].map((item, index) => (
                <li key={index}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "")}`}
                    className="hover:text-yellow-500 transition duration-300 flex items-center"
                  >
                    <MdKeyboardArrowRight className="mr-2" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-yellow-500">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-yellow-500" />
                <span>123 Education St, Kampala, Uganda</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-yellow-500" />
                <span>+256 XXX XXX XXX</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-yellow-500" />
                <a href="mailto:info@example.org" className="hover:text-yellow-500 transition duration-300">
                  info@example.org
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-yellow-500">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest news and events. Subscribe to our newsletter.</p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="p-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="bg-yellow-500 text-black font-semibold py-2 px-4 rounded-md hover:bg-yellow-400 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
          <div className="flex justify-center space-x-4">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube].map((Icon, index) => (
              <a key={index} href="#" className="hover:text-yellow-500 transition duration-300">
                <Icon className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Nalongo Lwokyaza Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

