'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeSwitch from "@/components/common/ThemeSwitch";

interface NavItem {
  label: string;
  href: string;
  icon?: React.ElementType;
  dropdownItems?: NavItem[];
}

const navItems: NavItem[] = [
  
  {
    label: "Our Solutions",
    href: "/our-solutions",
    dropdownItems: [
      { label: "E-commerce Store", href: "/solutions/e-commerce" },
      { label: "News Media", href: "/solutions/news-media" },
      { label: "Social Media", href: "/solutions/social-media" },
      { label: "Personal Finance", href: "/solutions/personal-finance" },
      { label: "Food Delivery", href: "/solutions/food-delivery" },
      { label: "School Management", href: "/solutions/school-management" },
      { label: "Music Streaming", href: "/solutions/music-streaming" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    dropdownItems: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Api Integration", href: "/services/api-integration" },
      {
        label: "Hire Dedicated Developers",
        href: "/services/hire-dedicated-developers",
      },
      { label: "Testing Services", href: "/services/testing" },
    ],
  },
  {
    label: "Technology",
    href: "/technology/all",
    dropdownItems: [
      { label: "Frontend", href: "/technology/frontend" },
      { label: "Backend", href: "/technology/backend" },
      { label: "Database", href: "/technology/database" },
      { label: "DevOps", href: "/technology/devops" },
    ],
  },
  {
    label: "About Us",
    href: "/about-us",
    dropdownItems: [
      { label: "About Us", href: "/about-us" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },

];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? " shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto p-2 md:px-8">
        <div className="flex flex-wrap items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl flex items-center font-bold">
              <Image
                src="https://github.com/kazibyte/kazibyte.github.io/blob/main/public/android-chrome-384x384.png?raw=true"
                alt="KaziByte Logo"
                width={40}
                height={40}
              />
              <span className="ml-2 text-3xl font-extralight">KaziByte</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-4">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  <Link href={item.href} className="text-xl font-medium">
                    {item.label}
                  </Link>
                  {item.dropdownItems && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm  hover:bg-green-400"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="text-xl  ml-40
           font-bold justify-end ">
            <ThemeSwitch />
           </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className=" focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item, index) => (
            <div key={index}>
              <div
                className="flex justify-between items-center px-3 py-2 rounded-md text-base font-medium  hover:bg-green-300 cursor-pointer"
                onClick={() => item.dropdownItems && toggleDropdown(item.label)}
              >
                <Link href={item.href}>{item.label}</Link>
                {item.dropdownItems && (
                  <svg
                    className={`h-5 w-5 transition-transform duration-200 ${
                      openDropdowns[item.label] ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </div>
              {item.dropdownItems && (
                <div
                  className={`pl-4 ${
                    openDropdowns[item.label] ? "block" : "hidden"
                  }`}
                >
                  {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                    <Link
                      key={dropdownIndex}
                      href={dropdownItem.href}
                      className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-300"
                    >
                      {dropdownItem.label}
                    </Link>
                  ))}
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