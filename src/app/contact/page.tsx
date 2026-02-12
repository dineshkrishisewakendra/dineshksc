"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for your message! We will get back to you shortly.");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    };

    const contactInfo = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: "Visit Us",
            lines: ["123 Education Lane", "Springfield, IL 62704"],
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: "Call Us",
            lines: ["(555) 123-4567", "Mon-Fri: 8AM - 5PM"],
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: "Email Us",
            lines: ["info@brighthorizons.edu", "admissions@brighthorizons.edu"],
        },
    ];

    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)]">
                <div className="relative max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Contact Us</h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto">
                        We&apos;d love to hear from you. Reach out with any questions about our programs, admissions, or campus.
                    </p>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="relative -mt-8 z-10 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {contactInfo.map((info) => (
                            <ScrollReveal key={info.title}>
                                <div className="bg-white rounded-2xl p-6 shadow-xl text-center card-hover">
                                    <div className="w-14 h-14 mx-auto bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center text-[var(--color-primary)] mb-4">
                                        {info.icon}
                                    </div>
                                    <h3 className="font-bold text-[var(--color-primary)] mb-2">{info.title}</h3>
                                    {info.lines.map((line, i) => (
                                        <p key={i} className="text-sm text-[var(--color-text-secondary)]">{line}</p>
                                    ))}
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <ScrollReveal>
                            <div className="bg-[var(--color-surface)] rounded-3xl p-8 md:p-10">
                                <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">Send Us a Message</h2>
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-light)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-light)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-light)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all"
                                        />
                                        <select
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all"
                                        >
                                            <option value="">Select Subject</option>
                                            <option value="admissions">Admissions Inquiry</option>
                                            <option value="academics">Academic Programs</option>
                                            <option value="campus">Campus Visit</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <textarea
                                        placeholder="Your Message"
                                        rows={5}
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-light)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all resize-none"
                                    />
                                    <button type="submit" className="btn-primary w-full py-4 text-lg">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </ScrollReveal>

                        {/* Map Placeholder */}
                        <ScrollReveal>
                            <div className="rounded-3xl overflow-hidden shadow-xl h-full min-h-[400px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sus!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: "400px" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="School Location"
                                />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </>
    );
}
