import React from 'react';
import shirt from '../assets/images/shrit.jpg';

const banners = [
    {
        title: "Hero Section",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate dignissim augue.",
        image: shirt, 
    }
];

export default function Banner() {
    return (
        // flex-col-reverse or flex-col
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 py-12 flex flex-col-reverse md:flex-row items-center justify-center gap-10 mt-10">
            {/* Left Text Section */}
            <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-4xl font-extrabold leading-tight text-gray-800 sm:text-5xl md:text-6xl">
                    {banners[0].title.split(" ")[0]}{" "}
                    <span className="text-blue-500">{banners[0].title.split(" ")[1]}</span>
                </h2>
                <p className="mt-4 text-lg text-gray-500 md:text-xl">
                    {banners[0].paragraph}
                </p>
                <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                    <button className="px-6 py-3 rounded-md font-semibold text-md bg-blue-500 text-white border-2 border-blue-500">
                        Get started
                    </button>
                    <button className="px-6 py-3 rounded-md font-semibold text-md bg-white text-blue-500 border-2 border-gray-500">
                        Watch a Demo
                    </button>
                </div>
            </div>

            {/* Right Image Section */}
            <div className="md:w-1/2 flex justify-center">
                <img src={banners[0].image} alt={banners[0].title} className="rounded-lg shadow-lg w-full max-w-lg" />
            </div>
        </div>
    );
}
