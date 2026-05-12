"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Eye,
  Image as ImageIcon,
  Sparkles,
  Grid3X3,
} from "lucide-react";

const galleryImages = [
  {
    src: "/prop/Copy of Aerial Night.webp",
    title: "Majestic Aerial Night View",
    tag: "Aerial View",
  },
  {
    src: "/prop/Copy of Clubhouse Dusk.webp",
    title: "Exquisite Clubhouse at Dusk",
    tag: "Clubhouse",
  },
  {
    src: "/prop/Copy of Main Entrance.webp",
    title: "Grand Entrance Portal",
    tag: "Entrance",
  },
  {
    src: "/prop/Copy of Podium Dusk (1).webp",
    title: "Serene Evening Podium",
    tag: "Podium",
  },
  {
    src: "/prop/Copy of Poduim 1 To Osr.webp",
    title: "Lush Greenery & Open Spaces",
    tag: "Open Space",
  },
];

const GalleryHeader = ({ dark = false }) => {
  return (
    <div className="section-header-center mb-12">
      <motion.span
        className={`mb-4 inline-flex rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[2px] ${
          dark
            ? "border border-[var(--accent)]/25 bg-[var(--accent)]/10 text-[var(--accent)]"
            : "bg-[var(--accent)]/10 text-[var(--accent)]"
        }`}
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Project Gallery
      </motion.span>

      <motion.h2
        className={`section-title ${dark ? "section-title-on-dark" : ""}`}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        A Visual <span className="text-[var(--accent)]">Symphony.</span>
      </motion.h2>

      <p
        className={`section-copy mx-auto max-w-2xl ${
          dark ? "section-copy-on-dark" : ""
        }`}
      >
        Take a glimpse into the life that awaits you at Casagrand Caladium.
        Every corner is crafted for perfection.
      </p>
    </div>
  );
};

/* ================================
   VARIATION 1 — Clean Masonry Grid
================================ */

export const GalleryVariationOne = () => {
  return (
    <section id="gallery" className="section-shell overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <GalleryHeader />

        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              className={`group relative overflow-hidden rounded-[32px] bg-zinc-100 shadow-[0_24px_80px_rgba(0,0,0,0.08)] ${
                index === 0 || index === 3
                  ? "md:col-span-2 md:h-[430px]"
                  : "md:h-[430px]"
              } h-[320px]`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
            >
              <img
                src={item.src}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="mb-3 inline-flex rounded-full bg-white/15 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[2px] text-white backdrop-blur-md">
                  {item.tag}
                </span>

                <h3 className="text-xl font-bold leading-tight text-white md:text-2xl">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================================
   VARIATION 2 — Dark Premium Cards
================================ */

export const GalleryVariationTwo = () => {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#0c0c0c] px-4 py-16 text-white md:py-24"
    >
      <div className="absolute left-1/2 top-0 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[var(--accent)]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <GalleryHeader dark />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              className={`group overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] shadow-[0_24px_80px_rgba(0,0,0,0.28)] ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <div className="relative h-[330px] overflow-hidden md:h-[430px]">
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[2px] text-[var(--accent)]">
                    {item.tag}
                  </p>
                  <h3 className="text-xl font-bold text-white md:text-2xl">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================================
   VARIATION 3 — Auto Fade Showcase
================================ */

export const GalleryVariationThree = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % galleryImages.length);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  const current = galleryImages[active];

  return (
    <section id="gallery" className="section-shell overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <GalleryHeader />

        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative overflow-hidden rounded-[40px] bg-zinc-950 shadow-[0_30px_100px_rgba(0,0,0,0.16)]">
            <motion.img
              key={current.src}
              src={current.src}
              alt={current.title}
              className="h-[440px] w-full object-cover md:h-[620px]"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

            <div className="absolute bottom-8 left-6 right-6 md:left-8">
              <span className="mb-3 inline-flex rounded-full bg-white/15 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[2px] text-white backdrop-blur-md">
                {current.tag}
              </span>

              <h3 className="max-w-2xl text-2xl font-bold leading-tight text-white md:text-4xl">
                {current.title}
              </h3>
            </div>
          </div>

          <div className="grid gap-4">
            {galleryImages.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActive(index)}
                className={`group flex items-center gap-4 rounded-[24px] border p-3 text-left transition ${
                  active === index
                    ? "border-[var(--accent)] bg-[var(--accent)]/10"
                    : "border-zinc-100 bg-zinc-50 hover:bg-white"
                }`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-20 w-24 rounded-2xl object-cover"
                />

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[2px] text-[var(--accent)]">
                    {item.tag}
                  </p>
                  <h4 className="mt-1 text-sm font-bold text-zinc-950 md:text-base">
                    {item.title}
                  </h4>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================================
   VARIATION 4 — Magazine Editorial
================================ */

export const GalleryVariationFour = () => {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#faf7f1] px-4 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid items-end gap-6 lg:grid-cols-[1fr_0.65fr]">
          <div>
            <h2 className="section-eyebrow">Visual Gallery</h2>
            <h3 className="section-title">
              Crafted Corners. <br />
              <span className="text-[var(--accent)] text-outline">
                Cinematic Living.
              </span>
            </h3>
          </div>

          <p className="section-copy">
            Discover the grand architecture, evening podiums, clubhouse views,
            entrance experience and open landscapes of Casagrand Caladium.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-12">
          <motion.div
            className="group relative h-[420px] overflow-hidden rounded-[38px] md:col-span-7 md:h-[620px]"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-2xl font-bold text-white md:text-4xl">
                {galleryImages[0].title}
              </h3>
            </div>
          </motion.div>

          <div className="grid gap-5 md:col-span-5">
            {galleryImages.slice(1, 5).map((item, index) => (
              <motion.div
                key={index}
                className="group relative h-[190px] overflow-hidden rounded-[30px]"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <h4 className="text-base font-bold text-white md:text-xl">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================================
   VARIATION 5 — Horizontal Scroll Cards
================================ */

export const GalleryVariationFive = () => {
  return (
    <section id="gallery" className="section-shell overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <GalleryHeader />

        <div className="mx-auto max-w-7xl">
          <div className="flex gap-5 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {galleryImages.map((item, index) => (
              <motion.div
                key={index}
                className="group relative h-[430px] min-w-[82%] overflow-hidden rounded-[36px] bg-zinc-100 shadow-[0_24px_80px_rgba(0,0,0,0.1)] sm:min-w-[560px] md:h-[560px]"
                initial={{ opacity: 0, x: 34 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

                <div className="absolute bottom-7 left-7 right-7">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[2px] text-[var(--accent)]">
                    {item.tag}
                  </p>
                  <h3 className="text-xl font-bold text-white md:text-3xl">
                    {item.title}
                  </h3>
                </div>

                <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md">
                  <Eye size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================================
   VARIATION 6 — Image Stack Slider
================================ */

export const GalleryVariationSix = () => {
  const [cards, setCards] = useState(galleryImages);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#0c0c0c] px-4 py-16 text-white md:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="section-eyebrow">Visual Gallery</h2>

          <h3 className="section-title section-title-on-dark mb-6">
            A Visual <br />
            <span className="text-[var(--accent)]">Symphony.</span>
          </h3>

          <p className="section-copy section-copy-on-dark mb-8">
            Take a glimpse into the life that awaits you at Casagrand
            Moondance. Every corner is crafted for perfection.
          </p>

          <div className="grid grid-cols-3 gap-3">
            {galleryImages.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 text-center"
              >
                <ImageIcon
                  size={20}
                  className="mx-auto mb-2 text-[var(--accent)]"
                />
                <p className="text-[10px] font-bold uppercase tracking-[1.4px] text-zinc-400">
                  {item.tag}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[470px] sm:h-[560px]">
          {cards.slice(0, 3).map((item, index) => {
            const positions = [
              { x: 0, y: 90, rotate: 0, scale: 1, opacity: 1, zIndex: 30 },
              { x: 70, y: 45, rotate: 4, scale: 0.92, opacity: 0.65, zIndex: 20 },
              { x: 140, y: 0, rotate: 8, scale: 0.84, opacity: 0.42, zIndex: 10 },
            ];

            return (
              <motion.div
                key={item.src}
                className="absolute left-0 top-0 h-[360px] w-[82%] overflow-hidden rounded-[36px] shadow-[0_35px_100px_rgba(0,0,0,0.45)] sm:h-[450px]"
                animate={positions[index]}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
                {index === 0 && (
                  <div className="absolute bottom-7 left-7 right-7">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[2px] text-[var(--accent)]">
                      {item.tag}
                    </p>
                    <h3 className="text-xl font-bold text-white md:text-3xl">
                      {item.title}
                    </h3>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ================================
   VARIATION 7 — Minimal White Tiles
================================ */

export const GalleryVariationSeven = () => {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-white px-4 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="section-eyebrow">Gallery</h2>
            <h3 className="section-title">
              Project <span className="text-[var(--accent)]">Views.</span>
            </h3>
          </div>

          <p className="section-copy max-w-xl">
            Explore the architectural presence, premium clubhouse, grand arrival
            and lifestyle spaces of Casagrand Caladium.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              className={`group relative overflow-hidden rounded-[30px] bg-zinc-100 ${
                index === 0 ? "lg:col-span-2" : ""
              } h-[360px]`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
            >
              <img
                src={item.src}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-base font-bold text-white md:text-xl">
                  {item.title}
                </h3>
              </div>

              <div className="absolute left-5 top-5 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[1.5px] text-zinc-900">
                {item.tag}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================================
   VARIATION 8 — Manual Carousel
================================ */

export const GalleryVariationEight = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % galleryImages.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  const current = galleryImages[active];

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#faf7f1] px-4 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <GalleryHeader />

        <div className="relative overflow-hidden rounded-[42px] bg-zinc-950 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.18)]">
          <div className="relative h-[430px] overflow-hidden rounded-[34px] md:h-[620px]">
            <motion.img
              key={current.src}
              src={current.src}
              alt={current.title}
              className="h-full w-full object-cover"
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65 }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            <div className="absolute bottom-8 left-6 right-6 md:left-8">
              <span className="mb-3 inline-flex rounded-full bg-white/15 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[2px] text-white backdrop-blur-md">
                {current.tag}
              </span>

              <h3 className="max-w-3xl text-2xl font-bold text-white md:text-4xl">
                {current.title}
              </h3>
            </div>

            <div className="absolute right-6 top-6 flex gap-3">
              <button
                type="button"
                onClick={prev}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white hover:text-zinc-950"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                type="button"
                onClick={next}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white hover:text-zinc-950"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-5 gap-3">
          {galleryImages.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActive(index)}
              className={`h-16 overflow-hidden rounded-2xl ring-2 transition md:h-24 ${
                active === index
                  ? "ring-[var(--accent)]"
                  : "ring-transparent opacity-70"
              }`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================================
   VARIATION 9 — Luxury Bento Grid
================================ */

export const GalleryVariationNine = () => {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#0c0c0c] px-4 py-16 text-white md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="section-eyebrow">Gallery</h2>

            <h3 className="section-title section-title-on-dark">
              A Visual <br />
              <span className="text-[var(--accent)]">Symphony.</span>
            </h3>
          </div>

          <div className="rounded-[34px] border border-white/10 bg-white/[0.04] p-6">
            <Sparkles size={26} className="mb-4 text-[var(--accent)]" />
            <p className="section-copy section-copy-on-dark">
              Take a glimpse into the life that awaits you at Casagrand
              Moondance. Every corner is crafted for perfection.
            </p>
          </div>
        </div>

        <div className="grid auto-rows-[220px] gap-5 md:grid-cols-4">
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              className={`group relative overflow-hidden rounded-[34px] border border-white/10 ${
                index === 0
                  ? "md:col-span-2 md:row-span-2"
                  : index === 3
                  ? "md:col-span-2"
                  : ""
              }`}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
            >
              <img
                src={item.src}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[2px] text-[var(--accent)]">
                  {item.tag}
                </p>
                <h3 className="text-base font-bold text-white md:text-xl">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================================
   VARIATION 10 — Premium Split Gallery
================================ */

export const GalleryVariationTen = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % galleryImages.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  const current = galleryImages[active];

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-white px-4 py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-eyebrow">Project Gallery</h2>

          <h3 className="section-title mb-6">
            A Visual <br />
            <span className="text-[var(--accent)] text-outline">
              Symphony.
            </span>
          </h3>

          <p className="section-copy mb-8">
            Take a glimpse into the life that awaits you at Casagrand
            Moondance. Every corner is crafted for perfection.
          </p>

          <div className="space-y-3">
            {galleryImages.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActive(index)}
                className={`flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition ${
                  active === index
                    ? "border-[var(--accent)] bg-[var(--accent)]/10"
                    : "border-zinc-100 bg-zinc-50 hover:bg-white"
                }`}
              >
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[2px] text-[var(--accent)]">
                    {item.tag}
                  </p>
                  <h4 className="mt-1 text-sm font-bold text-zinc-950 md:text-base">
                    {item.title}
                  </h4>
                </div>

                <ArrowRight
                  size={18}
                  className={`transition ${
                    active === index
                      ? "translate-x-1 text-[var(--accent)]"
                      : "text-zinc-400"
                  }`}
                />
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-[42px] bg-zinc-950 p-3 shadow-[0_35px_100px_rgba(0,0,0,0.18)]"
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative h-[430px] overflow-hidden rounded-[34px] md:h-[640px]">
            <motion.img
              key={current.src}
              src={current.src}
              alt={current.title}
              className="h-full w-full object-cover"
              initial={{ opacity: 0, scale: 1.07 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75 }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-white backdrop-blur-md">
                <Grid3X3 size={14} />
                {current.tag}
              </div>

              <h3 className="max-w-2xl text-2xl font-bold text-white md:text-4xl">
                {current.title}
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/*
  Change this export to use any variation:

  GalleryVariationOne
  GalleryVariationTwo
  GalleryVariationThree
  GalleryVariationFour
  GalleryVariationFive
  GalleryVariationSix
  GalleryVariationSeven
  GalleryVariationEight
  GalleryVariationNine
  GalleryVariationTen
*/

export default GalleryVariationTwo;