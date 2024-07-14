"use client";
import Link from "next/link";
import React from "react";
import { Button } from '@headlessui/react'



const NotFound: React.FC = () => {
  return (
    <main className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
      <div className="max-w-lg mx-auto space-y-3 text-center">
        <h1 className=" text-4xl font-semibold sm:text-5xl">404</h1>
        <h3 className=" text-4xl font-semibold sm:text-5xl">
          Page not found...
        </h3>
        <p className="font-medium">
          Sorry, the page you are looking for could not be found or has been
          removed.
        </p>

        <div className=" font-medium inline-flex items-center gap-x-1">
          <Link href="/">
            <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
              Save changes
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
