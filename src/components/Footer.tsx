import { Sprout, MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#categories" },
    { label: "Featured", href: "#products" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
];

const productLinks = [
    { label: "Paddy Seeds", href: "#categories" },
    { label: "Vegetable Seeds", href: "#categories" },
    { label: "Bio Insecticides", href: "#categories" },
    { label: "Fertilizers", href: "#categories" },
    { label: "Spraying Equipment", href: "#categories" },
];

export default function Footer() {
    return (
        <footer className="bg-green-950 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
                    {/* Brand Column */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center shadow-md">
                                <Sprout className="w-5 h-5 text-white" />
                            </div>
                            <div className="leading-tight">
                                <h4 className="text-base font-extrabold text-white">Dinesh Krishi Seva</h4>
                                <p className="text-xs text-green-300 font-medium">Kendra</p>
                            </div>
                        </div>
                        <p className="text-sm text-green-200/70 leading-relaxed mb-5">
                            Your trusted partner for quality agricultural products in Trishuli Belwadamar,
                            Chhattisgarh. Empowering farmers since establishment.
                        </p>
                        <p className="text-xs text-green-300/50 font-mono">
                            GST: 22GYBPK1561B1Z1
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h5 className="text-sm font-bold text-yellow-400 uppercase tracking-wider mb-4">
                            Quick Links
                        </h5>
                        <ul className="space-y-2.5">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-green-200/70 hover:text-yellow-400 transition-colors duration-200"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h5 className="text-sm font-bold text-yellow-400 uppercase tracking-wider mb-4">
                            Our Products
                        </h5>
                        <ul className="space-y-2.5">
                            {productLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-green-200/70 hover:text-yellow-400 transition-colors duration-200"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h5 className="text-sm font-bold text-yellow-400 uppercase tracking-wider mb-4">
                            Contact
                        </h5>
                        <ul className="space-y-3">
                            <li className="flex gap-3">
                                <MapPin className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                                <span className="text-sm text-green-200/70">
                                    Village Road, Belwadamar Chowk, Near Men Bazaar, Trishuli Belwadamar, CG - 497220
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                                <div className="text-sm text-green-200/70 space-y-1">
                                    <a href="tel:+919390057273" className="block hover:text-yellow-400 transition-colors">
                                        +91 9390057273
                                    </a>
                                    <a href="tel:+918302619199" className="block hover:text-yellow-400 transition-colors">
                                        +91 8302619199
                                    </a>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <Mail className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                                <span className="text-sm text-green-200/70">Contact via WhatsApp</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 sm:mt-14 pt-6 border-t border-green-800/50">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-green-300/50 text-center sm:text-left">
                            © {new Date().getFullYear()} Dinesh Krishi Seva Kendra. All rights reserved.
                        </p>
                        <div className="flex items-center gap-4 sm:gap-6">
                            <a
                                href="#"
                                className="text-xs text-green-300/50 hover:text-yellow-400 transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="text-xs text-green-300/50 hover:text-yellow-400 transition-colors"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
