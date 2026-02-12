"use client";

import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const steps = [
    { step: "01", title: "Submit Application", desc: "Complete the online application form with required documents." },
    { step: "02", title: "Entrance Assessment", desc: "Students take an age-appropriate assessment test." },
    { step: "03", title: "Interview", desc: "Family interview with our admissions team." },
    { step: "04", title: "Acceptance", desc: "Receive your acceptance letter and enrollment packet." },
];

export default function AdmissionsPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)]">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute bottom-10 left-10 w-96 h-96 bg-[var(--color-accent)] rounded-full blur-3xl" />
                </div>
                <div className="relative max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Admissions</h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto">
                        Begin your child&apos;s journey at Bright Horizons Academy. We welcome applications for all grade levels.
                    </p>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <span className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest">How to Apply</span>
                            <h2 className="section-title mt-3">Admission Process</h2>
                        </div>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {steps.map((s, i) => (
                            <ScrollReveal key={s.step}>
                                <div className="text-center relative">
                                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                        <span className="text-2xl font-black text-white">{s.step}</span>
                                    </div>
                                    {i < steps.length - 1 && (
                                        <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-[var(--color-primary)]/20" />
                                    )}
                                    <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">{s.title}</h3>
                                    <p className="text-sm text-[var(--color-text-secondary)]">{s.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Requirements & CTA */}
            <section className="py-24 px-4 bg-[var(--color-surface)]">
                <div className="max-w-4xl mx-auto">
                    <ScrollReveal>
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">Required Documents</h2>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "Completed application form",
                                    "Birth certificate copy",
                                    "Previous school transcripts / report cards",
                                    "Two passport-size photographs",
                                    "Parent/Guardian ID proof",
                                    "Transfer certificate (if applicable)",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[var(--color-text-primary)]">
                                        <div className="w-6 h-6 bg-[var(--color-accent)]/20 rounded-full flex items-center justify-center shrink-0">
                                            <svg className="w-3.5 h-3.5 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                                    Schedule a Visit
                                </Link>
                                <a href="tel:+15551234567" className="btn-accent inline-flex items-center justify-center gap-2">
                                    Call Us: (555) 123-4567
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}
