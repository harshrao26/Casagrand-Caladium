"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Trophy,
  ShoppingCart,
  Flame,
  Dumbbell,
  Layout,
  Waves,
  Trees,
  Baby,
  Gamepad2,
  Volleyball,
  Film,
  Dog,
  Car,
  Zap,
  Coffee,
  BookOpen,
  BriefcaseBusiness,
  Scissors,
  HeartPulse,
  ShieldCheck,
  Footprints,
  Bath,
  CircleDot,
  Bike,
} from "lucide-react";

const amenities = [
  { icon: Trophy, label: "Golf Putting" },
  { icon: ShoppingCart, label: "Convenience Store" },
  { icon: Flame, label: "Barbeque Setup" },
  { icon: Dumbbell, label: "Gym" },
  { icon: Layout, label: "Courtyards" },
  { icon: Waves, label: "Swimming Pool" },
  { icon: Trees, label: "Forest Trail" },
  { icon: Baby, label: "Kids Play Area" },
  { icon: Gamepad2, label: "Games Room" },
  { icon: Volleyball, label: "Sports Court" },
  { icon: Film, label: "Sky Cinema" },
  { icon: Dog, label: "Pet Park" },
  { icon: Car, label: "Car Wash Bay" },
  { icon: Zap, label: "EV Charging" },
  { icon: Coffee, label: "Coffee Shop" },
  { icon: BookOpen, label: "Library" },
  { icon: BriefcaseBusiness, label: "Co-working Space" },
  { icon: Scissors, label: "Salon & Spa" },
  { icon: HeartPulse, label: "Clinic & Pharmacy" },
  { icon: ShieldCheck, label: "CCTV Security" },
  { icon: Footprints, label: "Walking Trail" },
  { icon: Bath, label: "Jacuzzi & Steam" },
  { icon: CircleDot, label: "Cricket Net" },
  { icon: Bike, label: "Skating Rink" },
];

const chunkItems = (items, size) => {
  return Array.from({ length: Math.ceil(items.length / size) }, (_, index) =>
    items.slice(index * size, index * size + size)
  );
};

const AmenitiesVariationSeven = () => {
  /*
    Desktop: 3 rows x 6 columns = 18 items per slide
    Mobile:  3 rows x 3 columns = 9 items per slide
  */
  const [isMobile, setIsMobile] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const itemsPerPage = isMobile ? 9 : 18;

  const pages = useMemo(() => {
    return chunkItems(amenities, itemsPerPage);
  }, [itemsPerPage]);

  useEffect(() => {
    setActivePage(0);
  }, [itemsPerPage]);
  useEffect(() => {
    if (pages.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setActivePage((prev) => (prev + 1) % pages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [pages.length, isPaused]);

  return (
    <section
      id="amenities"
      className="relative overflow-hidden bg-white px-4 py-16 md:py-24"
    >
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--accent)]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between   md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[4px] text-[var(--accent)]">
              Amenities
            </p>

            <h2 className="section-title mt-3">
              Elite Living{" "}
              <span className="text-[var(--accent)]">Amenities</span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-zinc-600 md:text-base">
            Explore sports, leisure, convenience, wellness, security and
            lifestyle amenities crafted for a premium community experience.
          </p>
        </div>

        {/* Slider */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="overflow-hidden rounded-[36px] border border-zinc-200 bg-zinc-200"
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${activePage * 100}%)`,
            }}
          >
            {pages.map((page, pageIndex) => (
              <div key={pageIndex} className="w-full shrink-0">
                <div className="grid grid-cols-3 grid-rows-3 gap-px md:grid-cols-6 md:grid-rows-3">
                  {page.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className="group flex min-h-[128px] flex-col items-center justify-center bg-white p-4 text-center transition hover:bg-zinc-950 md:min-h-[150px] md:p-5"
                      >
                        <Icon
                          size={26}
                          className="mb-4 text-[var(--accent)] transition duration-300 group-hover:scale-110"
                        />

                        <p className="text-[10px] font-bold uppercase leading-5 text-zinc-800 group-hover:text-white sm:text-xs">
                          {item.label}
                        </p>
                      </div>
                    );
                  })}

                  {/* Empty placeholders for last slide so grid height stays same */}
                  {Array.from({ length: itemsPerPage - page.length }).map(
                    (_, index) => (
                      <div
                        key={`empty-${index}`}
                        className="min-h-[128px] bg-white md:min-h-[150px]"
                      />
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        {pages.length > 1 && (
          <div className="mt-6 flex items-center justify-center gap-2">
            {pages.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to amenities slide ${index + 1}`}
                onClick={() => setActivePage(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activePage === index
                    ? "w-8 bg-[var(--accent)]"
                    : "w-2.5 bg-zinc-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AmenitiesVariationSeven;