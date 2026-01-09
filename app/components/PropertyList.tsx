import PropertyCard from "./PropertyCard";

export default function PropertyList() {
    const properties = [
        {
            title: "The Penthouse",
            location: "Downtown, Metropolis",
            price: "$12,500,000",
            specs: "4 BEDS • 5 BATHS • 4,200 SQFT",
            image: "/images/interior.png", // Using the generated interior image
        },
        {
            title: "Oceanfront Villa",
            location: "Malibu, California",
            price: "$18,900,000",
            specs: "6 BEDS • 8 BATHS • 6,500 SQFT",
            image: "/images/hero.png", // Reusing hero for now
        },
        {
            title: "Alpine Chalet",
            location: "Aspen, Colorado",
            price: "$9,200,000",
            specs: "5 BEDS • 6 BATHS • 5,000 SQFT",
            image: "/images/interior.png", // Reusing interior
        },
    ];

    return (
        <section id="properties" className="py-24 bg-elite-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-elite-gold uppercase tracking-[0.2em] mb-3 text-sm">Featured Listings</h2>
                    <h1 className="text-4xl md:text-5xl font-h text-white">Curated Properties</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((prop, index) => (
                        <PropertyCard key={index} {...prop} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="border border-white/30 text-white px-8 py-3 uppercase tracking-widest hover:bg-elite-gold hover:border-elite-gold hover:text-elite-black transition-all duration-300 text-sm">
                        View All Properties
                    </button>
                </div>
            </div>
        </section>
    );
}
