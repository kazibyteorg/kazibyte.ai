"use client";

import Button from "@/components/common/Button";
import React from "react";

const CenteredCTA: React.FC = () => {
  return (
    <section>
      <div className="max-w-screen-xl mt-56 mx-auto px-4 md:text-center md:px-8">
        <div className="max-w-xl space-y-3 md:mx-auto">
          <h3 className=" font-semibold">
            Professional services
          </h3>
          <p className="text-3xl font-semibold sm:text-4xl">
            Build the future with us
          </p>
          <p className="">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
            cupidatat non proident.
          </p>
        </div>
        <div className="mt-4">
         <Button name="Get Started" link="/contact" />
        </div>
      </div>
    </section>
  );
};

export default CenteredCTA;
