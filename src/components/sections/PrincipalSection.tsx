"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function PrincipalSection() {
    return (
        <section className="py-24 px-4 bg-[var(--color-surface)]">
            <div className="max-w-5xl mx-auto">
                <ScrollReveal>
                    <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl">
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--color-primary)]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--color-accent)]/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-0">
                            {/* Image */}
                            <div className="md:col-span-2">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                                    alt="Principal"
                                    className="w-full h-full min-h-[300px] object-cover"
                                />
                            </div>
                            {/* Content */}
                            <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                                <svg className="w-12 h-12 text-[var(--color-accent)]/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                                <blockquote className="text-lg md:text-xl text-[var(--color-text-primary)] leading-relaxed mb-6 italic">
                                    &ldquo;At Bright Horizons Academy, we believe that every child carries
                                    within them the seeds of greatness. Our role is to provide the
                                    sunlight, water, and nurturing environment they need to bloom into
                                    their fullest potential.&rdquo;
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-0.5 bg-[var(--color-accent)]" />
                                    <div>
                                        <p className="font-bold text-[var(--color-primary)]">
                                            Dr. Robert Anderson
                                        </p>
                                        <p className="text-sm text-[var(--color-text-secondary)]">
                                            Principal & Director of Education
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
