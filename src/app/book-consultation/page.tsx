"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { ArrowRight, CheckCircle2, FileText, Settings, ShieldCheck, HelpCircle } from "lucide-react";

export default function BookConsultationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phone: "",
    classification: "Web Application",
    vertical: "SaaS / Digital Product",
    budget: "$1,000 - $3,000",
    milestone: "1 - 3 Months",
    requirements: [] as string[],
    visionBrief: "",
    referenceLinks: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const classifications = ["Web Application", "Mobile App", "UI/UX Design", "AI Integration", "Custom SaaS"];
  const verticals = ["SaaS / Digital Product", "E-Commerce", "Local Services", "Enterprise ERP", "Other"];
  const budgets = ["Under $1,000", "$1,000 - $3,000", "$3,000 - $5,000", "$5,000 - $10,000", "$10,000+"];
  const milestones = ["Under 1 Month", "1 - 3 Months", "3 - 6 Months", "No strict deadline"];

  const techComponents = [
    { label: "User Authentication & Roles", emoji: "🔒" },
    { label: "Database & Complex Relations", emoji: "🗄️" },
    { label: "Real-time Websockets (Chat/Sync)", emoji: "⚡" },
    { label: "AI / Large Language Models Integration", emoji: "🤖" },
    { label: "Stripe / Subscription Billing", emoji: "💳" },
    { label: "Admin Analytics Dashboard", emoji: "📊" },
    { label: "Performance & SEO Optimization", emoji: "🚀" },
    { label: "Immersive WebGL & Motion Design", emoji: "✨" }
  ];

  const handleToggleRequirement = (itemLabel: string) => {
    if (formData.requirements.includes(itemLabel)) {
      setFormData({
        ...formData,
        requirements: formData.requirements.filter((r) => r !== itemLabel)
      });
    } else {
      setFormData({
        ...formData,
        requirements: [...formData.requirements, itemLabel]
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/book-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Failed to submit consultation details. Please email hello@edenzatech.com");
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
            SPECIFICATION PLANNER
          </p>
          <h1 className="heading-display mt-3 text-3xl font-extrabold md:text-5xl">
            Book a Tech Consultation
          </h1>
          <p className="mt-4 text-base text-white/80 md:text-lg">
            Map out your core product capabilities, target milestones, and design references. We will review your blueprint ahead of our call.
          </p>
        </Container>
      </section>

      <section className="py-12 bg-white">
        <Container className="max-w-4xl">
          <div className="rounded-[2.5rem] bg-[#F5FAF9] p-6 sm:p-10 shadow-sm relative">
            
            {submitted ? (
              <div className="text-center py-16 flex flex-col items-center">
                <div className="h-16 w-16 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-5">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold text-brand-blue">Consultation Blueprint Received!</h2>
                <p className="mt-3 text-sm text-brand-muted max-w-md leading-relaxed">
                  Thank you, {formData.fullName}. Our co-founders will review your technical requirements sheet and email you study calendars at {formData.email} in under 4 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-full bg-brand-blue text-white px-6 py-2.5 text-xs font-extrabold uppercase tracking-wider hover:bg-brand-blue-hover shadow-sm transition-all border-0"
                >
                  Edit Blueprint Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                
                {/* SECTION 1: Identity */}
                <div>
                  <h2 className="text-sm font-extrabold uppercase tracking-[0.15em] text-[#134D4A] flex items-center gap-2 mb-6">
                    <span className="h-6 w-6 rounded-full bg-[#D2EBE7] text-[#134D4A] flex items-center justify-center text-[10px] font-black">1</span>
                    Identity &amp; Company Details
                  </h2>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="fullName" className="block text-[10px] font-extrabold uppercase tracking-wider text-brand-blue mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        placeholder="e.g. John Doe"
                        className="w-full rounded-xl bg-white px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 shadow-inner border-0"
                      />
                    </div>
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
                        placeholder="e.g. john@company.com"
                        className="w-full rounded-xl bg-white px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 shadow-inner border-0"
                      />
                    </div>
                    <div>
                      <label htmlFor="companyName" className="block text-[10px] font-extrabold uppercase tracking-wider text-brand-blue mb-2">
                        Company / Product Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                        placeholder="e.g. Acme SaaS"
                        className="w-full rounded-xl bg-white px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 shadow-inner border-0"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-[10px] font-extrabold uppercase tracking-wider text-brand-blue mb-2">
                        WhatsApp / Phone Number
                      </label>
                      <input
                        type="text"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="e.g. +1 555-019-2834"
                        className="w-full rounded-xl bg-white px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 shadow-inner border-0"
                      />
                    </div>
                  </div>
                </div>

                {/* SECTION 2: Classification */}
                <div>
                  <h2 className="text-sm font-extrabold uppercase tracking-[0.15em] text-[#134D4A] flex items-center gap-2 mb-6">
                    <span className="h-6 w-6 rounded-full bg-[#D2EBE7] text-[#134D4A] flex items-center justify-center text-[10px] font-black">2</span>
                    Project Classification
                  </h2>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase tracking-wider text-brand-blue mb-2">
                        Core Classification
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {classifications.map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => setFormData({...formData, classification: item})}
                            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border-0 cursor-pointer ${
                              formData.classification === item 
                                ? "bg-brand-blue text-white shadow-md"
                                : "bg-white text-brand-blue shadow-sm hover:bg-brand-cream/15"
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase tracking-wider text-brand-blue mb-2">
                        Business Vertical
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {verticals.map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => setFormData({...formData, vertical: item})}
                            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border-0 cursor-pointer ${
                              formData.vertical === item 
                                ? "bg-brand-blue text-white shadow-md"
                                : "bg-white text-brand-blue shadow-sm hover:bg-brand-cream/15"
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* SECTION 3: Budget & Milestones */}
                <div>
                  <h2 className="text-sm font-extrabold uppercase tracking-[0.15em] text-[#134D4A] flex items-center gap-2 mb-6">
                    <span className="h-6 w-6 rounded-full bg-[#D2EBE7] text-[#134D4A] flex items-center justify-center text-[10px] font-black">3</span>
                    Budget &amp; Milestones
                  </h2>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase tracking-wider text-brand-blue mb-2">
                        Target Budget Allocation
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {budgets.map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => setFormData({...formData, budget: item})}
                            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border-0 cursor-pointer ${
                              formData.budget === item 
                                ? "bg-brand-blue text-white shadow-md"
                                : "bg-white text-brand-blue shadow-sm hover:bg-brand-cream/15"
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase tracking-wider text-brand-blue mb-2">
                        Estimated Delivery Milestone
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {milestones.map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => setFormData({...formData, milestone: item})}
                            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border-0 cursor-pointer ${
                              formData.milestone === item 
                                ? "bg-brand-blue text-white shadow-md"
                                : "bg-white text-brand-blue shadow-sm hover:bg-brand-cream/15"
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* SECTION 4: Functional Requirements */}
                <div>
                  <h2 className="text-sm font-extrabold uppercase tracking-[0.15em] text-[#134D4A] flex items-center gap-2 mb-3">
                    <span className="h-6 w-6 rounded-full bg-[#D2EBE7] text-[#134D4A] flex items-center justify-center text-[10px] font-black">4</span>
                    Functional Requirements
                  </h2>
                  <p className="text-[11px] text-brand-muted mb-5 leading-normal">
                    Select all technical components required for your applications MVP:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {techComponents.map((item) => {
                      const isChecked = formData.requirements.includes(item.label);
                      return (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => handleToggleRequirement(item.label)}
                          className={`flex items-center gap-3 p-4 rounded-xl text-xs font-bold text-left transition-all border-0 cursor-pointer ${
                            isChecked 
                              ? "bg-brand-blue text-white shadow-md"
                              : "bg-white text-brand-blue shadow-sm hover:bg-brand-cream/15"
                          }`}
                        >
                          <span className="text-base shrink-0">{item.emoji}</span>
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* SECTION 5: Vision Brief & References */}
                <div>
                  <h2 className="text-sm font-extrabold uppercase tracking-[0.15em] text-[#134D4A] flex items-center gap-2 mb-6">
                    <span className="h-6 w-6 rounded-full bg-[#D2EBE7] text-[#134D4A] flex items-center justify-center text-[10px] font-black">5</span>
                    Vision Brief &amp; References
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="visionBrief" className="block text-[10px] font-extrabold uppercase tracking-wider text-brand-blue mb-2">
                        Detailed Project Vision Brief *
                      </label>
                      <textarea
                        id="visionBrief"
                        rows={5}
                        required
                        value={formData.visionBrief}
                        onChange={(e) => setFormData({...formData, visionBrief: e.target.value})}
                        placeholder="Please describe the core business problem you are trying to solve, target audience, and standard product flow..."
                        className="w-full rounded-xl bg-white px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 shadow-inner border-0"
                      />
                    </div>
                    <div>
                      <label htmlFor="referenceLinks" className="block text-[10px] font-extrabold uppercase tracking-wider text-brand-blue mb-2">
                        Reference Links (Figma / Example Sites)
                      </label>
                      <input
                        type="url"
                        id="referenceLinks"
                        value={formData.referenceLinks}
                        onChange={(e) => setFormData({...formData, referenceLinks: e.target.value})}
                        placeholder="e.g. https://figma.com/file/... or competitor sites"
                        className="w-full rounded-xl bg-white px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 shadow-inner border-0"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-full bg-[linear-gradient(135deg,#E07A2E_0%,#C85E14_100%)] text-white py-4 text-sm font-extrabold uppercase tracking-wider shadow-md hover:scale-[1.01] hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border-0"
                  >
                    {loading ? (
                      <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Submit Planner Request <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>
        </Container>
      </section>

    </div>
  );
}
