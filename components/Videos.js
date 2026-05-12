"use client";

import React, { useState } from "react";
import { Play, Film } from "lucide-react";

const Videos = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Top  Reasons to Buy",
      desc: "A quick overview of the project’s strongest lifestyle and investment highlights.",
      videoUrl: "https://www.youtube.com/embed/hgDJPI8wFpo?start=10",
    },
    {
      title: "Walkthrough",
      desc: "Explore the project visuals through a detailed walkthrough video.",
      videoUrl: "https://www.youtube.com/embed/aR74le2OvPU",
    },
  ];

  return (
    <section id="videos" className="relative overflow-hidden bg-[#F4EFE3] px-4 py-16 md:py-24">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-[var(--accent)]">
            <Film size={14} />
            Video Tour
          </span>

          <h2 className="section-title">
            Explore the Project Through{" "}
            <span className="text-[var(--accent)]">Videos</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-600 md:text-base">
            Watch curated videos that explain the project highlights,
            walkthrough experience, and reasons to choose Casagrand Caladium.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[36px] bg-zinc-950 p-2 shadow-[0_40px_120px_rgba(0,0,0,0.22)]">
          <iframe
            key={tabs[activeTab].videoUrl}
            className="aspect-video w-full rounded-[30px] bg-black"
            src={tabs[activeTab].videoUrl}
            title={tabs[activeTab].title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <div className="mt-8 grid gap-4  grid-cols-2">
          {tabs.map((tab, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveTab(index)}
              className={`group rounded-3xl border md:p-5 p-2 text-left transition-all ${
                activeTab === index
                  ? "border-[var(--accent)]/40 bg-[var(--accent)]/10"
                  : "border-zinc-100 bg-white hover:border-[var(--accent)]/30"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                    activeTab === index
                      ? "bg-[var(--accent)] text-black"
                      : "bg-zinc-100 text-zinc-800"
                  }`}
                >
                  <Play size={20} fill="currentColor" />
                </div>

                <div>
                  <h3 className="text-sm md:text-base font-semibold text-zinc-950">
                    {tab.title}
                  </h3>
                  <p className="mt-1 md:block hidden  text-sm leading-6 text-zinc-500">
                    {tab.desc}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;