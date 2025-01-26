import React, { useState } from "react";

interface Testimonial {
  quote: string;
  details: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "People now recognise that having a good performance conversation means that something happens as a result.",
    details:
      "With Landingfolio, the design team can now build design which identifies employees' career aspirations and goals and from which we approach managers and check to see what is happening.",
    author: "Rajat Shina",
    role: "Product Manager, Sisyphus",
  },
  {
    quote:
      "This platform made it incredibly easy to streamline our processes and increase collaboration.",
    details:
      "We've seen significant improvements in our workflows and have been able to deliver projects faster and with more efficiency.",
    author: "Anita Gupta",
    role: "CTO, TechFlow",
  },
];

const Testimoni: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { quote, details, author, role } = testimonials[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-5xl p-8 text-center">
        <h2
          className="text-[36px] font-semibold text-gray-900 mb-8 font-inter leading-[44px] tracking-[-0.02em] text-center "
          style={{
            textDecorationSkipInk: "none",
          }}
        >
          Driving results for leaders across the globe
        </h2>
        <p className="text-4xl font-semibold text-black  mb-8 max-w-230">“{quote}”</p>
        <p className="text-gray-500 text-lg mb-8  max-w-2xl md:ml-30">{details}</p>
        <div>
          <h4 className="text-black-500 font-semibold text-2xl ">{author}</h4>
          <p className="text-gray-500 text-xl">{role}</p>
        </div>

       
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={handlePrevious}
            className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-300"
          >
            &lt;
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-gray-900" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-300"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
