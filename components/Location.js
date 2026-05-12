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
      icon: Train,
      label: "Metro Rail Station",
      dist: "5 Min",
      km: "1.5 Km",
      type: "Transport",
    },
    {
      icon: Hospital,
      label: "Lotus Speciality Hospital",
      dist: "3 Min",
      km: "0.85 Km",
      type: "Hospital",
    },
    {
      icon: Hospital,
      label: "Metro Super Speciality Hospital",
      dist: "4 Min",
      km: "1 Km",
      type: "Hospital",
    },
    {
      icon: School,
      label: "Bharath Global School",
      dist: "2 Min",
      km: "0.5 Km",
      type: "School",
    },
    {
      icon: GraduationCap,
      label: "Indo Scots Global School",
      dist: "5 Min",
      km: "1.5 Km",
      type: "School",
    },
    {
      icon: School,
      label: "Euro CBSE School",
      dist: "6 Min",
      km: "2 Km",
      type: "School",
    },
    {
      icon: Store,
      label: "Decathlon",
      dist: "6 Min",
      km: "2 Km",
      type: "Retail",
    },
    {
      icon: Store,
      label: "DMart",
      dist: "7 Min",
      km: "2.3 Km",
      type: "Daily Convenience",
    },
    {
      icon: Building2,
      label: "International Tech Park",
      dist: "8 Min",
      km: "3 Km",
      type: "Business Hub",
    },
    {
      icon: Building2,
      label: "EON IT Park",
      dist: "10 Min",
      km: "4 Km",
      type: "IT Hub",
    },
    {
      icon: Hospital,
      label: "Manipal Hospital",
      dist: "12 Min",
      km: "5 Km",
      type: "Hospital",
    },
    {
      icon: School,
      label: "Podar International School",
      dist: "12 Min",
      km: "5 Km",
      type: "School",
    },
    {
      icon: Store,
      label: "Phoenix Mall",
      dist: "18 Min",
      km: "7 Km",
      type: "Shopping",
    },
    {
      icon: Store,
      label: "Amanora Mall",
      dist: "22 Min",
      km: "9 Km",
      type: "Shopping",
    },
    {
      icon: Bus,
      label: "Pune International Airport",
      dist: "25 Min",
      km: "10 Km",
      type: "Airport",
    },
  ];

  const featured = [
    {
      icon: Train,
      label: "Metro Rail Station",
      dist: "5 Min",
      km: "1.5 Km",
    },
    {
      icon: Building2,
      label: "International Tech Park",
      dist: "8 Min",
      km: "3 Km",
    },
    {
      icon: Building2,
      label: "EON IT Park",
      dist: "10 Min",
      km: "4 Km",
    },
    {
      icon: Bus,
      label: "Pune International Airport",
      dist: "25 Min",
      km: "10 Km",
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
              Upper Kharadi{" "}
              <span className="text-[var(--accent)]">Connectivity</span>
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-gray-400 md:ml-auto md:text-right md:text-base">
            Enjoy quick access to metro connectivity, Pune International
            Airport, IT parks, schools, hospitals, shopping destinations, and
            everyday conveniences around Upper Kharadi and Wagholi.
          </p>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-2 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl md:rounded-[36px] md:p-3 md:shadow-[0_35px_120px_rgba(0,0,0,0.55)]">
          <div className="relative h-[340px] overflow-hidden rounded-[22px] md:h-[560px] md:rounded-[28px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.042484534388!2d73.9718762755476!3d18.572123282531447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c31f9fbe5ce3%3A0x8eb871993b2d1a0e!2sCasagrand%20Caladium%20Pune!5e0!3m2!1sen!2sin!4v1778569271108!5m2!1sen!2sin"
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
                    Casagrand Caladium, Upper Kharadi, Pune
                  </h3>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Casagrand%20Caladium%20Upper%20Kharadi%20Pune"
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
              Key landmarks around Casagrand Caladium
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