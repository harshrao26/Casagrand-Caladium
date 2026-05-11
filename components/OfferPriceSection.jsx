"use client";

import React from "react";
import { BadgePercent, Download, TrendingDown } from "lucide-react";
import { useLeadForm } from "./LeadFormContext";

const offers = [
  {
    project: "Kumbalgodu",
    type: "2 BHK",
    earlyBirdRate: "₹4,999",
    launchRate: "₹5,199",
    area: "1171 - 1470 Sq.ft",
    earlyBirdPrice: "₹70L - ₹84L",
    launchPrice: "₹72L - ₹86L",
    saving: "Save up to ₹2L",
  },
  {
    project: "Kumbalgodu",
    type: "3 BHK",
    earlyBirdRate: "₹4,999",
    launchRate: "₹5,199",
    area: "1641 - 1866 Sq.ft",
    earlyBirdPrice: "₹94L - ₹1.04Cr",
    launchPrice: "₹97L - ₹1.08Cr",
    saving: "Save up to ₹4L",
  },
];

const OfferVariationThree = () => {
  const { openLeadForm } = useLeadForm();

  return (
    <section
      id="offer-price"
      className="relative overflow-hidden bg-[#faf7f1] px-4 py-10 md:py-16"
    >
      <div className="absolute left-1/2 top-0 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-[var(--accent)]/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/10 px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-[var(--accent)]">
            <BadgePercent size={15} />
            Launch Price Table
          </span>

          <h2 className="section-title">
            Kumbalgodu{" "}
            <span className="text-[var(--accent)]">Early Bird Offer</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-600 md:text-base">
            Compare early bird pricing with launch pricing and secure your
            preferred unit at the offer price.
          </p>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
           <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--accent)]/10 blur-[140px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent,rgba(168,117,34,0.04))]" />


          {/* Desktop Table */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-[1.1fr_0.7fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] bg-[var(--secondary-1)]  text-center text-xs font-black uppercase tracking-[1px] text-white">
              <div className="border-t border-white/10 p-4">Project Name</div>
              <div className="border-t border-l border-white/10 p-4">BHK</div>
              <div className="border-t border-l border-white/10 p-4">
                Early Bird / Sq.ft
              </div>
              <div className="border-t border-l border-white/10 p-4">
                Launch / Sq.ft
              </div>
              <div className="border-t border-l border-white/10 p-4">
                Area From
              </div>
              <div className="border-t border-l border-white/10 p-4">
                Area To
              </div>
              <div className="border-t border-l border-white/10 p-4">
                Early From
              </div>
              <div className="border-t border-l border-white/10 p-4">
                Early To
              </div>
              <div className="border-t border-l border-white/10 p-4">
                Launch Price
              </div>
            </div>

            {offers.map((item, index) => {
              const [areaFrom, areaTo] = item.area
                .replace(" Sq.ft", "")
                .split(" - ");
              const [earlyFrom, earlyTo] = item.earlyBirdPrice.split(" - ");

              return (
                <div
                  key={index}
                  className="grid grid-cols-[1.1fr_0.7fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] border-t border-zinc-200 text-center text-sm text-zinc-950 transition hover:bg-[var(--accent)]/5"
                >
                  <div className="bg-[var(--accent)]/10 p-4 font-bold uppercase text-zinc-950">
                    {item.project}
                  </div>

                  <div className="border-l border-zinc-200 bg-white p-4 font-bold">
                    {item.type}
                  </div>

                  <div className="border-l border-zinc-200 bg-[var(--accent)]/10 p-4 font-black text-[var(--accent)]">
                    4999
                  </div>

                  <div className="border-l border-zinc-200 bg-white p-4 font-bold text-zinc-700">
                    5199
                  </div>

                  <div className="border-l border-zinc-200 bg-zinc-50 p-4 font-semibold">
                    {areaFrom}
                  </div>

                  <div className="border-l border-zinc-200 bg-zinc-50 p-4 font-semibold">
                    {areaTo}
                  </div>

                  <div className="border-l border-zinc-200 bg-[var(--accent)]/10 p-4 font-black text-[var(--accent)]">
                    {earlyFrom}
                  </div>

                  <div className="border-l border-zinc-200 bg-[var(--accent)]/10 p-4 font-black text-[var(--accent)]">
                    {earlyTo}
                  </div>

                  <div className="border-l border-zinc-200 bg-zinc-50 p-4 font-bold text-zinc-800">
                    {item.launchPrice}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Cards */}
          <div className="grid gap-px bg-zinc-200 lg:hidden">
            {offers.map((item, index) => (
              <div key={index} className="bg-white p-4">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[2px] text-[var(--accent)]">
                      {item.project}
                    </p>

                    <h3 className="mt-1 text-2xl font-black text-zinc-950">
                      {item.type}
                    </h3>
                  </div>

                  <span className="rounded-full bg-zinc-950 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[1px] text-white">
                    {item.saving}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div className="rounded-2xl border border-[var(--accent)]/20 bg-[var(--accent)]/10 p-3">
                    <p className="text-[9px] font-bold uppercase tracking-[1.3px] text-zinc-500">
                      Early Bird
                    </p>
                    <h4 className="mt-1.5 text-base font-black text-[var(--accent)]">
                      {item.earlyBirdRate}
                    </h4>
                  </div>

                  <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-3">
                    <p className="text-[9px] font-bold uppercase tracking-[1.3px] text-zinc-500">
                      Launch
                    </p>
                    <h4 className="mt-1.5 text-base font-black text-zinc-950">
                      {item.launchRate}
                    </h4>
                  </div>

                  <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-3">
                    <p className="text-[9px] font-bold uppercase tracking-[1.3px] text-zinc-500">
                      Area
                    </p>
                    <h4 className="mt-1.5 text-xs font-bold leading-5 text-zinc-950">
                      {item.area}
                    </h4>
                  </div>

                  <div className="rounded-2xl border border-[var(--accent)]/20 bg-[var(--accent)]/10 p-3">
                    <p className="text-[9px] font-bold uppercase tracking-[1.3px] text-zinc-500">
                      Offer Price
                    </p>
                    <h4 className="mt-1.5 text-xs font-black leading-5 text-[var(--accent)]">
                      {item.earlyBirdPrice}
                    </h4>
                  </div>

                  <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-3">
                    <p className="text-[9px] font-bold uppercase tracking-[1.3px] text-zinc-500">
                      Launch Price
                    </p>
                    <h4 className="mt-1.5 text-xs font-black leading-5 text-zinc-950">
                      {item.launchPrice}
                    </h4>
                  </div>

                  <div className="rounded-2xl border border-zinc-100 bg-zinc-950 p-3">
                    <p className="text-[9px] font-bold uppercase tracking-[1.3px] text-zinc-400">
                      Saving
                    </p>
                    <h4 className="mt-1.5 text-xs font-black leading-5 text-white">
                      {item.saving}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={openLeadForm}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-xs font-bold uppercase tracking-[1.4px] text-white transition hover:bg-zinc-950"
          >
            <Download size={16} />
            Get Offer Details
          </button>

          <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold uppercase tracking-[1.3px] text-zinc-600 shadow-sm">
            <TrendingDown size={15} className="text-[var(--accent)]" />
            Early Bird Price Saves More
          </div>
        </div>

        <p className="mx-auto mt-4 max-w-2xl text-center text-[11px] leading-5 text-zinc-500">
          *Prices are indicative and subject to change. Please confirm final
          price, availability, and applicable charges with the sales team.
        </p>
      </div>
    </section>
  );
};

export default OfferVariationThree;