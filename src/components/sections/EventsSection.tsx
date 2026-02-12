"use client";

import ScrollReveal from "@/components/ScrollReveal";

const events = [
    {
        date: "Mar 15",
        month: "2026",
        title: "Annual Science Fair",
        description: "Students showcase innovative science projects and experiments.",
        category: "Academic",
        color: "bg-blue-500",
    },
    {
        date: "Apr 02",
        month: "2026",
        title: "Spring Sports Tournament",
        description: "Inter-school championship across football, basketball and athletics.",
        category: "Sports",
        color: "bg-orange-500",
    },
    {
        date: "Apr 20",
        month: "2026",
        title: "Arts & Culture Festival",
        description: "A celebration of music, dance, theater, and visual arts by our students.",
        category: "Arts",
        color: "bg-purple-500",
    },
    {
        date: "May 05",
        month: "2026",
        title: "Parent-Teacher Conference",
        description: "Connect with teachers to discuss your child&apos;s academic progress.",
        category: "Community",
        color: "bg-green-500",
    },
];

export default function EventsSection() {
    return (
        <section id="events" className="py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest">
                            What&apos;s Happening
                        </span>
                        <h2 className="section-title mt-3">Upcoming Events</h2>
                        <p className="section-subtitle">
                            Stay connected with our vibrant school community through events
                            and activities.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {events.map((event, i) => (
                        <ScrollReveal key={event.title}>
                            <div className="flex gap-5 p-6 rounded-2xl border border-gray-100 card-hover bg-white group">
                                {/* Date Box */}
                                <div className="shrink-0 w-20 h-20 bg-[var(--color-primary)]/5 rounded-2xl flex flex-col items-center justify-center group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                                    <span className="text-2xl font-black text-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                                        {event.date.split(" ")[1]}
                                    </span>
                                    <span className="text-xs font-medium text-[var(--color-text-secondary)] group-hover:text-white/70 transition-colors duration-300 uppercase">
                                        {event.date.split(" ")[0]}
                                    </span>
                                </div>
                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className={`w-2 h-2 rounded-full ${event.color}`}></span>
                                        <span className="text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">
                                            {event.category}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                                        {event.title}
                                    </h3>
                                    <p className="text-sm text-[var(--color-text-secondary)]">
                                        {event.description}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
