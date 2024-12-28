// Home // hero section of the landing page
"use client"
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className=" flex flex-col items-center justify-center md:p-12 md:m-12 mt-10">
       <div className=" p-4  text-center">
         <h2 className="text-4xl uppercase font-bold">
           Reliable recipes from a chef's kitchen.
         </h2>
         <h3 className="mt-10 text-3xl uppercase font-semibold">
           {" "}
           New & Trending
        </h3>
       </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gp-0  p-4 text-center">

        {[
          {
            src: "/images/savory.jpg",
            alt: "Savory Pumpkin Sausage Gnocchi",
            title: "Pumpkin Gnocchi",
          },
          {
            src: "/images/cocktail.jpg",
            alt: "Classic Sidecar Cocktail",
            title: "Classic Sidecar Cocktail",
          },
          {
            src: "/images/cups.jpg",
            alt: "Charcuterie Cups",
            title: "Charcuterie Cups",
          },
          {
            src: "/images/shredded.jpg",
            alt: "Shredded Beef Tacos with Avocado and Lime",
            title: "Shredded Beef Tacos",
          },
          {
            src: "/images/creamyfresh.jpg",
            alt: "Creamy Fresh Corn Risotto",
            title: "Fresh Corn Risotto",
          },
          {
            src: "/images/sheetpan.jpeg",
            alt: "Sheet Pan Sweet Potatoes, Apples and Brussels Sprouts",
            title: "Sweet Potatoes",
          },
          {
            src: "/images/Miso.jpeg",
            alt: "Easy Miso Glazed Salmon",
            title: "Miso Glazed Salmon",
          },
          {
            src: "/images/pumpkin.jpeg",
            alt: "Hearty Guinness Pumpkin Chili",
            title: "Hearty Pumpkin Chili",
          },

        ] .map((item,index) =>(
          <div key={index} className="flex flex-col items-center justify-center " > 
            <Image
            src={item.src}
            alt="item.alt"
            height={250}
            width={250}
            className="transition transform hover:scale-105 ease-in-out"
            
            />
            <p className="text-xl text-red-400 hover:text-teal-500 text-center mt-3"> 
              {item.title}
            </p>
           </div>
        ))}

       </div>
       </div>
  )
}
