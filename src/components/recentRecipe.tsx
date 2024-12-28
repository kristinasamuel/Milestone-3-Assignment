// Home // Landing page 
import Image from "next/image";
export default function RecentRecipeSection() {
  return (
    <div className="flex flex-col justify-center items-center text-center mt-10">
      <h1 className="text-3xl md:text-5xl font-bold uppercase ">
        Recent Recipes
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8  p-4 text-center mt-10">
        {[
          {
            src: "/images/creamy-chicken.jpg",
            alt: "Creamy Chicken Enchilada Soup",
            title: "Creamy Chicken Enchilada Soup",
          },
          {
            src: "/images/hot-buttered-rum.jpg",
            alt: "Classic Hot Buttered Rum",
            title: "Classic Hot Buttered Rum",
          },
          {
            src: "/images/peanut-butter-cup.jpeg",
            alt: "Reese's Peanut Butter Cup Rice Krispie Treats",
            title: "Reese's Peanut Butter Cup Rice Krispie Treats ",
          },

          {
            src: "/images/rustic-garlic-chicken.jpg",
            alt: "Rustic Creamy Garlic Chicken",
            title: "Rustic Creamy Garlic Chicken",
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
              className=" rounded transition transform hover:scale-105 ease-in-out"
            />
            <div className="mt-2 text-center">
              <p className="text-[18px] text-red-400 hover:text-teal-500 text-center w-full md:w-[170px]">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
