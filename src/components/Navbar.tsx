"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../constants/nav-links";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Numărul tău de contact (modifică-l dacă e cazul)
  const phoneNumber = "+40 747856267";
  const phoneClean = "tel:+40747856267";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/90 shadow-sm backdrop-blur-md"
            : "bg-neutral-50"
        }`}
      >
        {/* Banner mic sus pentru anunțul de site demo */}
        <div className="bg-[#004346] py-1 px-4 text-center text-xs font-medium text-white md:text-sm">
          🚀 <span className="underline decoration-emerald-400 underline-offset-2">Site demo de vânzare</span> pentru psihologi / cabinete. Vrei un site similar personalizat? Sună-ne:{" "}
          <a href={phoneClean} className="font-bold text-emerald-300 hover:underline">
            {phoneNumber}
          </a>
        </div>

        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Image
            src="/logo.png"
            alt="Siglă"
            width={48}
            height={48}
            className="object-contain"
          />

          <nav className="hidden space-x-10 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-lg font-medium text-[#004346] transition hover:text-[#09bc8a]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center space-x-4 lg:flex">
            <a
              href={phoneClean}
              className="flex items-center gap-2 text-sm font-semibold text-[#004346] transition hover:text-[#09bc8a]"
            >
              <Phone className="h-4 w-4" />
              {phoneNumber}
            </a>
            <Link
              href="#contact"
              className="rounded-md bg-[#004346] px-5 py-2 font-medium text-white transition hover:bg-[#09bc8a]"
            >
              Programează-te
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-[60] flex flex-col space-y-1 lg:hidden"
            aria-label="Comută meniul"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-[#004346] transition-transform duration-300 ${
                isMenuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#004346] transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#004346] transition-transform duration-300 ${
                isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            className="fixed top-0 right-0 z-50 h-full w-80 bg-white shadow-2xl lg:hidden overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between border-b p-6">
              <h2 className="text-xl font-semibold text-[#004346]">
                Dr. Serena Blake
              </h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md p-2 transition-colors hover:bg-gray-100"
                aria-label="Închide meniul"
              >
                <X className="h-6 w-6 text-[#004346]" />
              </button>
            </div>

            {/* Notificare de site de vânzare în meniul mobil */}
            <div className="m-4 rounded-lg bg-emerald-50 p-3 text-xs text-emerald-900 border border-emerald-200">
              <p className="font-semibold mb-1">💡 Site Demo de Vânzare</p>
              <p>Acest design este disponibil pentru cabinete. Contactează-ne pentru implementare rapidă.</p>
            </div>

            <nav className="flex flex-col space-y-4 p-6 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="border-b border-gray-100 py-2 text-lg font-medium text-[#004346] transition hover:border-[#09bc8a] hover:text-[#09bc8a]"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-4 border-t border-gray-100">
                <a
                  href={phoneClean}
                  className="flex items-center gap-3 py-2 text-base font-medium text-[#004346]"
                >
                  <Phone className="h-5 w-5 text-[#09bc8a]" />
                  {phoneNumber}
                </a>
              </div>

              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 inline-block w-full rounded-md bg-[#004346] px-6 py-3 text-center font-medium text-white transition hover:bg-[#09bc8a]"
              >
                Programează-te
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}