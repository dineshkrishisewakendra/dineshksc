"use client";

import Counter from "@/components/Counter";

export default function StatsSection() {
    return (
        <section className="relative -mt-16 z-20 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary)] rounded-3xl p-8 md:p-12 shadow-2xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <Counter end={2500} label="Students" suffix="+" />
                        <Counter end={150} label="Expert Teachers" suffix="+" />
                        <Counter end={45} label="Programs" suffix="+" />
                        <Counter end={30} label="Years of Excellence" suffix="+" />
                    </div>
                </div>
            </div>
        </section>
    );
}
