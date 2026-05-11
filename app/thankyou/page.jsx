"use client";

import React from "react";
import { CheckCircle2, Home } from "lucide-react";
import Link from "next/link";

const ThankYouPage = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--primary-1)] px-4 py-10">
       <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--accent)]/20 blur-[140px]" />

      <section className="relative z-10 mx-auto w-full max-w-3xl text-center">
        <div className="mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-full bg-[var(--accent)]/15 text-[var(--accent)]">
          <CheckCircle2 size={52} />
        </div>

        <img
          src="/assets/cg_logo.png"
          alt="Casagrand"
          className="mx-auto mb-8 h-12"
        />

        <h1 className="text-4xl font-extrabold leading-tight text-zinc-950 md:text-6xl">
          Thank You!
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-600 md:text-lg">
          Your enquiry for{" "}
          <span className="font-bold text-zinc-950">
            Casagrand Moondance
          </span>{" "}
          has been submitted successfully. Our team will contact you shortly
          with pricing, brochure, floor plan, and site visit details.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--secondary-1)] px-7 py-4 text-sm font-bold uppercase tracking-[1.5px] text-white transition hover:bg-[var(--accent)]"
          >
            <Home size={18} />
            Back to Home
          </Link>

          
        </div>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[2px] text-zinc-400">
          Casagrand Moondance • Bengaluru
        </p>
      </section>
    </main>
  );
};

export default ThankYouPage;
