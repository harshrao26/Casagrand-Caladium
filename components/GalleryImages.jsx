"use client";

import React from "react";
import { Camera } from "lucide-react";
import { useLeadForm } from "./LeadFormContext";

const Gallery = () => {
  const { openLeadForm } = useLeadForm();

  const images = [
    "/indoor-images/Copy of s35.jpg",
    "/indoor-images/Copy of s02.jpg",
    "/indoor-images/Copy of s03.jpg",
    "/indoor-images/Copy of s11.jpg",
    "/indoor-images/Copy of s12.jpg",
    "/indoor-images/Copy of s14.jpg",
    "/indoor-images/Copy of s15.jpg",
    "/indoor-images/Copy of s20.jpg",
    "/indoor-images/Copy of s21.jpg",
    "/indoor-images/Copy of s24.jpg",
    "/indoor-images/Copy of s26.jpg",
    "/indoor-images/Copy of s27.jpg",
    "/indoor-images/Copy of s28.jpg",
    "/indoor-images/Copy of s30.jpg",
    "/indoor-images/Copy of s31.jpg",
    "/indoor-images/Copy of s34.jpg",
    "/indoor-images/Copy of s36.jpg",
  ];

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[var(--secondary-1)] px-4 py-12 md:py-24"
    >
      {/* Background */}
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--accent)]/10 blur-[140px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent,rgba(168,117,34,0.04))]" />

      <div className="relative z-10 mx-auto max-w-7xl px-0 md:px-4">
        {/* Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12">
          <span className="mb-4 inline-flex rounded-full border border-[var(--accent)]/25 bg-[var(--accent)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-[var(--accent)]">
            Indoor Gallery
          </span>

          <h2 className="section-title section-title-on-dark">
            Designed Spaces,{" "}
            <span className="text-[var(--accent)]">Captured</span>
          </h2>

          <p className="section-copy-on-dark mx-auto mt-4 max-w-2xl">
            Explore premium indoor visuals showcasing modern finishes, elegant
            spaces, and a refined lifestyle experience.
          </p>
        </div>

        {/* Mobile Compact Swipe Gallery */}
        <div className="block lg:hidden">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[2px] text-[var(--accent)]">
                Swipe Gallery
              </p>
              <h3 className="mt-1 text-xl font-semibold text-white">
                Indoor Lifestyle Views
              </h3>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent)] text-white">
              <Camera size={19} />
            </div>
          </div>

          <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative h-[390px] w-[82vw] shrink-0 snap-center overflow-hidden rounded-[28px] bg-white/[0.04] shadow-[0_24px_70px_rgba(0,0,0,0.4)]"
              >
                <img
                  src={image}
                  alt={`Indoor gallery ${index + 1}`}
                  className="h-full w-full object-cover"
                />

 
                
 
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-[24px] border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur-xl">
            <h3 className="text-base font-semibold text-white">
              Experience premium indoor visuals.
            </h3>

            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-400">
              Swipe left or right to explore all indoor views.
            </p>

            <button
              type="button"
              onClick={openLeadForm}
              className="mt-4 inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-xs font-semibold uppercase tracking-[1px] text-white transition hover:bg-[var(--accent-hover)]"
            >
              Enquire Now
            </button>
          </div>
        </div>

        {/* Desktop Gallery - Same Layout */}
        <div className="hidden lg:block">
          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Left Big Feature */}
            <div className="group relative min-h-[520px] overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
              <img
                src={images[0]}
                alt="Featured indoor gallery"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-white backdrop-blur-md">
                Featured View
              </div> */}

              {/* <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[2px] text-[var(--accent)]">
                  Premium Interior
                </p>

                <h3 className="mt-2 max-w-xl text-md font-semibold leading-tight text-white md:text-xl">
                  Elegant indoor spaces crafted for modern luxury living.
                </h3>
              </div> */}
            </div>

            {/* Right Side Grid */}
            <div className="grid gap-5 sm:grid-cols-2">
              {images.slice(1, 5).map((image, index) => (
                <div
                  key={index}
                  className="group relative min-h-[250px] overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] shadow-[0_20px_70px_rgba(0,0,0,0.35)]"
                >
                  <img
                    src={image}
                    alt={`Indoor gallery ${index + 2}`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Wide Strip */}
          <div className="mt-5 grid gap-5 md:grid-cols-4">
            {images.slice(5).map((image, index) => (
              <div
                key={index}
                className="group relative min-h-[240px] overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] shadow-[0_20px_70px_rgba(0,0,0,0.35)]"
              >
                <img
                  src={image}
                  alt={`Indoor gallery ${index + 6}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mx-auto mt-10 max-w-4xl rounded-[32px] border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-white">
              Experience the project through premium indoor visuals.
            </h3>

            <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-400">
              Get complete details about floor plans, amenities, pricing, and
              available plot options.
            </p>

            <button
              type="button"
              onClick={openLeadForm}
              className="mt-5 inline-flex rounded-full bg-[var(--accent)] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-hover)]"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;