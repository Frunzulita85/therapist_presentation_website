# Template Website pentru Psihologi și Psihoterapeuți (RO)

> Un template modern, rapid și pregătit pentru producție, destinat cabinetelor de psihologie, psihoterapie și sănătate mintală — construit cu Next.js 16, Tailwind CSS v4 și Framer Motion. Include formular de contact funcțional cu Google reCAPTCHA v2 și trimitere automată de email-uri prin Nodemailer.

---

## Cuprins

- [Prezentare generală](#prezentare-generală)
- [Secțiunile paginii](#secțiunile-paginii)
- [Tehnologii utilizate](#tehnologii-utilizate)
- [Instalare și pornire locală](#instalare-și-pornire-locală)
- [Variabile de mediu](#variabile-de-mediu)
- [Ghid de personalizare](#ghid-de-personalizare)
- [Formularul de contact](#formularul-de-contact)
- [Publicare (Deployment)](#publicare-deployment)

---

## Prezentare generală

Acesta este un template de tip landing page (single-page) creat special pentru specialiștii în sănătate mintală din România. Versiunea demo este populată cu date fictive (Dr. Serena Blake) și este pregătită să fie personalizată rapid cu informațiile reale ale cabinetului. Toate textele, serviciile, întrebările frecvente, testimonialele și tarifele sunt structurate modular pentru o editare ușoară.

---

## Secțiunile paginii

Pagina randează următoarele secțiuni în ordine:

| Secțiune | Descriere |
|---|---|
| **Banner** | Bară superioară pentru anunțuri importante sau disponibilitate |
| **Navbar** | Meniu de navigare fix (sticky) cu derulare lină (smooth-scroll) către secțiuni |
| **Hero** | Secțiune principală cu imagine de fundal, titlu, subtitlu și buton de acțiune (CTA) |
| **Stats** | Contoare animate (ani de experiență, număr de ședințe) declanșate la scroll |
| **About** | Prezentarea specialistului, acreditări și fotografie |
| **Services** | Trei carduri de servicii cu imagini, descrieri și etichete de disponibilitate |
| **Schedule Consultation** | Secțiune intermediară de tip Call-to-Action pentru programări |
| **Pricing** | Prezentare comparativă a tarifelor pentru ședințe Individuale (250 RON) și de Cuplu (350 RON) |
| **Testimonials** | Carusel infinit cu derulare automată pentru recenziile clienților |
| **FAQ** | Secțiune interactivă de tip acordeon cu întrebări frecvente |
| **Contact** | Formular complet de contact cu validare, protecție reCAPTCHA și confirmare pe email |
| **Footer** | Linkuri rapide, date de contact, rețele sociale și politici legale |

---

## Tehnologii utilizate

| Nivel | Tehnologie |
|---|---|
| Framework | Next.js 16 (App Router) |
| Limbaj | TypeScript 5 |
| Stilizare | Tailwind CSS v4, shadcn/ui (accordion) |
| Animații | Framer Motion v12 |
| Email | Nodemailer v7 (Gmail SMTP) |
| Protecție Anti-Spam | Google reCAPTCHA v2 |
| Iconițe | Lucide React, React Icons |
| Tipografie | Platypi (titluri), Parkinsans (text) — Google Fonts |
| Notificări | react-hot-toast |
| Linting & Formatare | ESLint 9 + Prettier (`prettier-plugin-tailwindcss`) |

---

## Instalare și pornire locală

### Cerințe preliminare

- Node.js 20+
- Un cont Gmail pentru trimiterea email-urilor (sau un alt server SMTP — vezi [Formularul de contact](#formularul-de-contact))
- Chei API (Site Key și Secret Key) pentru [Google reCAPTCHA v2](https://www.google.com/recaptcha/admin)

### Instalare

```bash
git clone [https://github.com/USERNAME/NUME-REPO.git](https://github.com/USERNAME/NUME-REPO.git)
cd NUME-REPO
npm install