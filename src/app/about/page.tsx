"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)]">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl" />
                    <div className="absolute bottom-10 left-10 w-96 h-96 bg-[var(--color-accent)] rounded-full blur-3xl" />
                </div>
                <div className="relative max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4">About Us</h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto">
                        Three decades of shaping young minds and building brighter futures through education excellence.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <ScrollReveal>
                            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 card-hover">
                                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-2xl flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">Our Vision</h3>
                                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                    To be a globally recognized institution that empowers students to become innovative thinkers, compassionate leaders, and responsible global citizens who make a positive impact on the world.
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal>
                            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 card-hover">
                                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-2xl flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">Our Mission</h3>
                                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                    To provide a nurturing and stimulating learning environment that fosters intellectual curiosity, character development, and a lifelong love of learning, preparing every student to thrive in an ever-changing world.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* History */}
            <section className="py-24 px-4 bg-[var(--color-surface)]">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <span className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest">Our Journey</span>
                            <h2 className="section-title mt-3">A Rich History</h2>
                        </div>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal>
                            <img
                                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80"
                                alt="School campus"
                                className="w-full h-[400px] object-cover rounded-3xl shadow-xl"
                            />
                        </ScrollReveal>
                        <ScrollReveal>
                            <div className="space-y-6">
                                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                    Founded in 1995 by visionary educators Dr. Robert Anderson and Dr. Helen Carter, Bright Horizons Academy began as a small community school with just 50 students and a dream of transforming education.
                                </p>
                                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                    Over three decades, we have grown into one of the most respected private academies in the region, with over 2,500 students, 150+ dedicated teachers, and a track record of academic excellence that includes numerous national awards and recognitions.
                                </p>
                                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                    Today, our graduates attend top universities worldwide and have become leaders in science, technology, arts, business, and public service — carrying forward the values and knowledge they gained at Bright Horizons.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <span className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest">What Drives Us</span>
                            <h2 className="section-title mt-3">Core Values</h2>
                        </div>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Excellence", icon: "⭐", desc: "We pursue the highest standards in everything we do." },
                            { title: "Integrity", icon: "🤝", desc: "We act with honesty, fairness, and moral courage." },
                            { title: "Innovation", icon: "💡", desc: "We embrace creative thinking and new approaches." },
                            { title: "Community", icon: "❤️", desc: "We foster belonging, respect, and collaboration." },
                        ].map((value) => (
                            <ScrollReveal key={value.title}>
                                <div className="text-center p-8 rounded-3xl bg-[var(--color-surface)] card-hover">
                                    <div className="text-4xl mb-4">{value.icon}</div>
                                    <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">{value.title}</h3>
                                    <p className="text-sm text-[var(--color-text-secondary)]">{value.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
