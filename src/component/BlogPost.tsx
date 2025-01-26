import React from "react";

const Blgsection: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  px-4 ">
      <div className="bg-blue-600 text-white rounded-2xl shadow-md p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 max-w-7xl ">
       
        <div className="flex-1">
          <img
            src="assets\handshake.png"
            alt="Business handshake"
            className="rounded-xl shadow-lg md:h-120"
          />
        </div>

        
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Increase your sales revenue by 32% using Hubnex Labs.
          </h1>
          <p className="text-gray-200 text-lg mb-6 mt-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non
            sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque
            bibendum viverra tempus.
          </p>
          <div className="flex items-center mb-6 ">
         
            <div className="flex -space-x-3 ">
              <img
                src="assets\users1.jpeg"
                alt="User 1"
                className="w-10 h-10 rounded-full border-2 border-white-600"
              />
              <img
                src="assets\users2.jpeg"
                alt="User 2"
                className="w-10 h-10 rounded-full border-2 border-white-600"
              />
              <img
                src="assets\users3.jpeg"
                alt="User 3"
                className="w-10 h-10 rounded-full border-2 border-white-600"
              />
               <img
                src="assets\users4.jpeg"
                alt="User 4"
                className="w-10 h-10 rounded-full border-2 border-white-600"
              />
            </div>
           
            <p className="text-gray-200 text-2xl md:ml-4 ml-18 ">
              <span className="font-bold text-white  ">456+ Companies</span>
              <h1>joined to make their business success!</h1>
              
            </p>
          </div>

         
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-blue-600 font-semibold px-6 py-4 rounded-full shadow hover:bg-gray-100 transition">
              Join Us →
            </button>
            <button className="border border-white text-white font-semibold px-6 py-4 rounded-full hover:bg-white hover:text-blue-600 transition">
              Contact Us →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blgsection;
