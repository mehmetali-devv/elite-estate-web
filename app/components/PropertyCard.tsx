import Image from "next/image";

interface PropertyProps {
    image: string;
    title: string;
    price: string;
    location: string;
    specs: string;
}

export default function PropertyCard({ image, title, price, location, specs }: PropertyProps) {
    return (
        <div className="group bg-elite-dark-grey border border-white/5 hover:border-elite-gold transition-all duration-500 overflow-hidden relative">
            <div className="relative h-64 md:h-80 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                <div className="absolute top-4 right-4 bg-elite-gold text-elite-black px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    For Sale
                </div>
            </div>

            <div className="p-6 relative">
                <h3 className="text-xl font-h text-white mb-1 group-hover:text-elite-gold transition-colors">{title}</h3>
                <p className="text-gray-400 text-sm mb-4">{location}</p>

                <div className="flex justify-between items-center border-t border-white/10 pt-4">
                    <span className="text-elite-gold font-bold text-lg">{price}</span>
                    <span className="text-xs text-gray-500 tracking-wide uppercase">{specs}</span>
                </div>
            </div>
        </div>
    );
}
