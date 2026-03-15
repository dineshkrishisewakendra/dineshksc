import Image from "next/image";
import { Phone, ArrowRight, Wheat, Droplets, Sun } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-[90vh] sm:min-h-screen flex items-center overflow-hidden"
        >
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-green-900 to-green-800" />

            {/* Decorative floating elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-400/5 rounded-full blur-3xl" />
            </div>

            {/* Decorative icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
                <Wheat className="absolute top-24 right-20 w-16 h-16 text-yellow-400 rotate-12" />
                <Droplets className="absolute bottom-32 left-16 w-12 h-12 text-blue-300 -rotate-12" />
                <Sun className="absolute top-40 left-1/3 w-20 h-20 text-yellow-300" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-0 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left: Text Content */}
                    <div>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full mb-6 sm:mb-8">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-green-200 text-xs sm:text-sm font-medium">
                                Trusted Agricultural Partner in Trishuli Belwadamar
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight text-balance">
                            Empowering Farmers with{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
                                Quality Seeds
                            </span>{" "}
                            & Fertilizers
                        </h2>

                        {/* Subtitle */}
                        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-green-100/80 leading-relaxed max-w-2xl text-balance">
                            Your trusted partner in Trishuli Belwadamar, Chhattisgarh for high-yield seeds,
                            organic bio-insecticides, and modern farming equipment.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <a
                                href="#categories"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-green-950 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 rounded-2xl shadow-lg shadow-yellow-500/20 hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
                            >
                                Browse Products
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="tel:+919390057273"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-white border-2 border-white/30 hover:bg-white/10 rounded-2xl transition-all duration-300"
                            >
                                <Phone className="w-4 h-4" />
                                Call Us: +91 9390057273
                            </a>
                        </div>

                        {/* Trust indicators */}
                        <div className="mt-10 sm:mt-14 flex flex-wrap gap-6 sm:gap-10">
                            {[
                                { value: "500+", label: "Farmers Served" },
                                { value: "100+", label: "Product Range" },
                                { value: "10+", label: "Years Experience" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <p className="text-2xl sm:text-3xl font-extrabold text-yellow-400">
                                        {stat.value}
                                    </p>
                                    <p className="text-xs sm:text-sm text-green-200/70 font-medium mt-0.5">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Banner Image */}
                    <div className="relative flex justify-center lg:justify-end order-first lg:order-last">
                        <div className="relative w-full max-w-xl">
                            {/* Glow effect behind banner */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 via-green-400/20 to-yellow-400/20 rounded-3xl blur-2xl" />
                            <div className="relative rounded-2xl overflow-hidden border-2 border-yellow-400/30 shadow-2xl shadow-black/30 aspect-[4/3]">
                                <Image
                                    src="/banner.png"
                                    alt="मेसर्स दिनेश कृषि सेवा केन्द्र - Dinesh Krishi Seva Kendra Banner"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom wave decoration */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    viewBox="0 0 1440 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                >
                    <path
                        d="M0 40L48 36.7C96 33.3 192 26.7 288 30C384 33.3 480 46.7 576 50C672 53.3 768 46.7 864 40C960 33.3 1056 26.7 1152 26.7C1248 26.7 1344 33.3 1392 36.7L1440 40V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V40Z"
                        fill="#fefdfb"
                    />
                </svg>
            </div>
        </section>
    );
}
