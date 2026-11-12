"use client";
import { Phone, Sparkles } from "lucide-react";
import Link from "next/link";

const Banner = () => {
  // Numărul tău de contact
  const phoneNumber = "+40 747856267";
  const phoneClean = "tel:+40747856267";

  return (
    <div className="relative z-30 w-full border-b border-[#234245] bg-gradient-to-r from-[#004346] via-[#09bc8a] to-[#004346] py-2 text-sm font-medium text-white shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-1 px-6 text-center sm:flex-row sm:gap-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-yellow-300 animate-pulse" />
          <span>
            <strong>Site demo de vânzare</strong> pentru cabinete / psihologi.
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span>Vrei un site similar pentru afacerea ta? Sună-ne:</span>
          <Link
            href={phoneClean}
            className="flex items-center gap-1 font-bold text-yellow-200 underline decoration-yellow-300 underline-offset-2 hover:text-white"
          >
            <Phone className="h-3.5 w-3.5" />
            {phoneNumber}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;