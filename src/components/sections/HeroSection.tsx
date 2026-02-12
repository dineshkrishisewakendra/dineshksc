import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c8f1?w=1920&q=80')`,
                }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 hero-gradient" />

            {/* Floating Decorative Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-accent)]/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-primary-light)]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                <div className="animate-fade-in-up">
                    <span className="inline-block px-5 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8 border border-white/20">
                        🎓 Admissions Open for 2026-27
                    </span>
                </div>

                <h1
                    className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-tight animate-fade-in-up"
                    style={{ animationDelay: "0.2s" }}
                >
                    Shaping Tomorrow&apos;s
                    <span className="block bg-gradient-to-r from-[var(--color-accent-light)] to-[var(--color-accent)] bg-clip-text text-transparent">
                        Leaders Today
                    </span>
                </h1>

                <p
                    className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
                    style={{ animationDelay: "0.4s" }}
                >
                    At Bright Horizons Academy, we nurture curious minds and build strong
                    characters through innovative education, world-class facilities, and a
                    caring community.
                </p>

                <div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
                    style={{ animationDelay: "0.6s" }}
                >
                    <Link href="/admissions" className="btn-accent text-lg px-8 py-4 flex items-center gap-2">
                        Apply Now
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                    <Link href="/about" className="btn-outline text-lg px-8 py-4">
                        Learn More
                    </Link>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
