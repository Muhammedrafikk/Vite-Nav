import React from "react";

const CardList = () => {
  const cards = [
    {
      id: 1,
      title: "Modern Architecture",
      description: "Explore cutting-edge architectural designs",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      title: "Nature Photography",
      description: "Breathtaking landscapes and wildlife captures",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1574&q=80",
    },
    {
      id: 3,
      title: "Gourmet Cuisine",
      description: "Discover exquisite culinary creations",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },

  ];

  return (
    <div className="py-12 max-w-screen-xl mx-auto justify-items-center items-center">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-20 max-md:px-5">
          {cards.map((card) => (
            <div key={card.id} className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm mx-auto">
              <img src={card.image} alt={card.title} className="w-full h-auto object-cover" />
              <div className="p-6 text-center">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">{card.title}</h2>
                <p className="text-gray-600 mb-4">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;
