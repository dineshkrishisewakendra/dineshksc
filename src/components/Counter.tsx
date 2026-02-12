"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({ end, label, suffix = "", duration = 2000 }: { end: number; label: string; suffix?: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        let start = 0;
                        const increment = end / (duration / 16);
                        const timer = setInterval(() => {
                            start += increment;
                            if (start >= end) {
                                setCount(end);
                                clearInterval(timer);
                            } else {
                                setCount(Math.floor(start));
                            }
                        }, 16);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end, duration, hasAnimated]);

    return (
        <div ref={ref} className="text-center">
            <div className="text-4xl md:text-5xl font-black text-white mb-2">
                {count.toLocaleString()}{suffix}
            </div>
            <div className="text-white/70 text-sm font-medium uppercase tracking-wider">{label}</div>
        </div>
    );
}
