"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-1.5 rounded-xl">
                <Image
                  src="/logo.png"
                  alt="D.S Engineering Automobile"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                D.S Engineering
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Premier automotive engineering workshop providing high-precision repair, engine diagnostics, scheduled maintenance, and custom restomod solutions.
            </p>
            <div className="flex items-center space-x-2 text-xs font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1.5 rounded-lg w-fit">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified Automobile Specialists</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Blog & News", href: "/blog" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition-colors flex items-center space-x-1 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-blue-400 transition-colors" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Hours */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-2">
              Contact & Hours
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-slate-400">Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                <a
                  href="tel:+8801935398517"
                  className="hover:text-white transition-colors"
                >
                  +880 1935-398517
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <a
                  href="mailto:contact@dsengineering.com"
                  className="hover:text-white transition-colors"
                >
                  info@dsengineering.com
                </a>
              </li>
              <li className="flex items-start space-x-3 pt-2">
                <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-400">
                  <p className="font-semibold text-slate-300">Saturday - Thursday:</p>
                  <p>9:00 AM - 8:00 PM</p>
                  <p className="font-semibold text-slate-300 mt-1">Friday:</p>
                  <p>Closed / Emergency Support</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Social */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-2">
              Stay Connected
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Subscribe to get seasonal vehicle maintenance tips and exclusive service offers.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2 mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3.5 py-2.5 bg-slate-800 text-slate-200 border border-slate-700 rounded-xl text-xs focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-xs transition-colors shadow-sm"
              >
                Subscribe
              </button>
            </form>

            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/people/DS-Engineering-Automobile/100069456816344/"
                className="p-2 bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white rounded-xl transition-all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <IconBrandFacebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 hover:bg-sky-500 text-slate-300 hover:text-white rounded-xl transition-all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <IconBrandTwitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white rounded-xl transition-all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <IconBrandInstagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 hover:bg-blue-700 text-slate-300 hover:text-white rounded-xl transition-all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <IconBrandLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} D.S Engineering Automobile. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-slate-400">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-400">Terms of Service</Link>
            <Link href="/contact" className="hover:text-slate-400">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
