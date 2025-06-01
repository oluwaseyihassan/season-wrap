import { useEffect, useState } from "react";
import { AlignJustify, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
  ];
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`${
        scrolled ? "py-3  bg-white shadow-md" : "bg-transparent py-4"
      } sticky top-0 left-0 right-0 transition-all duration-300  px-4  z-50  `}
    >
      <div className="flex justify-between items-center mx-auto max-w-[1600px]">
        <div>
          <h1 className="text-2xl font-bold">Season Wrap</h1>
        </div>
        <div className="md:block hidden">
          <ul className="flex space-x-4 items-center">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="hover:text-accent/90 hover:scale-105 transition-all duration-200 px-3 py-2 rounded-lg font-semibold"
              >
                <a href={item.url}>{item.label}</a>
              </li>
            ))}
            <li className="bg-accent/90 hover:bg-accent hover:scale-105 transition-all duration-200 text-white overflow-hidden rounded-lg font-semibold cursor-pointer">
              <a href="/get-started" className=" px-3 py-2 block">
                Get Started
              </a>
            </li>
          </ul>
        </div>
        <button
          className="md:hidden block text-2xl cursor-pointer"
          onClick={toggleNav}
        >
          {navOpen ? <X /> : <AlignJustify className="w-6 h-6" />}
        </button>
        {navOpen && (
          <motion.div
            className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden -mt-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <ul className="flex flex-col space-y-2 p-4">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="hover:text-accent/90 hover:scale-105 transition-all duration-200 px-3 py-2 rounded-lg font-semibold"
                >
                  <a href={item.url}>{item.label}</a>
                </li>
              ))}
              <li className="bg-accent/90 hover:bg-accent hover:scale-105 transition-all duration-200 text-white overflow-hidden rounded-lg font-semibold cursor-pointer text-center">
                <a href="/get-started" className="px-3 py-2 block">
                  Get Started
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
