
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative bg-aws-squid min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Decor - Mandala & Gradients */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,153,51,0.15),transparent_70%)]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-heritage-red/5 rounded-full blur-[100px]"></div>

                {/* Abstract Mandala Pattern (CSS Circles) */}
                <div className="absolute top-0 right-0 opacity-10">
                    <svg width="400" height="400" viewBox="0 0 200 200">
                        <circle cx="200" cy="0" r="150" stroke="#FF9933" strokeWidth="2" fill="none" />
                        <circle cx="200" cy="0" r="130" stroke="#FF9933" strokeWidth="1" fill="none" />
                        <circle cx="200" cy="0" r="110" stroke="#FF9933" strokeWidth="4" strokeDasharray="4 8" fill="none" />
                    </svg>
                </div>
                <div className="absolute bottom-40 left-0 opacity-10 rotate-180">
                    <svg width="400" height="400" viewBox="0 0 200 200">
                        <circle cx="200" cy="0" r="150" stroke="#138808" strokeWidth="2" fill="none" />
                        <circle cx="200" cy="0" r="130" stroke="#138808" strokeWidth="1" fill="none" />
                        <circle cx="200" cy="0" r="110" stroke="#138808" strokeWidth="4" strokeDasharray="4 8" fill="none" />
                    </svg>
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-4 rounded-full bg-india-saffron/10 text-india-saffron text-sm font-sans font-semibold mb-6 border border-india-saffron/20 tracking-wider">
                        DELHI NCR CHAPTER
                    </span>

                    <h1 className="text-6xl md:text-8xl font-display text-white mb-6 leading-tight">
                        AWS Student <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-india-saffron via-white to-india-green">
                            Community Day
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-sans font-light">
                        Where the <span className="text-heritage-red font-semibold">Cloud</span> meets <span className="text-marigold font-semibold">Culture</span>.
                        Join 500+ builders in the heart of India.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                        <div className="flex items-center text-gray-300 bg-gray-900/50 px-4 py-2 rounded-full border border-gray-700">
                            <Calendar className="w-5 h-5 text-india-saffron mr-2" />
                            <span className="font-sans">Oct 15, 2026</span>
                        </div>
                        <div className="flex items-center text-gray-300 bg-gray-900/50 px-4 py-2 rounded-full border border-gray-700">
                            <MapPin className="w-5 h-5 text-india-green mr-2" />
                            <span className="font-sans">New Delhi, India</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <a
                            href="#tickets"
                            className="group relative px-8 py-4 bg-gradient-to-r from-india-saffron to-heritage-red text-white rounded-lg font-bold text-lg overflow-hidden shadow-lg shadow-india-saffron/20 transition-all hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center">
                                Secure Your Spot
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                        <a
                            href="#about"
                            className="px-8 py-4 bg-transparent hover:bg-white/10 text-white rounded-lg font-bold text-lg transition-all border border-white/20 hover:border-white/40 backdrop-blur-sm"
                        >
                            Learn More
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Skyline Silhouette */}
            <div className="absolute bottom-0 left-0 w-full z-0 opacity-40 mix-blend-overlay">
                {/* This represents a stylized skyline. In a real app, I'd use a proper SVG asset. 
                     For now, using CSS shapes to mimic domes and minarets */}
                <div className="flex items-end justify-center w-full h-64 gap-1">
                    {/* Qutub Minar-ish */}
                    <div className="w-16 h-64 bg-slate-800 rounded-t-full mx-2"></div>
                    {/* Red Fort-ish */}
                    <div className="w-32 h-24 bg-heritage-red/40 rounded-t-2xl mx-1 relative">
                        <div className="absolute -top-6 left-2 w-8 h-8 bg-heritage-red/40 rounded-full"></div>
                        <div className="absolute -top-6 right-2 w-8 h-8 bg-heritage-red/40 rounded-full"></div>
                    </div>
                    {/* Lotus Temple-ish */}
                    <div className="w-40 h-32 bg-slate-800 rounded-t-[100px] mx-2"></div>
                    {/* India Gate-ish */}
                    <div className="w-24 h-40 border-8 border-slate-800 border-b-0 rounded-t-lg mx-2"></div>
                </div>
                {/* Ground */}
                <div className="w-full h-[5%] bg-gradient-to-t from-black to-transparent"></div>
            </div>

            {/* Wave bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
                <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-gray-900"></path>
                </svg>
            </div>
        </div>
    );
};

export default Hero;
