// home // LandingPage // food items images
import Image from "next/image";
export default function AppetizersSection() {
  return (
    <div className="flex flex-col justify-center items-center text-center mt-10">
      <h1 className="text-4xl font-bold uppercase ">Appetizers</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8  p-4 text-center mt-10">
        {[
          {
            src: "/images/crabs.jpg",
            alt: "Crab Cakes With Lemon Dill Sauce",
            title: "Crab Cakes With Lemon Dill Sauce",
          },

          {
            src: "/images/stuffed mushrooms.jpeg",
            alt: "The Best Crab Stuffed Mushrooms Recipe",
            title: "The Best Crab Stuffed Mushrooms Recipe",
          },
          {
            src: "/images/charcuterie.jpg",
            alt: "How to Make an Epic Charcuterie Board",
            title: "How to Make an Epic Charcuterie Board",
          },
          {
            src: "/images/cranberry.jpg",
            alt: "Cranberry Crostini with Fig Jam,Bacon,and Bleu Cheese",
            title: "Cranberry Crostini with Fig Jam,Bacon,and Bleu Cheese",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center md:gap-8"
          >
            <Image
              src={item.src}
              alt="item.alt"
              height={250}
              width={250}
              className=" rounded-3xl transition transform hover:scale-105 ease-in-out"
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
