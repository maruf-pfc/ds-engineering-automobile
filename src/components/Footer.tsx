import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              D.S Engineering Automobile
            </h3>
            <p>Professional automobile engineering solutions</p>
            <p className="mt-2">
              <Phone size={20} className="inline mr-2" />
              <a
                href="tel:+8801935398517"
                className="hover:text-gray-900 transition-colors"
              >
                +880 1935-398517
              </a>
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2 text-gray-800">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="hover:text-gray-800 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-gray-800 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gray-800 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2 text-gray-800">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/DS-Engineering-Automobile/100069456816344/"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p>
            &copy; {new Date().getFullYear()} D.S Engineering Automobile. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
