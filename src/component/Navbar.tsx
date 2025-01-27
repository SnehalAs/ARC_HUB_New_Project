import { useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans w-full">
      <nav className="shadow-md sticky top-0 z-50 w-full bg-white py-2">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-8">
          <img src="assets/hubnexlogo.svg" alt="Logo" className="h-12 w-12" />

          <div className="flex items-center lg:hidden gap-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-white hover:text-blue-500 border border-blue-200">
              Contact Sales →
            </button>

            <button
              className="text-gray-600 hover:text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex gap-16 text-black-500   items-center">
            <div className="relative text-md">
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
                <div className="absolute top-10 left-0 bg-white shadow-lg rounded-md p-4 ">
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

            <div className="relative text-md">
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

            <div className="relative text-md">
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

            <a href="#about" className="hover:text-black text-md">
              About Us
            </a>
          </div>

          <button className="hidden lg:block bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-white hover:text-blue-500 border border-blue-200">
            Contact Sales →
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-md mt-2 p-4">
            <a href="#services" className="block py-2 hover:text-blue-600">
              Explore Services
            </a>
            <a href="#resources" className="block py-2 hover:text-blue-600">
              Resources
            </a>
            <a href="#community" className="block py-2 hover:text-blue-600">
              Community
            </a>
            <a href="#about" className="block py-2 hover:text-blue-600">
              About Us
            </a>
          </div>
        )}
      </nav>

      <Hero />
      <Companies />
      <Benefits />
      <Unleash />
      <div className="py-10 bg-gray-50">
        <CaseStudies />
      </div>
      <CertificationSection />
      <MetricsSection />
      <Testimoni />
      <Blog />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Navbar;
