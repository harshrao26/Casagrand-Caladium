"use client";

import React from "react";
import { Eye, Maximize2, RotateCcw, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLeadForm } from "./LeadFormContext";

const VirtualTour360 = () => {
  const { openLeadForm } = useLeadForm();

  return (
    <section
      id="virtual-tour"
      className="relative overflow-hidden bg-[var(--secondary-1)] px-4 py-14 md:py-24"
    >
      <div className="absolute left-1/2 top-0 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[var(--accent)]/10 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-white/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-8 grid gap-5 md:mb-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/25 bg-[var(--accent)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-[var(--accent)]">
              <Eye size={14} />
              360° Virtual Tour
            </span>

            <h2 className="section-title section-title-on-dark">
              Experience Moondance in{" "}
              <span className="text-[var(--accent)]">360° View</span>
            </h2>
          </motion.div>

          <motion.p
            className="max-w-2xl text-sm leading-7 text-zinc-400 md:ml-auto md:text-right md:text-base"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Take an immersive virtual walkthrough of Casagrand Caladium and
            explore the project spaces, lifestyle zones, and visual experience
            before your site visit.
          </motion.p>
        </div>

        <motion.div
          className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-2 shadow-[0_30px_90px_rgba(0,0,0,0.5)] backdrop-blur-xl md:rounded-[38px] md:p-3"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <div className="relative h-[440px] overflow-hidden rounded-[24px] bg-black md:h-[640px] md:rounded-[30px]">
            <iframe
              src="https://onetobeam.com/virtual_tours/casagrand_Moondance/"
              title="Casagrand Caladium 360 Virtual Tour"
              className="h-full w-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="pointer-events-none absolute inset-x-0 top-0 bg-gradient-to-b from-black/65 to-transparent p-4 md:p-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-black/55 px-3 py-2 text-[10px] font-semibold uppercase tracking-[2px] text-white backdrop-blur-md md:px-4 md:text-xs">
                <RotateCcw size={13} className="text-[var(--accent)]" />
                Drag to Explore
              </div>
            </div>

            <div className="absolute bottom-3 left-3 right-3 rounded-[24px] border border-white/10 bg-black/65 p-4 text-white backdrop-blur-xl md:hidden">
              <p className="text-[10px] font-bold uppercase tracking-[2px] text-[var(--accent)]">
                360° Experience
              </p>

              <h3 className="mt-1 text-lg font-extrabold">
                Explore Moondance Virtually
              </h3>

              <p className="mt-1 text-xs leading-5 text-white/65">
                Open full-screen tour or book your site visit.
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <a
                  href="https://onetobeam.com/virtual_tours/casagrand_Moondance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-[11px] font-bold uppercase tracking-[1px] text-white"
                >
                  <Maximize2 size={15} />
                  Full Tour
                </a>

                <button
                  type="button"
                  onClick={openLeadForm}
                  className="flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-4 py-3 text-[11px] font-bold uppercase tracking-[1px] text-white"
                >
                  Visit
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-6 hidden gap-4 md:grid md:grid-cols-2">
          <a
            href="https://onetobeam.com/virtual_tours/casagrand_Moondance/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/10"
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[var(--accent)]/10 blur-2xl transition group-hover:bg-[var(--accent)]/20" />

            <div className="relative z-10 flex items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] transition-all duration-300 group-hover:bg-[var(--accent)] group-hover:text-black">
                  <Maximize2 size={24} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[2px] text-[var(--accent)]">
                    360° Experience
                  </p>
                  <h3 className="mt-1 text-xl font-extrabold text-white">
                    Full Screen Tour
                  </h3>
                </div>
              </div>

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-black">
                <Maximize2 size={18} />
              </div>
            </div>
          </a>

          <button
            type="button"
            onClick={openLeadForm}
            className="group relative overflow-hidden rounded-3xl bg-[var(--accent)] p-5 text-left text-sm text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--accent-hover)]"
          >
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-black/10 blur-2xl transition group-hover:bg-[var(--accent)]/20" />

            <div className="relative z-10 flex items-center justify-between gap-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[2px] text-black/70">
                  Like what you see?
                </p>

                <h3 className="mt-1 text-xl font-extrabold">
                  Book Site Visit
                </h3>
              </div>

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--secondary-1)] text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[var(--secondary-2)]">
                <ArrowRight size={22} />
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour360;