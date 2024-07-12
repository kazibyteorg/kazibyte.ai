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

const servicesNavs1 = [
  {
    label: "Our Services",
    navs: [
      {
        title: "Software Development",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "/services/development",
        icon: "🍔",
      },
      {
        title: "API Development",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "/services/api-development",
        icon: "📱",
      },
    ],
  },
  {
    label: "Hire Dedicated Developers",
    navs: [
      {
        title: "Full Stack Developer",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "/services/hire-dedicated-developer",
        icon: "📚",
      },
      {
        title: "Testing and Quality Assurance",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "/services/testing-and-quality-assurance",
        icon: "👥",
      },
    ],
  },
  {
    label: "DevOps",
    navs: [
      {
        title: "System Architecture",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "/services/dev-ops",
        icon: "👥",
      },
      {
        title: "Cloud Infrastructure",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "/services/dev-ops/cloud-infrastructure",
        icon: "👥",
      },
    ],
  },
];

// Validate dropdownNavs_1 against the schema
const servicesNavs = dropdownNavsSchema.parse(servicesNavs1);

export default servicesNavs;
