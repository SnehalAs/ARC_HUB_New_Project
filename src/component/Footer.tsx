import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-16">
      <div className="container mx-auto px-6 py-8 md:flex md:justify-center gap-4 ">
        <div className="col-span-1 max-w-90 mt-20">
          <h2 className="font-bold text-xl mb-4 ">About Hubnex Labs</h2>
          <p className=" ">
            We are a leading IT consultancy with expertise in innovative
            solutions for modern challenges. Our client-centric approach
            enables us to design tailored solutions that keep businesses ahead
            in the ever-evolving digital landscape.
          </p>
        </div>
        <div className="md:ml-35 mt-20">
          <h2 className="font-bold text-lg mb-4">Company</h2>
          <ul>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">For Partners</a></li>
          </ul>
        </div>
        <div className="md:ml-20 mt-20">
          <h2 className="font-bold text-lg mb-4">Help</h2>
          <ul>
            <li><a href="#" className="hover:underline">Grievance Redressal Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="md:ml-20 mt-20">
          <h2 className="font-bold text-lg mb-4">Resources</h2>
          <ul>
            <li><a href="#" className="hover:underline">Blogs</a></li>
            <li><a href="#" className="hover:underline">Case Studies</a></li>
            <li><a href="#" className="hover:underline">Insights</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4 text-center mx-38"></div>
        <div className="flex justify-center  text-center space-x-4 mb-2">
          <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        
        <div className="flex space-x-4 text-2xl ">
          <FaTwitter className="cursor-pointer hover:text-blue-400 h-8 w-8" />
          <FaFacebookF className="cursor-pointer hover:text-blue-700 h-8 w-8" />
          <FaInstagram className="cursor-pointer hover:text-pink-500 h-8 w-8" />
          <FaGithub className="cursor-pointer hover:text-gray-900 h-8 w-8" />
          <p className="text-sm md:ml-180">&copy; 2025, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

