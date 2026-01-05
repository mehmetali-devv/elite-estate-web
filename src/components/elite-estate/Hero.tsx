"use client";
import React from "react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop')" }}
            >
                <div className="absolute inset-0 bg-black/60" /> {/* Dark Overlay */}
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-tight mb-6"
                >
                    Mükemmellik <br />
                    <span className="text-white">Bir </span>
                    <span className="text-elite-gold italic">Seçimdir</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                    className="text-gray-300 text-lg md:text-xl tracking-widest uppercase font-light max-w-2xl mx-auto"
                >
                    Lüks yaşamın yeni tanımıyla tanışın.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    className="mt-12"
                >
                    <div className="h-16 w-[1px] bg-elite-gold mx-auto" />
                </motion.div>
            </div>
        </section>
    );
}
