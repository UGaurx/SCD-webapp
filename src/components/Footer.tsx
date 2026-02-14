
import { Instagram, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-aws-squid border-t border-gray-800 pt-20 pb-10 relative overflow-hidden">
            {/* Footer Decor */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-india-saffron via-white to-india-green"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-heritage-red/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center mb-6">
                            <div className="w-2 h-8 bg-india-saffron mr-3 rounded-full"></div>
                            <span className="text-3xl font-display font-bold text-white">
                                AWS SCD
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            The premier student-led cloud conference in Delhi NCR.
                            Bridging the gap between campus learning and industry cloud native innovation.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-india-saffron hover:text-white transition-all transform hover:-translate-y-1"><Twitter size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-india-blue hover:text-white transition-all transform hover:-translate-y-1"><Linkedin size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-rani-pink hover:text-white transition-all transform hover:-translate-y-1"><Instagram size={18} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 font-display text-lg border-b border-gray-800 pb-2 inline-block">Explore</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#about" className="hover:text-india-saffron transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-india-saffron rounded-full mr-2 opacity-0 hover:opacity-100"></span>About</a></li>
                            <li><a href="#speakers" className="hover:text-india-saffron transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-india-saffron rounded-full mr-2 opacity-0 hover:opacity-100"></span>Speakers</a></li>
                            <li><a href="#sponsors" className="hover:text-india-saffron transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-india-saffron rounded-full mr-2 opacity-0 hover:opacity-100"></span>Sponsors</a></li>
                            <li><a href="#team" className="hover:text-india-saffron transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-india-saffron rounded-full mr-2 opacity-0 hover:opacity-100"></span>Team</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 font-display text-lg border-b border-gray-800 pb-2 inline-block">Resources</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-india-green transition-colors">Code of Conduct</a></li>
                            <li><a href="#" className="hover:text-india-green transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-india-green transition-colors">Sponsorship Deck</a></li>
                            <li><a href="#" className="hover:text-india-green transition-colors">Community Guidelines</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 font-display text-lg border-b border-gray-800 pb-2 inline-block">Contact</h4>
                        <p className="text-gray-400 text-sm mb-4">
                            Questions? We're here to help.
                        </p>
                        <a href="mailto:team@awsscd.com" className="flex items-center text-white hover:text-india-saffron transition-colors group">
                            <Mail size={18} className="mr-2 group-hover:animate-bounce" />
                            team@awsscd.com
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; 2026 AWS Student Community Day Delhi NCR.</p>
                    <p className="flex items-center mt-4 md:mt-0">
                        Made with <Heart size={14} className="text-heritage-red mx-1 fill-heritage-red animate-pulse" /> in <span className="text-india-saffron ml-1 font-bold">Bharat</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
