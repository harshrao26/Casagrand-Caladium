import React from 'react';
import { LeadFormFields } from './LeadFormContext';

const ContactForm = () => {
  return (
    <section className="section-shell bg-zinc-50" id="contact-us">
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-title text-center">Book Your Site Visit Now</h2>
        <p className="section-copy mb-10 md:mb-12">Explore Casagrand Moondance Kumbalgodu, Bengaluru</p>
        
        <div className="footer-call-wrap flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/3">
            <img 
              src="/assets/Untitled-design-19.png" 
              alt="Casagrand Logo" 
              className="max-w-[200px] mx-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="bg-white soft-card rounded-3xl shadow-2xl border border-gray-100">
              <LeadFormFields consentId="footer-lead-consent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
