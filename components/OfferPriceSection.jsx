"use client";

import React from "react";
import { BadgePercent, Download, TrendingDown } from "lucide-react";
import { useLeadForm } from "./LeadFormContext";

const offers = [
  {
    project: "Casagrand Caladium",
    type: "2 BHK",
    launchRate: "₹12,800*",
    area: "937 - 1119 Sq.ft",
    launchPrice: "₹1.20 Cr - ₹1.43 Cr",
    saving: "Premium 2 BHK",
  },
  {
    project: "Casagrand Caladium",
    type: "3 BHK",
    launchRate: "₹13,000*",
    area: "1293 - 1295 Sq.ft",
    launchPrice: "₹1.69 Cr Onwards",
    saving: "Spacious 3 BHK",
  },
  {
    project: "Casagrand Caladium",
    type: "3 BHK",
    launchRate: "₹13,200*",
    area: "1296 - 1325 Sq.ft",
    launchPrice: "₹1.72 Cr - ₹1.76 Cr",
    saving: "Luxury 3 BHK",
  },
];

const OfferVariationThree = () => {
  const { openLeadForm } = useLeadForm();

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#faf7f1] py-10"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/10 px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-[var(--accent)]">
            <BadgePercent size={15} />
            Price & Configuration
          </span>

          <h2 className="section-title">
            Casagrand Caladium{" "}
            <span className="text-[var(--accent)]">Price Details</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-600 md:text-base">
            Explore thoughtfully planned 2 & 3 BHK residences at Upper Kharadi,
            Pune with premium specifications, open spaces, and 110+ lifestyle
            amenities.
          </p>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--accent)]/10 blur-[140px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent,rgba(168,117,34,0.04))]" />

          {/* Desktop Table */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-[1.1fr_0.7fr_1.1fr_1.4fr] bg-[var(--secondary-1)] text-center text-xs font-black uppercase tracking-[1px] text-white">
               <div className="border-t border-l border-white/10 p-4">BHK</div>
              <div className="border-t border-l border-white/10 p-4">
                Price / Sq.ft
              </div>
              <div className="border-t border-l border-white/10 p-4">
                Area (Sq.ft)
              </div>
              <div className="border-t border-l border-white/10 p-4">
                Starting Price
              </div>
            </div>

            {offers.map((item, index) => {
              return (
                <div
                  key={index}
                  className="grid grid-cols-[1.1fr_0.7fr_1.1fr_1.4fr] border-t border-zinc-200 text-center text-sm text-zinc-950 transition hover:bg-[var(--accent)]/5"
                >
                  

                  <div className="border-l border-zinc-200 bg-white p-4 font-bold">
                    {item.type}
                  </div>

                  <div className="border-l border-zinc-200 bg-white p-4 font-bold text-zinc-700">
                    {item.launchRate}
                  </div>

                  <div className="border-l border-zinc-200 bg-zinc-50 p-4 font-semibold">
                    {item.area}
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

                    <h3 className="mt-1 text-lg font-black text-zinc-950 md:text-2xl">
                      {item.type}
                    </h3>
                  </div>

                  <span className="rounded-full bg-[#C98D2D] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[1px] text-white">
                    {item.saving}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-3">
                    <p className="text-[9px] font-bold uppercase tracking-[1.3px] text-zinc-500">
                      Price / Sq.ft
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

                  <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-3">
                    <p className="text-[9px] font-bold uppercase tracking-[1.3px] text-zinc-500">
                      Starting Price
                    </p>
                    <h4 className="mt-1.5 text-xs font-black leading-5 text-zinc-950">
                      {item.launchPrice}
                    </h4>
                  </div>

                  <div className="rounded-2xl border border-zinc-100 bg-[#2F5544] p-3">
                    <p className="text-[9px] font-bold uppercase tracking-[1.3px] text-zinc-400">
                      Category
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

        

        <p className="mx-auto mt-4 max-w-2xl text-center text-[11px] leading-5 text-zinc-500">
          *Prices are indicative and subject to change. Please confirm final
          price, availability, floor rise, taxes, and applicable charges with
          the sales team.
        </p>
      </div>
    </section>
  );
};

export default OfferVariationThree;