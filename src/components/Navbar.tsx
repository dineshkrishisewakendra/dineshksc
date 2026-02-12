"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Academics", href: "/academics" },
        { name: "Admissions", href: "/admissions" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "glass shadow-lg py-2"
                    : "bg-transparent py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                            <span className="text-white font-bold text-lg">B</span>
                        </div>
                        <div>
                            <h1 className={`font-bold text-lg leading-tight transition-colors duration-300 ${scrolled ? 'text-[var(--color-primary)]' : 'text-white'}`}>
                                Bright Horizons
                            </h1>
                            <p className={`text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${scrolled ? 'text-[var(--color-accent)]' : 'text-[var(--color-accent-light)]'}`}>
                                Academy
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/20 ${scrolled
                                        ? "text-[var(--color-text-primary)] hover:text-[var(--color-primary)]"
                                        : "text-white/90 hover:text-white"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/admissions"
                            className="ml-4 btn-accent text-sm inline-flex items-center gap-2"
                        >
                            <span>Student Portal</span>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-[var(--color-primary)]" : "text-white"
                            }`}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="glass rounded-2xl mt-2 p-4 space-y-1 shadow-xl">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-3 rounded-xl text-[var(--color-text-primary)] font-medium hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition-all duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/admissions"
                            onClick={() => setIsOpen(false)}
                            className="block text-center btn-accent mt-3"
                        >
                            Student Portal
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
