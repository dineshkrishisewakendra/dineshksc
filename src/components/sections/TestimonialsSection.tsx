"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "Parent",
        text: "Bright Horizons Academy has been transformative for our daughter. The teachers genuinely care about each student's growth, and the facilities are world-class.",
        avatar: "SM",
        rating: 5,
    },
    {
        name: "James Chen",
        role: "Alumni, Class of 2022",
        text: "The foundation I received here prepared me exceptionally well for university. The STEM program in particular gave me a real competitive edge.",
        avatar: "JC",
        rating: 5,
    },
    {
        name: "Maria Rodriguez",
        role: "Parent",
        text: "We love the holistic approach to education here. Our son excels not just academically, but has also developed incredible leadership and social skills.",
        avatar: "MR",
        rating: 5,
    },
];

export default function TestimonialsSection() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest">
                            Testimonials
                        </span>
                        <h2 className="section-title mt-3">What Parents Say</h2>
                        <p className="section-subtitle">
                            Hear from our community about the Bright Horizons experience.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="relative bg-[var(--color-surface)] rounded-3xl p-8 md:p-12">
                        {/* Stars */}
                        <div className="flex gap-1 justify-center mb-6">
                            {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>

                        {/* Quote */}
                        <p className="text-center text-lg md:text-xl text-[var(--color-text-primary)] leading-relaxed mb-8 italic max-w-2xl mx-auto transition-all duration-500">
                            &ldquo;{testimonials[active].text}&rdquo;
                        </p>

                        {/* Author */}
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-14 h-14 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-full flex items-center justify-center text-white font-bold text-lg">
                                {testimonials[active].avatar}
                            </div>
                            <div className="text-center">
                                <p className="font-bold text-[var(--color-primary)]">
                                    {testimonials[active].name}
                                </p>
                                <p className="text-sm text-[var(--color-text-secondary)]">
                                    {testimonials[active].role}
                                </p>
                            </div>
                        </div>

                        {/* Dots */}
                        <div className="flex justify-center gap-2 mt-8">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActive(i)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${i === active
                                            ? "bg-[var(--color-primary)] w-8"
                                            : "bg-[var(--color-primary)]/20 hover:bg-[var(--color-primary)]/40"
                                        }`}
                                    aria-label={`Testimonial ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
