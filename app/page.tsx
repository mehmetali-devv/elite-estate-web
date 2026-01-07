"use client";
import React from "react";
import { Navbar } from "@/components/elite-estate/Navbar";
import { Hero } from "@/components/elite-estate/Hero";
import { PropertyCard } from "@/components/elite-estate/PropertyCard";
import { Contact } from "@/components/elite-estate/Contact";
import { motion } from "framer-motion";
import { properties } from "@/data/elite-data";

export default function EliteEstatePage() {
    return (
        <main className="bg-elite-black min-h-screen text-white selection:bg-elite-gold selection:text-black">
            <Navbar />
            <Hero />

            {/* Portfolio Section */}
            <section className="py-24 px-8 md:px-16" id="properties">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <span className="text-elite-gold uppercase tracking-widest text-xs font-bold block mb-2">Özel Koleksiyon</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white">Seçkin Portföy</h2>
                    </div>
                    <button className="hidden md:block pb-2 border-b border-elite-gold text-white text-sm uppercase tracking-widest hover:text-elite-gold transition-colors mt-8 md:mt-0">
                        Tümünü Gör
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((prop, index) => (
                        <motion.div
                            key={prop.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <PropertyCard
                                id={prop.id}
                                image={prop.image}
                                title={prop.title}
                                location={prop.location}
                                price={prop.price}
                            />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <button className="pb-2 border-b border-elite-gold text-white text-sm uppercase tracking-widest hover:text-elite-gold transition-colors">
                        Tümünü Gör
                    </button>
                </div>
            </section>

            <Contact />

            <footer className="py-12 border-t border-white/5 text-center text-gray-600 text-xs uppercase tracking-widest">
                &copy; 2026 Elite Estate Corp. All Rights Reserved.
            </footer>
        </main>
    );
}
