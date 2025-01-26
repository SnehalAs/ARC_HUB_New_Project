import React from "react";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  description: string;
  imageUrl: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Bill Walsh leadership lessons",
    author: "Alex Whitten",
    date: "17 Jan 2022",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    imageUrl: "assets/b1.jpeg",
  },
  {
    id: 2,
    title: "PM mental models",
    author: "Demi Wilkinson",
    date: "16 Jan 2022",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    imageUrl: "assets/b2.jpeg",
  },
  {
    id: 3,
    title: "What is Wireframing?",
    author: "Candice Wu",
    date: "15 Jan 2022",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    imageUrl: "assets/b3.jpeg",
  },
];

const CustomPrevArrow: React.FC<CustomArrowProps> = (props) => (
  <button
    {...props}
    className="bg-white p-2 rounded-full shadow-md absolute top-1/2 -left-6 transform -translate-y-1/2 z-10"
  >
    <FaChevronLeft className="text-black" />
  </button>
);

const CustomNextArrow: React.FC<CustomArrowProps> = (props) => (
  <button
    {...props}
    className="bg-white p-2 rounded-full shadow-md absolute top-1/2 -right-6 transform -translate-y-1/2 z-10"
  >
    <FaChevronRight className="text-black" />
  </button>
);

const Blog: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 mt-30">
      <div className="max-w-5xl mx-auto relative">
       
        <div className="text-left mb-10">
          <h2 className="text-4xl font-bold text-gray-900">
            Blog posts for the community
          </h2>
          <p className="text-gray-600 mt-8 text-xl">
            Stay updated with the latest insights and ideas from our authors.
          </p>
        </div>

        
        <Slider {...settings} className="mb-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="overflow-hidden p-4">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-60 object-cover rounded-lg"
              />
              <div className="mt-4">
                <div className="text-sm text-blue-600 ">
                  {post.author} &middot; {post.date}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mt-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-lg mt-3">{post.description}</p>
                <a
                  href="#"
                  className="text-blue-600 text-sm font-semibold mt-4 inline-flex items-center"
                >
                  Read More
                  <span className="ml-1">&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blog;
