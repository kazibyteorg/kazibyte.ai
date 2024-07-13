import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";

// Define variables for links and icons
const menuItems = [
  {
    label: "Food Delivery App",
    href: "/solutions/our-solutions/food-delivery-app",
    icon: ArchiveBoxXMarkIcon,
  },
  {
    label: "Social Media App",
    href: "/solutions/our-solutions/social-media-app",
    icon: null,
  },
  {
    label: "Ecommerce Store",
    href: "/solutions/our-solutions/ecommerce-store",
    icon: Square2StackIcon,
  },
  {
    label: "Personal Finance App",
    href: "/solutions/our-solutions/personal-finance-app",
    icon: PencilIcon,
  },
];

export default function Example() {
  return (
    <div className="">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          Solutions
          <ChevronDownIcon className="size-4 fill-white/60" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          {menuItems.map((item, index) => (
            <MenuItem key={index}>
              <Link
                href={item.href}
                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
              >
                {item.label}
                {item.icon && <item.icon className="size-4 fill-white/30" />}
              </Link>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
}
