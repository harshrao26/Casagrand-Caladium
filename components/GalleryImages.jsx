"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Camera, Building2, Trees, X, ChevronLeft, ChevronRight, LayoutGrid } from "lucide-react";
import { useLeadForm } from "./LeadFormContext";

const TABS = [
  {
    key: "all",
    label: "All",
    icon: LayoutGrid,
    title: "All Images",
    desc: "Explore all premium visuals from Casagrand Caladium.",
  },
  {
    key: "elevation",
    label: "Elevation",
    icon: Building2,
    title: "Elevation Views",
    desc: "Stunning architectural elevations capturing the grand exterior of Casagrand Caladium.",
  },
  {
    key: "indoor",
    label: "Indoor",
    icon: Camera,
    title: "Indoor Spaces",
    desc: "Premium indoor visuals showcasing modern finishes, elegant spaces, and refined lifestyle.",
  },
  {
    key: "amenities",
    label: "Amenities",
    icon: Trees,
    title: "World-Class Amenities",
    desc: "Explore curated amenity spaces designed for recreation, wellness, and community living.",
  },
];

const Gallery = () => {
  const { openLeadForm } = useLeadForm();
  const [activeTab, setActiveTab] = useState("all");
  const [images, setImages] = useState({ elevation: [], indoor: [], amenities: [] });
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState(null); // { index, tab }

  useEffect(() => {
    fetch("/api/gallery-images")
      .then((r) => r.json())
      .then((data) => {
        setImages({
          elevation: data.elevation || [],
          indoor: data.indoor || [],
          amenities: data.amenities || [],
        });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const allImages = [...(images.elevation || []), ...(images.indoor || []), ...(images.amenities || [])];
  const currentImages = activeTab === "all" ? allImages : (images[activeTab] || []);
  const activeTabInfo = TABS.find((t) => t.key === activeTab);

  // Lightbox navigation
  const openLightbox = (index) => setLightbox({ index, tab: activeTab });
  const closeLightbox = () => setLightbox(null);
  const lightboxImages = lightbox ? (lightbox.tab === "all" ? allImages : images[lightbox.tab]) : [];
  const prevImage = useCallback(() => {
    if (!lightbox) return;
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + lightboxImages.length) % lightboxImages.length,
    }));
  }, [lightbox, lightboxImages.length]);
  const nextImage = useCallback(() => {
    if (!lightbox) return;
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % lightboxImages.length,
    }));
  }, [lightbox, lightboxImages.length]);

  // Keyboard nav for lightbox
  useEffect(() => {
    if (!lightbox) return;
    const handler = (e) => {
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, prevImage, nextImage]);

  if (loading) {
    return (
      <section id="gallery" className="relative overflow-hidden bg-[var(--secondary-1)] px-4 py-12 md:py-24">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <div className="mx-auto mb-4 h-8 w-36 animate-pulse rounded-full bg-white/10" />
            <div className="mx-auto h-10 w-72 animate-pulse rounded-xl bg-white/10" />
          </div>
          <div className="mb-8 flex justify-center gap-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-11 w-28 animate-pulse rounded-full bg-white/10" />
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-[4/3] animate-pulse rounded-[24px] bg-white/[0.06]" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X size={20} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:left-8"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image */}
          <img
            src={lightboxImages[lightbox.index]}
            alt={`Gallery ${lightbox.index + 1}`}
            className="max-h-[88vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:right-8"
          >
            <ChevronRight size={24} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
            {lightbox.index + 1} / {lightboxImages.length}
          </div>
        </div>
      )}

      {/* ── Gallery Section ── */}
      <section id="gallery" className="relative overflow-hidden bg-[var(--secondary-1)] px-4 py-12 md:py-24">
        {/* Background */}
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--accent)]/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent,rgba(168,117,34,0.04))]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Header */}
          <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/25 bg-[var(--accent)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-[var(--accent)]">
              <Camera size={13} />
              Gallery
            </span>
            <h2 className="section-title section-title-on-dark">
              Explore the Project{" "}
              <span className="text-[var(--accent)]">Visually</span>
            </h2>
            <p className="section-copy-on-dark mx-auto mt-4 max-w-2xl">
              Browse elevation views, stunning interiors, and world-class amenities — all in one place.
            </p>
          </div>

          {/* Tab Bar */}
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "border-[var(--accent)] bg-[var(--accent)] text-white shadow-[0_4px_20px_rgba(168,117,34,0.35)]"
                      : "border-white/15 bg-white/[0.05] text-white/70 hover:border-[var(--accent)]/40 hover:text-white"
                  }`}
                >
                  <Icon size={15} />
                  {tab.label}
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                      isActive ? "bg-white/20 text-white" : "bg-white/10 text-white/60"
                    }`}
                  >
                    {tab.key === "all" ? allImages.length : (images[tab.key]?.length ?? 0)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tab Description */}
          {activeTabInfo && (
            <div className="mb-8 text-center">
              <p className="text-sm text-white/50">{activeTabInfo.desc}</p>
            </div>
          )}

          {/* ── Mobile Swipe Gallery ── */}
          <div className="block lg:hidden">
            {currentImages.length === 0 ? (
              <div className="flex h-48 items-center justify-center rounded-[28px] border border-white/10 bg-white/[0.04] text-sm text-white/40">
                No images yet
              </div>
            ) : (
              <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {currentImages.map((src, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => openLightbox(i)}
                    className="relative h-[340px] w-[78vw] shrink-0 snap-center overflow-hidden rounded-[28px] bg-white/[0.04] shadow-[0_24px_70px_rgba(0,0,0,0.4)]"
                  >
                    <img src={src} alt={`${activeTabInfo?.label} ${i + 1}`} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition duration-300 hover:opacity-100" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Desktop Masonry-style Grid ── */}
          <div className="hidden lg:block">
            {currentImages.length === 0 ? (
              <div className="flex h-64 items-center justify-center rounded-[36px] border border-white/10 bg-white/[0.04] text-sm text-white/40">
                No images yet in this category
              </div>
            ) : (
              <>
                {/* Hero + Side 2×2 */}
                <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
                  {/* Hero */}
                  <button
                    type="button"
                    onClick={() => openLightbox(0)}
                    className="group relative min-h-[500px] overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
                  >
                    <img
                      src={currentImages[0]}
                      alt={`${activeTabInfo?.label} 1`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md opacity-0 transition group-hover:opacity-100">
                      <Camera size={12} /> View Full
                    </div>
                  </button>

                  {/* Right 2×2 */}
                  <div className="grid grid-cols-2 gap-4">
                    {currentImages.slice(1, 5).map((src, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => openLightbox(i + 1)}
                        className="group relative min-h-[234px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_20px_70px_rgba(0,0,0,0.35)]"
                      >
                        <img
                          src={src}
                          alt={`${activeTabInfo?.label} ${i + 2}`}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-70" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bottom row: remaining images */}
                {currentImages.length > 5 && (
                  <div className="mt-4 grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {currentImages.slice(5).map((src, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => openLightbox(i + 5)}
                        className="group relative min-h-[220px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_20px_70px_rgba(0,0,0,0.35)]"
                      >
                        <img
                          src={src}
                          alt={`${activeTabInfo?.label} ${i + 6}`}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-70" />
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* CTA */}
            <div className="mx-auto mt-10 max-w-4xl rounded-[32px] border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-white">
                Experience the project through premium visuals.
              </h3>
              <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-400">
                Get complete details about floor plans, amenities, pricing, and available options.
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

          {/* Mobile CTA */}
          <div className="mt-6 block rounded-[24px] border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur-xl lg:hidden">
            <h3 className="text-base font-semibold text-white">Experience premium visuals.</h3>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-400">
              Swipe to explore all {activeTabInfo?.label?.toLowerCase()} images.
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
      </section>
    </>
  );
};

export default Gallery;