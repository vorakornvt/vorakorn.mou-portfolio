import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LogoWhite from "../../assets/LOGOwhite.png";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const navigation = [
  { name: "PROJECT", href: "/projects" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-black ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo Centered (Clickable) */}
          <div className="absolute inset-x-0 flex justify-center">
            <Link to="/">
              <img
                alt="MOU logo"
                src={LogoWhite}
                className="h-10 w-auto pointer-events-none"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:block ml-auto">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="font-main !text-fuchsia-200 rounded-sm px-3 py-2 text-sm font-light relative"
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0.5 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button (Restored Old Style) */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Restored Old Style) */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="font-main block  text-white hover:text-fuchsia-200 rounded-sm px-3 py-2 text-sm font-light relative"
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0.5 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
