
import PersonCard from './PersonCard';

const Speakers = () => {
    const speakers = [
        { name: 'Dr. Cloud Expert', role: 'Solutions Architect', company: 'AWS', social: { linkedin: '#' } },
        { name: 'Jane DevOps', role: 'DevRel Engineer', company: 'TechCorp', social: { twitter: '#' } },
        { name: 'John Serverless', role: 'CTO', company: 'Startup.io', social: { github: '#' } },
        { name: 'Priya Python', role: 'ML Engineer', company: 'DataAI', social: { linkedin: '#' } },
    ];

    return (
        <section id="speakers" className="py-24 bg-gray-900 relative">
            {/* Decor */}
            <div className="absolute left-0 top-20 w-32 h-32 bg-heritage-red/10 rounded-full blur-3xl"></div>
            <div className="absolute right-0 bottom-20 w-64 h-64 bg-india-saffron/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Featured <span className="text-india-saffron">Speakers</span></h2>
                    <p className="text-gray-400 text-lg font-sans">Learn from the best in the industry.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {speakers.map((s, i) => <PersonCard key={i} {...s} />)}
                </div>
            </div>
        </section>
    );
};

export const Team = () => {
    const team = [
        { name: 'Organizer 1', role: 'Lead Organizer', company: 'College Name', social: { linkedin: '#' } },
        { name: 'Organizer 2', role: 'Tech Lead', company: 'College Name', social: { twitter: '#' } },
        { name: 'Organizer 3', role: 'Design Lead', company: 'College Name', social: { github: '#' } },
    ];

    return (
        <section id="team" className="py-24 bg-aws-squid border-t border-gray-800 relative">
            <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] opacity-5"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Meet the <span className="text-india-green">Team</span></h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {team.map((s, i) => <PersonCard key={i} {...s} />)}
                </div>
            </div>
        </section>
    )
}

export default Speakers;
