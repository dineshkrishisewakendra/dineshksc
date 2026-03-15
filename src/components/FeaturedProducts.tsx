import { ExternalLink } from "lucide-react";
import Image from "next/image";

const products = [
    {
        name: "Premium Bio Insecticide",
        packaging: "500 ml HDPE Bottle",
        description: "Organic pest control for paddy, vegetables, and fruit crops. Safe and effective.",
        tag: "Bestseller",
        tagColor: "bg-green-100 text-green-800",
        image: "/products/bio-insecticide.png",
    },
    {
        name: "Atrazine 50 WP Herbicide",
        packaging: "500 gm Pack",
        description: "Pre-emergent herbicide for sugarcane, maize, and sorghum. Controls broadleaf weeds.",
        tag: "Popular",
        tagColor: "bg-yellow-100 text-yellow-800",
        image: "/products/atrazine-herbicide.png",
    },
    {
        name: "Hybrid Paddy Seeds (MTU-1010)",
        packaging: "5 kg Bag",
        description: "High-yield certified hybrid paddy seeds. Suitable for Kharif season in Chhattisgarh.",
        tag: "New Arrival",
        tagColor: "bg-blue-100 text-blue-800",
        image: "/products/paddy-seeds.png",
    },
    {
        name: "DAP Fertilizer",
        packaging: "50 kg Bag",
        description: "Di-ammonium phosphate for strong root development and early crop vigour.",
        tag: "Essential",
        tagColor: "bg-orange-100 text-orange-800",
        image: "/products/dap-fertilizer.png",
    },
    {
        name: "Battery Operated Sprayer",
        packaging: "16 Litre Capacity",
        description: "Rechargeable battery sprayer with adjustable nozzle. Ideal for small and medium farms.",
        tag: "Top Rated",
        tagColor: "bg-purple-100 text-purple-800",
        image: "/products/battery-sprayer.png",
    },
    {
        name: "Neem Oil Extract",
        packaging: "1 Litre Bottle",
        description: "100% organic neem-based insecticide. Safe for crops, soil, and beneficial insects.",
        tag: "Organic",
        tagColor: "bg-emerald-100 text-emerald-800",
        image: "/products/neem-oil.png",
    },
];

export default function FeaturedProducts() {
    return (
        <section id="products" className="py-16 sm:py-24 bg-green-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                    <span className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-800 text-xs sm:text-sm font-semibold rounded-full mb-4">
                        Featured Products
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 text-balance">
                        Top Quality Products for Your Farm
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-gray-600 text-balance">
                        Handpicked agricultural products trusted by hundreds of farmers.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {products.map((product) => (
                        <div
                            key={product.name}
                            className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Product Image */}
                            <div className="relative h-48 sm:h-56 bg-gradient-to-br from-green-50 via-white to-yellow-50 overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                <span
                                    className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full ${product.tagColor}`}
                                >
                                    {product.tag}
                                </span>
                            </div>

                            {/* Product Info */}
                            <div className="p-5 sm:p-6">
                                <h4 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h4>
                                <p className="text-xs font-medium text-green-700 bg-green-50 inline-block px-2 py-1 rounded mb-3">
                                    {product.packaging}
                                </p>
                                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                                    {product.description}
                                </p>

                                {/* WhatsApp CTA */}
                                <a
                                    href={`https://wa.me/918302619199?text=Hi%2C%20I%20want%20to%20enquire%20about%20${encodeURIComponent(product.name)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold text-white bg-whatsapp hover:bg-whatsapp-dark rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                                >
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Get Quote on WhatsApp
                                    <ExternalLink className="w-3 h-3 opacity-60" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
