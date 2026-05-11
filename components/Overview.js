"use client";

import React from "react";
import {
  Download,
  CheckCircle2,
  Building2,
  Trees,
  Club,
  Home,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLeadForm } from "./LeadFormContext";

const Overview = () => {
  const { openLeadForm } = useLeadForm();

  const highlights = [
    "New launch residential community off Mysore Road",
    "504 homes planned across 8.25 acres",
    "Three low-rise B+G+4 residential wings",
    "Spacious 1, 2 and 3 BHK apartments",
  ];

  const stats = [
    { icon: Building2, value: "504", label: "Apartment Homes" },
    { icon: Trees, value: "8.25", label: "Acres" },
    { icon: Club, value: "3", label: "Residential Wings" },
    { icon: Home, value: "1-3 BHK", label: "Residences" },
  ];

  return (
    <section
      id="overview"
      className="relative mx-auto my-10 max-w-7xl overflow-hidden px-4 md:my-14"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <h2 className="section-eyebrow">The Grand Overview</h2>

          <h3 className="section-title mb-7">
            Crafted for Living <br />
            at{" "}
            <span className="text-[var(--accent)] text-outline">
              Casagrand Moondance.
            </span>
          </h3>

          <div className="mb-8 space-y-5 text-sm leading-7 text-zinc-600 md:text-base">
            <p>
              <span className="font-bold text-zinc-900">
                Casagrand Moondance
              </span>{" "}
              Kumbalgodu is a new launch residential community located off
              Mysore Road, Bengaluru. Spread across 8.25 acres, the project
              brings together low-rise planning, spacious homes, landscaped open
              areas, and convenient access to the growing south-west Bengaluru
              corridor.
            </p>

            <p>
              The community features 504 thoughtfully planned 1, 2 and 3 BHK
              apartments across three B+G+4 wings. Homes range from compact 1
              BHK layouts to spacious 3 BHK Superior residences, with apartment
              sizes extending up to 1,890 sq.ft.
            </p>
          </div>

          <div className="mb-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-2xl border border-zinc-100 bg-white p-4 shadow-[0_12px_40px_rgba(0,0,0,0.04)]"
              >
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-[var(--accent)]"
                  size={20}
                />
                <span className="text-sm font-semibold leading-6 text-zinc-800">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-5 sm:flex-row">
            <button
              type="button"
              onClick={openLeadForm}
              className="cta-button w-full transition-all sm:w-auto"
            >
              <Download size={20} />
              <span>Download Brochure</span>
            </button>

            <p className="text-center font-mono text-xs leading-5 text-zinc-400 sm:text-left">
              RERA details are being updated
            </p>
          </div>
        </motion.div>

        <motion.div
          className="relative min-h-[540px]"
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <div className="absolute left-0 top-12 h-[360px] w-[68%] overflow-hidden rounded-[34px] shadow-[0_35px_90px_rgba(0,0,0,0.18)]">
            <img
              src="/prop/Copy of Aerial Night.webp"
              alt="Casagrand Moondance Aerial View"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute right-0 top-0 h-[270px] w-[46%] overflow-hidden rounded-[30px] border-[8px] border-white shadow-[0_30px_80px_rgba(0,0,0,0.16)]">
            <img
              src="/prop/Copy of Clubhouse Dusk.webp"
              alt="Casagrand Moondance Clubhouse"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute bottom-0 right-8 h-[300px] w-[58%] overflow-hidden rounded-[34px] border-[8px] border-white shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
            <img
              src="/prop/Copy of Main Entrance.webp"
              alt="Casagrand Moondance Main Entrance"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute bottom-10 left-4 grid w-[230px] grid-cols-2 gap-3 rounded-[28px] bg-white p-4 shadow-[0_24px_70px_rgba(0,0,0,0.14)]">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index} className="text-center">
                  <Icon
                    size={18}
                    className="mx-auto mb-2 text-[var(--accent)]"
                  />
                  <h4 className="text-xl font-bold text-zinc-950">
                    {item.value}
                  </h4>
                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[1px] text-zinc-500">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Overview;
