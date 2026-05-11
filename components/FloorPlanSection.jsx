"use client";

import React, { useMemo, useState } from "react";
import {
  Building2,
  Home,
  Layers3,
  Map,
  Maximize2,
  X,
  Download,
  Image as ImageIcon,
  Grid3X3,
  ArrowRight,
  FileImage,
} from "lucide-react";
import { useLeadForm } from "./LeadFormContext";

const floorPlanGroups = [
  {
    id: "basement",
    label: "Basement",
    icon: Layers3,
    images: [
      {
        title: "Basement Floor Plan",
        src: "/flooreplan/BASEMENT FLOOR PLAN/JPG/BASEMENT FLOOR PLAN.jpg",
      },
    ],
  },
  {
    id: "clubhouse",
    label: "Club House",
    icon: Building2,
    images: [
      {
        title: "Ground Floor Plan",
        src: "/flooreplan/CLUB HOUSE/JPG/GROUND FLOOR PLAN.jpg",
      },
      {
        title: "First Floor Plan",
        src: "/flooreplan/CLUB HOUSE/JPG/FIRST FLOOR PLAN.jpg",
      },
      {
        title: "Second Floor Plan",
        src: "/flooreplan/CLUB HOUSE/JPG/SECOND FLOOR PLAN.jpg",
      },
      {
        title: "Third Floor Plan",
        src: "/flooreplan/CLUB HOUSE/JPG/THIRD FLOOR PLAN.jpg",
      },
      {
        title: "Terrace Floor Plan",
        src: "/flooreplan/CLUB HOUSE/JPG/TERRACE FLOOR PLAN.jpg",
      },
    ],
  },
  {
    id: "floor-plan",
    label: "Floor Plan",
    icon: Layers3,
    images: [
      {
        title: "First Floor Plan",
        src: "/flooreplan/FLOOR PLAN/JPG/FIRST FLOOR PLAN.jpg",
      },
      {
        title: "Second Floor Plan",
        src: "/flooreplan/FLOOR PLAN/JPG/SECOND FLOOR PLAN.jpg",
      },
      {
        title: "Third Floor Plan",
        src: "/flooreplan/FLOOR PLAN/JPG/THIRD FLOOR PLAN.jpg",
      },
      {
        title: "Fourth Floor Plan",
        src: "/flooreplan/FLOOR PLAN/JPG/FOURTH FLOOR PLAN.jpg",
      },
      {
        title: "Terrace Floor Plan",
        src: "/flooreplan/FLOOR PLAN/JPG/TERRACE FLOOR PLAN.jpg",
      },
    ],
  },
  {
    id: "site-plan",
    label: "Site Plan",
    icon: Map,
    images: [
      {
        title: "Site Plan",
        src: "/flooreplan/SITE PLAN/JPG/SITE PLAN.jpg",
      },
    ],
  },
  {
    id: "1bhk",
    label: "1 BHK",
    icon: Home,
    images: [
      { title: "AG14", src: "/flooreplan/UNIT PLAN/1BHK/JPG/AG14.jpg" },
      { title: "AG22", src: "/flooreplan/UNIT PLAN/1BHK/JPG/AG22.jpg" },
      { title: "BG03", src: "/flooreplan/UNIT PLAN/1BHK/JPG/BG03.jpg" },
      { title: "BG17", src: "/flooreplan/UNIT PLAN/1BHK/JPG/BG17.jpg" },
      { title: "BG25", src: "/flooreplan/UNIT PLAN/1BHK/JPG/BG25.jpg" },
      { title: "CG14", src: "/flooreplan/UNIT PLAN/1BHK/JPG/CG14.jpg" },
    ],
  },
  {
    id: "2bhk",
    label: "2 BHK",
    icon: Home,
    images: [
      { title: "A122", src: "/flooreplan/UNIT PLAN/2BHK/JPG/A122.jpg" },
      { title: "AG17", src: "/flooreplan/UNIT PLAN/2BHK/JPG/AG17.jpg" },
      { title: "AG18", src: "/flooreplan/UNIT PLAN/2BHK/JPG/AG18.jpg" },
      { title: "AG20", src: "/flooreplan/UNIT PLAN/2BHK/JPG/AG20.jpg" },
      { title: "AG28", src: "/flooreplan/UNIT PLAN/2BHK/JPG/AG28.jpg" },
      { title: "B103", src: "/flooreplan/UNIT PLAN/2BHK/JPG/B103.jpg" },
      { title: "BG10", src: "/flooreplan/UNIT PLAN/2BHK/JPG/BG10.jpg" },
      { title: "BG12", src: "/flooreplan/UNIT PLAN/2BHK/JPG/BG12.jpg" },
      { title: "BG13", src: "/flooreplan/UNIT PLAN/2BHK/JPG/BG13.jpg" },
      { title: "BG24", src: "/flooreplan/UNIT PLAN/2BHK/JPG/BG24.jpg" },
      { title: "CG02", src: "/flooreplan/UNIT PLAN/2BHK/JPG/CG02.jpg" },
      { title: "CG11", src: "/flooreplan/UNIT PLAN/2BHK/JPG/CG11.jpg" },
      { title: "CG18", src: "/flooreplan/UNIT PLAN/2BHK/JPG/CG18.jpg" },
      { title: "CG25", src: "/flooreplan/UNIT PLAN/2BHK/JPG/CG25.jpg" },
      {
        title: "Model Flat - AG17",
        src: "/flooreplan/UNIT PLAN/2BHK/JPG/MODEL FLAT - AG17.jpg",
      },
    ],
  },
  {
    id: "3bhk",
    label: "3 BHK",
    icon: Home,
    images: [
      { title: "A101", src: "/flooreplan/UNIT PLAN/3BHK/JPG/A101.jpg" },
      { title: "AG01", src: "/flooreplan/UNIT PLAN/3BHK/JPG/AG01.jpg" },
      { title: "AG03", src: "/flooreplan/UNIT PLAN/3BHK/JPG/AG03.jpg" },
      { title: "AG05", src: "/flooreplan/UNIT PLAN/3BHK/JPG/AG05.jpg" },
      { title: "AG08", src: "/flooreplan/UNIT PLAN/3BHK/JPG/AG08.jpg" },
      { title: "AG09", src: "/flooreplan/UNIT PLAN/3BHK/JPG/AG09.jpg" },
      { title: "AG10", src: "/flooreplan/UNIT PLAN/3BHK/JPG/AG10.jpg" },
      { title: "AG11", src: "/flooreplan/UNIT PLAN/3BHK/JPG/AG11.jpg" },
      { title: "AG16", src: "/flooreplan/UNIT PLAN/3BHK/JPG/AG16.jpg" },
      { title: "AG24", src: "/flooreplan/UNIT PLAN/3BHK/JPG/AG24.jpg" },
      { title: "AG26", src: "/flooreplan/UNIT PLAN/3BHK/JPG/AG26.jpg" },
      { title: "AG34", src: "/flooreplan/UNIT PLAN/3BHK/JPG/AG34.jpg" },
      { title: "AG37", src: "/flooreplan/UNIT PLAN/3BHK/JPG/AG37.jpg" },
      { title: "B101", src: "/flooreplan/UNIT PLAN/3BHK/JPG/B101.jpg" },
      { title: "BG01", src: "/flooreplan/UNIT PLAN/3BHK/JPG/BG01.jpg" },
      { title: "BG28", src: "/flooreplan/UNIT PLAN/3BHK/JPG/BG28.jpg" },
      { title: "CG19", src: "/flooreplan/UNIT PLAN/3BHK/JPG/CG19.jpg" },
    ],
  },
   
];

const PreviewModal = ({ previewImage, setPreviewImage }) => {
  if (!previewImage) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
      <button
        type="button"
        onClick={() => setPreviewImage(null)}
        className="absolute inset-0"
        aria-label="Close preview"
      />

      <div className="relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[24px] bg-white shadow-2xl md:rounded-[28px]">
        <div className="flex items-center justify-between border-b border-zinc-100 p-4">
          <div></div>
          <button
            type="button"
            onClick={() => setPreviewImage(null)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-950 transition hover:bg-zinc-950 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        <div className="max-h-[78vh] overflow-auto bg-zinc-50 p-4">
          <img
            src={previewImage.src}
            alt={previewImage.title}
            className="mx-auto h-auto max-w-full rounded-2xl bg-white object-contain"
          />
        </div>
      </div>
    </div>
  );
};

/* =====================================================
   VARIATION 1 — Clean Light Tabs + Cards
===================================================== */

export const FloorPlanVariationOne = () => {
  const { openLeadForm } = useLeadForm();
  const [activeTab, setActiveTab] = useState("2bhk");
  const [previewImage, setPreviewImage] = useState(null);

  const activeGroup = useMemo(
    () => floorPlanGroups.find((group) => group.id === activeTab),
    [activeTab]
  );

  const totalImages = floorPlanGroups.reduce(
    (total, group) => total + group.images.length,
    0
  );

  return (
    <section
      id="floor-plan"
      className="relative overflow-hidden bg-[#faf7f1] px-4 py-12 md:py-20"
    >
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--accent)]/15 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-8 grid   md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[4px] text-[var(--accent)]">
              Floor Plans
            </p>

            <h2 className="section-title mt-3">
              Explore Project{" "}
              <span className="text-[var(--accent)]">Layouts</span>
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-zinc-600 md:ml-auto md:text-right md:text-base">
            Browse basement, clubhouse, site plan, floor plans, and detailed
            1 BHK, 2 BHK, and 3 BHK unit layouts.
          </p>
        </div>

      

        <div className="mb-5 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mb-7">
          {floorPlanGroups.map((group) => {
            const Icon = group.icon;
            const isActive = activeTab === group.id;

            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setActiveTab(group.id)}
                className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-3 text-xs font-bold uppercase tracking-[1px] transition ${
                  isActive
                    ? "bg-zinc-950 text-white"
                    : "bg-white text-zinc-600 hover:bg-[var(--accent)] hover:text-white"
                }`}
              >
                <Icon size={15} />
                {group.label}
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] ${
                    isActive ? "bg-white/15 text-white" : "bg-zinc-100"
                  }`}
                >
                  {group.images.length}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mb-5 flex flex-col gap-3 rounded-[26px] bg-white p-4 shadow-sm md:mb-6 md:flex-row md:items-center md:justify-between md:p-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[2px] text-[var(--accent)]">
              Selected Category
            </p>

            <h3 className="mt-1 text-xl font-black text-zinc-950 md:text-2xl">
              {activeGroup?.label} Plans
            </h3>
          </div>

          <button
            type="button"
            onClick={openLeadForm}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-xs font-bold uppercase tracking-[1.2px] text-white transition hover:bg-zinc-950"
          >
            <Download size={15} />
            Get Floor Plan PDF
          </button>
        </div>

        <div className="grid gap- grid-cols-2 lg:grid-cols-3">
          {activeGroup?.images.map((item, index) => (
            <div
              key={`${activeGroup.id}-${index}`}
              className="group overflow-hidden      "
            >
              <button
                type="button"
                onClick={() => setPreviewImage(item)}
                className="relative  ]"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-contain p-3 transition duration-700 group-hover:scale-105"
                />

                <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-white opacity-0 transition group-hover:opacity-100">
                  <Maximize2 size={17} />
                </div>
              </button>

            
            </div>
          ))}
        </div>
      </div>

      <PreviewModal
        previewImage={previewImage}
        setPreviewImage={setPreviewImage}
      />
    </section>
  );
};

/* =====================================================
   VARIATION 2 — Dark Luxury Floor Plan Gallery
===================================================== */

export const FloorPlanVariationTwo = () => {
  const { openLeadForm } = useLeadForm();
  const [activeTab, setActiveTab] = useState("2bhk");
  const [previewImage, setPreviewImage] = useState(null);

  const activeGroup = useMemo(
    () => floorPlanGroups.find((group) => group.id === activeTab),
    [activeTab]
  );

  return (
    <section
      id="floor-plan"
      className="relative overflow-hidden bg-[#0c0c0c] px-4 py-12 text-white md:py-20"
    >
      <div className="absolute left-1/2 top-0 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[var(--accent)]/10 blur-[150px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:54px_54px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-[var(--accent)]/25 bg-[var(--accent)]/10 px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-[var(--accent)]">
            Floor Plan Gallery
          </span>

          <h2 className="section-title section-title-on-dark">
            Explore Premium{" "}
            <span className="text-[var(--accent)]">Layouts</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
            View detailed plans across site, clubhouse, floor plans, and
            apartment unit layouts.
          </p>
        </div>

        <div className="mb-7 flex gap-2 overflow-x-auto rounded-full border border-white/10 bg-white/[0.04] p-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {floorPlanGroups.map((group) => {
            const Icon = group.icon;
            const isActive = activeTab === group.id;

            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setActiveTab(group.id)}
                className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-[1px] transition ${
                  isActive
                    ? "bg-[var(--accent)] text-white"
                    : "text-zinc-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon size={15} />
                {group.label}
              </button>
            );
          })}
        </div>

        <div className="mb-6 rounded-[32px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[2px] text-[var(--accent)]">
                {activeGroup?.images.length} layouts available
              </p>
              <h3 className="mt-1 text-2xl font-black text-white">
                {activeGroup?.label} Plans
              </h3>
            </div>

            <button
              type="button"
              onClick={openLeadForm}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold uppercase tracking-[1.2px] text-zinc-950 transition hover:bg-[var(--accent)] hover:text-white"
            >
              <Download size={15} />
              Get PDF
            </button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activeGroup?.images.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_24px_80px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:border-[var(--accent)]/40"
            >
              <button
                type="button"
                onClick={() => setPreviewImage(item)}
                className="relative h-[260px] w-full overflow-hidden bg-white md:h-[330px]"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-contain p-3 transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

                <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-white opacity-0 transition group-hover:opacity-100">
                  <Maximize2 size={17} />
                </div>
              </button>

              <div className="p-4">
                <p className="text-[10px] font-bold uppercase tracking-[2px] text-[var(--accent)]">
                  {activeGroup.label}
                </p>
                <h4 className="mt-1 text-base font-black text-white">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PreviewModal
        previewImage={previewImage}
        setPreviewImage={setPreviewImage}
      />
    </section>
  );
};

/* =====================================================
   VARIATION 3 — Left Sidebar Categories
===================================================== */

export const FloorPlanVariationThree = () => {
  const { openLeadForm } = useLeadForm();
  const [activeTab, setActiveTab] = useState("2bhk");
  const [previewImage, setPreviewImage] = useState(null);

  const activeGroup = useMemo(
    () => floorPlanGroups.find((group) => group.id === activeTab),
    [activeTab]
  );

  return (
    <section
      id="floor-plan"
      className="relative overflow-hidden bg-white px-4 py-12 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[4px] text-[var(--accent)]">
              Layout Library
            </p>

            <h2 className="section-title mt-3">
              Browse Floor{" "}
              <span className="text-[var(--accent)]">Plan Gallery</span>
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-zinc-600 md:ml-auto md:text-right md:text-base">
            Choose a category and explore available layout images in one clean
            gallery.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <div className="rounded-[32px] border border-zinc-100 bg-[#faf7f1] p-4 shadow-sm lg:sticky lg:top-24 lg:h-fit">
            <div className="mb-4 rounded-3xl bg-zinc-950 p-5 text-white">
              <Grid3X3 size={25} className="mb-3 text-[var(--accent)]" />
              <h3 className="text-xl font-black">Plan Categories</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Select layout type to view plans.
              </p>
            </div>

            <div className="space-y-2">
              {floorPlanGroups.map((group) => {
                const Icon = group.icon;
                const isActive = activeTab === group.id;

                return (
                  <button
                    key={group.id}
                    type="button"
                    onClick={() => setActiveTab(group.id)}
                    className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition ${
                      isActive
                        ? "bg-[var(--accent)] text-white"
                        : "bg-white text-zinc-700 hover:bg-zinc-950 hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-[1px]">
                      <Icon size={16} />
                      {group.label}
                    </span>

                    <span className="rounded-full bg-black/10 px-2 py-0.5 text-[10px] font-bold">
                      {group.images.length}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={openLeadForm}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-xs font-bold uppercase tracking-[1.2px] text-white transition hover:bg-[var(--accent)]"
            >
              <Download size={15} />
              Get Floor Plan PDF
            </button>
          </div>

          <div>
            <div className="mb-5 flex items-center justify-between rounded-[28px] border border-zinc-100 bg-[#faf7f1] p-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[2px] text-[var(--accent)]">
                  Current Selection
                </p>
                <h3 className="mt-1 text-2xl font-black text-zinc-950">
                  {activeGroup?.label}
                </h3>
              </div>

              <p className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[1px] text-zinc-600">
                {activeGroup?.images.length} Images
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {activeGroup?.images.map((item, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-[26px] border border-zinc-100 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.06)] transition hover:-translate-y-1"
                >
                  <button
                    type="button"
                    onClick={() => setPreviewImage(item)}
                    className="relative h-[250px] w-full bg-zinc-50 md:h-[310px]"
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="h-full w-full object-contain p-3 transition group-hover:scale-105"
                    />

                    <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-white">
                      <Maximize2 size={17} />
                    </div>
                  </button>

                  <div className="p-4">
                    <h4 className="text-base font-black text-zinc-950">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PreviewModal
        previewImage={previewImage}
        setPreviewImage={setPreviewImage}
      />
    </section>
  );
};

/* =====================================================
   VARIATION 4 — Compact Mobile Friendly Slider Style
===================================================== */

export const FloorPlanVariationFour = () => {
  const { openLeadForm } = useLeadForm();
  const [activeTab, setActiveTab] = useState("2bhk");
  const [previewImage, setPreviewImage] = useState(null);

  const activeGroup = useMemo(
    () => floorPlanGroups.find((group) => group.id === activeTab),
    [activeTab]
  );

  return (
    <section
      id="floor-plan"
      className="relative overflow-hidden bg-[#faf7f1] px-4 py-10 md:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[4px] text-[var(--accent)]">
            Floor Plans
          </p>

          <h2 className="section-title mt-3">
            Project <span className="text-[var(--accent)]">Layouts</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-zinc-600 md:text-base">
            Select a category and swipe through available floor plan images.
          </p>
        </div>

        <div className="-mx-4 mb-5 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {floorPlanGroups.map((group) => {
            const Icon = group.icon;
            const isActive = activeTab === group.id;

            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setActiveTab(group.id)}
                className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-[11px] font-bold uppercase tracking-[1px] transition ${
                  isActive
                    ? "bg-zinc-950 text-white"
                    : "bg-white text-zinc-700"
                }`}
              >
                <Icon size={14} />
                {group.label}
              </button>
            );
          })}
        </div>

        <div className="mb-5 flex items-center justify-between rounded-[24px] bg-white p-4 shadow-sm">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[2px] text-[var(--accent)]">
              {activeGroup?.images.length} Layouts
            </p>
            <h3 className="mt-1 text-xl font-black text-zinc-950">
              {activeGroup?.label}
            </h3>
          </div>

          <button
            type="button"
            onClick={openLeadForm}
            className="rounded-full bg-[var(--accent)] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[1px] text-white"
          >
            Get PDF
          </button>
        </div>

        <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {activeGroup?.images.map((item, index) => (
            <div
              key={index}
              className="w-[82vw] shrink-0 snap-center overflow-hidden rounded-[28px] bg-white shadow-[0_18px_60px_rgba(0,0,0,0.08)] sm:w-[420px]"
            >
              <button
                type="button"
                onClick={() => setPreviewImage(item)}
                className="relative h-[340px] w-full bg-zinc-50"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-contain p-4"
                />

                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-white">
                  <Maximize2 size={17} />
                </div>
              </button>

              <div className="p-4">
                <p className="text-[10px] font-bold uppercase tracking-[2px] text-[var(--accent)]">
                  {activeGroup.label}
                </p>
                <h4 className="mt-1 text-base font-black text-zinc-950">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PreviewModal
        previewImage={previewImage}
        setPreviewImage={setPreviewImage}
      />
    </section>
  );
};

/* =====================================================
   VARIATION 5 — Premium Featured + Thumbnail Grid
===================================================== */

export const FloorPlanVariationFive = () => {
  const { openLeadForm } = useLeadForm();
  const [activeTab, setActiveTab] = useState("2bhk");
  const [activeImage, setActiveImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const activeGroup = useMemo(
    () => floorPlanGroups.find((group) => group.id === activeTab),
    [activeTab]
  );

  const selectedImage = activeImage || activeGroup?.images[0];

  const handleTabChange = (id) => {
    setActiveTab(id);
    setActiveImage(null);
  };

  return (
    <section
      id="floor-plan"
      className="relative overflow-hidden bg-white px-4 py-12 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[4px] text-[var(--accent)]">
              Floor Plan Viewer
            </p>

            <h2 className="section-title mt-3">
              Select & Preview{" "}
              <span className="text-[var(--accent)]">Layouts</span>
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-zinc-600 md:ml-auto md:text-right md:text-base">
            Browse plans with a large preview area and quick thumbnail
            navigation.
          </p>
        </div>

        <div className="mb-6 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {floorPlanGroups.map((group) => {
            const Icon = group.icon;
            const isActive = activeTab === group.id;

            return (
              <button
                key={group.id}
                type="button"
                onClick={() => handleTabChange(group.id)}
                className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-3 text-xs font-bold uppercase tracking-[1px] transition ${
                  isActive
                    ? "bg-[var(--accent)] text-white"
                    : "bg-[#faf7f1] text-zinc-700 hover:bg-zinc-950 hover:text-white"
                }`}
              >
                <Icon size={15} />
                {group.label}
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="overflow-hidden rounded-[34px] border border-zinc-100 bg-[#faf7f1] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
            <button
              type="button"
              onClick={() => setPreviewImage(selectedImage)}
              className="relative h-[420px] w-full overflow-hidden rounded-[26px] bg-white md:h-[620px]"
            >
              <img
                src={selectedImage?.src}
                alt={selectedImage?.title}
                className="h-full w-full object-contain p-4"
              />

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-white/90 p-4 backdrop-blur">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[2px] text-[var(--accent)]">
                    {activeGroup?.label}
                  </p>
                  <h3 className="mt-1 text-lg font-black text-zinc-950">
                    {selectedImage?.title}
                  </h3>
                </div>

                <Maximize2 size={20} className="text-zinc-950" />
              </div>
            </button>
          </div>

          <div>
            <div className="mb-4 rounded-[28px] bg-zinc-950 p-5 text-white">
              <FileImage size={24} className="mb-3 text-[var(--accent)]" />
              <h3 className="text-2xl font-black">{activeGroup?.label}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {activeGroup?.images.length} layout images available.
              </p>

              <button
                type="button"
                onClick={openLeadForm}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-xs font-bold uppercase tracking-[1.2px] text-white"
              >
                <Download size={15} />
                Get PDF
              </button>
            </div>

            <div className="grid max-h-[540px] gap-3 overflow-y-auto pr-1 sm:grid-cols-2">
              {activeGroup?.images.map((item, index) => {
                const isSelected = selectedImage?.src === item.src;

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveImage(item)}
                    className={`overflow-hidden rounded-[22px] border bg-white p-2 text-left transition ${
                      isSelected
                        ? "border-[var(--accent)] ring-2 ring-[var(--accent)]/20"
                        : "border-zinc-100 hover:border-zinc-300"
                    }`}
                  >
                    <div className="h-[130px] overflow-hidden rounded-2xl bg-zinc-50">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="h-full w-full object-contain p-2"
                      />
                    </div>

                    <p className="mt-2 px-1 text-xs font-black text-zinc-950">
                      {item.title}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <PreviewModal
        previewImage={previewImage}
        setPreviewImage={setPreviewImage}
      />
    </section>
  );
};

/*
  Change default export to any variation:

  FloorPlanVariationOne
  FloorPlanVariationTwo
  FloorPlanVariationThree
  FloorPlanVariationFour
  FloorPlanVariationFive
*/

export default FloorPlanVariationOne;
