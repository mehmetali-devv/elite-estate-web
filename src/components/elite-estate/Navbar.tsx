"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, ArrowUp } from "lucide-react";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 transition-all duration-500 ${scrolled ? 'backdrop-blur-xl bg-elite-black/80 py-4 border-b border-white/10' : 'bg-transparent border-b border-white/5'}`}>
                <Link href="/elite-estate" className="text-2xl font-serif font-bold text-white tracking-widest hover:scale-105 transition-transform">
                    ELITE <span className="text-elite-gold">ESTATE</span>
                </Link>

                <div className="hidden md:flex space-x-12 text-sm uppercase tracking-widest font-light">
                    <Link href="/elite-estate#properties" className="hover:text-elite-gold transition-colors duration-300">Properties</Link>
                    <Link href="#" className="hover:text-elite-gold transition-colors duration-300">Services</Link>
                    <Link href="#" className="hover:text-elite-gold transition-colors duration-300">About</Link>
                    <Link href="#" className="hover:text-elite-gold transition-colors duration-300">Contact</Link>
                </div>

                <button className="p-2 text-white hover:text-elite-gold transition-colors md:hidden">
                    <Menu size={24} />
                </button>

                <div className="hidden md:block">
                    <button className="px-6 py-2 border border-elite-gold text-elite-gold text-xs uppercase tracking-widest hover:bg-elite-gold hover:text-black transition-all duration-500 hover:shadow-[0_0_15px_rgba(184,134,11,0.5)]">
                        Inquire
                    </button>
                </div>
            </nav>

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 z-40 p-3 bg-elite-gold text-black rounded-full shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(184,134,11,0.6)] ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
            >
                <ArrowUp size={20} />
            </button>
        </>
    );
}
