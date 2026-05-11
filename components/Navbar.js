"use client";

import React, { useEffect, useState } from "react";
import { Menu, X, Phone, Home, MapPin, MessageSquare } from "lucide-react";
import { useLeadForm } from "./LeadFormContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openLeadForm } = useLeadForm();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const links = [
    { label: "Overview", href: "#overview" },
    { label: "Gallery", href: "#gallery" },
    { label: "Amenities", href: "#amenities" },
    { label: "Pricing", href: "#pricing" },
    { label: "Location", href: "#location" },
  ];

  const closeMenu = () => setIsOpen(false);

  const openMobileLeadForm = () => {
    closeMenu();
    openLeadForm();
  };

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 w-full bg-white border-b transition-all duration-300 ${
          scrolled
            ? "border-zinc-200 bg-white py-3 shadow-sm backdrop-blur-xl"
            : "border-zinc-200 bg-white py-4 backdrop-blur-xl"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src="/logo.png" alt="Casagrand" className="h-10" />
          </a>

          {/* Desktop Links */}
          <ul className="hidden items-center gap-1 rounded-full bg-zinc-100 p-1 lg:flex">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-[1.5px] text-zinc-700 transition hover:bg-white hover:text-[var(--accent)] hover:shadow-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-600">
              <MapPin size={15} className="text-[var(--accent)]" />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps?cid=8194377754012098570&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en&gl=IN&source=embed"
                className="transition hover:text-[var(--accent)]"
              >
                Bengaluru
              </a>
            </div>

            <button
              type="button"
              onClick={openLeadForm}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--accent-hover)]"
            >
              <MessageSquare size={16} />
              Get A Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 lg:hidden"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu — rendered outside <nav> to escape its stacking context */}
      <div
        className={`fixed inset-0 z-[9999] overflow-y-auto bg-white transition-all duration-300 lg:hidden ${
          isOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-0"
        }`}
      >
        <div className="relative flex min-h-dvh flex-col overflow-hidden bg-white p-6">
          {/* Soft Background Effects */}
          <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-[var(--accent)]/15 blur-[90px]" />
          <div className="pointer-events-none absolute -left-24 bottom-28 h-72 w-72 rounded-full bg-zinc-200/60 blur-[90px]" />

          {/* Top Bar */}
          <div className="relative z-10 mb-8 flex items-center justify-between">
            <img src="/assets/cg_logo.png" alt="Casagrand" className="h-10" />

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-950 shadow-sm transition hover:bg-[var(--accent)] hover:text-black"
            >
              <X size={24} />
            </button>
          </div>

         

          {/* Mobile Links */}
          <ul className="relative z-10 space-y-3">
            {[...links, { label: "Contact Us", href: "#contact-us" }].map(
              (link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="group flex items-center justify-between rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-lg font-semibold text-zinc-950 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition hover:border-[var(--accent)]/50 hover:bg-[var(--accent)] hover:text-black"
                  >
                    <span>{link.label}</span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-sm text-zinc-700 transition group-hover:bg-black group-hover:text-white">
                      →
                    </span>
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Mobile CTA */}
          <button
            type="button"
            onClick={openMobileLeadForm}
            className="relative z-10 mt-8 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[var(--accent)] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.5px] text-white shadow-[0_18px_50px_rgba(168,117,34,0.25)] transition active:scale-95"
          >
            <Phone size={18} />
            Book Site Visit
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
