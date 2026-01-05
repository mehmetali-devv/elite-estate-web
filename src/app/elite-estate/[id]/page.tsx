import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { properties } from "@/data/elite-data";
import { Navbar } from "@/components/elite-estate/Navbar";
import { Contact } from "@/components/elite-estate/Contact";
import { PropertyFeatures } from "@/components/elite-estate/PropertyFeatures";

// Correct type for params in Next.js 15+ (Promise)
export default async function PropertyPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const property = properties.find((p) => p.id === id);

    if (!property) {
        notFound();
    }

    return (
        <main className="bg-elite-black min-h-screen text-white selection:bg-elite-gold selection:text-black">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[60vh] w-full">
                <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-2">{property.title}</h1>
                    <p className="text-xl md:text-2xl text-elite-gold font-light">{property.location}</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-8 md:px-16 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="flex justify-between items-baseline mb-8">
                            <h2 className="text-3xl font-serif">Property Details</h2>
                            <span className="text-3xl text-elite-gold font-light">{property.price}</span>
                        </div>

                        <p className="text-gray-400 leading-relaxed text-lg tracking-wide mb-8">
                            {property.description}
                        </p>

                        <PropertyFeatures {...property.features} />

                        <h3 className="text-2xl font-serif mb-6 mt-12">Gallery</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {property.gallery.map((img, idx) => (
                                <div key={idx} className="relative h-64 w-full overflow-hidden group">
                                    <Image
                                        src={img}
                                        alt={`${property.title} gallery ${idx + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar Inquiry */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 bg-[#121212] p-8 border border-white/5">
                            <h3 className="text-xl font-serif mb-6">Inquire About This Property</h3>
                            <form className="space-y-6">
                                <input type="text" placeholder="Name" className="w-full bg-transparent border-b border-white/20 p-3 text-sm focus:border-elite-gold focus:outline-none transition-colors" />
                                <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-white/20 p-3 text-sm focus:border-elite-gold focus:outline-none transition-colors" />
                                <input type="tel" placeholder="Phone" className="w-full bg-transparent border-b border-white/20 p-3 text-sm focus:border-elite-gold focus:outline-none transition-colors" />
                                <textarea rows={3} placeholder="Message" className="w-full bg-transparent border-b border-white/20 p-3 text-sm focus:border-elite-gold focus:outline-none transition-colors resize-none" />
                                <button className="w-full py-4 bg-white text-black text-xs uppercase tracking-widest hover:bg-elite-gold transition-colors font-bold shadow-[0_0_15px_rgba(184,134,11,0.3)] hover:shadow-[0_0_20px_rgba(184,134,11,0.6)]">
                                    Request Info
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Contact />
        </main>
    );
}
