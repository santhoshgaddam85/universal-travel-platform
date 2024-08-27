import Link from "next/link";
import { useState } from "react";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Support", href: "#", current: true },
  { name: "Claims", href: "#", current: false },
  { name: "Products", href: "#", current: false },
  { name: "About", href: "#", current: false },
  { name: "EN | MYR", href: "#", current: false },
  { name: "Login", href: "#", current: false },
  { name: "Register", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <div>
      <div className="hidden md:flex md:justify-between md:bg-transparent mx-12 float-right">
        <Link href="/" className="main-menu">
          Support
        </Link>
        <Link href="/" className="main-menu">
          Claims
        </Link>
        <Link href="/" className="main-menu">
          Products
        </Link>
        <Link href="/" className="main-menu">
          About
        </Link>
        <Link href="/" className="main-menu">
          EN | MYR
        </Link>
        <button
          type="submit"
          className="w-28 mt-2 bg-red-500 hover:bg-red-700 text-white font-bold mx-4 py-1 px-4 rounded"
        >
          Login
        </button>
        <button
          type="submit"
          className="w-28 mt-2 bg-white hover:bg-red-700 hover:text-white text-red font-bold py-1 px-4 rounded"
        >
          Register
        </button>
      </div>

      <Disclosure as="nav" className="sm:hidden float-right">
        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white float-right">
          <span className="absolute -inset-0.5" />
          <span className="sr-only">Open main menu</span>
          <Bars3Icon
            aria-hidden="true"
            className="block h-6 w-6 group-data-[open]:hidden"
          />
          <XMarkIcon
            aria-hidden="true"
            className="hidden h-6 w-6 group-data-[open]:block"
          />
        </DisclosureButton>

        <DisclosurePanel className="sm:hidden float-right">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-red-300"
                    : "text-white text-gray-300 hover:bg-red-700",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

export default Navbar;
