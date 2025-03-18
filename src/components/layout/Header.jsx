import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import LogoWhite from "../../assets/LOGOwhite.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const navigation = [
  { name: "PROJECT", href: "/projects" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="absolute inset-x-0 flex justify-center">
            <Link to="/">
              <motion.img
                alt="MOU logo"
                src={LogoWhite}
                className="h-10 w-auto"
                whileHover={{ scale: 1.04 }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden  sm:block ml-auto">
            <div className="flex  space-x-4">
              {navigation.map((item) => (
                <motion.div key={item.name} whileHover={{ opacity: 0.5 }}>
                  <Link
                    to={item.href}
                    className="font-main text-white rounded-sm px-3 py-2 text-sm font-light  relative"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset">
              <Bars3Icon className="block size-6" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <DisclosurePanel className="sm:hidden bg-black/80 backdrop-blur-md">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <motion.div key={item.name} whileHover={{ opacity: 0.5 }}>
              <Link
                to={item.href}
                className="font-main block text-white hover:text-fuchsia-200 rounded-sm px-3 py-2 text-sm font-light"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
