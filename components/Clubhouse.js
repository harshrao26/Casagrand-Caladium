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
  { icon: Coffee, text: "Coffee Shop & Entertainment Lounge" },
  { icon: Users, text: "Multipurpose Hall & Social Spaces" },
  { icon: Trophy, text: "Squash, Badminton & Indoor Sports" },
  { icon: Sparkles, text: "Yoga, Jacuzzi, Steam, Salon & Spa" },
  { icon: Briefcase, text: "Co-working Space & Business Centre" },
  { icon: Gamepad2, text: "Video Games, Kids Gym & Play Zones" },
];

const stats = [
  { value: "8.25", label: "Acres" },
  { value: "504", label: "Homes" },
  { value: "1-3", label: "BHK Homes" },
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

/* =========================
   VARIATION 1
========================= */

export const ClubhouseVariationOne = () => {
  const { openLeadForm } = useLeadForm();

  return (
    <section
      id="communities"
      className="relative overflow-hidden bg-white px-4 py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <h2 className="section-eyebrow">Clubhouse Living</h2>

          <h3 className="section-title mb-6">
            Low-Rise Community Life. <br />
            <span className="text-[var(--accent)] text-outline">
              Sports & Leisure Spaces.
            </span>
          </h3>

          <p className="mb-8 max-w-2xl text-sm leading-7 text-zinc-600 md:text-base">
            Indulge in a grand clubhouse experience at Casagrand Moondance with
            premium indoor recreation, wellness spaces, sports facilities,
            co-working zones, kids play areas, and social spaces.
          </p>

          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            {clubhouseFeatures.slice(0, 4).map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-3xl border border-zinc-100 bg-zinc-50 p-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)]">
                    <Icon size={20} />
                  </div>

                  <span className="text-sm font-bold leading-6 text-zinc-800 md:text-base">
                    {feature.text}
                  </span>
                </div>
              );
            })}
          </div>

          <CTAButton openLeadForm={openLeadForm} />
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <div className="overflow-hidden rounded-[38px] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.14)] ring-1 ring-zinc-100">
            <img
              src="/prop/Copy of Clubhouse Dusk.webp"
              alt="Casagrand Moondance Clubhouse"
              className="h-[520px] w-full rounded-[30px] object-cover"
            />
          </div>

          <div className="absolute -bottom-6 left-8 right-8 grid grid-cols-3 gap-3 rounded-3xl bg-white p-4 shadow-[0_22px_70px_rgba(0,0,0,0.16)]">
            {stats.map((item, index) => (
              <div key={index} className="text-center">
                <h4 className="text-xl font-bold text-zinc-950">
                  {item.value}
                </h4>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[1px] text-zinc-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* =========================
   VARIATION 2
========================= */

export const ClubhouseVariationTwo = () => {
  const { openLeadForm } = useLeadForm();

  return (
    <section
      id="communities"
      className="relative overflow-hidden bg-[#0c0c0c] px-4 py-16 text-white md:py-24"
    >
      <div className="absolute left-1/2 top-0 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[var(--accent)]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-[var(--accent)]/25 bg-[var(--accent)]/10 px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-[var(--accent)]">
            Grand Clubhouse
          </span>

          <h2 className="section-title section-title-on-dark">
            A Clubhouse Built for{" "}
            <span className="text-[var(--accent)]">Luxury Living.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
            From indoor sports to wellness, entertainment, work lounges, and
            celebration spaces — every detail is designed for a complete
            lifestyle experience.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              img: "/prop/Copy of Clubhouse Dusk.webp",
              title: "Low-Rise Community Life",
              desc: "Premium leisure, entertainment, lounge, work and social spaces.",
            },
            {
              img: "/indoor-images/image.png",
              title: "Indoor Lifestyle Zones",
              desc: "Coffee shop, entertainment lounge, games, library and kids spaces.",
            },
            {
              img: "/indoor-images/image copy.png",
              title: "Wellness & Sports",
              desc: "Yoga, jacuzzi, steam, salon, spa, badminton and squash courts.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="group overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] shadow-[0_24px_80px_rgba(0,0,0,0.3)]"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="h-[280px] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <CTAButton openLeadForm={openLeadForm} dark />
        </div>
      </div>
    </section>
  );
};

/* =========================
   VARIATION 3
========================= */

export const ClubhouseVariationThree = () => {
  const { openLeadForm } = useLeadForm();

  return (
    <section
      id="communities"
      className="relative overflow-hidden bg-[#faf7f1] px-4 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl rounded-[44px] bg-white p-5 shadow-[0_30px_100px_rgba(0,0,0,0.08)] md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-[30px] ${
                  index === 0 || index === 3 ? "h-[300px]" : "h-[220px]"
                }`}
              >
                <img
                  src={img}
                  alt="Clubhouse"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-eyebrow">Premium Community Life</h2>

            <h3 className="section-title mb-6">
              Crafted Spaces for Work, <br />
              Wellness &{" "}
              <span className="text-[var(--accent)] text-outline">
                Recreation.
              </span>
            </h3>

            <p className="mb-8 text-sm leading-7 text-zinc-600 md:text-base">
              Casagrand Moondance offers low-rise community living with
              thoughtfully designed indoor recreation, outdoor sports, wellness,
              kids, co-working, and leisure spaces.
            </p>

            <div className="mb-8 space-y-4">
              {clubhouseFeatures.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-2xl bg-[#faf7f1] p-4"
                  >
                    <Icon size={20} className="text-[var(--accent)]" />
                    <span className="text-sm font-bold text-zinc-800 md:text-base">
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <CTAButton openLeadForm={openLeadForm} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* =========================
   VARIATION 4
========================= */

export const ClubhouseVariationFour = () => {
  const { openLeadForm } = useLeadForm();

  return (
    <section
      id="communities"
      className="relative min-h-[100vh] overflow-hidden px-4 py-16 text-white md:py-24"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/prop/Copy of Clubhouse Dusk.webp')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/10" />

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-center">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-white backdrop-blur-md">
            Kumbalgodu Community Life
          </span>

          <h2 className="section-title section-title-on-dark mb-6">
            Low-Rise Community Life. <br />
            <span className="text-[var(--accent)]">
              Everyday Sports & Leisure.
            </span>
          </h2>

          <p className="mb-8 max-w-2xl text-sm leading-7 text-zinc-200 md:text-base">
            Experience premium community living with curated entertainment,
            wellness, co-working, kids, sports and leisure spaces.
          </p>

          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            {clubhouseFeatures.slice(0, 4).map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md"
                >
                  <Icon size={20} className="text-[var(--accent)]" />
                  <span className="text-sm font-bold md:text-base">
                    {feature.text}
                  </span>
                </div>
              );
            })}
          </div>

          <CTAButton openLeadForm={openLeadForm} dark />
        </motion.div>
      </div>
    </section>
  );
};

/* =========================
   VARIATION 5
========================= */

export const ClubhouseVariationFive = () => {
  const { openLeadForm } = useLeadForm();

  return (
    <section
      id="communities"
      className="relative overflow-hidden bg-white px-4 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid items-end gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="section-eyebrow">Clubhouse Experience</h2>
            <h3 className="section-title">
              More Than Amenities. <br />
              <span className="text-[var(--accent)] text-outline">
                A Complete Lifestyle.
              </span>
            </h3>
          </div>

          <p className="text-sm leading-7 text-zinc-600 md:text-base">
            With clubhouse, sports clubhouse, indoor recreation, wellness zones,
            kids spaces and premium lounges, Moondance is designed for everyday
            luxury.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {clubhouseFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                className="group rounded-[30px] border border-zinc-100 bg-zinc-50 p-6 transition hover:-translate-y-2 hover:bg-zinc-950"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-black">
                  <Icon size={24} />
                </div>

                <h4 className="text-xl font-bold text-zinc-950 group-hover:text-white">
                  {feature.text}
                </h4>

                <p className="mt-3 text-sm leading-7 text-zinc-500 group-hover:text-zinc-400">
                  Designed to support leisure, recreation, wellness and social
                  connection inside the community.
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10">
          <CTAButton openLeadForm={openLeadForm} />
        </div>
      </div>
    </section>
  );
};

/* =========================
   VARIATION 6
========================= */

export const ClubhouseVariationSix = () => {
  const { openLeadForm } = useLeadForm();

  return (
    <section
      id="communities"
      className="relative overflow-hidden bg-[#0c0c0c] px-4 py-16 text-white md:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          className="lg:sticky lg:top-28 lg:h-fit"
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-eyebrow">Lifestyle Amenities</h2>

          <h3 className="section-title section-title-on-dark mb-6">
            Clubhouse Spaces <br />
            Designed Around{" "}
            <span className="text-[var(--accent)]">You.</span>
          </h3>

          <p className="mb-8 text-sm leading-7 text-zinc-400 md:text-base">
            A grand mix of indoor, wellness, sports, leisure and social spaces
            that makes every day feel elevated.
          </p>

          <CTAButton openLeadForm={openLeadForm} dark />
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {[
            {
              icon: Club,
              title: "Low-Rise Community Life",
              img: "/prop/Copy of Clubhouse Dusk.webp",
            },
            {
              icon: Trophy,
              title: "Everyday Sports & Leisure",
              img: "/indoor-images/image copy.png",
            },
            {
              icon: Waves,
              title: "Jacuzzi, Steam & Spa",
              img: "/indoor-images/image.png",
            },
            {
              icon: Film,
              title: "Entertainment Lounge",
              img: "/indoor-images/image copy 2.png",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                className="group overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04]"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative h-[260px] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <Icon size={28} className="mb-3 text-[var(--accent)]" />
                    <h4 className="text-xl font-bold text-white">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* =========================
   VARIATION 7
========================= */

export const ClubhouseVariationSeven = () => {
  const { openLeadForm } = useLeadForm();

  return (
    <section
      id="communities"
      className="relative bg-[#F4EFE3] overflow-hidden  px-4 py-8 md:py-12 "
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-[44px] bg-[#111111] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-6 text-white md:p-12">
            <h2 className="section-eyebrow">Grand Lifestyle</h2>

            <h3 className="section-title section-title-on-dark mb-6">
              One Address. <br />
              Multiple{" "}
              <span className="text-[var(--accent)]">Lifestyle Zones.</span>
            </h3>

            <p className="mb-8 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
              A premium clubhouse ecosystem with social, wellness, sports,
              business and kids-focused spaces designed inside Casagrand
              Moondance.
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

            <CTAButton openLeadForm={openLeadForm} dark />
          </div>

          <div className="relative min-h-[520px]">
            <img
              src="/prop/Copy of Clubhouse Dusk.webp"
              alt="Clubhouse"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================
   VARIATION 8
========================= */

export const ClubhouseVariationEight = () => {
  const { openLeadForm } = useLeadForm();

  return (
    <section
      id="communities"
      className="relative overflow-hidden bg-[#faf7f1] px-4 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="section-eyebrow">Clubhouse Amenities</h2>

          <h3 className="section-title">
            Spaces for Wellness, Work, <br />
            Sports &{" "}
            <span className="text-[var(--accent)] text-outline">
              Celebration.
            </span>
          </h3>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Coffee,
              title: "Leisure",
              desc: "Coffee shop, entertainment lounge and library spaces.",
            },
            {
              icon: Dumbbell,
              title: "Fitness",
              desc: "Digital gym, functional training and wellness spaces.",
            },
            {
              icon: Trophy,
              title: "Sports",
              desc: "Squash, badminton, table tennis and indoor sports.",
            },
            {
              icon: Sparkles,
              title: "Wellness",
              desc: "Yoga, steam room, jacuzzi, salon and spa zones.",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                className="rounded-[34px] bg-white p-6 shadow-[0_24px_80px_rgba(0,0,0,0.07)]"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)]">
                  <Icon size={25} />
                </div>

                <h4 className="text-xl font-bold text-zinc-950">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <CTAButton openLeadForm={openLeadForm} />
        </div>
      </div>
    </section>
  );
};

/* =========================
   VARIATION 9
========================= */

export const ClubhouseVariationNine = () => {
  const { openLeadForm } = useLeadForm();

  return (
    <section
      id="communities"
      className="relative overflow-hidden bg-white px-4 py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          className="relative min-h-[540px]"
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src="/prop/Copy of Clubhouse Dusk.webp"
            alt="Clubhouse"
            className="absolute left-0 top-0 h-[420px] w-[72%] rounded-[34px] object-cover shadow-[0_30px_90px_rgba(0,0,0,0.18)]"
          />

          <img
            src="/indoor-images/image.png"
            alt="Indoor Amenities"
            className="absolute bottom-0 right-0 h-[320px] w-[58%] rounded-[34px] border-[8px] border-white object-cover shadow-[0_30px_90px_rgba(0,0,0,0.18)]"
          />

          <div className="absolute bottom-12 left-8 rounded-3xl bg-white p-5 shadow-[0_20px_70px_rgba(0,0,0,0.14)]">
            <Crown size={28} className="mb-3 text-[var(--accent)]" />
            <h4 className="text-xl font-bold text-zinc-950">Grand Club Life</h4>
            <p className="mt-1 text-xs font-bold uppercase tracking-[1px] text-zinc-500">
              Low-Rise Community Life
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-eyebrow">Premium Club Spaces</h2>

          <h3 className="section-title mb-6">
            The Finest Clubhouse <br />
            Experience at{" "}
            <span className="text-[var(--accent)] text-outline">
              Moondance.
            </span>
          </h3>

          <p className="mb-8 text-sm leading-7 text-zinc-600 md:text-base">
            Designed with a blend of luxury, recreation and practical comfort,
            the clubhouse brings together entertainment, wellness, co-working,
            social gatherings and sports facilities.
          </p>

          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            {clubhouseFeatures.slice(0, 4).map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div key={index} className="flex items-start gap-3">
                  <BadgeCheck
                    size={20}
                    className="mt-1 shrink-0 text-[var(--accent)]"
                  />
                  <span className="text-sm font-bold leading-6 text-zinc-800 md:text-base">
                    {feature.text}
                  </span>
                </div>
              );
            })}
          </div>

          <CTAButton openLeadForm={openLeadForm} />
        </motion.div>
      </div>
    </section>
  );
};

/* =========================
   VARIATION 10
========================= */

export const ClubhouseVariationTen = () => {
  const { openLeadForm } = useLeadForm();

  return (
    <section
      id="communities"
      className="relative overflow-hidden bg-[#0c0c0c] px-4 py-16 text-white md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-eyebrow">The Clubhouse</h2>

            <h3 className="section-title section-title-on-dark mb-6">
              A Signature Space <br />
              for{" "}
              <span className="text-[var(--accent)]">
                Elevated Everyday Living.
              </span>
            </h3>

            <p className="mb-8 text-sm leading-7 text-zinc-400 md:text-base">
              Enjoy premium spaces created for fitness, entertainment, leisure,
              wellness, kids recreation, work, social gatherings and indoor
              sports.
            </p>

            <div className="mb-8 grid grid-cols-3 gap-3">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 text-center"
                >
                  <h4 className="text-xl font-bold text-white">
                    {item.value}
                  </h4>
                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[1px] text-zinc-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <CTAButton openLeadForm={openLeadForm} dark />
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {clubhouseFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="rounded-[30px] border border-white/10 bg-white/[0.04] p-5"
                >
                  <Icon size={24} className="mb-5 text-[var(--accent)]" />

                  <h4 className="text-base font-bold leading-6 text-white">
                    {feature.text}
                  </h4>
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[40px]">
          <img
            src="/prop/Copy of Aerial Night.webp"
            alt="Casagrand Moondance Aerial View"
            className="h-[360px] w-full object-cover md:h-[480px]"
          />
        </div>
      </div>
    </section>
  );
};

/* 
  Change default export to any variation:
  ClubhouseVariationOne
  ClubhouseVariationTwo
  ClubhouseVariationThree
  ClubhouseVariationFour
  ClubhouseVariationFive
  ClubhouseVariationSix
  ClubhouseVariationSeven
  ClubhouseVariationEight
  ClubhouseVariationNine
  ClubhouseVariationTen
*/

export default ClubhouseVariationSeven;
