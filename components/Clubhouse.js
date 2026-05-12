"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Coffee,
  Users,
  Trophy,
  Sparkles,
  ArrowRight,
  Dumbbell,
  Waves,
  Briefcase,
  Gamepad2,
  Film,
  Crown,
  Club,
  BadgeCheck,
} from "lucide-react";
import { useLeadForm } from "./LeadFormContext";

const clubhouseFeatures = [
  { icon: Waves, text: "1,800 Sq.ft. Rooftop Infinity Pool" },
  { icon: Dumbbell, text: "Rooftop Gym & Outdoor Fitness Zones" },
  { icon: Users, text: "13,500 Sq.ft. Grand Clubhouse" },
  { icon: Film, text: "Sky Cinema & Entertainment Spaces" },
  { icon: Sparkles, text: "Yoga Court, Meditation Deck & Wellness Zones" },
  { icon: Gamepad2, text: "Kids Play Area, Indoor Games & Activity Zones" },
];

const stats = [
  { value: "2.8", label: "Acres" },
  { value: "334", label: "Homes" },
  { value: "110+", label: "Amenities" },
];

const images = [
  "/prop/Copy of Clubhouse Dusk.webp",
  "/prop/Copy of Aerial Night.webp",
  "/indoor-images/image.png",
  "/indoor-images/image copy.png",
];

const CTAButton = ({ openLeadForm, dark = false }) => (
  <button
    type="button"
    onClick={openLeadForm}
    className={`group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold uppercase tracking-[1.5px] transition ${
      dark
        ? "bg-white text-zinc-950 hover:bg-[var(--accent)]"
        : "bg-[var(--accent)] text-black hover:bg-zinc-950 hover:text-white"
    }`}
  >
    <span>Explore All Amenities</span>
    <ArrowRight size={18} className="transition group-hover:translate-x-1" />
  </button>
);

export const ClubhouseVariationSeven = () => {
  const { openLeadForm } = useLeadForm();

  return (
    <section
      id="communities"
      className="relative overflow-hidden bg-[#F4EFE3] px-4 py-8 md:py-12"
    >
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--accent)]/10 blur-[140px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent,rgba(168,117,34,0.04))]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-[44px] bg-[var(--secondary-1)] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-6 text-white md:p-12">
            <h2 className="section-eyebrow">Grand Lifestyle</h2>

            <h3 className="section-title section-title-on-dark mb-6">
              110+ Amenities. <br />
              One{" "}
              <span className="text-[var(--accent)]">
                Elevated Lifestyle.
              </span>
            </h3>

            <p className="mb-8 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
              Casagrand Caladium brings a complete lifestyle ecosystem to Upper
              Kharadi, Pune with a grand clubhouse, rooftop leisure zones,
              wellness spaces, sports courts, entertainment areas, kids-focused
              amenities, and beautifully planned open spaces for everyday
              recreation.
            </p>

            <div className="mb-8 grid gap-3 sm:grid-cols-2">
              {clubhouseFeatures.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-2xl bg-white/5 p-4"
                  >
                    <Icon size={19} className="text-[var(--accent)]" />
                    <span className="text-sm font-bold text-white md:text-base">
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="grid max-w-xl grid-cols-3 gap-3">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <h4 className="text-2xl font-bold text-[var(--accent)]">
                    {item.value}
                  </h4>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[1.3px] text-zinc-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* <CTAButton openLeadForm={openLeadForm} dark /> */}
          </div>

          <div className="relative min-h-[520px]">
            <img
              src="/assets/5.jpeg"
              alt="Casagrand Caladium Lifestyle Amenities"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute bottom-6 left-6 right-6 rounded-[28px] border border-white/20 bg-black/40 p-5 text-white backdrop-blur-xl">
              <div className="mb-2 flex items-center gap-2">
                <BadgeCheck size={18} className="text-[var(--accent)]" />
                <span className="text-xs font-bold uppercase tracking-[1.5px] text-white/80">
                  Signature Amenity
                </span>
              </div>
              <h4 className="text-2xl font-bold">Rooftop Infinity Pool</h4>
              <p className="mt-2 text-sm leading-6 text-white/75">
                A premium 1,800 sq.ft. rooftop infinity pool designed for
                leisure, views, and resort-style living.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubhouseVariationSeven;