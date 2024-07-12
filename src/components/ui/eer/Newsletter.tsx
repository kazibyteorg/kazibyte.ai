'use client';
import React from "react";


const Newsletter: React.FC = () => {
  return (
    <section className="py-28 relative">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 justify-between items-center gap-12 md:px-8 md:flex">
        <div className="flex-1 max-w-lg">
          <h3 className="text-3xl font-bold">
            Get our beautiful newsletter straight to your inbox.
          </h3>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-x-3 md:justify-end"
          >
            <div className="relative">
              <svg
                className="w-6 h-6 absolute left-3 inset-y-0 my-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full pl-12 pr-3 py-2 text-gray-500 outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <button className="block w-auto py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
