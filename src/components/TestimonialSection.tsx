"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { testimonials } from "@/constants/testimonial";

export function TestimonialSection() {
  const hasTestimonials = testimonials && testimonials.length > 0;

  return (
    <section
      id="testimonials"
      className="bg-[#c0e6ea] py-20 text-gray-900"
      aria-labelledby="testimonial-heading"
      role="region"
    >
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="mb-4 inline-block rounded-full bg-yellow-200 px-4 py-1 text-sm font-medium text-gray-800">
          Povești de succes și testimoniale
        </span>

        <h2
          id="testimonial-heading"
          className="mb-4 text-4xl font-bold md:text-5xl"
        >
          Ce spun foștii clienți
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-800">
          Experiențe reale de la persoane care au găsit vindecare și dezvoltare
          personală prin colaborarea noastră.
        </p>
      </div>

      {/* Am adăugat stilul inline style={{ "--animation-duration": "140s" } as React.CSSProperties} */}
      <div
        className="relative flex items-center justify-center overflow-hidden rounded-md px-4 sm:px-6 md:px-12"
        style={{ "--animation-duration": "140s" } as React.CSSProperties}
      >
        {hasTestimonials ? (
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        ) : (
          <p className="text-center text-gray-700">
            Momentan nu există testimoniale disponibile.
          </p>
        )}
      </div>
    </section>
  );
}