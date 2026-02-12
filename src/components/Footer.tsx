import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[var(--color-primary-dark)] text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-xl flex items-center justify-center">
                                <span className="text-[var(--color-primary-dark)] font-bold text-lg">B</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Bright Horizons</h3>
                                <p className="text-xs text-[var(--color-accent)] tracking-widest uppercase">Academy</p>
                            </div>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Nurturing future leaders through innovative education, world-class
                            facilities, and a commitment to holistic development since 1995.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-3 pt-2">
                            {["facebook", "twitter", "instagram", "youtube"].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-[var(--color-primary-dark)] transition-all duration-300 hover:scale-110"
                                    aria-label={social}
                                >
                                    <SocialIcon name={social} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-[var(--color-accent)]">Quick Links</h4>
                        <ul className="space-y-3">
                            {[
                                { name: "About Us", href: "/about" },
                                { name: "Academic Programs", href: "/academics" },
                                { name: "Admissions", href: "/admissions" },
                                { name: "Student Portal", href: "/admissions" },
                                { name: "News & Events", href: "/#events" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-[var(--color-accent)] transition-colors duration-300 text-sm flex items-center gap-2"
                                    >
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-[var(--color-accent)]">Contact Us</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-white/70">123 Education Lane,<br />Springfield, IL 62704</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-[var(--color-accent)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-white/70">(555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-[var(--color-accent)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-white/70">info@brighthorizons.edu</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-[var(--color-accent)]">Newsletter</h4>
                        <p className="text-white/70 text-sm mb-4">
                            Stay updated with the latest news and events from our academy.
                        </p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                            />
                            <button
                                type="submit"
                                className="w-full btn-accent text-sm py-3"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-white/50 text-sm">
                            © {new Date().getFullYear()} Bright Horizons Academy. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link href="#" className="text-white/50 hover:text-[var(--color-accent)] text-sm transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-white/50 hover:text-[var(--color-accent)] text-sm transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ name }: { name: string }) {
    const icons: Record<string, JSX.Element> = {
        facebook: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
            </svg>
        ),
        twitter: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.44,4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96,1.32-2.02-.88.52-1.86.9-2.9,1.1-.82-.88-2-1.43-3.3-1.43-2.5,0-4.55,2.04-4.55,4.54,0,.36.03.7.1,1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6,1.45-.6,2.3,0,1.56.8,2.95,2,3.77-.74-.03-1.44-.23-2.05-.57v.06c0,2.2,1.56,4.03,3.64,4.44-.67.18-1.37.2-2.06.08.58,1.8,2.26,3.12,4.25,3.16C5.78,18.1,3.37,18.74,1,18.46c2,1.3,4.4,2.04,6.97,2.04,8.35,0,12.92-6.92,12.92-12.93,0-.2,0-.4-.02-.6.9-.63,1.96-1.22,2.56-2.14Z" />
            </svg>
        ),
        instagram: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2.16c3.2,0,3.58.01,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85,0,3.2-.01,3.58-.07,4.85-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.64.07-4.85.07-3.2,0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85,0-3.2.01-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33.01,7.05.07,2.7.27.27,2.69.07,7.05.01,8.33,0,8.74,0,12s.01,3.67.07,4.95c.2,4.36,2.62,6.78,6.98,6.98,1.28.06,1.69.07,4.95.07s3.67-.01,4.95-.07c4.35-.2,6.78-2.62,6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z" />
            </svg>
        ),
        youtube: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.5,6.19a3.02,3.02,0,0,0-2.12-2.14C19.5,3.5,12,3.5,12,3.5s-7.5,0-9.38.55A3.02,3.02,0,0,0,.5,6.19,31.93,31.93,0,0,0,0,12a31.93,31.93,0,0,0,.5,5.81,3.02,3.02,0,0,0,2.12,2.14c1.88.55,9.38.55,9.38.55s7.5,0,9.38-.55a3.02,3.02,0,0,0,2.12-2.14A31.93,31.93,0,0,0,24,12,31.93,31.93,0,0,0,23.5,6.19ZM9.55,15.57V8.43L15.82,12,9.55,15.57Z" />
            </svg>
        ),
    };
    return icons[name] || null;
}
