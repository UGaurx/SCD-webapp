import React from 'react';
import { motion } from 'framer-motion';

interface SponsorTierProps {
    title: string;
    color: string;
    sponsors: string[];
}

const SponsorTier: React.FC<SponsorTierProps> = ({ title, color, sponsors }) => (
    <div className="mb-16">
        <h3 className={`text-2xl font-display font-semibold text-center mb-10 ${color} uppercase tracking-widest`}>{title} Sponsors</h3>
        <div className="flex flex-wrap justify-center gap-8">
            {sponsors.map((sponsor, idx) => (
                <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-6 rounded-xl shadow-lg w-48 h-24 flex items-center justify-center opacity-90 hover:opacity-100 transition-all border-b-4 border-transparent hover:border-heritage-red"
                >
                    {/* Placeholder Logo */}
                    <span className="text-gray-800 font-bold font-sans">{sponsor}</span>
                </motion.div>
            ))}
        </div>
    </div>
);

const Sponsors = () => {
    return (
        <section id="sponsors" className="py-24 bg-aws-squid relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03]"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        Our <span className="text-marigold">Sponsors</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-sans">
                        Thank you to our amazing partners who make this event possible.
                    </p>
                </motion.div>

                <SponsorTier
                    title="Platinum"
                    color="text-gray-300" // Silver/Platinum look
                    sponsors={['AWS', 'Konfhub']}
                />

                <SponsorTier
                    title="Gold"
                    color="text-marigold"
                    sponsors={['Company A', 'Company B', 'Company C']}
                />

                <SponsorTier
                    title="Silver"
                    color="text-gray-400"
                    sponsors={['Startup X', 'Community Y', 'DevTool Z', 'Cloud Corp']}
                />

                <div className="text-center mt-16">
                    <p className="text-gray-400 mb-6 font-sans">Interested in sponsoring?</p>
                    <a href="mailto:contact@awsscd.com" className="group px-8 py-3 border border-india-saffron text-india-saffron rounded-full hover:bg-india-saffron hover:text-white transition-all font-bold font-sans tracking-wide inline-flex items-center">
                        Become a Sponsor
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
