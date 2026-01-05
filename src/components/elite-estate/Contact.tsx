"use client";
import React from "react";

export function Contact() {
    return (
        <section className="py-32 px-8 bg-elite-black border-t border-white/5">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">İletişime Geçin</h2>
                <p className="text-gray-400 font-light mb-16 tracking-wide">
                    Size özel portföyümüzle tanışmak için formu doldurun.
                </p>

                <form className="max-w-xl mx-auto space-y-8">
                    <div className="group">
                        <input
                            type="text"
                            placeholder="AD SOYAD"
                            className="w-full bg-[#1A1A1A] border border-transparent border-b-white/20 text-white p-4 focus:outline-none focus:border-b-elite-gold transition-colors text-sm tracking-widest placeholder:text-gray-600"
                        />
                    </div>

                    <div className="group">
                        <input
                            type="email"
                            placeholder="E-POSTA"
                            className="w-full bg-[#1A1A1A] border border-transparent border-b-white/20 text-white p-4 focus:outline-none focus:border-b-elite-gold transition-colors text-sm tracking-widest placeholder:text-gray-600"
                        />
                    </div>

                    <div className="group">
                        <textarea
                            rows={4}
                            placeholder="MESAJINIZ"
                            className="w-full bg-[#1A1A1A] border border-transparent border-b-white/20 text-white p-4 focus:outline-none focus:border-b-elite-gold transition-colors text-sm tracking-widest placeholder:text-gray-600 resize-none"
                        />
                    </div>

                    <button className="mt-8 px-12 py-4 border border-elite-gold text-elite-gold hover:bg-elite-gold hover:text-black transition-all duration-500 uppercase tracking-widest text-sm">
                        Gönder
                    </button>
                </form>
            </div>
        </section>
    );
}
