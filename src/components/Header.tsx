"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Wrench } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled
          ? "py-3 glass-effect shadow-sm"
          : "py-5 bg-gradient-to-b from-white/90 to-white/0 backdrop-blur-[2px]"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="flex items-center space-x-3 group focus:outline-none"
        >
          <div className="relative overflow-hidden rounded-xl bg-blue-50 p-1 group-hover:scale-105 transition-transform duration-300 border border-blue-100">
            <Image
              src="/logo.png"
              alt="D.S Engineering Logo"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 leading-tight">
              D.S Engineering
            </span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-blue-600">
              Automobile Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-1 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/60 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                  isActive
                    ? "text-blue-600 bg-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA Action */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="tel:+8801935398517"
            className="flex items-center space-x-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 px-3.5 py-2.5 rounded-xl shadow-xs transition-all hover:shadow"
          >
            <Phone className="w-4 h-4 text-blue-600" />
            <span>+880 1935-398517</span>
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2.5 rounded-xl shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            <Wrench className="w-4 h-4" />
            <span>Book Service</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all ${
                      isActive
                        ? "bg-blue-50 text-blue-600 font-bold"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href="tel:+8801935398517"
                  className="flex items-center justify-center space-x-2 w-full py-3 bg-slate-100 rounded-xl font-bold text-slate-800 text-sm"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call: +880 1935-398517</span>
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center space-x-2 w-full py-3 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-md shadow-blue-500/20"
                  onClick={() => setIsOpen(false)}
                >
                  <Wrench className="w-4 h-4" />
                  <span>Book Appointment</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
