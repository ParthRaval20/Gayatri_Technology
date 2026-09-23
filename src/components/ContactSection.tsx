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
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Custom Web Application",
    budget: "₹50,000 – ₹1,00,000",
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
      `New Project Requirement [${generatedId}] - ${formData.company || formData.name}`
    );

    const body = encodeURIComponent(
      `GAYATRI TECHNOLOGY - NEW CLIENT PROJECT REQUIREMENT\n` +
      `===================================================\n` +
      `Reference ID     : ${generatedId}\n` +
      `Client Name      : ${formData.name}\n` +
      `Company / Org    : ${formData.company || "Not specified"}\n` +
      `Email Address    : ${formData.email}\n` +
      `Phone Number     : ${formData.phone || "Not provided"}\n` +
      `Selected Service : ${formData.service}\n` +
      `Budget Range     : ${formData.budget}\n` +
      `Target Timeline  : ${formData.timeline}\n\n` +
      `PROJECT REQUIREMENTS & BRIEF:\n` +
      `---------------------------------------------------\n` +
      `${formData.details}\n` +
      `===================================================\n` +
      `Submitted via Gayatri Technology Web Portal`
    );

    const mailtoUrl = `mailto:info@gayatritechnology.in?subject=${subject}&body=${body}`;

    // Trigger user's email client with recipient info@gayatritechnology.in
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
      service: "Custom Web Application",
      budget: "₹50,000 – ₹1,00,000",
      timeline: "standard",
      details: "",
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white border-t border-[#E2E8F0]">
      <div className="screen-container">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block mb-2 font-display">
            REQUIREMENT SUBMISSION
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#091C0F] tracking-tight mb-3 font-display">
            Let&apos;s Build Something That Works for Your Business.
          </h2>
          <p className="text-base sm:text-lg text-[#475569]">
            Tell us what you need. Our team will understand your requirements and help you find the
            right digital solution.
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
                    Requirement Prepared &amp; Dispatched!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] mt-2 max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-[#091C0F]">{formData.name}</span>.
                    Your requirement brief has been dispatched to{" "}
                    <strong className="text-[#00875A]">info@gayatritechnology.in</strong>.
                    Our technical lead will review your brief for{" "}
                    <span className="font-semibold text-[#091C0F]">
                      {formData.company || "your organization"}
                    </span>{" "}
                    and reach out within 2 business hours.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs text-left max-w-md mx-auto space-y-1 font-mono text-[#475569]">
                  <div className="font-bold text-[#00875A]">Reference ID: {refId}</div>
                  <div>Sent To: info@gayatritechnology.in</div>
                  <div>Service: {formData.service}</div>
                  <div>Budget: {formData.budget}</div>
                  <div>Timeline: {formData.timeline}</div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#00875A] hover:text-[#47C56E] py-2.5 px-3.5 transition-colors min-h-[44px]"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Submit Another Requirement</span>
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
                      placeholder="e.g. Ramesh Sharma"
                      className="w-full bg-white border border-[#E2E8F0] rounded-xl px-3.5 sm:px-4 py-2.5 text-base sm:text-sm focus:border-[#47C56E] focus:ring-2 focus:ring-[#47C56E]/20 focus:outline-none transition-all min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#091C0F] mb-1.5 sm:mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Acme Corp India"
                      className="w-full bg-white border border-[#E2E8F0] rounded-xl px-3.5 sm:px-4 py-2.5 text-base sm:text-sm focus:border-[#47C56E] focus:ring-2 focus:ring-[#47C56E]/20 focus:outline-none transition-all min-h-[44px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#091C0F] mb-1.5 sm:mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ramesh@acmecorp.com"
                      className="w-full bg-white border border-[#E2E8F0] rounded-xl px-3.5 sm:px-4 py-2.5 text-base sm:text-sm focus:border-[#47C56E] focus:ring-2 focus:ring-[#47C56E]/20 focus:outline-none transition-all min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#091C0F] mb-1.5 sm:mb-2">
                      Phone Number *
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
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#091C0F] mb-1.5 sm:mb-2">
                      Service Required *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-white border border-[#E2E8F0] rounded-xl px-3.5 sm:px-4 py-2.5 text-base sm:text-sm focus:border-[#47C56E] focus:ring-2 focus:ring-[#47C56E]/20 focus:outline-none transition-all min-h-[44px]"
                    >
                      <option>Custom Web Application</option>
                      <option>Business Website Development</option>
                      <option>E-Commerce Development</option>
                      <option>UI/UX Design</option>
                      <option>Website Redesign</option>
                      <option>Website Maintenance & Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#091C0F] mb-1.5 sm:mb-2">
                      Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-white border border-[#E2E8F0] rounded-xl px-3.5 sm:px-4 py-2.5 text-base sm:text-sm focus:border-[#47C56E] focus:ring-2 focus:ring-[#47C56E]/20 focus:outline-none transition-all min-h-[44px]"
                    >
                      <option>Under ₹25,000</option>
                      <option>₹25,000 – ₹50,000</option>
                      <option>₹50,000 – ₹1,00,000</option>
                      <option>₹1,00,000 – ₹5,00,000</option>
                      <option>₹5,00,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#091C0F] mb-1.5 sm:mb-2">
                    Project Timeline
                  </label>
                  <div className="grid grid-cols-1 min-[340px]:grid-cols-3 gap-2 sm:gap-3">
                    {[
                      { id: "urgent", label: "Urgent (< 1 mo)" },
                      { id: "standard", label: "1 - 3 months" },
                      { id: "flexible", label: "Flexible" },
                    ].map((item) => (
                      <label
                        key={item.id}
                        className={`flex items-center gap-2 p-2.5 sm:p-3 bg-white border rounded-xl cursor-pointer transition-all min-h-[44px] ${formData.timeline === item.id
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
                          className="text-[#00875A] focus:ring-[#47C56E]"
                        />
                        <span className="text-xs font-semibold text-[#091C0F]">
                          {item.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#091C0F] mb-1.5 sm:mb-2">
                    Project Requirement Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Describe your current business problem, required modules, target users, or key objectives..."
                    className="w-full bg-white border border-[#E2E8F0] rounded-xl px-3.5 sm:px-4 py-2.5 text-base sm:text-sm focus:border-[#47C56E] focus:ring-2 focus:ring-[#47C56E]/20 focus:outline-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex justify-center items-center gap-2 bg-[#47C56E] text-[#091C0F] py-3.5 px-6 rounded-full text-base font-bold hover:bg-[#3db863] transition-all active:scale-95 shadow-md shadow-[#47C56E]/25 disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Registering Requirement...</span>
                  ) : (
                    <>
                      <span>Send Requirement</span>
                      <Send className="w-4 h-4 text-[#091C0F]" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#E2E8F0] shadow-xs flex items-start gap-4 hover:border-[#47C56E]/60 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#00875A] shrink-0 shadow-xs">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#475569] uppercase tracking-wider block">
                  Phone Consultation
                </span>
                <a
                  href="tel:+919328437392"
                  className="text-lg font-bold text-[#091C0F] hover:text-[#00875A] transition-colors"
                >
                  +91 93284 37392
                </a>
                <p className="text-xs text-[#475569] mt-1">
                  Direct senior technical advisory line
                </p>
              </div>
            </div>

            <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#E2E8F0] shadow-xs flex items-start gap-4 hover:border-[#47C56E]/60 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#00875A] shrink-0 shadow-xs">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#475569] uppercase tracking-wider block">
                  Email Requirement
                </span>
                <a
                  href="mailto:info@gayatritechnology.in"
                  className="text-lg font-bold text-[#091C0F] hover:text-[#00875A] transition-colors"
                >
                  info@gayatritechnology.in
                </a>
                <p className="text-xs text-[#475569] mt-1">
                  Typical reply in &lt; 2 business hours
                </p>
              </div>
            </div>

            <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#E2E8F0] shadow-xs flex items-start gap-4 hover:border-[#47C56E]/60 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#00875A] shrink-0 shadow-xs">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#475569] uppercase tracking-wider block">
                  Office Headquarters
                </span>
                <p className="text-base font-bold text-[#091C0F]">
                  102 Dev Palce, Ankur Nagar, Rajkot 360004, Gujarat, India
                </p>
              </div>
            </div>

            <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#E2E8F0] shadow-xs flex items-start gap-4 hover:border-[#47C56E]/60 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#00875A] shrink-0 shadow-xs">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#475569] uppercase tracking-wider block">
                  Business Operating Hours
                </span>
                <p className="text-base font-bold text-[#091C0F]">
                  Mon - Sat: 9:30 AM - 7:00 PM IST
                </p>
                <p className="text-xs text-[#475569] mt-1">
                  24/7 SLA ticket monitoring for active support clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
