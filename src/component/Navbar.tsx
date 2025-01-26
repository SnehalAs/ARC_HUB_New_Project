import  { useState } from "react";
import Benefits from "../component/Benefits";
import Blog from "../component/Blog";
import BlogSection from "../component/BlogPost";
import CaseStudies from "../component/CaseStudy";
import CertificationSection from "../component/CertificationSection";
import Companies from "../component/Companies";
import Footer from "../component/Footer";
import Hero from "../component/Hero";

import MetricsSection from "../component/StatSection";
import Testimoni from "../component/Testimonial";
import Unleash from "../component/Unleash";

const Navbar = () => {
  const [showServices, setShowServices] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showCommunity, setShowCommunity] = useState(false);

  return (
    <div className="font-sans">
      
      <nav className="bg-white shadow-md sticky top-0 z-50 flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-4 md:ml-24">
          <img src="assets/hubnexlogo.svg" alt="Logo" className="h-12 w-12" />
          <div className="hidden md:flex gap-16 text-black-600 md:ml-48">
            
            <div className="relative">
              <button
                className="hover:text-black flex items-center gap-2"
                onClick={() => setShowServices(!showServices)}
              >
                Explore Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {showServices && (
                <div className="absolute top-10 left-0 bg-white shadow-lg rounded-md p-4">
                  <a href="#service1" className="block hover:text-blue-600">
                    Service 1
                  </a>
                  <a href="#service2" className="block hover:text-blue-600">
                    Service 2
                  </a>
                  <a href="#service3" className="block hover:text-blue-600">
                    Service 3
                  </a>
                </div>
              )}
            </div>

          
            <div className="relative mr-6 md:mr-12">
              <button
                className="hover:text-black flex items-center gap-2"
                onClick={() => setShowResources(!showResources)}
              >
                Resources
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {showResources && (
                <div className="absolute top-10 left-0 bg-white shadow-lg rounded-md p-4">
                  <a href="#resource1" className="block hover:text-blue-600">
                    Resource 1
                  </a>
                  <a href="#resource2" className="block hover:text-blue-600">
                    Resource 2
                  </a>
                  <a href="#resource3" className="block hover:text-blue-600">
                    Resource 3
                  </a>
                </div>
              )}
            </div>

          
            <div className="relative mr-6 md:mr-12">
              <button
                className="hover:text-black flex items-center gap-2"
                onClick={() => setShowCommunity(!showCommunity)}
              >
                Community
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {showCommunity && (
                <div className="absolute top-10 left-0 bg-white shadow-lg rounded-md p-4">
                  <a href="#community1" className="block hover:text-blue-600">
                    Community 1
                  </a>
                  <a href="#community2" className="block hover:text-blue-600">
                    Community 2
                  </a>
                  <a href="#community3" className="block hover:text-blue-600">
                    Community 3
                  </a>
                </div>
              )}
            </div>

            <a href="#about" className="hover:text-black mr-6 md:mr-12">
              About Us
            </a>
          </div>
        </div>
        <button className="bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-white hover:text-blue-500 border border-blue-200 md:mr-18">
          Connect Sales →
        </button>
      </nav>
      <Hero/>
     <Companies/>
     <Benefits/>
     <Unleash/>
     <div className="py-10 bg-gray-50">
      <CaseStudies/>
    </div>
   
      <CertificationSection />
    
    <MetricsSection/>
     <Testimoni/>
     <Blog/>
     <BlogSection/>
     <Footer/>
    </div>
  );
};

export default Navbar;
