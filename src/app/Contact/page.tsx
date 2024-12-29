// Home // Contact page
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 px-4 sm:px-6 lg:px-0 ">
      <h3 className="font-bold text-[34px] md:text-[40px] lg:text-[40px] font-serif text-teal-500">Contact Us</h3>
      {/* Contact us section */}
      <div className="flex flex-col items-center justify-center w-full max-w-md h-auto bg-white shadow-lg rounded-md py-8 px-6 mt-10">
        {/* Call To Us Section */}
        <div className="w-full space-y-4">
          <div className="flex items-center gap-4">
            <FaPhone className="h-8 w-8 text-red-400" />
            <p className="text-xl font-semibold text-red-400">Call To Us</p>
          </div>
          <div>
            <p className="text-sm text-gray-700 mt-2">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-sm text-gray-700 mt-1">Phone: +88234577899</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-6 w-full"></div>
        {/* Email  */}
        <div className="w-full space-y-4">
          <div className="flex items-center gap-4">
            <FaEnvelope className="h-8 w-8 text-red-400" />
            <p className="text-xl font-semibold text-red-400">Write To Us</p>
          </div>
          <div>
            <p className="text-sm text-gray-700 mt-2">
              We will contact you within 24 hours.
            </p>
            <p className="text-sm text-gray-700 mt-1">
              Email: Karistina97@gmail.com
            </p>
          </div>
        </div>
      </div>
      {/* Socila media icons  */}
      <div className="mt-20 flex flex-row gap-6 mb-10">
        <div>
          <Link
            href="https://www.linkedin.com/in/Kristina-samuel-21a6942ba"
            target="_blank"
            className="hover:scale-110 transition-transform duration-300"
          >
            <FaLinkedin className="h-[40px] w-[40px] text-teal-600 hover:text-red-400" />
          </Link>
        </div>
        <div>
          <Link
            href="https://github.com/kristinasamuel"
            target="_blank"
            className="hover:scale-110 transition-transform duration-300"
          >
            <FaGithub className="h-[40px] w-[40px] text-teal-600 hover:text-red-400" />
          </Link>
        </div>
        <div>
          <Link
            href="https://mailto:karistina97@gmail.com"
            target="_blank"
            className="hover:scale-110 transition-transform duration-300"
          >
            <FaEnvelope className="h-[40px] w-[40px] text-teal-600 hover:text-red-400" />
          </Link>
        </div>
      </div>
    </div>
  );
}
