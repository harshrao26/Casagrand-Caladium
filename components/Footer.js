"use client";

import React from "react";
import { Mail, MapPin } from "lucide-react";
import { useLeadForm } from "./LeadFormContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { openLeadForm } = useLeadForm();

  const footerLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Gallery", href: "#gallery" },
    { label: "Amenities", href: "#amenities" },
    { label: "Floor Plan", href: "#floor-plan" },
    { label: "Location", href: "#location" },
  ];

  return (
    <footer className="bg-[var(--secondary-1)] pb-10 pt-12 text-white md:pt-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 grid grid-cols-1 gap-8 md:mb-12 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-6 p-2">
            <img
              src="/logo.png"
              alt="Casagrand Caladium"
              className="h-12 rounded-xl bg-white p-2"
            />

            <p className="section-copy section-copy-on-dark">
              Casagrand Caladium at Upper Kharadi, Pune brings premium 2 & 3 BHK
              apartments with Singapore-styled architecture, spacious layouts,
              110+ lifestyle amenities, landscaped open spaces, and excellent
              connectivity to IT parks, schools, hospitals, malls, and the
              airport.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-base font-bold uppercase tracking-widest text-[var(--accent)] md:mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {footerLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-white transition-colors hover:text-[var(--accent)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-5 text-base font-bold uppercase tracking-widest text-[var(--accent)] md:mb-6">
              Contact Us
            </h3>

            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin
                  className="mt-1 shrink-0 text-[var(--accent)]"
                  size={20}
                />
                <span className="text-white">
                  Casagrand Caladium, Upper Kharadi / Wagholi, Pune,
                  Maharashtra
                </span>
              </li>

              <li className="flex items-center space-x-4">
                <Mail className="shrink-0 text-[var(--accent)]" size={20} />
                <a
                  href="mailto:info@casagrandcaladium.com"
                  className="text-white transition-colors hover:text-[var(--accent)]"
                >
                  info@casagrandcaladium.com
                </a>
              </li>
            </ul>
          </div>

          {/* Enquiry CTA */}
          <div>
            <h3 className="mb-5 text-base font-bold uppercase tracking-widest text-[var(--accent)] md:mb-6">
              Project Details
            </h3>

            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm leading-7 text-zinc-300">
                Get current price details, brochure, floor plans, availability,
                and site visit assistance for Casagrand Caladium.
              </p>

              <button
                type="button"
                onClick={openLeadForm}
                className="mt-5 rounded-full bg-[var(--accent)] px-6 py-3 text-xs font-bold uppercase tracking-[1.4px] text-white transition hover:bg-white hover:text-zinc-950"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between border-t border-zinc-800 pt-10 text-sm text-zinc-500 md:flex-row">
          <p>© {currentYear} Casagrand Builder Pvt. Ltd. All rights reserved.</p>

          <div className="mt-4 flex space-x-6 md:mt-0">
            <a
              href="https://www.casagrand.co.in/new-privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="https://www.casagrand.co.in/terms-and-condition/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-4xl pb-2 text-center text-xs leading-6 text-zinc-500">
        *Disclaimer: The information provided on this website is for general
        informational purposes only. All images, renderings, floor plans, maps,
        amenities, specifications, prices, availability, possession timelines,
        and project details are indicative and subject to change without prior
        notice. Please verify all details, RERA information, final pricing,
        carpet/saleable area, taxes, charges, and availability with the official
        sales team before making any purchase decision.
      </p>
    </footer>
  );
};

export default Footer;