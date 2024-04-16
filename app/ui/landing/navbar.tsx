"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="h-auto w-full">
      {" "}
      {/* NAVBAR */}{" "}
      <nav className="mx-auto h-auto w-full max-w-[1600px] lg:relative lg:top-0">
        {" "}
        {/* CONTAINER */}{" "}
        <div className="flex flex-col  py-6 lg:flex-row lg:items-center lg:justify-between lg:py-4 ">
          {" "}
          {/* SVG LOGO - YOU CAN REPLACE THIS */}{" "}
          <Link
            href="/"
            aria-current="page"
            className="relative float-left bg-[#00000000] leading-[0] text-[#333333] no-underline hover:outline-0 max-[991px]:mr-auto max-[767px]:pl-0"
            aria-label="home"
          >
            <Image
              src="/images/MyFundlogo.png"
              loading="lazy"
              alt=""
              className="inline-block max-h-full max-w-full"
              width={150}
              height={150}
            />
          </Link>{" "}
          {/* MENU CONTENT 1 */}{" "}
          <div
            className={`mt-14 transition-all ease-in flex-col space-y-8 lg:mt-0 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0 ${
              isOpen ? "visible flex" : "hidden invisible"
            } transition-all ease-in`}
          >
            {" "}
            {/* DROPDOWN */}{" "}
            <div className="relative flex flex-col">
              <Link
                onClick={() => setIsOpen((state: boolean) => !state)}
                href="/about"
                className={`flex flex-row rounded-lg lg:px-6 lg:py-4 lg:hover:bg-gray-50 lg:hover:text-gray-800 `}
              >
                About{" "}
              </Link>{" "}
            </div>
            <Link
              href="/faq"
              className="rounded-lg lg:px-6 lg:py-4 lg:hover:bg-gray-50 lg:hover:text-gray-800"
            >
              FAQs
            </Link>
            <Link
              href="/blog"
              className="rounded-lg lg:px-6 lg:py-4 lg:hover:bg-gray-50 lg:hover:text-gray-800"
            >
              Blog
            </Link>
          </div>{" "}
          {/* MENU CONTENT 2 */}{" "}
          <div
            className={`flex flex-col space-y-8 lg:flex lg:flex-row lg:space-x-3 lg:space-y-0 mt-8 lg:mt-0 ${
              isOpen ? "visible flex" : "hidden invisible"
            } transition-all ease-in`}
          >
            <Link
              href="/register"
              className="rounded-lg lg:px-6 lg:py-4 lg:hover:text-gray-800 lg:hover:underline"
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="flex max-w-[300px] flex-row items-center border-2 border-black bg-white px-8 py-4 font-semibold text-black transition [box-shadow:rgb(76,_40,188)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"
            >
              <p className="mr-6 font-bold">Login</p>
              <svg
                fill="currentColor"
                className="h-4 w-4 flex-none"
                viewBox="0 0 20 21"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Arrow Right</title>
                <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
              </svg>
            </Link>
          </div>{" "}
          {/* BURGER MENU */}{" "}
          <a
            href="#"
            className="absolute right-5 lg:hidden"
            onClick={() => setIsOpen((state: boolean) => !state)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 12H20.25"
                stroke="#160042"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3.75 6H20.25"
                stroke="#160042"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3.75 18H20.25"
                stroke="#160042"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </a>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
