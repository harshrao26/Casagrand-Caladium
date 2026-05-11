"use client";

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLeadForm } from './LeadFormContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { openLeadForm } = useLeadForm();

  const footerLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Gallery", href: "#gallery" },
  { label: "Amenities", href: "#amenities" },
  { label: "Pricing", href: "#pricing" },
  { label: "Location", href: "#location" },
];

  return (
    <footer className="bg-[var(--secondary-1)] text-white pt-12 md:pt-20 pb-10">
      <div className=" max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <img src="/assets/cg_logo.png" alt="Casagrand" className="h-12 brightness-0 invert" />
            <p className="section-copy section-copy-on-dark">
              Casagrand Moondance Kumbalgodu brings spacious 1, 2 and 3 BHK apartments to the fast-growing Mysore Road corridor, with low-rise planning and lifestyle amenities for everyday living.
            </p>
             
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-5 md:mb-6 uppercase tracking-widest text-[var(--accent)]">Quick Links</h3>
            <ul className="space-y-4">
  {footerLinks.map((item, index) => (
    <li key={index}>
      <a
        href={item.href}
        className="text-white transition-colors hover:text-[var(--accent)]"
      >
        {item.label}
      </a>
    </li>
  ))}
</ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-bold mb-5 md:mb-6 uppercase tracking-widest text-[var(--accent)]">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="text-[var(--accent)] shrink-0 mt-1" size={20} />
                <span className="text-white">VFF2+QRJ, off Mysore Road, Kumbalgodu, Bengaluru, Karnataka 560074</span>
              </li>
              
              <li className="flex items-center space-x-4">
                <Mail className="text-[var(--accent)] shrink-0" size={20} />
                <a href="mailto:info@casagrandkumbalgodu.com" className="text-white hover:text-white transition-colors">info@casagrandkumbalgodu.com</a>
              </li>
            </ul>
          </div>

        

        </div>

        <div className="pt-10 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm">
          <p>© {currentYear} Casagrand Builder Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://www.casagrand.co.in/new-privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="https://www.casagrand.co.in/terms-and-condition/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>

      <p className='text-xs text-zinc-500 text-center max-w-4xl mx-auto mt-10 pb-2'>
*Disclaimer: The information provided on this website is for general informational purposes only. All renderings, floor plans, and maps are artist&apos;s conceptions and not actual depictions of the building or its surroundings. Prices and availability are subject to change without notice. Please verify all details with our sales team before making a purchase.


Enquire

Brochure
      </p>
    </footer>
  );
};

export default Footer;
