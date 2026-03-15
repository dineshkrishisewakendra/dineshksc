import { Shield, Award, TrendingUp, Users } from "lucide-react";

const trustPoints = [
    {
        icon: Shield,
        title: "Certified Products",
        description: "All seeds and fertilizers are government-certified and quality tested.",
    },
    {
        icon: Award,
        title: "Established Retailer",
        description: "Trusted retailer and trader serving farmers in Trishuli Belwadamar and surrounding areas.",
    },
    {
        icon: TrendingUp,
        title: "Best Market Prices",
        description: "Competitive pricing on all products with bulk purchase discounts available.",
    },
    {
        icon: Users,
        title: "Expert Guidance",
        description: "Get personalized crop advisory and product recommendations from our team.",
    },
];

export default function AboutTrust() {
    return (
        <section id="about" className="py-16 sm:py-24 bg-[#fefdfb]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
                    {/* Left - About Text */}
                    <div>
                        <span className="inline-block px-4 py-1.5 bg-green-100 text-green-800 text-xs sm:text-sm font-semibold rounded-full mb-4">
                            About Us
                        </span>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight text-balance">
                            Established Retailer & Trader in{" "}
                            <span className="text-green-700">Trishuli Belwadamar</span>
                        </h3>
                        <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-600 leading-relaxed">
                            <strong>Dinesh Krishi Seva Kendra</strong> is a trusted name in the agricultural
                            community of Trishuli Belwadamar, Surguja, Chhattisgarh. We provide a comprehensive range
                            of high-quality seeds, organic and chemical fertilizers, bio-insecticides, and
                            modern farming equipment to help farmers achieve better yields and sustainable
                            growth.
                        </p>
                        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                            Our commitment to quality, fair pricing, and personalized service has made us
                            the preferred choice for farmers across the region.
                        </p>

                        {/* GST Badge */}
                        <div className="mt-6 sm:mt-8 inline-flex items-center gap-3 px-5 py-3 bg-green-50 border border-green-200 rounded-2xl">
                            <Shield className="w-5 h-5 text-green-700 shrink-0" />
                            <div>
                                <p className="text-xs text-gray-500 font-medium">GST Registered Business</p>
                                <p className="text-sm font-bold text-green-800">GST No: 22GYBPK1561B1Z1</p>
                            </div>
                        </div>
                    </div>

                    {/* Right - Trust Points */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        {trustPoints.map((point) => {
                            const Icon = point.icon;
                            return (
                                <div
                                    key={point.title}
                                    className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-base font-bold text-gray-900 mb-1.5">{point.title}</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">{point.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
