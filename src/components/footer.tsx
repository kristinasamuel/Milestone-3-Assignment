// Home // Footer section
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

export default function FooterSection() {
  return (
    <div className="bg-neutral-100  ">
      <div className="flex items-center justify-center">
        <Link href={"/"}>
          <button className="flex text-red-400 text-xl mt-10  text-red border-2 border-gray-300 rounded-2xl uppercase text-center p-2">
            <FaArrowUp className="mr-3 h-6" /> Back To Top
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4  mt-12 text-center">
        <div>
          <h1 className="text-3xl uppercase font-semibold">Quick Links</h1>
          <ul className="uppercase text-red-400 text-xl space-y-3 mt-5 ">
            <li className="hover:text-teal-500 hover:underline">About</li>
            <li className="hover:text-teal-500 hover:underline">Contact</li>
            <li className="hover:text-teal-500 hover:underline">Shop</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl uppercase font-semibold mt-5 md:mt-0">
            Social Media
          </h2>
          <ul className="uppercase text-red-400 text-xl space-y-3 mt-5">
            <li className="hover:text-teal-500 hover:underline">Linkdin</li>
            <li className="hover:text-teal-500 hover:underline">Github</li>
          </ul>
        </div>
        <div>
          <h3 className="text-3xl uppercase font-semibold mt-5 md:mt-0">
            Contact Information
          </h3>
          <p className="text-red mt-5 text-xl text-red-400 hover:text-teal-500 hover:underline">
            {" "}
            Email: karistina97@gmail.com
          </p>
        </div>
      </div>
      <div className="bg-neutral-100 text-center mt-5">
        <p className="p-2 uppercase font-serif"> copyright © 2024 Kristina </p>
      </div>
    </div>
  );
}
