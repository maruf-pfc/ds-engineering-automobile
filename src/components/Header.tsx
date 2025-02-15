"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          D.S Engineering
        </Link>
        <div className="hidden md:flex space-x-4 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="tel:+1234567890"
            className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
          >
            <Phone size={20} className="mr-2" />
            (123) 456-7890
          </a>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="tel:+1234567890"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            <Phone size={20} className="inline mr-2" />
            (123) 456-7890
          </a>
        </motion.div>
      )}
    </header>
  );
}
