import React, { useEffect, useState } from "react";

const MetricsSection: React.FC = () => {
 
  const [experience, setExperience] = useState(0);
  const [successRate, setSuccessRate] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);

  useEffect(() => {
    const incrementValues = () => {
      let experienceStart = 0;
      let successRateStart = 0;
      let projectsCompletedStart = 0;

      const interval = setInterval(() => {
        if (experienceStart < 6) experienceStart += 1;
        if (successRateStart < 4.8) successRateStart = parseFloat((successRateStart + 0.1).toFixed(1));
        if (projectsCompletedStart < 60) projectsCompletedStart += 3;

        setExperience(experienceStart);
        setSuccessRate(successRateStart);
        setProjectsCompleted(projectsCompletedStart);

        if (
          experienceStart >= 6 &&
          successRateStart >= 4.8 &&
          projectsCompletedStart >= 60
        ) {
          clearInterval(interval);
        }
      }, 50); 
    };

    incrementValues();
  }, []);

  return (
    <section className="text-center py-16 md:max-w-6xl md:ml-40">
      <h1 className="text-4xl font-bold text-gray-900">
        We are big enough to deliver and small enough to care
      </h1>
      <p className="mt-4 text-lg text-gray-600">Teams large and small rely on Hubnex Labs</p>
      <button className="mt-6 px-6 py-2 bg-white text-black rounded-lg border border-black-200 hover:bg-white-700">
        Connect Sales →
      </button>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-30 mb-60">
        <div className="mb-8">
          <h2 className="text-5xl font-bold text-blue-600">{experience}+</h2>
          <p className="mt-2 text-black font-bold text-3xl mb-8">Years of experience</p>
          <p className="text-lg text-gray-900 text-left md:ml-18">
            We’ve helped over 4,000 amazing global companies.
          </p>
        </div>
        <div>
          <h2 className="text-5xl font-bold text-blue-600">{successRate.toFixed(1)}/5</h2>
          <p className="mt-2 text-black font-bold text-3xl mb-8">Success rate</p>
          <p className="text-lg text-gray-900 text-left md:ml-18">
            We’ve helped over 4,000 amazing global companies.
          </p>
        </div>
        <div>
          <h2 className="text-5xl font-bold text-blue-600">30M+</h2>
          <p className="mt-2 text-black font-bold text-2xl mb-8">Global users</p>
          <p className="text-lg text-gray-900 text-left md:ml-20">
            We’ve helped over 4,000 amazing global companies.
          </p>
        </div>
        <div>
          <h2 className="text-5xl font-bold text-blue-600">{projectsCompleted}+</h2>
          <p className="mt-2 text-black font-bold text-3xl mb-8">Projects completed</p>
          <p className="text-lg text-gray-900 text-left md:ml-20 max-w-60">
            We’ve helped over 4,000 amazing global companies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
