"use client";

import ScrollReveal from "@/components/ScrollReveal";

const departments = [
    {
        name: "Science & Mathematics",
        subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science"],
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80",
        color: "from-blue-500 to-cyan-400",
    },
    {
        name: "Humanities & Social Sciences",
        subjects: ["English Literature", "History", "Geography", "Economics", "Political Science"],
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80",
        color: "from-purple-500 to-pink-400",
    },
    {
        name: "Arts & Creative Studies",
        subjects: ["Visual Arts", "Music", "Theater", "Creative Writing", "Digital Media"],
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80",
        color: "from-orange-500 to-amber-400",
    },
    {
        name: "Physical Education & Sports",
        subjects: ["Football", "Basketball", "Swimming", "Track & Field", "Gymnastics"],
        image: "https://images.unsplash.com/photo-1461896836934-bd45ba8bfb9c?w=600&q=80",
        color: "from-green-500 to-emerald-400",
    },
];

const features = [
    { icon: "📚", title: "Advanced Curriculum", desc: "Rigorous academic programs aligned with international standards." },
    { icon: "🔬", title: "Research Labs", desc: "State-of-the-art laboratories for hands-on scientific exploration." },
    { icon: "💻", title: "Digital Learning", desc: "Integration of technology in every classroom for modern education." },
    { icon: "🌍", title: "Global Exchange", desc: "Student exchange programs with partner schools across the world." },
    { icon: "🎭", title: "Extracurriculars", desc: "50+ clubs and activities to explore diverse interests and talents." },
    { icon: "📖", title: "Library & Resources", desc: "Extensive library with 25,000+ books and digital resources." },
];

export default function AcademicsPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)]">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl" />
                </div>
                <div className="relative max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Academics</h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto">
                        Discover our comprehensive academic programs designed to challenge, inspire, and prepare students for future success.
                    </p>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <span className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
                            <h2 className="section-title mt-3">Academic Excellence</h2>
                        </div>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((f) => (
                            <ScrollReveal key={f.title}>
                                <div className="p-8 rounded-3xl bg-[var(--color-surface)] card-hover text-center">
                                    <div className="text-4xl mb-4">{f.icon}</div>
                                    <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">{f.title}</h3>
                                    <p className="text-sm text-[var(--color-text-secondary)]">{f.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Departments */}
            <section className="py-24 px-4 bg-[var(--color-surface)]">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <span className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest">Departments</span>
                            <h2 className="section-title mt-3">Our Departments</h2>
                        </div>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {departments.map((dept) => (
                            <ScrollReveal key={dept.name}>
                                <div className="bg-white rounded-3xl overflow-hidden card-hover group">
                                    <div className="relative h-48 overflow-hidden">
                                        <img src={dept.image} alt={dept.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className={`absolute inset-0 bg-gradient-to-t ${dept.color} opacity-60`} />
                                        <h3 className="absolute bottom-4 left-6 text-xl font-bold text-white">{dept.name}</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex flex-wrap gap-2">
                                            {dept.subjects.map((s) => (
                                                <span key={s} className="px-3 py-1 bg-[var(--color-surface)] rounded-full text-sm text-[var(--color-text-secondary)] font-medium">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
