

const CommunityPartners = () => {
    const partners = ['GDG Cloud New Delhi', 'PyData Delhi', 'React India', 'Linux User Group', 'OWASP Delhi'];

    return (
        <section className="py-20 bg-aws-squid border-y border-gray-800 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-xl font-display font-semibold text-gray-400 uppercase tracking-[0.3em] mb-12">Community Partners</h3>
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-70">
                    {partners.map((p, i) => (
                        <div key={i} className="text-2xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-400 hover:from-india-saffron hover:to-india-green transition-all duration-300 cursor-default hover:scale-105 transform">
                            {p}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CommunityPartners;
