'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import navigationItems from "./nav/navigationItems";
import { ModeToggle } from "@/components/common/ModeToggle";
import BgGradient from "@/components/common/BgGradient";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const handleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav className="">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                width={50}
                height={50}
                className="h-8 w-8"
                src="https://github.com/kazibyteorg/kazibyte.ai/blob/main/public/android-chrome-384x384.png?raw=true"
                alt="Kazi Byte Logo"
              />
            </div>
            <h1 className="text-3xl font-bold p-2">Kazi Byte</h1>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigationItems.map((item) => (
                  <div key={item.title} className="relative group">
                    <a
                      href={item.path}
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 shadow-sm"
                    >
                      {item.title}
                    </a>
                    {item.isDropdown && (
                      <div className="absolute left-0 z-10 hidden mt-2 w-80  bg-white rounded-md shadow-lg group-hover:block">
                        {item.navs?.map((navGroup) => (
                          <div key={navGroup.label} className="py-1">
                            <p className="block px-4 py-2 text-sm text-gray-700">
                              {navGroup.label}
                            </p>
                            {navGroup.navs.map((navItem) => (
                              <Link
                                key={navItem.title}
                                href={navItem.path}
                                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                {navItem.icon}
                                <div className="ml-3">
                                  <p>{navItem.title}</p>
                                  <p className="text-xs text-gray-500">
                                    {navItem.desc}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex justify-end  text-sm text-gray-100">
              <ModeToggle />
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <ModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigationItems.map((item) => (
            <div key={item.title} className="relative">
              <Link
                href={item.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                {item.title}
              </Link>

              {item.isDropdown && (
                <div>
                  <button
                    onClick={() => handleDropdown(item.title)}
                    className="w-full flex items-center px-3 py-2 text-left text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <span>{item.title}</span>
                    <svg
                      className="ml-auto h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`${
                      activeDropdown === item.title ? "block" : "hidden"
                    } pl-6`}
                  >
                    {item.navs?.map((navGroup) => (
                      <div key={navGroup.label} className="py-1">
                        <p className="block px-4 py-2 text-sm text-gray-400">
                          {navGroup.label}
                        </p>
                        {navGroup.navs.map((navItem) => (
                          <Link
                            key={navItem.title}
                            href={navItem.path}
                            className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                          >
                            {navItem.icon}
                            <div className="ml-3">
                              <p className="text-xs text-gray-400">
                                {navItem.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
