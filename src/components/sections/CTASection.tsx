"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function CTASection() {
    return (
        <section className="py-24 px-4 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary)]" />
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-accent)] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="relative max-w-4xl mx-auto text-center">
                <ScrollReveal>
                    <span className="inline-block px-5 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 border border-white/20">
                        🎓 Now Enrolling for 2026-27
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                        Give Your Child the Best
                        <span className="block text-[var(--color-accent-light)]">Start in Life</span>
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Join the Bright Horizons family and unlock a world of possibilities
                        for your child. Limited seats available for the upcoming academic year.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/admissions" className="btn-accent text-lg px-8 py-4">
                            Apply for Admission
                        </Link>
                        <Link href="/contact" className="btn-outline text-lg px-8 py-4">
                            Schedule a Visit
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
