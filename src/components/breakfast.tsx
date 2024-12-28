// home // LandingPage // food items images
import Image from "next/image";
export default function BreakFastSection() {
  return (
    <div className="flex flex-col justify-center items-center text-center mt-10">
      <h1 className="text-4xl font-bold uppercase ">Breakfast & Brunch</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8  p-4 text-center mt-10">
        {[
          {
            src: "/images/pumpkin-pancakes.jpg",
            alt: "Pumpkin Spice Pancakes with Vanila Cream Syrup",
            title: "Pumpkin Spice Pancakes with Vanila Cream Syrup",
          },
          {
            src: "/images/Homemade-Rolls.jpg",
            alt: "Homemade Orange Cinnamon Rolls with Orange Lcing",
            title: "Homemade Orange Cinnamon Rolls with Orange Lcing",
          },
          {
            src: "/images/banana-bread.jpg",
            alt: "How to make Bananna Bread French Toast",
            title: "How to make Bananna Bread French Toast",
          },

          {
            src: "/images/Hawaiian-Banana.jpg",
            alt: "The Best Hawaiian Banana Nut Bread with Pineapple",
            title: "The Best Hawaiian Banana Nut Bread with Pineapple",
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