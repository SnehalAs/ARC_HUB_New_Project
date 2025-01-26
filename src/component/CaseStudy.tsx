import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CaseStudyCardProps {
  image: string;
  title: string;
  description: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mx-2">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col justify-between h-full">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
          Read Full Article &gt;
        </a>
      </div>
    </div>
  );
};

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      image: "assets/business1.svg", 
      title: "What is Ad Exposure and Why It Matters?",
      description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.",
    },
    {
      image: "assets/business1.svg", 
      title: "The Impact of Social Media Advertising",
      description: "Exploring how social media ads affect consumer behavior and engagement.",
    },
    {
      image: "assets/business1.svg", 
      title: "What is Ad Exposure and Why It Matters?",
      description: "A look at optimizing your ad campaigns for the best returns on investment.",
    },
    {
      image: "assets/business1.svg", 
      title: "Leveraging Data for Better Ad Results",
      description: "How data-driven decisions improve the effectiveness of ad campaigns.",
    },
    {
      image: "assets/business1.svg",
      title: "Understanding Consumer Behavior in Advertising",
      description: "The psychology behind consumer interactions with ads.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        
        <div className="col-span-2">
          <h2 className="text-4xl font-bold mb-4">Case studies for the community</h2>
          <p className="text-gray-600">
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum..
          </p>
        </div>
        
        <div className="col-span-3">
          <Slider {...settings}>
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={index}
                image={study.image}
                title={study.title}
                description={study.description}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

