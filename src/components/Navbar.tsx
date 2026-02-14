import { useState } from 'react';
import { Menu, X, Ticket } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Speakers', href: '#speakers' },
        { name: 'Sponsors', href: '#sponsors' },
        { name: 'Team', href: '#team' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-aws-squid/80 backdrop-blur-md border-b border-india-saffron/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 flex items-center group cursor-pointer">
                        {/* Logo Mark - Chakra Concept */}
                        <div className="mr-3 w-8 h-8 rounded-full border-2 border-india-saffron flex items-center justify-center group-hover:rotate-180 transition-transform duration-700">
                            <div className="w-2 h-2 bg-india-green rounded-full"></div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-display font-bold bg-gradient-to-r from-india-saffron via-white to-india-green bg-clip-text text-transparent leading-none">
                                AWS SCD
                            </span>
                            <span className="text-gray-400 text-[10px] tracking-[0.2em] uppercase mt-1 group-hover:text-india-saffron transition-colors">Delhi NCR</span>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="relative text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors group overflow-hidden"
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-india-saffron transition-all group-hover:w-full"></span>
                                </a>
                            ))}
                            <a
                                href="https://konfhub.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-gradient-to-r from-india-saffron to-heritage-red hover:from-orange-500 hover:to-red-600 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-india-saffron/20 transition-all hover:scale-105 flex items-center"
                            >
                                <Ticket className="w-4 h-4 mr-2" />
                                Get Tickets
                            </a>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="bg-gray-800/50 inline-flex items-center justify-center p-2 rounded-md text-india-saffron hover:text-white hover:bg-gray-700 focus:outline-none border border-india-saffron/20"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-aws-squid/95 backdrop-blur-xl border-b border-india-saffron/30">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-india-saffron hover:bg-white/5 block px-3 py-2 rounded-md text-base font-medium font-display tracking-wide"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#"
                            className="text-white bg-gradient-to-r from-india-saffron to-heritage-red block px-3 py-3 rounded-md text-base font-bold text-center mt-4 mx-2 shadow-lg"
                        >
                            Get Tickets
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
