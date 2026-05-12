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
    "Singapore-styled premium residential community at Upper Kharadi",
    "334 premium residences planned across 2.8 acres",
    "2+ acres of open space with 30,000 sq.ft. of greenery",
    "Spacious 2 & 3 BHK apartments with modern lifestyle amenities",
  ];

  const stats = [
    { icon: Building2, value: "334", label: "Premium Homes" },
    { icon: Trees, value: "2.8", label: "Acres" },
    { icon: Club, value: "110+", label: "Amenities" },
    { icon: Home, value: "2-3 BHK", label: "Residences" },
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
            Crafted for Elevated Living <br />
            at{" "}
            <span className="text-[var(--accent)] text-outline">
              Casagrand Caladium.
            </span>
          </h3>

          <div className="mb-8 space-y-5 text-sm leading-7 text-zinc-600 md:text-base">
            <p>
              <span className="font-bold text-zinc-900">
                Casagrand Caladium
              </span>{" "}
              is a Singapore-styled premium residential community located at
              Upper Kharadi, Pune. Spread across 2.8 acres, the project brings
              together elegant architecture, landscaped open spaces, modern
              lifestyle amenities, and excellent connectivity to Pune’s growing
              IT and residential corridor.
            </p>

            <p>
              The community features 334 thoughtfully planned 2 and 3 BHK
              apartments designed for comfort, light, ventilation, and privacy.
              With 2+ acres of open space, 30,000 sq.ft. of greenery, a grand
              13,500 sq.ft. clubhouse, and 110+ lifestyle amenities, Casagrand
              Caladium offers a refined urban living experience.
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
              RERA: P52100080302
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
              src="/assets/3.jpeg"
              alt="Casagrand Caladium Exterior View"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute right-0 top-0 h-[270px] w-[46%] overflow-hidden rounded-[30px] border-[8px] border-white shadow-[0_30px_80px_rgba(0,0,0,0.16)]">
            <img
              src="/assets/1.jpeg"
              alt="Casagrand Caladium Clubhouse"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute bottom-0 right-8 h-[300px] w-[58%] overflow-hidden rounded-[34px] border-[8px] border-white shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
            <img
              src="/assets/2.jpeg"
              alt="Casagrand Caladium Lifestyle Amenities"
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