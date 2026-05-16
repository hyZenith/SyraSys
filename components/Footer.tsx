"use client";
import localFont from "next/font/local";
import Image from "next/image";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { Poppins } from "next/font/google";

const PoppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['200', '400'],
})

const ppmori = localFont({ src: "../public/fonts/PPMori-Regular.woff2" });

const socials = [
  { label: "dribbble", href: "#" },
  { label: "linkedin", href: "#" },
  { label: "clutch", href: "#" },
  { label: "instagram", href: "#" },
  { label: "behance", href: "#" },
];

const services = [
  "Mobile development",
  "Web development",
  "Cloud solutions",
  "AI integration",
  "Backend development",
  "About",
  "Contact",
];

export default function Footer() {
  return (
    <footer
      className="bg-[#d4d8dd] px-6 md:px-10 xl:px-16 pt-12 md:pt-16 pb-8"
      style={{ fontFamily: ppmori.style.fontFamily }}
    >
      {/* ── Top section ── */}
      <div className="max-w-400 mx-auto">
      {/* Logo row */}
      <div className="flex items-center">
        <Image
          src="/assets/logo.png"
          alt="SyraSys"
          width={84}
          height={84}
          className="object-contain -ml-1"
        />
        <span className="text-sm font-semibold text-neutral-800 tracking-wide">
          SyraSys
        </span>
      </div>

      {/* Aligned content row */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-16 lg:gap-10">

        {/* ── Left: Heading + CTA ── */}
        <div className="flex-1 max-w-170">

          {/* Heading */}
          <h2
            className="text-[clamp(2.5rem,5vw,4.25rem)] font-black leading-[0.98] tracking-[-0.02em] text-neutral-900 mb-5"
            style={{ fontFamily: PoppinsFont.style.fontFamily }}
          >
            We would love to hear from you.
          </h2>

          <p className="text-sm text-neutral-500 mb-8 max-w-sm leading-relaxed">
            Feel free to reach out if you want to collaborate with us, or simply have a chat.
          </p>

          {/* CTA button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors duration-200"
          >
            Become a Client
            <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
          </a>

          {/* Email fallback */}
          <div className="mt-10">
            <p className="text-xs text-neutral-400 mb-1">
              Don&apos;t like the forms? Drop us a line via email.
            </p>
            <a
              href="mailto:hello@syrasys.com"
              className="text-sm font-semibold text-neutral-900 hover:text-orange-500 transition-colors"
            >
              hello@syrasys.com
            </a>
          </div>
        </div>

        {/* ── Right: Three columns ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 xl:gap-20">

          {/* Contact us */}
          <div className="min-w-45">
            <p className="text-[25px] font-semibold text-neutral-900 mb-4">Contact us</p>
            <p className="text-sm text-neutral-400 mb-1">Our Email</p>
            <a
              href="mailto:hello@syrasys.com"
              className="text-[18px] text-neutral-700 underline underline-offset-2 hover:text-orange-500 transition-colors"
            >
              hello@syrasys.com
            </a>
            <p className="text-sm text-neutral-400 mt-5 leading-relaxed max-w-55">
              Chiring Sapori,<br />Dibrugarh, 786002
            </p>
          </div>

          {/* Follow us */}
          <div className="min-w-35">
            <p className="text-[25px] font-semibold text-neutral-900 mb-4">Follow us</p>
            <ul className="space-y-2">
              {socials.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex items-center gap-1.5 text-[18px] text-neutral-500 hover:text-neutral-900 transition-colors capitalize"
                  >
                    {label}
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="min-w-45">
            <p className="text-[25px] font-semibold text-neutral-900 mb-4">Services</p>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-[18px] text-neutral-500 hover:text-neutral-900 transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </div>


      {/* ── Bottom bar ── */}
      <div className="max-w-400 mx-auto mt-16 md:mt-24 pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs text-neutral-400">
          © SyraSys 2026. All rights reserved&nbsp;
          <span className="mx-1 text-neutral-500">•</span>
          <a href="#" className="underline underline-offset-2 hover:text-neutral-700 transition-colors">
            Privacy Policy
          </a>
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          Back to the top
          <ArrowUp className="w-3.5 h-3.5" strokeWidth={2} />
        </button>
      </div>
    </footer>
  );
}