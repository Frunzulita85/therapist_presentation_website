"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

function Counter({ target, start }: { target: number; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(interval);
        setCount(target);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [start, target]);

  return <span>{count}</span>;
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="w-full scroll-mt-16 bg-[#004346] py-16 text-white"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2">
        <div>
          <h2 className="mb-2 text-5xl font-extrabold">
            <Counter target={8} start={isInView} />+
          </h2>
          <h3 className="text-xl font-semibold">Ani de experiență</h3>
          <p className="mt-2 text-white/80">
            Oferind terapie empatică și personalizată pentru persoane și cupluri.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-5xl font-extrabold">
            <Counter target={500} start={isInView} />+
          </h2>
          <h3 className="text-xl font-semibold">Ședințe cu clienții</h3>
          <p className="mt-2 text-white/80">
            Sprijinind clienții în călătoria lor spre vindecare, dezvoltare și claritate.
          </p>
        </div>
      </div>
    </section>
  );
}