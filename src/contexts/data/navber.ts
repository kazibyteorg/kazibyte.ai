import Home from "@/assets/icons/approval-svgrepo-com.svg"
import {z} from "zod"

const HomeSchema = z.object({
    title: z.string(),
    href: z.string(),
    icon: z.string(),
    Home,
})


const navLink: z.infer<typeof HomeSchema>[] = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Our Solutions",
    href: "/our-solutions",
    icon: Home,
  },

  {
    title: "Services",
    href: "/services",
    icon: Home,
  },
  {
    title: "Our Works",
    href: "/our-works",
    icon: Home,
  },
  {
    title: "Tecnology",
    href: "/technology",
    icon: Home,
    },
    {
      title: "About-Us",
      href: "/about-us",
      icon: Home,
      },
  
]; 

export default navLink;


