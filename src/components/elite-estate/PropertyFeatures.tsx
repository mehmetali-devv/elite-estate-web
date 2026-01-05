import React from "react";
import { Bed, Bath, LayoutDashboard } from "lucide-react";

interface FeaturesProps {
    beds: number;
    baths: number;
    sqft: number;
}

export function PropertyFeatures({ beds, baths, sqft }: FeaturesProps) {
    return (
        <div className="flex items-center space-x-8 py-8 border-y border-white/10 my-8">
            <div className="flex items-center space-x-2 text-gray-300">
                <Bed size={20} className="text-elite-gold" />
                <span className="font-light tracking-wide">{beds} Beds</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
                <Bath size={20} className="text-elite-gold" />
                <span className="font-light tracking-wide">{baths} Baths</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
                <LayoutDashboard size={20} className="text-elite-gold" />
                <span className="font-light tracking-wide">{sqft} Sqft</span>
            </div>
        </div>
    );
}
