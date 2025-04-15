import React from "react";
import shirt from '../assets/images/shrit.jpg';

const banners = [
    {
        title: "Hero Section",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate dignissim augue.",
        image: shirt, 
    }
];

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center max-w-screen-2xl px-4 mx-auto md:flex-row sm:px-6 p-10 justify-center">
      {banners.map((banner, index) => (
        <React.Fragment key={index}>
          {/* Left Content */}
          <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-800 sm:py-5">{banner.title}</h1>
              <p className="text-xl mt-1">{banner.paragraph}</p>
              <div className="mt-5 flex flex-col sm:flex-row justify-center md:justify-start">
                <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-blue-500 text-white border-2 border-blue-500">Get started</button>
                <button className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-white text-blue-500 border-2 border-gray-500">Watch a Demo</button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full p-3 lg:w-md flex justify-center items-center max-lg:w-auto">
              <img 
                src={banner.image} 
                alt={banner.title} 
                className="rounded-lg shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default HeroSection;