export default function FeatureSection() {
    const features = [
        {
            title: "Prime Locations",
            description: "Access to the most coveted addresses in the city.",
            icon: "📍",
        },
        {
            title: "Architectural Marvels",
            description: "Homes designed by world-renowned architects.",
            icon: "🏛️",
        },
        {
            title: "Private Concierge",
            description: "Exclusive services tailored to your lifestyle.",
            icon: "🔑",
        },
    ];

    return (
        <section className="py-24 bg-elite-dark-grey relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-elite-gold to-transparent opacity-50" />

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center group p-8 border border-white/5 hover:border-elite-gold/30 transition-all duration-300 bg-white/5 hover:bg-white/10 rounded-sm">
                            <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-h text-elite-gold mb-3 group-hover:text-white transition-colors">{feature.title}</h3>
                            <p className="text-gray-400 font-light leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
