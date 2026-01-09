"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-elite-black/90 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold tracking-widest text-elite-gold font-h">
                    ELITE ESTATE
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    {["Properties", "Services", "About", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-gray-300 hover:text-white hover:text-elite-gold transition-colors text-sm uppercase tracking-wide"
                        >
                            {item}
                        </Link>
                    ))}
                    <button className="border border-elite-gold text-elite-gold px-6 py-2 rounded-none hover:bg-elite-gold hover:text-elite-black transition-all duration-300 uppercase text-sm tracking-wider">
                        Inquire
                    </button>
                </div>
            </div>
        </nav>
    );
}
