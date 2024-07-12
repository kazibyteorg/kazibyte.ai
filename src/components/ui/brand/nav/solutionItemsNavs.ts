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

const solutionItemsNavs1 = [
  {
    label: "Our Solutions",
    navs: [
      {
        title: "Food Delivery App",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "/our-solutions/food-delivery-app",
        icon: "🍔",
      },
      {
        title: "Social Media App",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "/our-solutions/social-media-app",
        icon: "📱",
      },
      {
        title: "Educational App",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "/our-solutions/school-management",
        icon: "📚",
      },
      {
        title: "News Media App",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "/our-solutions/news-media",
        icon: "📰",
      },
      {
        title: "Healthcare App",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "/our-solutions/healthcare",
        icon: "🏥",
      },
      {
        title: "E-commerce App",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "/our-solutions/e_commerce",
        icon: "🛒",
      }
    ],
  },
 
];

// Validate dropdownNavs_1 against the schema
const solutionItemsNavs = dropdownNavsSchema.parse(solutionItemsNavs1);

export default solutionItemsNavs;
