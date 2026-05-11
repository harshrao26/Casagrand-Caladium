"use client";

import React from "react";
import {
  School,
  Hospital,
  Building2,
  Train,
  MapPin,
  Clock,
  Bus,
  Store,
  Route,
  GraduationCap,
} from "lucide-react";

const Location = () => {
  const essentials = [
    {
      icon: Bus,
      label: "Kambipura",
      dist: "1 Min",
      km: "0.2 Km",
      type: "Connectivity",
    },
    {
      icon: Route,
      label: "Govt SCL Road",
      dist: "5 Min",
      km: "1.3 Km",
      type: "Connectivity",
    },
    {
      icon: Train,
      label: "Challaghatta Metro Station",
      dist: "10 Min",
      km: "3.1 Km",
      type: "Transport",
    },
    {
      icon: Route,
      label: "NICE Road",
      dist: "12 Min",
      km: "4 Km",
      type: "Connectivity",
    },
    {
      icon: Store,
      label: "Decathlon Sports",
      dist: "14 Min",
      km: "5 Km",
      type: "Entertainment",
    },
    {
      icon: Train,
      label: "Kengeri Metro Station",
      dist: "15 Min",
      km: "5.3 Km",
      type: "Transport",
    },
    {
      icon: Bus,
      label: "Kengeri Railway Station",
      dist: "18 Min",
      km: "6.6 Km",
      type: "Transport",
    },
    {
      icon: Bus,
      label: "Kengeri Bus Terminal",
      dist: "21 Min",
      km: "7.8 Km",
      type: "Transport",
    },
    {
      icon: Building2,
      label: "Sattva Global City",
      dist: "20 Min",
      km: "8.5 Km",
      type: "Business Hub",
    },
    {
      icon: GraduationCap,
      label: "Don Bosco Institute of Technology",
      dist: "8 Min",
      km: "2.9 Km",
      type: "Institution",
    },
    {
      icon: Hospital,
      label: "Rajarajeshwari Medical College & Hospital",
      dist: "11 Min",
      km: "3.3 Km",
      type: "Hospital",
    },
    {
      icon: Hospital,
      label: "SPARSH Hospital",
      dist: "29 Min",
      km: "12 Km",
      type: "Hospital",
    },
  ];

  const featured = [
    {
      icon: Bus,
      label: "Kambipura",
      dist: "1 Min",
      km: "0.2 Km",
    },
    {
      icon: Route,
      label: "NICE Road",
      dist: "12 Min",
      km: "4 Km",
    },
    {
      icon: Train,
      label: "Challaghatta Metro Station",
      dist: "10 Min",
      km: "3.1 Km",
    },
    {
      icon: Train,
      label: "Kengeri Metro Station",
      dist: "15 Min",
      km: "5.3 Km",
    },
  ];

  return (
    <section
      id="location"
      className="relative overflow-hidden bg-[var(--secondary-1)] px-4 py-16 md:py-24"
    >
      <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[var(--accent)]/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-white/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-0 md:px-4">
        <div className="mb-10 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[4px] text-[var(--accent)]">
              Location Advantage
            </p>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-4xl">
              Kumbalgodu Nearby{" "}
              <span className="text-[var(--accent)]">Connectivity</span>
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-gray-400 md:ml-auto md:text-right md:text-base">
            Enjoy quick access to NICE Road, metro stations, railway
            connectivity, hospitals, education hubs, business destinations, and
            daily conveniences around Kumbalgodu.
          </p>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-2 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl md:rounded-[36px] md:p-3 md:shadow-[0_35px_120px_rgba(0,0,0,0.55)]">
          <div className="relative h-[340px] overflow-hidden rounded-[22px] md:h-[560px] md:rounded-[28px]">
            <iframe
              src="https://www.google.com/maps?q=VFF2%2BQRJ%2C%20off%20Mysore%20Road%2C%20Kumbalgodu%2C%20Bengaluru%2C%20Karnataka%20560074&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full contrast-125"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-black/45 p-4 text-center backdrop-blur-xl md:bottom-5 md:left-5 md:right-5 md:rounded-3xl md:p-5 md:text-left">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[3px] text-[var(--accent)]">
                    Project Location
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white md:text-2xl">
                    Casagrand Moondance, Kumbalgodu
                  </h3>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=VFF2%2BQRJ%2C%20off%20Mysore%20Road%2C%20Kumbalgodu%2C%20Bengaluru%2C%20Karnataka%20560074"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-bold text-white"
                >
                  <MapPin size={17} />
                  View Location
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Nearby */}
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {featured.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-[24px] border border-white/10 bg-white/[0.04] p-4 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/10 md:rounded-[28px] md:p-5"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[var(--accent)] transition-all duration-300 group-hover:bg-[var(--accent)] group-hover:text-black md:mb-4 md:h-14 md:w-14">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <p className="text-xs font-bold uppercase leading-5 tracking-[1px] text-white md:text-sm md:tracking-[1.2px]">
                  {item.label}
                </p>

                <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                  <p className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[1.2px] text-[var(--accent)] md:text-xs">
                    <Clock size={12} />
                    {item.dist}
                  </p>

                  <p className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[1.2px] text-white/70 md:text-xs">
                    {item.km}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full Nearby List */}
        <div className="mt-6 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl md:rounded-[34px]">
          <div className="border-b border-white/10 p-5 md:p-6">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[var(--accent)]">
              Nearby Places
            </p>
            <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">
              Key landmarks around the project
            </h3>
          </div>

          <div className="grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {essentials.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-[var(--secondary-1)] p-4 transition hover:bg-white/[0.06]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[var(--accent)]">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="line-clamp-2 text-sm font-bold leading-5 text-white">
                          {item.label}
                        </p>

                        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[1.4px] text-zinc-500">
                          {item.type}
                        </p>
                      </div>

                      <div className="shrink-0 text-right">
                        <p className="text-xs font-bold text-[var(--accent)]">
                          {item.dist}
                        </p>
                        <p className="mt-1 text-[10px] text-zinc-500">
                          {item.km}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
