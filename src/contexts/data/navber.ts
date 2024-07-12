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
        icon: Home
    },
    {
        title: "About",
        href: "/about",
        icon: Home
    },
    {
        title: "Contact",
        href: "/contact",
        icon: Home
    },
    {
        title: "Blog",
        href: "/blog",
        icon: Home
    },
    {
        title: "Services",
        href: "/services",
        icon: Home
    },
] 

export default navLink;