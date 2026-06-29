"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Mail, MapPin, Clock, ArrowRight, MessageSquare, CheckCircle2, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    projectType: "Web App",
    firstName: "",
    lastName: "",
    email: "",
    phonePrefix: "+92",
    phoneNumber: "",
    address: "",
    message: ""
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const fullPayload = {
      projectType: formData.projectType,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: `${formData.phonePrefix} ${formData.phoneNumber}`,
      address: formData.address,
      message: formData.message
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fullPayload),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Failed to submit inquiry. Please try again or email hello@edenzatech.com");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#FFFDF8] min-h-screen pb-20">
      
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-brand-gradient pt-16 pb-6 text-white md:pt-24 md:pb-12 text-center">
        <div className="absolute inset-0 bg-brand-black/10" aria-hidden />
        <Container className="relative z-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
            GET IN TOUCH
          </p>
          <h1 className="heading-display mt-3 text-3xl font-extrabold md:text-5xl">
            Contact Our Engineering Team
          </h1>
          <p className="mt-4 text-base text-white/80 md:text-lg">
            Have a project in mind? Fill out this quick inquiry form and we'll reply in under 4 hours.
          </p>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto grid gap-12 lg:grid-cols-[380px_1fr] items-start">
            
            {/* Left Column: Coordinates */}
            <div className="space-y-6">
              <div className="rounded-[2rem] bg-[#F5FAF9] p-7 shadow-sm">
                <h2 className="text-xl font-bold text-brand-blue mb-6">Direct Coordinates</h2>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-3.5 text-xs sm:text-sm">
                    <div className="h-8 w-8 rounded-lg bg-[#D2EBE7] text-[#134D4A] flex items-center justify-center shrink-0">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-extrabold text-brand-blue uppercase tracking-wider text-[10px]">Email Address</p>
                      <a href={`mailto:${siteConfig.contact.email}`} className="font-bold text-brand-muted hover:underline mt-0.5 block">
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 text-xs sm:text-sm">
                    <div className="h-8 w-8 rounded-lg bg-[#D2EBE7] text-[#134D4A] flex items-center justify-center shrink-0">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-extrabold text-brand-blue uppercase tracking-wider text-[10px]">Global Headquarters</p>
                      <p className="font-bold text-brand-muted mt-0.5">{siteConfig.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 text-xs sm:text-sm">
                    <div className="h-8 w-8 rounded-lg bg-[#D2EBE7] text-[#134D4A] flex items-center justify-center shrink-0">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-extrabold text-brand-blue uppercase tracking-wider text-[10px]">Founder SLA Response</p>
                      <p className="font-bold text-brand-muted mt-0.5">Under 4 hours direct reply guaranteed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Link Callout */}
              <div className="rounded-[2.5rem] bg-brand-gradient text-white p-7 text-center shadow-sm relative overflow-hidden">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-brand-cyan mb-2">Detailed Blueprint Plan</p>
                <h3 className="text-lg font-bold">Need a full product spec estimation?</h3>
                <p className="mt-2 text-xs text-white/80 leading-relaxed">
                  Use our structured Consultation Planner to list milestones, select components, and catalog design links.
                </p>
                <a 
                  href="/book-consultation"
                  className="mt-6 inline-flex items-center gap-1 bg-white text-brand-blue rounded-full px-5 py-2 text-xs font-extrabold uppercase tracking-wider hover:bg-neutral-100 transition-all"
                >
                  Go to Consultation Planner <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="rounded-[2.5rem] bg-[#F5FAF9] p-8 shadow-sm relative overflow-hidden">
              
              {submitted ? (
                <div className="text-center py-12 flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-5">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-brand-blue">Message Dispatched!</h2>
                  <p className="mt-3 text-xs sm:text-sm text-brand-muted max-w-sm leading-relaxed">
                    Thank you, {formData.firstName}. We have received your project details and our co-founders will reach out to you at {formData.email} in under 4 hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 rounded-full bg-brand-blue text-white px-6 py-2.5 text-xs font-extrabold uppercase tracking-wider hover:bg-brand-blue-hover shadow-sm transition-all border-0"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <h2 className="text-2xl font-bold text-brand-blue flex items-center gap-2">
                    <MessageSquare className="h-5.5 w-5.5 text-brand-orange" />
                    Submit Inquiry
                  </h2>

                  {/* Project selector */}
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase tracking-wider text-brand-blue mb-2.5">
                      What project are you looking for?
                    </label>
                    <div className="grid gap-2 grid-cols-2 sm:grid-cols-3">
                      {[
                        "Web App",
                        "Mobile App",
                        "UI/UX Design",
                        "AI Integration",
                        "Consultation"
                      ].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setFormData({...formData, projectType: item})}
                          className={`px-3 py-2.5 rounded-xl text-xs font-bold text-center transition-all border-0 cursor-pointer ${
                            formData.projectType === item 
                              ? "bg-brand-blue text-white shadow-md"
                              : "bg-white text-brand-blue shadow-sm hover:bg-brand-cream/15"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* First & Last Name */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-[10px] font-extrabold uppercase tracking-wider text-brand-blue mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        placeholder="e.g. John"
                        className="w-full rounded-xl bg-white px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 shadow-inner border-0"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-[10px] font-extrabold uppercase tracking-wider text-brand-blue mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        placeholder="e.g. Doe"
                        className="w-full rounded-xl bg-white px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 shadow-inner border-0"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-extrabold uppercase tracking-wider text-brand-blue mb-2">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="e.g. john@example.com"
                      className="w-full rounded-xl bg-white px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 shadow-inner border-0"
                    />
                  </div>

                  {/* Phone with WhatsApp country code selector */}
                  <div>
                    <label htmlFor="phone" className="block text-[10px] font-extrabold uppercase tracking-wider text-brand-blue mb-2">
                      WhatsApp / Phone Number *
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={formData.phonePrefix}
                        onChange={(e) => setFormData({...formData, phonePrefix: e.target.value})}
                        className="rounded-xl bg-white px-3 py-3 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 shadow-inner border-0 cursor-pointer"
                      >
                        <option value="+92">🇵🇰 +92</option>
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+971">🇦🇪 +971</option>
                      </select>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                        placeholder="302 7778300"
                        className="flex-grow rounded-xl bg-white px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 shadow-inner border-0"
                      />
                    </div>
                  </div>

                  {/* Physical Address */}
                  <div>
                    <label htmlFor="address" className="block text-[10px] font-extrabold uppercase tracking-wider text-brand-blue mb-2">
                      Physical Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      placeholder="e.g. 123 Coding Street, Tech Hub, Pakistan"
                      className="w-full rounded-xl bg-white px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 shadow-inner border-0"
                    />
                  </div>

                  {/* Tell me about your project */}
                  <div>
                    <label htmlFor="message" className="block text-[10px] font-extrabold uppercase tracking-wider text-brand-blue mb-2">
                      Tell me about your project *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Share details like the project scope, timeline, goals, etc."
                      className="w-full rounded-xl bg-white px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 shadow-inner border-0"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-full bg-[linear-gradient(135deg,#E07A2E_0%,#C85E14_100%)] text-white py-3.5 text-xs font-extrabold uppercase tracking-wider shadow-md hover:scale-[1.01] hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border-0"
                  >
                    {loading ? (
                      <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>

          </div>
        </Container>
      </section>

    </div>
  );
}
