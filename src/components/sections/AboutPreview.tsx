"use client";

import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export default function AboutPreview() {
    return (
        <section className="py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image */}
                    <ScrollReveal>
                        <div className="relative">
                            <div className="rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80"
                                    alt="Students in classroom"
                                    className="w-full h-[400px] object-cover"
                                />
                            </div>
                            {/* Floating Card */}
                            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hidden md:block">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-xl flex items-center justify-center">
                                        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg text-[var(--color-primary)]">A+ Accredited</p>
                                        <p className="text-sm text-[var(--color-text-secondary)]">National Board</p>
                                    </div>
                                </div>
                            </div>
                            {/* Background Decoration */}
                            <div className="absolute -top-4 -left-4 w-full h-full bg-[var(--color-primary)]/10 rounded-3xl -z-10" />
                        </div>
                    </ScrollReveal>

                    {/* Content */}
                    <ScrollReveal>
                        <div>
                            <span className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest">About Us</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mt-3 mb-6 leading-tight">
                                A Legacy of Excellence <br />in Education
                            </h2>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                                Founded in 1995, Bright Horizons Academy has been at the forefront of
                                educational innovation. Our mission is to create a nurturing environment
                                where every student can discover their potential and develop into
                                confident, compassionate, and capable individuals.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "State-of-the-art STEM laboratories",
                                    "Award-winning sports facilities",
                                    "Comprehensive arts and music programs",
                                    "Small class sizes for personalized attention",
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
                            <Link href="/about" className="btn-primary inline-flex items-center gap-2">
                                Discover Our Story
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
