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
      <p
        className={`inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3 text-base font-medium bg-teal-600 text-white border-spacing-1 border border-secondary hover:bg-gradient-to-r from-teal-900 to-teal-300 ${className}`}
      >
        {name}
      </p>
    </Link>
  );
};

export default Button;
