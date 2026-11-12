"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-[#c0e6ea] py-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <figure className="relative mx-auto max-w-sm lg:max-w-lg">
          <div className="overflow-hidden rounded-xl border-4 border-white shadow-lg lg:rounded-xl lg:border-6">
            <Image
              src="/about.webp"
              alt="Dr. Serena Blake zâmbind cald într-un decor natural"
              width={400}
              height={500}
              className="h-auto w-full object-cover lg:h-[480px] lg:w-full"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>

          <figcaption className="absolute bottom-2 left-2 rounded-lg bg-white/90 px-4 py-2 text-sm shadow backdrop-blur-sm lg:bottom-3 lg:left-3 lg:px-5 lg:py-3 lg:text-base">
            <p className="font-semibold text-black lg:text-lg">
              Dr. Serena Blake
            </p>
            <p className="text-[13px] text-neutral-700 lg:text-sm">
              PsyD, Psiholog Clinic
            </p>
            <p className="mt-1 text-[12px] text-amber-600 lg:mt-1 lg:text-xs">
              ⭐ Peste 500 clienți mulțumiți · 8+ ani experiență
            </p>
          </figcaption>
        </figure>

        <div className="lg:pl-4">
          <span className="mb-4 inline-block rounded-full bg-yellow-200 px-4 py-1 text-sm font-medium text-gray-800">
            Despre Dr. Serena Blake · Psiholog Clinic · Timișoara
          </span>

          <h2
            id="about-heading"
            className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl lg:mb-6 lg:text-5xl"
          >
            Salut, sunt Dr. Serena Blake
          </h2>

          <p className="mb-4 leading-relaxed text-gray-700 lg:mb-6 lg:text-xl lg:leading-relaxed">
            Cu o experiență de peste <strong>8 ani în domeniu</strong> și mai
            mult de <strong>500 de sesiuni cu clienții</strong>, ofer o
            abordare <strong>empatică</strong> și <strong>bazată pe dovezi științifice</strong> în
            terapie. Fie că gestionezi <strong>stări de anxietate</strong>, lucrezi la
            depășirea unor <strong>traume</strong> sau îți dorești{" "}
            <strong>îmbunătățirea relațiilor</strong>, scopul meu este să te susțin în
            procesul de vindecare cu <strong>căldură</strong>, <strong>încredere</strong> și{" "}
            <strong>tehnici psihologice dovedite</strong>.
          </p>

          <p className="mb-4 leading-relaxed text-gray-700 lg:mb-6 lg:text-xl lg:leading-relaxed">
            Stilul meu terapeutic îmbină{" "}
            <strong>Terapia Cognitiv-Comportamentală (TCC)</strong> cu{" "}
            <strong>mindfulness-ul</strong>, având mereu în centru{" "}
            <strong>dezvoltarea ta personală</strong>. Cred că terapia trebuie să fie atât{" "}
            <strong>stabilizatoare</strong>, cât și <strong>încurajatoare</strong>—dotându-te
            cu instrumente pentru a naviga prin provocările vieții cu{" "}
            <strong>claritate</strong> și <strong>încredere</strong>.
          </p>

          <p className="leading-relaxed text-gray-700 lg:text-xl lg:leading-relaxed">
            Fie că ne întâlnim în <strong>cabinetul meu primitor</strong> de pe
            strada Maplewood sau <strong>virtual prin Zoom</strong>, mă străduiesc să creez un{" "}
            <strong>spațiu sigur</strong> și <strong>susținător</strong> pentru fiecare
            client. Împreună, putem explora{" "}
            <strong>cauza profundă a dificultăților tale</strong> și putem avansa spre o viață mai{" "}
            <strong>liniștită</strong> și <strong>echilibrată</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}