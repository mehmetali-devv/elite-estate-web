
import React from "react";
import { Playfair_Display, Inter } from "next/font/google"; // Correct way to import from next/font/google
import "../globals.css";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export default function EliteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={`${playfair.variable} ${inter.variable} font-sans bg-elite-black text-white min-h-screen selection:bg-elite-gold selection:text-black`}>
            {children}
        </div>
    );
}
