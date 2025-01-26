import React, { useEffect, useState } from "react";

const Unleash: React.FC = () => {
 
  const [integrations, setIntegrations] = useState(0);
  const [roi, setRoi] = useState(0);

  
  useEffect(() => {
    const incrementValues = () => {
      let integrationsStart = 0;
      let roiStart = 0;

      const interval = setInterval(() => {
        if (integrationsStart < 40) integrationsStart += 2;
        if (roiStart < 600) roiStart += 30;

        setIntegrations(integrationsStart);
        setRoi(roiStart);

        if (integrationsStart >= 40 && roiStart >= 600) {
          clearInterval(interval);
        }
      }, 50); 
    };

    incrementValues();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6">
      <section className="p-8 w-full max-w-7xl flex flex-col md:flex-row items-center md:justify-between gap-12">
       
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Unleash the full power of <span>data</span>
          </h1>
          <p className="text-gray-700 text-2xl mb-6">
            We guide global businesses through the challenges of developing purposeful
            technology that addresses their needs and advances their growth. We have
            established offices in India, the UAE, and the USA.
          </p>
          <div className="flex md:flex-wrap md:gap-6 mb-6">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-blue-600 ">
                {integrations}+
              </h2>
              <p className="text-gray-600">Integrations</p>
            </div>
            <div className="text-center md:ml-16">
              <h2 className="text-4xl font-bold text-blue-600 ">
                {roi}%
              </h2>
              <p className="text-gray-600">Return on investment</p>
            </div>
            <div className="text-center md:ml-16">
              <h2 className="text-4xl font-bold text-blue-600 ">
                4k+
              </h2>
              <p className="text-gray-600">Global customers</p>
            </div>
          </div>
          <div className="text-center mt-6">
  <div className="flex items-center justify-center gap-4 flex-nowrap md:mr-32">
    <p className="text-gray-600 whitespace-nowrap">Featured in</p>
    <img
      src="assets/publish1.svg"
      alt="Dailyhunt"
      className="h-6"
    />
    <img
      src="assets/publish2.svg"
      alt="TOI"
      className="h-6"
    />
    <img
      src="assets/publish3.svg"
      alt="Hindustan Times"
      className="h-6"
    />
  </div>
</div>

        </div>

    
        <div className="flex-1 flex items-center justify-center">
          <img
            src="assets/globe.svg" 
            alt="Global network"
            className="w-120 h-120"
          />
        </div>
      </section>
    </div>
  );
};

export default Unleash;
