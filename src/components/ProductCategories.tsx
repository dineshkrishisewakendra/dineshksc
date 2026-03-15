import Image from "next/image";
import { Sprout, Bug, FlaskConical, Wrench } from "lucide-react";

const categories = [
    {
        icon: Sprout,
        title: "Paddy & Vegetable Seeds",
        description: "High-yield certified seeds for paddy, wheat, maize, and seasonal vegetables.",
        color: "from-green-500 to-green-700",
        bgLight: "bg-green-50",
        borderColor: "border-green-200",
        iconColor: "text-green-600",
        image: "/categories/seeds.png",
    },
    {
        icon: Bug,
        title: "Organic & Bio Insecticides",
        description: "Eco-friendly bio-insecticides for sustainable pest management and healthy crops.",
        color: "from-emerald-500 to-teal-700",
        bgLight: "bg-teal-50",
        borderColor: "border-teal-200",
        iconColor: "text-teal-600",
        image: "/categories/bio-insecticides.png",
    },
    {
        icon: FlaskConical,
        title: "Chemical Fertilizers & Herbicides",
        description: "Atrazine 50 WP, DAP, Urea, and premium herbicides for maximum yield.",
        color: "from-yellow-500 to-amber-700",
        bgLight: "bg-yellow-50",
        borderColor: "border-yellow-200",
        iconColor: "text-yellow-600",
        image: "/categories/fertilizers.png",
    },
    {
        icon: Wrench,
        title: "Spraying Equipment & Tools",
        description: "Manual & battery-operated sprayers, tools, and modern farming equipment.",
        color: "from-brown-500 to-brown-700",
        bgLight: "bg-orange-50",
        borderColor: "border-orange-200",
        iconColor: "text-orange-600",
        image: "/categories/equipment.png",
    },
];

export default function ProductCategories() {
    return (
        <section id="categories" className="py-16 sm:py-24 bg-[#fefdfb]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                    <span className="inline-block px-4 py-1.5 bg-green-100 text-green-800 text-xs sm:text-sm font-semibold rounded-full mb-4">
                        Our Categories
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 text-balance">
                        Everything Your Farm Needs
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-gray-600 text-balance">
                        Quality agricultural products to help you grow more, earn more.
                    </p>
                </div>

                {/* Category Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <div
                                key={cat.title}
                                className={`group relative ${cat.bgLight} ${cat.borderColor} border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
                            >
                                {/* Category Image */}
                                <div className="relative h-44 sm:h-48 overflow-hidden">
                                    <Image
                                        src={cat.image}
                                        alt={cat.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-30 group-hover:opacity-20 transition-opacity duration-300`} />
                                    <div className="absolute top-3 left-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm">
                                        <Icon className={`w-5 h-5 ${cat.iconColor}`} />
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="p-5">
                                    <h4 className="text-base font-bold text-gray-900 mb-1.5">{cat.title}</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">{cat.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
