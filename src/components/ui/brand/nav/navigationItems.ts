import { z } from "zod";
import { ReactNode } from "react";
import dropdownNavs_1 from "./dropdownNavs_1";
import solutionItemsNavs from "./solutionItemsNavs";
import servicesNavs from './servicesNavs'



// Define the zod schemas

const NavItemSchema = z.object({
  title: z.string(),
  desc: z.string(),
  path: z.string(),
  icon: z.any() as z.ZodType<ReactNode>, // Adjusting to validate ReactNode
});

const DropdownNavSchema = z.object({
  label: z.string(),
  navs: z.array(NavItemSchema),
});

const NavigationItemSchema = z.object({
  title: z.string(),
  path: z.string(),
  isDropdown: z.boolean(),
  navs: z.array(DropdownNavSchema).optional(),
});

// Define types using zod schemas
type NavItem = z.infer<typeof NavItemSchema>;
type DropdownNav = z.infer<typeof DropdownNavSchema>;
type NavigationItem = z.infer<typeof NavigationItemSchema>;


// Sample dropdownNavs_1 data

// Navigation items data
const navigationItems: NavigationItem[] = [
  {
    title: "Home",
    path: "/",
    isDropdown: false,
  },
  {
    title: "Our Solutions",
    path: "/our-solutions",
    isDropdown: true,
    navs: solutionItemsNavs,
  },
  {
    title: "Services",
    path: "/services",
    isDropdown: true,
    navs: servicesNavs,
  },
  {
    title: "Our Works",
    path: "/our-works",
    isDropdown: false,
  },
  {
    title: "Technology",
    path: "/technology",
    isDropdown: true,
    navs: dropdownNavs_1,
  },
  {
    title: "About Us",
    path: "/about-us",
    isDropdown: false,
  },
];

// Validate the navigation items
navigationItems.forEach((item) => {
  NavigationItemSchema.parse(item);
});

export default navigationItems;
