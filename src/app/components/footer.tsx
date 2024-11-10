import Link from "next/link";
import {  FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"; // Importing icons from react-icons library

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto flex flex-col items-center space-y-6 md:flex-row md:justify-between md:items-center md:space-y-0">
        
        {/* Logo or Brand Name */}
        <div className="text-2xl font-semibold">
          <Link href="/">MyBrand</Link>
        </div>
        
        {/* Navigation Links */}
        <ul className="flex space-x-6 text-gray-400">
            
          <li className="hover:text-white transition duration-300">
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
        </ul>
        
        {/* Social Media Icons */}
        <div className="flex space-x-4 text-gray-400">
          
          <a href="https://www.linkedin.com/in/ayesha-aaqil-6072052b4" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
            <FaLinkedin size={20} />
          </a>
          
          <a href="https://www.facebook.com/share/19fdSRkzxN/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
            <FaFacebook size={20} />
            </a>
            
          <a href="https://www.instagram.com/ay_esha8459?igsh=MXc0bnltdjM0YXhndQ==" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
            <FaInstagram size={20} />
            </a>
      </div>

      {/* Bottom Text */}
      <div className="mt-6 text-center text-sm text-gray-500">
        &copy; 2024 Ayesha Aaqil. All Rights Reserved.
      </div>
      </div>
    </footer>

  );
}
