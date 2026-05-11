"use client";

import React from "react";
import {
  BadgePercent,
  ArrowRight,
  TrendingDown,
  IndianRupee,
  Home,
} from "lucide-react";
import { useLeadForm } from "./LeadFormContext";

const offers = [
  {
    project: "Casagrand Moondance",
    type: "1 BHK",
    earlyBirdRate: "₹5,499",
    launchRate: "On Request",
    area: "880 - 1020 Sq.ft",
    earlyBirdPrice: "On Request",
    launchPrice: "Limited units",
    saving: "9 Units",
  },
  {
    project: "Casagrand Moondance",
    type: "2 BHK",
    earlyBirdRate: "₹5,499",
    launchRate: "₹86.22L",
    area: "1175 - 1455 Sq.ft",
    earlyBirdPrice: "₹86.22L onwards",
    launchPrice: "151 Units",
    saving: "From ₹86.22L",
  },
  {
    project: "Casagrand Moondance",
    type: "3 BHK",
    earlyBirdRate: "₹5,499",
    launchRate: "On Request",
    area: "1595 - 1890 Sq.ft",
    earlyBirdPrice: "On Request",
    launchPrice: "Affordable & Superior",
    saving: "344 Superior Units",
  },
];

const OfferPriceSection = () => {
  const { openLeadForm } = useLeadForm();

  return (
    <section
      id="offer-price"
      className="relative overflow-hidden bg-[#faf7f1] px-4 py-6 md:py-14"
    >
      <div className="absolute left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[var(--accent)]/15 blur-[100px] md:h-[420px] md:w-[420px] md:blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl overflow-hidden rounded-[24px] border border-zinc-200 bg-white shadow-[0_14px_45px_rgba(0,0,0,0.07)] md:rounded-[32px] md:shadow-[0_20px_70px_rgba(0,0,0,0.08)]">
        <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
          {/* Left Offer Panel */}
          <div className="relative overflow-hidden bg-[var(--accent)] p-4 text-white md:p-7 lg:p-8">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/25 blur-[55px] md:h-56 md:w-56 md:blur-[60px]" />
            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-black/10 blur-[60px] md:h-56 md:w-56 md:blur-[70px]" />

            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4 lg:block">
                <div>
                  <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[1.4px] text-white backdrop-blur md:mb-4 md:gap-2 md:px-3.5 md:py-2 md:text-[10px] md:tracking-[1.8px]">
                    <BadgePercent size={12} className="md:size-[14px]" />
                    New Launch Price
                  </span>

                  <h2 className="text-3xl font-black leading-none tracking-tight md:text-5xl md:leading-tight">
                    ₹5,499{" "}
                    <span className="block text-base font-black text-white/85 md:text-5xl">
                      Per Sq.ft
                    </span>
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={openLeadForm}
                  className="group mt-1 inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-white px-4 py-2.5 text-[10px] font-bold uppercase tracking-[1px] text-zinc-950 transition hover:bg-zinc-950 hover:text-white md:hidden"
                >
                  Book
                  <ArrowRight size={13} />
                </button>
              </div>

              <p className="mt-3 max-w-md text-xs font-medium leading-5 text-white/90 md:mt-4 md:text-sm md:leading-6">
                Basic rate as listed on the current Kumbalgodu launch page.
                Detailed cost sheets are available on request.
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2.5 md:mt-6 md:gap-3">
                <div className="rounded-2xl bg-white/15 p-3 backdrop-blur md:p-4">
                  <Home size={16} className="mb-1.5 text-white md:mb-2 md:size-[19px]" />
                  <p className="text-xl font-black md:text-2xl">2 BHK</p>
                  <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[1px] text-white/85 md:mt-1 md:text-[10px] md:tracking-[1.3px]">
                    From ₹86.22L
                  </p>
                </div>

                <div className="rounded-2xl bg-white/15 p-3 backdrop-blur md:p-4">
                  <Home size={16} className="mb-1.5 text-white md:mb-2 md:size-[19px]" />
                  <p className="text-xl font-black md:text-2xl">3 BHK</p>
                  <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[1px] text-white/85 md:mt-1 md:text-[10px] md:tracking-[1.3px]">
                    On Request
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={openLeadForm}
                className="group mt-6 hidden items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-[1.3px] text-zinc-950 transition hover:bg-zinc-950 hover:text-white md:inline-flex"
              >
                Request Cost Sheet
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="bg-white p-4 md:p-6 lg:p-7">
            <div className="mb-4 md:mb-5">
              <p className="text-[9px] font-bold uppercase tracking-[2px] text-[var(--accent)] md:text-[10px] md:tracking-[2.4px]">
                Casagrand Moondance Price Table
              </p>

              <h3 className="mt-1.5 text-xl font-black leading-tight text-zinc-950 md:mt-2 md:text-3xl">
                Configurations & Launch Pricing
              </h3>

              <p className="mt-2 hidden max-w-2xl text-sm leading-6 text-zinc-600 md:block">
                Explore 1, 2 and 3 BHK homes with current basic rate,
                availability, and launch pricing details.
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              {offers.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[20px] border border-zinc-100 bg-[#faf7f1] p-3 shadow-[0_10px_30px_rgba(0,0,0,0.035)] md:rounded-[24px] md:p-4 md:shadow-[0_12px_40px_rgba(0,0,0,0.04)]"
                >
                  <div className="mb-3 flex items-center justify-between gap-3 md:mb-4">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[1.5px] text-zinc-500 md:text-[10px] md:tracking-[1.8px]">
                        {item.project}
                      </p>

                      <h4 className="mt-0.5 text-xl font-black text-zinc-950 md:mt-1 md:text-2xl">
                        {item.type}
                      </h4>
                    </div>

                    <span className="rounded-full bg-zinc-950 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.8px] text-white md:px-3.5 md:py-2 md:text-[10px] md:tracking-[1px]">
                      {item.saving}
                    </span>
                  </div>

                  {/* Mobile Compact Rows */}
                  <div className="grid gap-2 md:hidden">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-2xl border border-zinc-100 bg-white p-3">
                        <div className="flex items-center gap-1.5">
                          <IndianRupee size={13} className="text-[var(--accent)]" />
                          <p className="text-[8px] font-bold uppercase tracking-[1.1px] text-zinc-400">
                            Basic Rate
                          </p>
                        </div>
                        <h5 className="mt-1 text-base font-black text-[var(--accent)]">
                          {item.earlyBirdRate}
                        </h5>
                      </div>

                      <div className="rounded-2xl border border-zinc-100 bg-white p-3">
                        <div className="flex items-center gap-1.5">
                          <TrendingDown size={13} className="text-zinc-500" />
                          <p className="text-[8px] font-bold uppercase tracking-[1.1px] text-zinc-400">
                            Price
                          </p>
                        </div>
                        <h5 className="mt-1 text-base font-black text-zinc-950">
                          {item.launchRate}
                        </h5>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="rounded-2xl bg-white p-3">
                        <p className="text-[8px] font-bold uppercase tracking-[1px] text-zinc-400">
                          Area
                        </p>
                        <h5 className="mt-1 text-[11px] font-bold leading-4 text-zinc-950">
                          {item.area}
                        </h5>
                      </div>

                      <div className="rounded-2xl bg-[var(--accent)]/10 p-3">
                        <p className="text-[8px] font-bold uppercase tracking-[1px] text-zinc-500">
                          Current
                        </p>
                        <h5 className="mt-1 text-[11px] font-black leading-4 text-[var(--accent)]">
                          {item.earlyBirdPrice}
                        </h5>
                      </div>

                      <div className="rounded-2xl bg-white p-3">
                        <p className="text-[8px] font-bold uppercase tracking-[1px] text-zinc-400">
                          Detail
                        </p>
                        <h5 className="mt-1 text-[11px] font-black leading-4 text-zinc-950">
                          {item.launchPrice}
                        </h5>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Original Grid */}
                  <div className="hidden grid-cols-2 gap-2.5 md:grid md:grid-cols-4">
                    <div className="rounded-2xl border border-zinc-100 bg-white p-3.5">
                      <IndianRupee
                        size={15}
                        className="mb-1.5 text-[var(--accent)]"
                      />
                      <p className="text-[9px] font-bold uppercase tracking-[1.3px] text-zinc-400">
                        Basic Rate
                      </p>
                      <h5 className="mt-1.5 text-lg font-black text-[var(--accent)]">
                        {item.earlyBirdRate}
                      </h5>
                      <p className="mt-0.5 text-[10px] text-zinc-400">
                        Per Sq.ft
                      </p>
                    </div>

                    <div className="rounded-2xl border border-zinc-100 bg-white p-3.5">
                      <TrendingDown
                        size={15}
                        className="mb-1.5 text-zinc-500"
                      />
                      <p className="text-[9px] font-bold uppercase tracking-[1.3px] text-zinc-400">
                        Price
                      </p>
                      <h5 className="mt-1.5 text-lg font-black text-zinc-950">
                        {item.launchRate}
                      </h5>
                      <p className="mt-0.5 text-[10px] text-zinc-400">
                        Per Sq.ft
                      </p>
                    </div>

                    <div className="rounded-2xl border border-zinc-100 bg-white p-3.5">
                      <p className="text-[9px] font-bold uppercase tracking-[1.3px] text-zinc-400">
                        Area
                      </p>
                      <h5 className="mt-2 text-xs font-bold leading-5 text-zinc-950">
                        {item.area}
                      </h5>
                    </div>

                    <div className="rounded-2xl border border-[var(--accent)]/20 bg-[var(--accent)]/10 p-3.5">
                      <p className="text-[9px] font-bold uppercase tracking-[1.3px] text-zinc-500">
                        Current Price
                      </p>
                      <h5 className="mt-2 text-xs font-black leading-5 text-[var(--accent)]">
                        {item.earlyBirdPrice}
                      </h5>
                    </div>
                  </div>

                  <div className="mt-2.5 hidden gap-2.5 rounded-2xl bg-white p-3.5 sm:grid sm:grid-cols-2">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[1.3px] text-zinc-400">
                        Launch Price
                      </p>
                      <h5 className="mt-1 text-sm font-black text-zinc-950">
                        {item.launchPrice}
                      </h5>
                    </div>

                    <div className="sm:text-right">
                      <p className="text-[9px] font-bold uppercase tracking-[1.3px] text-zinc-400">
                        Benefit
                      </p>
                      <h5 className="mt-1 text-sm font-black text-[var(--accent)]">
                        {item.saving}
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferPriceSection;
