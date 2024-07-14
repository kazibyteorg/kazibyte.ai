// Button.tsx
import Link from "next/link";
import React from "react";
import { z } from "zod";

// Define the props schema using zod
const ButtonPropsSchema = z.object({
    name: z.string(),
    link: z.string().url(),
    className: z.string().optional(),
});

// Define the TypeScript types based on the zod schema
type ButtonProps = z.infer<typeof ButtonPropsSchema>;

// Create the Button component
const Button: React.FC<ButtonProps> = ({ name, link, className }) => {
  return (
    <Link href={link}>
      <span
        className={`inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ${className}`}
      >
        {name}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </Link>
  );
};

export default Button;
