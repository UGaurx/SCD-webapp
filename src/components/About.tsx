
import { motion } from 'framer-motion';
import { Users, Mic, Clock, Star } from 'lucide-react';

const About = () => {
    const stats = [
        { icon: Users, label: 'Attendees', value: '500+' },
        { icon: Mic, label: 'Speakers', value: '15+' },
        { icon: Clock, label: 'Hours of Content', value: '8+' },
        { icon: Star, label: 'Workshops', value: '4' },
    ];

    return (
        <section id="about" className="py-24 bg-aws-squid relative overflow-hidden">
            {/* Background Mandala-ish Pattern */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-india-saffron/10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-india-green/10 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2"></div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full opacity-20 pointer-events-none animate-spin-slow"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full opacity-20 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-india-saffron to-marigold">AWS SCD?</span>
                    </h2>
                    <div className="w-32 h-1.5 bg-gradient-to-r from-india-saffron via-white to-india-green mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-gray-300 space-y-6 text-lg leading-relaxed font-sans"
                    >
                        <p className="border-l-4 border-india-saffron pl-4">
                            <strong className="text-white">AWS Student Community Day Delhi NCR</strong> is a student-led carnival of cloud computing, bringing together the brightest minds from across the National Capital Region.
                        </p>
                        <p>
                            Organized by students for students, this is not just a conference—it's a celebration. Whether you are a fresher asking "Kya haal hai cloud ka?" or an expert deploying serverless architectures, there is a seat for you here.
                        </p>
                        <p>
                            Expect deep-dive technical sessions, hands-on workshops, career guidance from industry maestros, and of course, endless cups of <span className="text-india-saffron font-bold">Chai</span> & networking.
                        </p>
                    </motion.div>

                    {/* Placeholder for Event Image/Collage */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-india-saffron to-heritage-red rounded-2xl rotate-3 opacity-30 blur-lg group-hover:opacity-50 transition-opacity"></div>
                        <div className="relative bg-gray-900 rounded-2xl border border-gray-700/50 h-72 md:h-96 flex items-center justify-center overflow-hidden hover:border-india-saffron/50 transition-colors">
                            <div className="text-center p-6">
                                <span className="text-4xl mb-4 block">📸</span>
                                <span className="text-gray-400 font-display text-xl">Community Vibes</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-white/5 text-center hover:border-india-saffron/30 hover:bg-gray-800/50 transition-all shadow-lg"
                        >
                            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center border border-gray-700 shadow-inner">
                                <stat.icon className="w-7 h-7 text-india-saffron" />
                            </div>
                            <div className="text-4xl font-display font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-gray-400 font-medium font-sans uppercase tracking-widest text-xs">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
