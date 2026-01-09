export default function Footer() {
    return (
        <footer className="bg-elite-black text-white py-12 border-t border-elite-gold-dim/20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <h3 className="text-2xl font-h text-elite-gold mb-2">ELITE ESTATE</h3>
                        <p className="text-gray-400 text-sm"> redefining luxury living.</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-elite-gold transition-colors">Instagram</a>
                        <a href="#" className="text-gray-400 hover:text-elite-gold transition-colors">LinkedIn</a>
                        <a href="#" className="text-gray-400 hover:text-elite-gold transition-colors">Twitter</a>
                    </div>
                </div>
                <div className="text-center border-t border-gray-800 pt-8 text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} Elite Estate. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
