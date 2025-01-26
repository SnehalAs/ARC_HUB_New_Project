import React from "react";

const CertificationSection: React.FC = () => {
  return (
    <section className="bg-white py-12 mt-20">
      <div className="container mx-auto px-6 text-center">
      
        <div className="flex justify-center items-center space-x-8 mb-6">
          <div className="flex flex-col items-center md:mr-36">
            <img
              src="assets\aws.png" 
              alt="AWS Certified"
              className="h-25 w-25 mb-2"
            />
            <p className="text-sm text-gray-900">AWS Certified</p>
          </div>
          <div className="flex flex-col items-center md:mr-36">
            <img
              src="assets\cisco.png" 
              alt="CCNA"
              className="h-25 w-25 mb-2"
            />
            <p className="text-sm text-gray-600">CCNA</p>
          </div>
          <div className="flex flex-col items-center md:ml-12">
            <img
              src="assets\ISO.jpeg" 
              alt="ISO Certified"
              className="h-25 w-25 mb-2"
            />
            <p className="text-sm text-gray-600">ISO 9001 Certified  (Coming Soon)</p>
          </div>
        </div>

      
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Start building high performing <br />
          website & grow your business fast.
        </h2>
        <div className="flex justify-center items-center space-x-4 mb-4">
          <div className="flex items-center space-x-2">
            
            <div className="flex -space-x-3">
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
            <p className="text-black-600  ">
              <p className="md:mr-32 text-md font-bold">456+ Companies </p>
              <p>joined to make their business success!</p>
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center mb-6">
          <p className="text-yellow-500 text-xl">⭐⭐⭐⭐⭐</p>
          <p className="text-gray-600 text-sm ml-2">(4.5 from 200+ reviews)</p>
        </div>

        <a
          href="#"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-white hover:text-blue-500 border border-blue-200"
        >
          Connect Sales →
        </a>
      </div>
    </section>
  );
};

export default CertificationSection;
