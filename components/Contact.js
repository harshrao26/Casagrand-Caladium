"use client";

import React from "react";
import { Mail, MapPin, CalendarCheck, Home, IndianRupee } from "lucide-react";
import { LeadFormFields } from "./LeadFormContext";

const ContactMobileVariationFour = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#fbf8f2] px-4 py-10 md:bg-white md:px-4 md:py-24"
      id="contact-us"
    >
      <div className="absolute left-1/2 top-0 hidden h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--accent)]/10 blur-[130px] md:block" />
      <div className="absolute bottom-0 right-0 hidden h-[360px] w-[360px] rounded-full bg-white/80 blur-[100px] md:block" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="overflow-hidden rounded-[30px] border border-zinc-200 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.07)] md:rounded-[36px] md:p-0">
            <div className="bg-zinc-950 p-5 text-white md:bg-white md:p-8 md:text-zinc-950 lg:p-10">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[1.5px] text-white md:border-[var(--accent)]/20 md:bg-[var(--accent)]/10 md:px-4 md:py-2 md:text-xs md:text-[var(--accent)]">
                <CalendarCheck size={13} />
                Schedule Site Visit
              </span>

              <h2 className="text-[30px] font-bold leading-[1.08] tracking-[-0.04em] text-white md:section-title md:text-zinc-950">
                Book Your{" "}
                <span className="text-[var(--accent)]">Site Visit</span> Now
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-300 md:mt-5 md:text-base md:leading-7 md:text-zinc-600">
                Experience premium 2 & 3 BHK living at Casagrand Caladium,
                Upper Kharadi, Pune. Fill out the form and our representative
                will get back to you shortly with brochure, pricing,
                availability, and visit scheduling details.
              </p>
            </div>

            <div className="grid grid-cols-2 border-y border-zinc-100 md:hidden">
              <div className="border-r border-zinc-100 p-4">
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                  <Home size={18} />
                </div>
                <p className="text-sm font-bold text-zinc-950">Brochure</p>
                <p className="mt-1 text-xs leading-5 text-zinc-500">
                  Get project details
                </p>
              </div>

              <div className="p-4">
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                  <IndianRupee size={18} />
                </div>
                <p className="text-sm font-bold text-zinc-950">Pricing</p>
                <p className="mt-1 text-xs leading-5 text-zinc-500">
                  Latest availability
                </p>
              </div>
            </div>

            <div className="space-y-3 p-5 md:p-8 lg:p-10 lg:pt-0">
              <a
                href="mailto:info@casagrandcaladium.com"
                className="flex items-center gap-4 rounded-2xl border border-zinc-100 bg-zinc-50 p-4 transition hover:border-[var(--accent)]/30 hover:bg-[var(--accent)]/5 md:gap-5 md:rounded-3xl md:p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[var(--accent)] shadow-sm md:h-14 md:w-14 md:rounded-2xl">
                  <Mail size={20} />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[1.6px] text-zinc-500 md:text-xs">
                    Email Us
                  </p>
                  <p className="mt-1 truncate text-sm font-bold text-zinc-950 md:text-base">
                    info@casagrandcaladium.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-zinc-100 bg-zinc-50 p-4 transition hover:border-[var(--accent)]/30 hover:bg-[var(--accent)]/5 md:gap-5 md:rounded-3xl md:p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[var(--accent)] shadow-sm md:h-14 md:w-14 md:rounded-2xl">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[1.6px] text-zinc-500 md:text-xs">
                    Location
                  </p>
                  <p className="mt-1 text-sm font-bold leading-5 text-zinc-950 md:text-base md:leading-6">
                    Casagrand Caladium, Upper Kharadi / Wagholi, Pune,
                    Maharashtra
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 rounded-[32px] bg-[var(--accent)]/10 blur-xl md:-inset-4 md:rounded-[44px] md:blur-2xl" />

            <div className="relative rounded-[30px] border border-zinc-200 bg-white p-5 text-zinc-950 shadow-[0_22px_70px_rgba(0,0,0,0.11)] md:rounded-[44px] md:p-8 lg:p-10">
              <div className="mb-5 text-left md:mb-7">
                <span className="mb-3 inline-flex rounded-full bg-zinc-100 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[1.5px] text-zinc-700 md:px-4 md:py-2 md:text-xs">
                  Enquiry Form
                </span>

                <h3 className="text-[28px] font-bold leading-tight tracking-[-0.04em] text-zinc-950 md:text-3xl">
                  Plan a Visit
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-600 md:mt-3 md:text-base md:leading-7">
                  Share your details once and our team will help you with the
                  brochure, current price details, floor plans, availability,
                  and site visit scheduling for Casagrand Caladium.
                </p>
              </div>

              <LeadFormFields consentId="contact-lead-consent-v4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMobileVariationFour;