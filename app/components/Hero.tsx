import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.png"
                    alt="Luxury Mansion"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-elite-black z-10" />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
                <h2 className="text-elite-gold uppercase tracking-[0.2em] mb-4 text-sm md:text-base animate-fade-in-up">
                    Exclusive Living
                </h2>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-h text-white mb-8 leading-tight animate-fade-in-up delay-100">
                    Discover Your <br />
                    <span className="italic text-elite-gold-light">Sanctuary</span>
                </h1>
                <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light animate-fade-in-up delay-200">
                    Curated collection of the world's most prestigious properties.
                    Where luxury meets legacy.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center animate-fade-in-up delay-300">
                    <button className="bg-elite-gold text-elite-black px-8 py-4 uppercase tracking-widest hover:bg-white transition-colors duration-300 font-bold min-w-[200px]">
                        View Properties
                    </button>
                    <button className="border border-white text-white px-8 py-4 uppercase tracking-widest hover:bg-white hover:text-elite-black transition-colors duration-300 min-w-[200px]">
                        Contact Agent
                    </button>
                </div>
            </div>
        </section>
    );
}
