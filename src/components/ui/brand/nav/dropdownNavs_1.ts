import { z } from "zod";

const navItemSchema = z.object({
  title: z.string(),
  desc: z.string(),
  path: z.string(),
  icon: z.string(),
});

const dropdownNavSchema = z.object({
  label: z.string(),
  navs: z.array(navItemSchema),
});

const dropdownNavsSchema = z.array(dropdownNavSchema);

const dropdownNavs_1 = [
  {
    label: "Our Solutions",
    navs: [
      {
        title: "Food Delivery App",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "javascript:void(0)",
        icon: "🍔",
      },
      {
        title: "Social Media App",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "javascript:void(0)",
        icon: "📱",
      },
    ],
  },
  {
    label: "Resources",
    navs: [
      {
        title: "Blog",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "javascript:void(0)",
        icon: "📚",
      },
      {
        title: "Community",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "javascript:void(0)",
        icon: "👥",
      },
    ],
  },
  {
    label: "Company",
    navs: [
      {
        title: "About us",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "javascript:void(0)",
        icon: "👥",
      },
      {
        title: "Contact us",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "javascript:void(0)",
        icon: "👥",
      },
    ],
  },
];

// Validate dropdownNavs_1 against the schema
const validatedDropdownNavs = dropdownNavsSchema.parse(dropdownNavs_1);

export default validatedDropdownNavs;
