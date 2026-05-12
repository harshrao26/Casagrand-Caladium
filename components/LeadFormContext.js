"use client";

import React, { createContext, useContext, useState } from "react";
import { Mail, Phone, Send, User, X, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

const LeadFormContext = createContext(null);
const MOBILE_PATTERN = "(?:\\+91[\\s-]?)?[6-9][0-9]{9}";
const EMAIL_PATTERN = "[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}";

export const useLeadForm = () => {
  const context = useContext(LeadFormContext);

  if (!context) {
    throw new Error("useLeadForm must be used inside LeadFormProvider");
  }

  return context;
};

export const LeadFormFields = ({ consentId = "lead-consent", onSubmit }) => {
  const router = useRouter();
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      mobile: String(formData.get("mobile") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      pageUrl: window.location.href,
    };

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Unable to submit inquiry.");
      }

      form.reset();
      setStatus("success");
      setMessage("Thank you. Our team will contact you shortly.");
      onSubmit?.();
      router.push("/thankyou");
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "Unable to submit inquiry. Please try again.");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="relative">
        <User
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
          size={20}
        />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 py-3.5 pl-12 pr-5 text-zinc-900 outline-none transition focus:border-[var(--accent)] focus:bg-white focus:ring-4 focus:ring-[var(--accent)]/10"
          required
        />
      </div>

      <div className="relative">
        <Phone
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
          size={20}
        />
        <input
          type="tel"
          name="mobile"
          pattern={MOBILE_PATTERN}
          title="Enter a valid Indian mobile number."
          inputMode="tel"
          placeholder="Phone Number"
          className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 py-3.5 pl-12 pr-5 text-zinc-900 outline-none transition focus:border-[var(--accent)] focus:bg-white focus:ring-4 focus:ring-[var(--accent)]/10"
          required
        />
      </div>

      <div className="relative">
        <Mail
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
          size={20}
        />
        <input
          type="email"
          name="email"
          pattern={EMAIL_PATTERN}
          title="Enter a valid email address."
          placeholder="Email Address"
          className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 py-3.5 pl-12 pr-5 text-zinc-900 outline-none transition focus:border-[var(--accent)] focus:bg-white focus:ring-4 focus:ring-[var(--accent)]/10"
          required
        />
      </div>

      <div className="flex items-start gap-3 py-2">
        <input
          type="checkbox"
          id={consentId}
          className="mt-1 accent-[var(--accent)]"
          defaultChecked
        />
        <label htmlFor={consentId} className="text-xs leading-relaxed text-zinc-500">
          I agree to the{" "}
          <a href="https://www.casagrand.co.in/new-privacy-policy/" className="font-bold text-zinc-900 hover:underline">
            Privacy Policy
          </a>{" "}
          and authorize Casagrand to contact me.
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group flex w-full items-center justify-center gap-1.5 rounded-2xl bg-[var(--accent)] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.5px] text-white transition hover:bg-[var(--accent-hover)] md:gap-2 md:px-6 md:py-4 md:text-sm md:tracking-[1.5px]"
      >
        <span>{status === "submitting" ? "Submitting..." : "Submit Inquiry"}</span>
        <Send
          size={18}
          className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
        />
      </button>

      {message ? (
        <p className={`text-center text-xs font-semibold ${status === "error" ? "text-red-600" : "text-green-700"}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
};

const LeadFormModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-8">
      <button
        type="button"
        aria-label="Close lead form"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative grid w-full max-w-4xl overflow-hidden rounded-[36px] bg-white shadow-[0_35px_120px_rgba(0,0,0,0.35)] md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative hidden min-h-[520px] overflow-hidden bg-[var(--secondary-1)] md:block">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/prop/hero.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/0 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-white">
              <MapPin size={14} />
              Upper Kharadi
            </p>

            <h3 className="text-xl md:text-3xl font-bold leading-tight">
              Visit Casagrand Caladium
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-300">
              Explore project highlights, pricing, floor plans, and site visit
              options with our advisor.
            </p>
          </div>
        </div>

        <div className="relative p-5 md:p-8">
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 transition hover:bg-zinc-200"
          >
            <X size={20} />
          </button>

          <div className="mb-7 pr-12">
            <p className="text-xs font-bold uppercase tracking-[3px] text-[var(--accent)]">
              Casagrand Caladium
            </p>

            <h2 className="mt-3 text-2xl font-extrabold leading-tight text-zinc-950 md:text-3xl">
              Book Your Site Visit
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Fill in your details and our team will contact you shortly.
            </p>
          </div>

          <LeadFormFields onSubmit={onClose} />
        </div>
      </div>
    </div>
  );
};

export const LeadFormProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openLeadForm = () => setIsOpen(true);
  const closeLeadForm = () => setIsOpen(false);

  return (
    <LeadFormContext.Provider value={{ openLeadForm, closeLeadForm }}>
      {children}
      <LeadFormModal isOpen={isOpen} onClose={closeLeadForm} />
    </LeadFormContext.Provider>
  );
};
