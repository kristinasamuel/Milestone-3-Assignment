"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="h-[88px] border-b border-gray-300 flex items-center justify-between px-4 sm:px-8 relative">
      {/* Logo */}
      <span className="text-xl md:text-3xl font-serif text-teal-500 hover:text-red-400 cursor-pointer">
        Foodie's Dreamland
      </span>

      {/* Desktop Menu */}
      <nav className="hidden sm:flex flex-1 justify-center">
        <ul className="flex space-x-8 text-lg font-medium">
          <Link href={"/"}>
            <li className="hover:text-red-400 text-teal-500 hover:underline underline-offset-8">
              Home
            </li>
          </Link>
          <Link href={"/Blog"}>
            <li className="hover:text-red-400 text-teal-500 hover:underline underline-offset-8">
              Blog
            </li>
          </Link>
          <Link href={"/About"}>
            <li className="hover:text-red-400 text-teal-500 hover:underline underline-offset-8">
              About
            </li>
          </Link>
          <Link href={"/Contact"}>
            <li className="hover:text-red-400 text-teal-500 hover:underline underline-offset-8">
              Contact
            </li>
          </Link>
        </ul>
      </nav>

      {/* Auth Buttons (Desktop) */}
      <div className="hidden sm:flex items-center gap-4">
        <SignedOut>
          <SignInButton mode="modal">
            <Button className="bg-teal-500 text-white hover:bg-teal-600 rounded-full px-5">
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>

      {/* Mobile Right Section */}
      <div className="sm:hidden flex items-center gap-3">
        {/* Menu Toggle */}
        <Button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-teal-500 bg-white hover:bg-gray-100 rounded-full p-2"
        >
          {isMenuOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </Button>

        {/* Show UserButton beside menu icon when signed in */}
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-[88px] left-0 w-full bg-white shadow-lg rounded-b-lg p-6 z-50">
          <ul className="flex flex-col items-center space-y-6 text-lg font-medium">
            <Link href={"/"} onClick={() => setIsMenuOpen(false)}>
              <li className="text-teal-500 hover:text-red-400 hover:underline underline-offset-8">
                Home
              </li>
            </Link>
            <Link href={"/Blog"} onClick={() => setIsMenuOpen(false)}>
              <li className="text-teal-500 hover:text-red-400 hover:underline underline-offset-8">
                Blog
              </li>
            </Link>
            <Link href={"/About"} onClick={() => setIsMenuOpen(false)}>
              <li className="text-teal-500 hover:text-red-400 hover:underline underline-offset-8">
                About
              </li>
            </Link>
            <Link href={"/Contact"} onClick={() => setIsMenuOpen(false)}>
              <li className="text-teal-500 hover:text-red-400 hover:underline underline-offset-8">
                Contact
              </li>
            </Link>
          </ul>

          {/* Auth Buttons (Mobile) */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <SignedOut>
              <SignInButton mode="modal">
                <Button className="bg-teal-500 text-white hover:bg-teal-600 rounded-full px-6 w-full">
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      )}
    </header>
  );
}