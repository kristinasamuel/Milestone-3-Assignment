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
          <h1 className="text-[28px] md:text-3xl lg:text-3xl uppercase font-semibold">
            Quick Links
          </h1>
          <ul className="uppercase text-red-400 text-xl gap-4 mt-5 ">
            <Link href={"/Blog"}>
              <li className="hover:text-teal-500 hover:underline">Blog</li>
            </Link>
            <Link href={"/About"}>
              <li className="hover:text-teal-500 hover:underline mt-2">
                About
              </li>
            </Link>
            <Link href={"/Contact"}>
              <li className="hover:text-teal-500 hover:underline mt-2">Contact</li>
            </Link>
          </ul>
        </div>

        <div>
          <h2 className="text-[28px] md:text-3xl text-3xl uppercase font-semibold mt-5 md:mt-0">
            Social Media
          </h2>
          <ul className="uppercase text-red-400 text-xl mt-5">
            <Link
              href="https://www.linkedin.com/in/Kristina-samuel-21a6942ba"
              target="_blank"
            >
              <li className="hover:text-teal-500 hover:underline">Linkdin</li>
            </Link>
            <Link href="https://github.com/kristinasamuel" target="_blank">
              <li className="hover:text-teal-500 hover:underline mt-2">
                Github
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <h3 className="text-[28px] md:text-3xl text-3xl uppercase font-semibold mt-5 md:mt-0">
            Contact Information
          </h3>
          <p className="text-red mt-5 text-xl text-red-400 hover:text-teal-500 hover:underline">
            Email: karistina97@gmail.com
          </p>
        </div>
      </div>
      <div className="bg-neutral-100 text-center mt-5">
        <p className="p-2 uppercase font-serif">
          copyright © 2024 Recipe Blog.
        </p>
      </div>
    </div>
  );
}
