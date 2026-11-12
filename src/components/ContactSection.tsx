"use client";

import { useState, useEffect } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  time: string;
  contactMethod: string;
  agree: boolean;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  time?: string;
  contactMethod?: string;
  agree?: string;
  recaptcha?: string;
}

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      render: (
        container: string | Element,
        parameters: {
          sitekey: string;
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        },
      ) => void;
      reset: (widgetId?: number) => void;
    };
    onRecaptchaCallback: (token: string) => void;
  }
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
    time: "",
    contactMethod: "",
    agree: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [recaptchaToken, setRecaptchaToken] = useState<string>("");
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?hl=ro";
    script.async = true;
    script.defer = true;
    script.onload = () => setIsRecaptchaLoaded(true);
    document.head.appendChild(script);

    window.onRecaptchaCallback = (token: string) => {
      setRecaptchaToken(token);
      setErrors((prev) => ({ ...prev, recaptcha: undefined }));
    };

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Numele este obligatoriu";
    if (!formData.phone.trim())
      newErrors.phone = "Numărul de telefon este obligatoriu";
    if (!formData.email.trim()) newErrors.email = "Adresa de email este obligatorie";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Format de email invalid";
    if (!formData.message.trim())
      newErrors.message = "Te rugăm să ne spui cu ce te putem ajuta";
    if (!formData.time.trim())
      newErrors.time = "Intervalul orar preferat este obligatoriu";
    if (!formData.contactMethod.trim())
      newErrors.contactMethod = "Te rugăm să alegi o metodă de contact";
    if (!formData.agree)
      newErrors.agree = "Trebuie să îți exprimi acordul pentru a fi contactat(ă)";
    if (!recaptchaToken)
      newErrors.recaptcha = "Te rugăm să completezi verificarea reCAPTCHA";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });

      if (!response.ok) {
        throw new Error("Eroare la trimiterea mesajului");
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        time: "",
        contactMethod: "",
        agree: false,
      });
      setErrors({});
      setRecaptchaToken("");
      if (window.grecaptcha) {
        window.grecaptcha.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="bg-white py-20 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="contact-heading"
          className="mb-4 text-center text-4xl font-bold text-gray-900 md:text-5xl"
        >
          Contactează-mă
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-gray-800">
          Ai întrebări sau ești pregătit(ă) să începi călătoria spre vindecare?
          Scrie-mi, sunt aici să te sprijin.
        </p>
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Dr. Serena Blake
              </h3>
              <p className="text-gray-600">Psiholog Clinician & Psihoterapeut</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700">Locație cabinet</h4>
              <p className="text-gray-600">
                Str. Exemplului Nr. 12
                <br />
                Timișoara, România
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700">Date de contact</h4>
              <p className="text-gray-600">
                Telefon: +40 700 000 000
                <br />
                Email: contact@drserenablake.ro
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700">Program de lucru</h4>
              <p className="text-gray-600">
                La cabinet: Marți și Joi, 10:00 – 18:00
                <br />
                Online (Zoom): Luni, Miercuri și Vineri, 13:00 – 17:00
              </p>
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-lg lg:mx-0 lg:mr-auto">
              <video
                src="/lotus.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
                aria-hidden="true"
              >
                Browserul tău nu suportă redarea video.
              </video>
            </div>
          </div>

          <div className="rounded-2xl border border-[#004346] bg-white p-8 shadow-sm">
            {submitStatus === "success" ? (
              <div className="rounded-lg bg-green-50 p-4 text-center">
                <h3 className="text-lg font-medium text-green-800">
                  Îți mulțumim pentru mesaj!
                </h3>
                <p className="mt-2 text-green-700">
                  Am primit solicitarea ta și vom reveni cu un răspuns în cel mai
                  scurt timp. O confirmare a fost trimisă pe adresa ta de email.
                </p>
              </div>
            ) : submitStatus === "error" ? (
              <div className="rounded-lg bg-red-50 p-4 text-center">
                <h3 className="text-lg font-medium text-red-800">
                  Ceva nu a funcționat corect
                </h3>
                <p className="mt-2 text-red-700">
                  Te rugăm să încerci din nou mai târziu sau să ne scrii direct
                  la contact@drserenablake.ro
                </p>
                <button
                  onClick={() => setSubmitStatus(null)}
                  className="mt-4 rounded-lg bg-teal-700 px-4 py-2 font-medium text-white hover:bg-teal-800"
                >
                  Încearcă din nou
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Nume complet
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Numele și prenumele tău"
                    autoComplete="name"
                    required
                    className={`w-full rounded-lg border px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:ring-2 focus:ring-teal-500 focus:outline-none ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nume@exemplu.ro"
                    autoComplete="email"
                    required
                    className={`w-full rounded-lg border px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:ring-2 focus:ring-teal-500 focus:outline-none ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Telefon
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="07XX XXX XXX"
                    autoComplete="tel"
                    required
                    className={`w-full rounded-lg border px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:ring-2 focus:ring-teal-500 focus:outline-none ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cu ce te pot ajuta?"
                    required
                    className={`w-full resize-none rounded-lg border px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:ring-2 focus:ring-teal-500 focus:outline-none ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Interval orar preferat
                  </label>
                  <input
                    id="time"
                    name="time"
                    type="text"
                    value={formData.time}
                    onChange={handleChange}
                    placeholder="ex: Dimineața, După-amiaza, Seara"
                    required
                    className={`w-full rounded-lg border px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:ring-2 focus:ring-teal-500 focus:outline-none ${
                      errors.time ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Spune-ne când ești de obicei disponibil(ă) pentru un apel sau
                    o consultație
                  </p>
                  {errors.time && (
                    <p className="mt-1 text-sm text-red-600">{errors.time}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="contactMethod"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Metoda preferată de contact
                  </label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                    required
                    className={`w-full rounded-lg border px-4 py-3 text-gray-900 transition-colors focus:ring-2 focus:ring-teal-500 focus:outline-none ${
                      errors.contactMethod
                        ? "border-red-500"
                        : "border-gray-300"
                    } ${!formData.contactMethod ? "text-gray-400" : ""}`}
                  >
                    <option value="">Alege metoda preferată</option>
                    <option value="phone">Apel telefonic</option>
                    <option value="email">Email</option>
                    <option value="text">Mesaj SMS / WhatsApp</option>
                    <option value="any">Orice metodă</option>
                  </select>
                  {errors.contactMethod && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.contactMethod}
                    </p>
                  )}
                </div>
                <div className="flex justify-center">
                  {isRecaptchaLoaded && (
                    <div
                      className="g-recaptcha"
                      data-sitekey={
                        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
                        "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                      }
                      data-callback="onRecaptchaCallback"
                    ></div>
                  )}
                  {errors.recaptcha && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.recaptcha}
                    </p>
                  )}
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agree"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    required
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                  />
                  <label
                    htmlFor="agree"
                    className="text-sm leading-relaxed text-gray-600"
                  >
                    Sunt de acord să fiu contactat(ă) în legătură cu această
                    solicitare.
                  </label>
                </div>
                {errors.agree && (
                  <p className="text-sm text-red-600">{errors.agree}</p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-teal-700 px-6 py-4 font-medium text-white transition-colors hover:bg-teal-800 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50"
                >
                  {isSubmitting ? "Se trimite..." : "Trimite mesajul"}
                </button>{" "}
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-center text-sm leading-relaxed text-gray-600">
                    <span className="mr-2 inline-flex items-center">
                      <svg
                        className="h-4 w-4 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    Prin trimiterea formularului, ești de acord cu{" "}
                    <a
                      href="/privacy-policy"
                      className="text-teal-700 underline hover:text-teal-800"
                    >
                      Politica de confidențialitate
                    </a>{" "}
                    și Termenii și condițiile și accepți să primești răspunsuri
                    pe email sau telefon din partea Dr. Serena Blake.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}