import shirt from '../assets/images/shrit.jpg'

// 1 image , 2 next card , 3 continerfluid card 


export default function Card() {
   const cards = [
       {
          id: 1,
          title: "No Name Campany",
          description: "Card Description 1",
       },
       {
          id: 2,
          title: "Card Title 2",
          description: "Card Description 2",
       },
       {
          id: 3,
          title: "Card Title 3",
          description: "Card Description 3",
       },
       {
         id: 4,
         title: "Card Title 4",
         description: "Card Description 4",
      },
   ];
   return (
      <div className="w-full px-4">
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cards.map((card) => (
               <div key={card.id} className="bg-blue-500 text-white rounded-lg p-4 mb-4 max-w-sm mx-auto">
                  <div className="w-full mx-auto flex items-center justify-center">
                     <img src={shirt} alt="shirt" className="mx-auto max-w-full h-auto" />
                  </div>
                  <h2 className='font-bold uppercase mt-2'>{card.title}</h2>
                  <p>{card.description}</p>
               </div>
            ))}
         </div>
      </div>
   );
 }

 