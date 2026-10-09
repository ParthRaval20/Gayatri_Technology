"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  RotateCcw,
  Share2,
} from "lucide-react";
import { siteConfig } from "@/lib/seo";
import { InstagramIcon, LinkedinIcon } from "./SocialIcons";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Custom Business Software",
    budget: "Prefer to discuss based on scope",
    timeline: "standard",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [refId, setRefId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generatedId = `GT-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefId(generatedId);

    // Formatted mail subject and structured body
    const subject = encodeURIComponent(
      `Project Discussion [${generatedId}] - ${formData.company || formData.name}`
    );

    const body = encodeURIComponent(
      `GAYATRI TECHNOLOGY - NEW PROJECT INQUIRY\n` +
      `===================================================\n` +
      `Reference ID       : ${generatedId}\n` +
      `Client Name        : ${formData.name}\n` +
      `Company / Business : ${formData.company || "Not specified"}\n` +
      `Phone / WhatsApp   : ${formData.phone}\n` +
      `Email Address      : ${formData.email}\n` +
      `What to Build      : ${formData.service}\n` +
      `Budget Preference  : ${formData.budget}\n` +
      `Timeline           : ${formData.timeline}\n\n` +
      `WHAT IS NOT WORKING TODAY / PROJECT GOALS:\n` +
      `---------------------------------------------------\n` +
      `${formData.details}\n` +
      `===================================================\n` +
      `Submitted via Gayatri Technology Web Portal`
    );

    const mailtoUrl = `mailto:info@gayatritechnology.in?subject=${subject}&body=${body}`;

    if (typeof window !== "undefined") {
      window.location.href = mailtoUrl;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "Custom Business Software",
      budget: "Prefer to discuss based on scope",
      timeline: "standard",
      details: "",
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-white border-t border-[#E2E8F0]">
      <div className="screen-container">
        <div className="max-w-3xl mb-8 sm:mb-14">
          <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block mb-2 font-display">
            DIRECT FOUNDER &amp; TEAM ACCESS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#091C0F] tracking-tight mb-3 font-display">
            Have a business problem that software could solve?
          </h2>
          <p className="text-base sm:text-lg text-[#475569]">
            Tell us what you&apos;re trying to build or what isn&apos;t working today. We&apos;ll help you figure out what makes sense.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Requirement Form Column */}
          <div className="lg:col-span-7 bg-[#F8FAFC] p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#E2E8F0] shadow-xs">
            {submitted ? (
              <div className="p-5 sm:p-8 bg-white rounded-2xl border border-[#E2E8F0] text-center space-y-4 sm:space-y-5 animate-in fade-in zoom-in duration-300">
                <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-[#47C56E]/15 text-[#00875A] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 sm:w-10 h-8 sm:h-10" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#091C0F] font-display">
                    Thank you, {formData.name}!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] mt-2 max-w-md mx-auto">
                    Your project details have been prepared for{" "}
                    <strong className="text-[#00875A]">info@gayatritechnology.in</strong>.
                    Parth Raval and the engineering team will review your workflow for{" "}
                    <span className="font-semibold text-[#091C0F]">
                      {formData.company || "your business"}
                    </span>{" "}
                    and respond with practical next steps.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs text-left max-w-md mx-auto space-y-1 font-mono text-[#475569]">
                  <div className="font-bold text-[#00875A]">Reference ID: {refId}</div>
                  <div>Sent To: info@gayatritechnology.in</div>
                  <div>Service: {formData.service}</div>
                  <div>Phone/WhatsApp: {formData.phone}</div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/919328437392?text=${encodeURIComponent(
                      `Hi Parth, I just submitted an inquiry on the website [Ref: ${refId}]. My name is ${formData.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-[#20ba59] transition-all min-h-[44px]"
                  >
                    <span>Follow Up on WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#00875A] hover:text-[#47C56E] py-2.5 px-3.5 transition-colors min-h-[44px]"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Send Another Message</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#091C0F] mb-1.5 sm:mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Patel"
                      className="w-full bg-white border border-[#E2E8F0] rounded-xl px-3.5 sm:px-4 py-2.5 text-base sm:text-sm focus:border-[#47C56E] focus:ring-2 focus:ring-[#47C56E]/20 focus:outline-none transition-all min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#091C0F] mb-1.5 sm:mb-2">
                      Company / Business Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Shree Ram Industries"
                      className="w-full bg-white border border-[#E2E8F0] rounded-xl px-3.5 sm:px-4 py-2.5 text-base sm:text-sm focus:border-[#47C56E] focus:ring-2 focus:ring-[#47C56E]/20 focus:outline-none transition-all min-h-[44px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#091C0F] mb-1.5 sm:mb-2">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-white border border-[#E2E8F0] rounded-xl px-3.5 sm:px-4 py-2.5 text-base sm:text-sm focus:border-[#47C56E] focus:ring-2 focus:ring-[#47C56E]/20 focus:outline-none transition-all min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#091C0F] mb-1.5 sm:mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ramesh@shreeram.com"
                      className="w-full bg-white border border-[#E2E8F0] rounded-xl px-3.5 sm:px-4 py-2.5 text-base sm:text-sm focus:border-[#47C56E] focus:ring-2 focus:ring-[#47C56E]/20 focus:outline-none transition-all min-h-[44px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#091C0F] mb-1.5 sm:mb-2">
                    What do you want to build? *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-white border border-[#E2E8F0] rounded-xl px-3.5 sm:px-4 py-2.5 text-base sm:text-sm focus:border-[#47C56E] focus:ring-2 focus:ring-[#47C56E]/20 focus:outline-none transition-all min-h-[44px]"
                  >
                    <option>Custom Business Software</option>
                    <option>ERP &amp; Operations System</option>
                    <option>Custom Website or Web Application</option>
                    <option>Mobile Application (Android / iOS)</option>
                    <option>E-Commerce &amp; Ordering Portal</option>
                    <option>Automation &amp; Internal Tools</option>
                    <option>Not sure yet / Need technical guidance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#091C0F] mb-1.5 sm:mb-2">
                    Tell us about the problem or requirement *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Tell us what isn't working today: e.g. same data entered multiple times in Excel, difficulty tracking inventory, orders lost in WhatsApp, or your existing software doesn't fit your workflow..."
                    className="w-full bg-white border border-[#E2E8F0] rounded-xl px-3.5 sm:px-4 py-2.5 text-base sm:text-sm focus:border-[#47C56E] focus:ring-2 focus:ring-[#47C56E]/20 focus:outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-1">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#091C0F] mb-1.5 sm:mb-2">
                      Budget Expectation <span className="text-[#64748B] font-normal">(Optional)</span>
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-white border border-[#E2E8F0] rounded-xl px-3.5 sm:px-4 py-2.5 text-base sm:text-sm focus:border-[#47C56E] focus:ring-2 focus:ring-[#47C56E]/20 focus:outline-none transition-all min-h-[44px]"
                    >
                      <option>Prefer to discuss based on scope</option>
                      <option>₹50,000 – ₹1,00,000</option>
                      <option>₹1,00,000 – ₹2,50,000</option>
                      <option>₹2,50,000 – ₹5,00,000</option>
                      <option>₹5,00,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#091C0F] mb-1.5 sm:mb-2">
                      Target Timeline <span className="text-[#64748B] font-normal">(Optional)</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: "urgent", label: "Urgent" },
                        { id: "standard", label: "1-3 mo" },
                        { id: "flexible", label: "Flexible" },
                      ].map((item) => (
                        <label
                          key={item.id}
                          className={`flex items-center justify-center p-2.5 bg-white border rounded-xl cursor-pointer transition-all min-h-[44px] text-center ${formData.timeline === item.id
                              ? "border-[#47C56E] bg-[#F0FDF4] ring-1 ring-[#47C56E]"
                              : "border-[#E2E8F0] hover:border-[#47C56E]/50"
                            }`}
                        >
                          <input
                            type="radio"
                            name="timeline"
                            value={item.id}
                            checked={formData.timeline === item.id}
                            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                            className="sr-only"
                          />
                          <span className="text-xs font-semibold text-[#091C0F]">
                            {item.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 inline-flex justify-center items-center gap-2 bg-[#47C56E] text-[#091C0F] py-3.5 px-6 rounded-full text-base font-bold hover:bg-[#3db863] transition-all active:scale-95 shadow-md shadow-[#47C56E]/25 disabled:opacity-75 min-h-[48px]"
                  >
                    {isSubmitting ? (
                      <span>Sending Your Information...</span>
                    ) : (
                      <>
                        <span>Tell Us What You Need</span>
                        <Send className="w-4 h-4 text-[#091C0F]" />
                      </>
                    )}
                  </button>

                  <a
                    href="https://wa.me/919328437392"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center items-center gap-2 bg-[#25D366] text-white py-3.5 px-6 rounded-full text-sm font-bold hover:bg-[#20ba59] transition-all shadow-md shadow-[#25D366]/25 min-h-[48px]"
                  >
                    <span>Talk on WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            <div className="bg-[#F8FAFC] p-4 sm:p-6 rounded-2xl border border-[#E2E8F0] shadow-xs flex items-start gap-3.5 sm:gap-4 hover:border-[#47C56E]/60 transition-colors">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-white flex items-center justify-center text-[#00875A] shrink-0 shadow-xs">
                <Phone className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-bold text-[#475569] uppercase tracking-wider block">
                  Direct Phone Call
                </span>
                <a
                  href="tel:+919328437392"
                  className="text-base sm:text-lg font-bold text-[#091C0F] hover:text-[#00875A] transition-colors"
                >
                  +91 93284 37392
                </a>
                <p className="text-xs text-[#475569] mt-0.5 sm:mt-1">
                  Direct conversation with founder &amp; engineering team
                </p>
              </div>
            </div>

            <div className="bg-[#F8FAFC] p-4 sm:p-6 rounded-2xl border border-[#E2E8F0] shadow-xs flex items-start gap-3.5 sm:gap-4 hover:border-[#47C56E]/60 transition-colors">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-white flex items-center justify-center text-[#25D366] shrink-0 shadow-xs">
                <Send className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-bold text-[#475569] uppercase tracking-wider block">
                  Instant WhatsApp
                </span>
                <a
                  href="https://wa.me/919328437392"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-bold text-[#091C0F] hover:text-[#25D366] transition-colors"
                >
                  +91 93284 37392
                </a>
                <p className="text-xs text-[#475569] mt-0.5 sm:mt-1">
                  Send a message, question, or voice note
                </p>
              </div>
            </div>

            <div className="bg-[#F8FAFC] p-4 sm:p-6 rounded-2xl border border-[#E2E8F0] shadow-xs flex items-start gap-3.5 sm:gap-4 hover:border-[#47C56E]/60 transition-colors">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-white flex items-center justify-center text-[#00875A] shrink-0 shadow-xs">
                <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-bold text-[#475569] uppercase tracking-wider block">
                  Email Us
                </span>
                <a
                  href="mailto:info@gayatritechnology.in"
                  className="text-base sm:text-lg font-bold text-[#091C0F] hover:text-[#00875A] transition-colors"
                >
                  info@gayatritechnology.in
                </a>
                <p className="text-xs text-[#475569] mt-0.5 sm:mt-1">
                  Send your requirements, Excel sheets, or workflow notes
                </p>
              </div>
            </div>

            <div className="bg-[#F8FAFC] p-4 sm:p-6 rounded-2xl border border-[#E2E8F0] shadow-xs flex items-start gap-3.5 sm:gap-4 hover:border-[#47C56E]/60 transition-colors">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-white flex items-center justify-center text-[#00875A] shrink-0 shadow-xs">
                <MapPin className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-bold text-[#475569] uppercase tracking-wider block">
                  Office Location
                </span>
                <p className="text-sm sm:text-base font-bold text-[#091C0F]">
                  102 Dev Palace, Ankur Nagar, Rajkot 360004, Gujarat, India
                </p>
                <p className="text-xs text-[#475569] mt-0.5 sm:mt-1">
                  Rooted in Rajkot — serving businesses across Gujarat &amp; India
                </p>
              </div>
            </div>

            <div className="bg-[#F8FAFC] p-4 sm:p-6 rounded-2xl border border-[#E2E8F0] shadow-xs flex items-start gap-3.5 sm:gap-4 hover:border-[#47C56E]/60 transition-colors">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-white flex items-center justify-center text-[#00875A] shrink-0 shadow-xs">
                <Clock className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-bold text-[#475569] uppercase tracking-wider block">
                  Working Hours
                </span>
                <p className="text-sm sm:text-base font-bold text-[#091C0F]">
                  Mon - Sat: 9:30 AM - 7:00 PM IST
                </p>
                <p className="text-xs text-[#475569] mt-0.5 sm:mt-1">
                  Practical conversations, zero high-pressure sales talk
                </p>
              </div>
            </div>

            {/* Official Social Channels Card */}
            <div className="bg-[#F8FAFC] p-4 sm:p-6 rounded-2xl border border-[#E2E8F0] shadow-xs flex items-start gap-3.5 sm:gap-4 hover:border-[#47C56E]/60 transition-colors">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-white flex items-center justify-center text-[#00875A] shrink-0 shadow-xs">
                <Share2 className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <div className="flex-1">
                <span className="text-[11px] sm:text-xs font-bold text-[#475569] uppercase tracking-wider block">
                  Official Social Channels
                </span>
                <p className="text-xs text-[#475569] mt-0.5 sm:mt-1 mb-3">
                  Follow our engineering updates, software case studies, and architecture insights
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={siteConfig.social.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E2E8F0] hover:border-[#0077b5] text-xs font-bold text-[#091C0F] hover:text-[#0077b5] transition-colors shadow-2xs group"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-[#0077b5] group-hover:scale-110 transition-transform" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={siteConfig.social.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E2E8F0] hover:border-[#E1306C] text-xs font-bold text-[#091C0F] hover:text-[#E1306C] transition-colors shadow-2xs group"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-[#E1306C] group-hover:scale-110 transition-transform" />
                    <span>@{siteConfig.social.instagram.handle}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
