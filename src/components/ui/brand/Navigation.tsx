'use client';
import Image from "next/image";
import { useEffect, useState, ReactNode } from "react";

interface NavItem {
  title: string;
  desc: string;
  path: string;
  icon: ReactNode;
}

interface DropdownNav {
  label: string;
  navs: NavItem[];
}

interface NavigationItem {
  title: string;
  path: string;
  isDropdown: boolean;
  navs?: DropdownNav[];
}

const dropdownNavs: DropdownNav[] = [
  {
    label: "Products",
    navs: [
      {
        title: "Analytics",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "javascript:void(0)",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
            />
          </svg>
        ),
      },
      {
        title: "Reports",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "javascript:void(0)",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
          </svg>
        ),
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
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
          </svg>
        ),
      },
      {
        title: "Community",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "javascript:void(0)",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
          </svg>
        ),
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
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-1.002-1.115c1.519-1.365 3.74-1.365 5.258 0a.75.75 0 11-1.001 1.115zm-3.217 4.147a1.125 1.125 0 011.396-1.724 1.125 1.125 0 011.406 1.722c-.316.388-.822.654-1.398.654a1.875 1.875 0 01-1.404-.652zm-.52 4.204c.032-.536.303-1.013.825-1.406.506-.383 1.219-.63 2.086-.63.866 0 1.58.247 2.086.63.522.393.793.87.825 1.406.025.42-.316.78-.737.78H9.65c-.42 0-.761-.36-.737-.78z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        title: "Contact us",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "javascript:void(0)",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M4.5 6.75A3.75 3.75 0 018.25 3h7.5a3.75 3.75 0 013.75 3.75v10.5A3.75 3.75 0 0115.75 21h-7.5A3.75 3.75 0 014.5 17.25V6.75zM12 7.5a.75.75 0 00-.75.75v3.75H9a.75.75 0 000 1.5h3.75V8.25A.75.75 0 0012 7.5z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  },
];

const navigationItems: NavigationItem[] = [
  {
    title: "Home",
    path: "/",
    isDropdown: false,
  },
  {
    title: "About",
    path: "/about",
    isDropdown: false,
  },
  {
    title: "Services",
    path: "/services",
    isDropdown: true,
    navs: dropdownNavs,
  },
  {
    title: "Contact",
    path: "/contact",
    isDropdown: false,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const handleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                width={50}
                height={50}
                className="h-8 w-8"
                src="https://github.com/kazibyteorg/kazibyte.ai/blob/main/public/android-chrome-384x384.png?raw=true"
                alt="Kazi Byte Logo"
              />
            </div>
            <h1 className="text-3xl font-bold p-2">Kazi Byte</h1>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigationItems.map((item) => (
                  <div key={item.title} className="relative group">
                    <a
                      href={item.path}
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                    >
                      {item.title}
                    </a>
                    {item.isDropdown && (
                      <div className="absolute left-0 z-10 hidden mt-2 w-48 bg-white rounded-md shadow-lg group-hover:block">
                        {item.navs?.map((navGroup) => (
                          <div key={navGroup.label} className="py-1">
                            <p className="block px-4 py-2 text-sm text-gray-700">
                              {navGroup.label}
                            </p>
                            {navGroup.navs.map((navItem) => (
                              <a
                                key={navItem.title}
                                href={navItem.path}
                                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                {navItem.icon}
                                <div className="ml-3">
                                  <p>{navItem.title}</p>
                                  <p className="text-xs text-gray-500">
                                    {navItem.desc}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigationItems.map((item) => (
            <div key={item.title} className="relative">
              <a
                href={item.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                {item.title}
              </a>
              {item.isDropdown && (
                <div>
                  <button
                    onClick={() => handleDropdown(item.title)}
                    className="w-full flex items-center px-3 py-2 text-left text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    {item.title}
                    <svg
                      className="ml-auto h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`${
                      activeDropdown === item.title ? "block" : "hidden"
                    } pl-6`}
                  >
                    {item.navs?.map((navGroup) => (
                      <div key={navGroup.label} className="py-1">
                        <p className="block px-4 py-2 text-sm text-gray-400">
                          {navGroup.label}
                        </p>
                        {navGroup.navs.map((navItem) => (
                          <a
                            key={navItem.title}
                            href={navItem.path}
                            className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                          >
                            {navItem.icon}
                            <div className="ml-3">
                              <p>{navItem.title}</p>
                              <p className="text-xs text-gray-400">
                                {navItem.desc}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
