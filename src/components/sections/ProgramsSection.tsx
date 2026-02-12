"use client";

import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const programs = [
    {
        title: "Science & Technology",
        description:
            "Cutting-edge STEM programs with hands-on lab experiences, robotics clubs, and coding workshops.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        color: "from-blue-500 to-cyan-400",
    },
    {
        title: "Arts & Humanities",
        description:
            "Vibrant programs in visual arts, theater, music, and creative writing to nurture artistic talents.",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        ),
        color: "from-purple-500 to-pink-400",
    },
    {
        title: "Sports & Athletics",
        description:
            "Championship-level facilities for football, basketball, swimming, and track & field events.",
        image: "https://images.unsplash.com/photo-1461896836934-bd45ba8bfb9c?w=600&q=80",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        color: "from-orange-500 to-amber-400",
    },
];

export default function ProgramsSection() {
    return (
        <section className="py-24 px-4 bg-[var(--color-surface)]">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest">
                            Our Programs
                        </span>
                        <h2 className="section-title mt-3">Academic Programs</h2>
                        <p className="section-subtitle">
                            Explore our diverse range of programs designed to prepare students for
                            success in an ever-evolving world.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {programs.map((program, i) => (
                        <ScrollReveal key={program.title}>
                            <div
                                className="bg-white rounded-3xl overflow-hidden card-hover group"
                                style={{ animationDelay: `${i * 0.15}s` }}
                            >
                                {/* Image */}
                                <div className="relative h-52 overflow-hidden">
                                    <img
                                        src={program.image}
                                        alt={program.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                    <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                                        {program.icon}
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                                        {program.title}
                                    </h3>
                                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
                                        {program.description}
                                    </p>
                                    <Link
                                        href="/academics"
                                        className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold text-sm hover:gap-3 transition-all duration-300"
                                    >
                                        Learn More
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
