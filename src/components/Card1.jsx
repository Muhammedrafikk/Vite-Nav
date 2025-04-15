import React from 'react';

import image1 from '../assets/images/shrit.jpg';
import image2 from '../assets/images/shrit.jpg';
import image3 from '../assets/images/shrit.jpg';

export default function Card1() {
   const cards = [
      {
         id: 1,
         title: "Laptop 1",
         description: "High performance laptop with 16GB RAM and 512GB SSD.",
         imageUrl: image1,
      },
      {
         id: 2,
         title: "Laptop 2",
         description: "Lightweight laptop with 8GB RAM and 256GB SSD.",
         imageUrl: image2,
      },
      {
         id: 3,
         title: "Laptop 3",
         description: "Gaming laptop with 32GB RAM and 1TB SSD.",
         imageUrl: image3,
      },
      {
         id: 3,
         title: "Laptop 3",
         description: "Gaming laptop with 32GB RAM and 1TB SSD.",
         imageUrl: image3,
      },
   ];

   return (
      // <div className="container mx-auto py-5 mt-15">
      //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-3">
                  
      //               {cards.map(card => (
      //                   <div key={card.id} className="bg-gray-300 p-6 text-center rounded-lg shadow-md mb-2 max-w-lg mx-auto">
      <div className="mx-auto max-w-screen-xl py-5 mt-15">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-3 sm:px-10 md:px-30 lg:px-12 xl:px-26">
            {cards.map(card => (
               <div key={card.id} className="bg-gray-300 p-6 text-center rounded-lg shadow-md mb-2 max-w-sm mx-auto">
                  
                  <img src={card.imageUrl} alt={card.title} className="mx-auto pb-3 rounded w-full h-auto object-cover" />
                  <h1 className="text-2xl font-bold pb-1">{card.title}</h1>
                  <p className="pb-2">{card.description}</p>
                  <div className="flex justify-center">
                     <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 text-sm px-5 py-2.5 rounded-lg">
                        Default
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
