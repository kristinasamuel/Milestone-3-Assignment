// home // LandingPage // food items images
import Image from "next/image";
export default function BreadsSection() {
  return (
    <div className="flex flex-col justify-center items-center text-center mt-10">
      <h1 className="text-4xl font-bold uppercase ">Breads</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8  p-4 text-center mt-10">
        {[
          {
            src: "/images/cornbread.jpeg",
            alt: "Pumpkin Spice Cornbread",
            title: "Pumpkin Spice Cornbread",
          },
          {
            src: "/images/french-puff.jpg",
            alt: "French Breakfast Puffs",
            title: "French Breakfast Puffs",
          },
          {
            src: "/images/pumpkin-streusel.jpeg",
            alt: "Pumpkin Streusel Muffins with Vanilla Bean Glaze",
            title: "Pumpkin Streusel Muffins",
          },

          {
            src: "/images/amish.jpg",
            alt: "Amish Pumpkin Bread",
            title: "Amish Pumpkin Bread",
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
