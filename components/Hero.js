"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, User, Send } from "lucide-react";
import { useRouter } from "next/navigation";

const MOBILE_PATTERN = "(?:\\+91[\\s-]?)?[6-9][0-9]{9}";
const EMAIL_PATTERN = "[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}";

const Hero = () => {
  const router = useRouter();
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const consentId = "lead-consent-hero";
  const [isAgreed, setIsAgreed] = useState(true);

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
      router.push("/thankyou");
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "Unable to submit inquiry. Please try again.");
    }
  };

  return (
    <section className="relative min-h-[30vh]   mt-18  w-full overflow-hidden pt-20 md:h-[90vh]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute saturate-130 inset-0 scale-105 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] ease-out"
          style={{
            backgroundImage: "url('/indoor-images/Copy of s03.jpg')",
          }}
        />

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" /> */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/20" />
      </div>

      {/* Bottom Horizontal Form */}
      <div className=" absolute   inset-x-0 bottom-0 z-20 px-4 pb-5 md:pb-8">
        <div className="md:block hidden mx-auto max-w-4xl rounded-[28px] border border-white/20 bg-white/95 p-4 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl md:rounded-full md:p-3">
          <form className="grid gap-3 md:grid-cols-[1fr_1fr_1fr_auto] md:items-center" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="flex items-center gap-3 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-3">
              <User className="h-5 w-5 shrink-0 text-[var(--accent)]" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full bg-transparent text-sm font-medium text-zinc-900 outline-none placeholder:text-zinc-400"
                required
              />
            </div>

            {/* Mobile */}
            <div className="flex items-center gap-3 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-3">
              <Phone className="h-5 w-5 shrink-0 text-[var(--accent)]" />
              <input
                type="tel"
                name="mobile"
                pattern={MOBILE_PATTERN}
                title="Enter a valid Indian mobile number."
                inputMode="tel"
                placeholder="Mobile Number"
                className="w-full bg-transparent text-sm font-medium text-zinc-900 outline-none placeholder:text-zinc-400"
                required
              />
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-3">
              <Mail className="h-5 w-5 shrink-0 text-[var(--accent)]" />
              <input
                type="email"
                name="email"
                pattern={EMAIL_PATTERN}
                title="Enter a valid email address."
                placeholder="Email Address"
                className="w-full bg-transparent text-sm font-medium text-zinc-900 outline-none placeholder:text-zinc-400"
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="flex items-center justify-center gap-1.5 rounded-full bg-[var(--accent)] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.5px] text-white transition hover:bg-[var(--accent-hover)] md:gap-2 md:px-7 md:py-3.5 md:text-sm md:tracking-[1px]"
            >
              <Send className="h-4 w-4" />
              {status === "submitting" ? "Submitting..." : "Enquire Now"}
            </button>
          </form>

          <div className="flex items-start gap-3 justify-center mt-1">
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
          {message ? (
            <p className={`mt-3 text-center text-xs font-semibold ${status === "error" ? "text-red-600" : "text-green-700"}`}>
              {message}
            </p>
          ) : null}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-32 left-1/2 z-10 hidden -translate-x-1/2 md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30 p-1">
          <div className="h-2 w-1 rounded-full bg-white/50" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
