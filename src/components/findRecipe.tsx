// home // LandingPage // food items images
"use client";
import Image from "next/image";
export default function FindRecipe() {
  return (
    <div className="flex flex-col justify-center items-center text-center mt-10">
      <h1 className="text-3xl font-bold uppercase ">Find Recipes For..</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gp-0  p-4 text-center mt-10">
        {[
          {
            src: "/images/appetizers.jpg",
            alt: "Appetizers",
            title: "Appetizers",
          },
          {
            src: "/images/breads.jpg",
            alt: "Breads",
            title: "Breads",
          },
          {
            src: "/images/desserts.jpg",
            alt: "Desserts",
            title: "Desserts",
          },
          {
            src: "/images/drinks.jpg",
            alt: "Drinks",
            title: "Drinks",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center "
          >
            <Image
              src={item.src}
              alt="item.alt"
              height={250}
              width={250}
              className="rounded-full transition transform hover:scale-105 ease-in-out"
            />
            <p className="text-xl text-red-400 hover:text-teal-500 text-center mt-3">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
