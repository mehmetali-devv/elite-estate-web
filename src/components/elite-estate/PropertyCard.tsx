"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface PropertyProps {
    id: string; // Add ID prop
    image: string;
    title: string;
    location: string;
    price: string;
}

export function PropertyCard({ id, image, title, location, price }: PropertyProps) {
    return (
        <Link href={`/elite-estate/${id}`} className="block w-full">
            <div className="group relative w-full h-[500px] overflow-hidden cursor-pointer bg-elite-anthracite">
                {/* Image Container with Zoom Effect */}
                <div className="relative w-full h-full overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                </div>

                {/* Gold Border Effect */}
                <div className="absolute inset-4 border border-elite-gold/0 transition-all duration-500 group-hover:border-elite-gold/50 scale-95 group-hover:scale-100 pointer-events-none" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                    <h3 className="text-3xl font-serif text-white mb-1 tracking-wide">{title}</h3>
                    <p className="text-gray-400 text-sm uppercase tracking-widest mb-4">{location}</p>
                    <div className="flex items-center justify-between border-t border-white/10 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <span className="text-elite-gold text-lg font-light">{price}</span>
                        <span className="text-white text-xs uppercase tracking-widest border-b border-white pb-0.5 group-hover:text-elite-gold group-hover:border-elite-gold transition-colors">Details</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
