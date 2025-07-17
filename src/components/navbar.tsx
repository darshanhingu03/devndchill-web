import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { images } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/24/solid";
interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Link
        href={href || "#"}
        target={"_self"}
        className="font-medium hover:text-indigo-400 transition"
      >
        {children}
      </Link>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const [isBlinking, setIsBlinking] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  useEffect(() => {
    function handleScroll() {
      setIsScrolling(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //meracle me name animation
  useEffect(() => {
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setIsAnimating((prev) => !prev);
      }, 3000);

      return () => clearInterval(interval);
    }, 1000);

    return () => clearTimeout(startTimeout);
  }, []);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);

      // Close eye
      setIsOpen(false);

      // Open eye after a short delay
      setTimeout(() => {
        setIsOpen(true);

        // End blink animation
        setTimeout(() => {
          setIsBlinking(false);
        }, 300);
      }, 200);
    }, 5000); // Blink every 5 seconds

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolling
          ? "backdrop-blur-md bg-gray-900/80 backdrop-saturate-150  shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <a
          href="#"
          className="flex items-center text-xl font-semibold text-white"
        >
          <div className="flex items-center gap-4">
            <Image
              src={images.logo}
              alt="Miracle Me Logo"
              className="h-14 w-14 rounded-full object-cover"
            />
            {/* Eye animation */}
            <Image
              src={images.eyes}
              alt="Blinking Eye"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div className="flex justify-center items-center ">
              <div className="relative">
                <h1 className=" font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400 transition-all duration-1000">
                  Miracle Me
                </h1>

                {/* Gradient line that slides in */}
                <div
                  className={`h-0.5 bg-gradient-to-r from-indigo-400 to-pink-400 transition-all duration-1000 ease-in-out ${
                    isAnimating ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                  style={{
                    transformOrigin: "center",
                    margin: "0.5rem auto 0",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <ul className="ml-10 hidden lg:flex items-center gap-6 text-white">
          <NavItem href={"/"}>Home</NavItem>

          <NavItem href={"/listeners"}>Listeners</NavItem>

          <NavItem href={"/allFaqs"}>FAQs</NavItem>
          <NavItem href={"/policies"}>T&C</NavItem>
        </ul>

        {/* Social Links & Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#"
            className="text-gray-400 hover:text-indigo-400 transition-colors"
          >
            <i className="fa-brands fa-twitter text-base" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-indigo-400 transition-colors"
          >
            <i className="fa-brands fa-facebook text-base" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-indigo-400 transition-colors"
          >
            <i className="fa-brands fa-instagram text-base" />
          </a>
          <a
            href="#"
            className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-600 p-0.5 rounded-full"
          >
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 text-white">
              Download
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={handleOpen} className="ml-auto lg:hidden text-white">
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="container mx-auto mt-1 backdrop-blur-md bg-gray-900/90 backdrop-saturate-150 border border-white/10 rounded-lg p-6 shadow-lg lg:hidden">
          <ul className="flex flex-col gap-4 text-white">
            <NavItem href={"/"}>Home</NavItem>

            <NavItem href={"/listeners"}>Listeners</NavItem>

            <NavItem href={"/allFaqs"}>FAQs</NavItem>
            <NavItem href={"/policies"}>T&C</NavItem>
          </ul>
          <div className="mt-6 flex items-center gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <i className="fa-brands fa-twitter text-base" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <i className="fa-brands fa-facebook text-base" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <i className="fa-brands fa-instagram text-base" />
            </a>
            <a
              href="#"
              className="ml-auto inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-600 p-0.5 rounded-full"
            >
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 text-white">
                Get Started
              </span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
