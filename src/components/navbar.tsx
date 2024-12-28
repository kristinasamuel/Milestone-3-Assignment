// Home // Navbar
"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function setIsMenu(arg0: boolean): void {
    throw new Error("Function not implemented.");
  }
  return (
    <>
      <header className="h-[88px]  border-gray-300 flex items-center justify-between border px-4">
        <span className="text-3xl  lg:text-5xl md:ml-14 md:text-center text-teal-400 font-serif hover:text-red-400  ">
        Recipe Book
        </span>

        <div className="sm:hidden">
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className=" text-teal-400 bg-[#fff] hover:bg-gray-100"
          >
            <FiMenu
              className="w-[100px] h-[100px] items-center"
              style={{width: "40", height: "40px" }}
            />
          </Button>
        </div>
        <div className="flex-1 hidden sm:flex justify-center items-center">
          <ul className="md:flex space-x-8 text-xl hidden">
            <Link href={"/"}> <li className="hover:text-red-400 text-teal-500 hover:underline underline-offset-8">
              Home
            </li></Link>
            <Link href={"/Blog"}> <li className="hover:text-red-400 text-teal-500 hover:underline underline-offset-8">
              Blog
            </li>
            </Link>
            <Link href={"/About"}><li className="hover:text-red-400 text-teal-500 hover:underline underline-offset-8">
              About
            </li>
            </Link>
            <Link href={"/Contact"}><li className="hover:text-red-400 text-teal-500 hover:underline underline-offset-8">
              Contact
            </li>
            </Link>
          </ul>
        </div>
        {isMenuOpen && (
          <div className="sm:hidden absolute top-[80px] left-0 w-2/3 h-[60vh] flex flex-col items-center bg-gray-200 shadow-2xl rounded p-6 z-50">
            <h2 className="font-semibold text-[28px] text-teal-500 text-center">
              Discover More
            </h2>
            <ul className="flex flex-col items-center space-y-8  font-normal text-[18px] uppercase mt-12">
            <Link href={"/"}> <li className="text-red-400 hover:text-teal-500 hover:underline underline-offset-8">
                Home
              </li>
              </Link>
              <Link href={"/Blog"}><li className="text-red-400 hover:text-teal-500 hover:underline underline-offset-8">
                Blog
              </li>
              </Link>
              <Link href={"/"}><li className="text-red-400 hover:text-teal-500 hover:underline underline-offset-8">
                About
              </li>
              </Link>
              <Link href={"/"}><li className="text-red-400 hover:text-teal-500 hover:underline underline-offset-8">
                Contact
              </li>
              </Link>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
