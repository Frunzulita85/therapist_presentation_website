"use client";

import { navLinks } from "@/constants/nav-links";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#004346] px-6 py-10 text-white scroll-mt-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-3">
        <div>
          <h3 className="mb-2 text-xl font-bold">Dr. Serena Blake</h3>
          <p className="text-sm text-gray-200">
            Psiholog Clinician & Psihoterapeut
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Sprijinind persoanele și cuplurile prin terapie validată științific.
          </p>
        </div>

        <div>
          <h4 className="mb-2 text-lg font-semibold">Linkuri Rapide</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-2 text-lg font-semibold">Contact</h4>
          <p className="flex items-center gap-2 text-sm text-gray-200">
            <FaPhoneAlt className="text-[#c6e6ea]" /> +40 700 000 000
          </p>
          <p className="mt-1 flex items-center gap-2 text-sm text-gray-200">
            <FaMapMarkerAlt className="text-[#c6e6ea]" />
            Str. Exemplului Nr. 12, Timișoara
          </p>
          <p className="mt-1 flex items-center gap-2 text-sm text-gray-200">
            <MdEmail className="text-[#c6e6ea]" />
            contact@drserenablake.ro
          </p>

          <div className="mt-4 flex gap-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-300 hover:text-white"
            >
              <FaFacebook className="h-5 w-5" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-300 hover:text-white"
            >
              <FaInstagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-300 hover:text-white"
            >
              <FaLinkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-2 border-t border-gray-700 px-6 pt-4 text-center text-sm text-gray-400 md:flex-row">
        <span>
          © {new Date().getFullYear()} Dr. Serena Blake. Toate drepturile rezervate.
        </span>
        <div className="space-x-4">
          <Link href="/privacy-policy" className="hover:underline">
            Politica de confidențialitate
          </Link>
          <Link href="/terms-of-service" className="hover:underline">
            Termeni și condiții
          </Link>
        </div>
      </div>
    </footer>
  );
}