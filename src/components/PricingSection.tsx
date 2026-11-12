"use client";

import { CheckCircle2 } from "lucide-react";

export default function PricingSection() {
  return (
    <section
      className="bg-white py-20"
      id="preturi"
      role="region"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2
          id="pricing-heading"
          className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl"
        >
          Tarife ședințe
        </h2>
        <p className="mb-10 text-lg text-gray-800">
          Alege tipul de ședință potrivit nevoilor tale — fiecare concepută cu
          grijă și sprijin empatic.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <article
            className="rounded-xl border border-[#004346] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            aria-labelledby="individual-heading"
          >
            <h3
              id="individual-heading"
              className="mb-4 text-xl font-semibold text-[#004346]"
            >
              Ședință Individuală
            </h3>
            <p className="mb-2 text-4xl font-bold text-[#234245]">250 RON</p>
            <p className="mb-4 text-sm text-gray-700">Durată: 50 de minute</p>
            <ul className="mb-6 flex flex-col items-start gap-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#09bc8a]" />
                1-la-1 cu Dr. Blake
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#09bc8a]" />
                Plan de tratament personalizat
              </li>
            </ul>
            <a
              href="#contact"
              aria-label="Programează o ședință individuală de terapie"
              className="block w-full rounded-lg border border-[#004346] px-6 py-2 text-center font-medium text-[#004346] transition hover:bg-[#004346] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004346] focus-visible:ring-offset-2"
            >
              Programează ședința individuală
            </a>
          </article>

          <article
            className="rounded-xl border border-[#004346] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            aria-labelledby="couples-heading"
          >
            <h3
              id="couples-heading"
              className="mb-4 text-xl font-semibold text-[#004346]"
            >
              Ședință de Cuplu
            </h3>
            <p className="mb-2 text-4xl font-bold text-[#234245]">350 RON</p>
            <p className="mb-4 text-sm text-gray-700">Durată: 60 de minute</p>
            <ul className="mb-6 flex flex-col items-start gap-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#09bc8a]" />
                Susținere pentru ambii parteneri
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#09bc8a]" />
                Rezolvarea conflictelor și comunicare
              </li>
            </ul>
            <a
              href="#contact"
              aria-label="Programează o ședință de consiliere de cuplu"
              className="block w-full rounded-lg bg-[#234245] px-6 py-2 text-center font-medium text-white transition hover:bg-[#1b3435] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#234245] focus-visible:ring-offset-2"
            >
              Programează ședința de cuplu
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}