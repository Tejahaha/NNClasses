import { useScrollReveal } from './useScrollReveal';

const B = {
    primary: '#0A1628',   // Deep Navy
    secondary: '#00C9A7', // Electric Teal
    light: '#1B2C46',     // Lighter Navy
    dark: '#050D18',      // Darker Navy
    gold: '#FFB347',      // Warm Amber
    goldLight: '#FFC875', // Lighter Amber
    goldYellow: '#FF9E1B', // Richer Amber
};

const COURSES = [
    { title: 'Advanced Mathematics', cat: 'Subject Masterclass', color1: B.primary, color2: B.light, students: 1200 },
    { title: 'Quantitative Aptitude', cat: 'Competitive Exams', color1: B.secondary, color2: B.primary, students: 950 },
    { title: 'Logical Reasoning', cat: 'Aptitude & Logic', color1: B.gold, color2: B.goldYellow, students: 800 },
    { title: 'Verbal Ability', cat: 'Language Comprehension', color1: B.light, color2: B.dark, students: 1100 },
    { title: 'Data Interpretation', cat: 'Advanced Analytics', color1: B.primary, color2: '#1a365d', students: 850 },
    { title: 'General Knowledge', cat: 'Current Affairs', color1: B.goldLight, color2: B.gold, students: 1500 },
];

export default function Showcase() {
    const ref = useScrollReveal();
    const GRID_BG = {
        backgroundColor: '#F7F7FB',
        backgroundImage: 'linear-gradient(#E5E7EB 1px, transparent 1px), linear-gradient(90deg, #E5E7EB 1px, transparent 1px)',
        backgroundSize: '40px 40px',
    };

    return (
        <section ref={ref} id="showcase" className="py-24 max-md:py-16 relative" style={GRID_BG}>
            <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(247,247,251,0.5) 0%, rgba(247,247,251,0.92) 70%)' }} />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="section-animate text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
                        style={{ background: 'rgba(236,72,153,0.07)', color: '#EC4899', border: '1px solid rgba(236,72,153,0.18)' }}>
                        ✦ Featured Courses
                    </div>
                    <h2 className="font-display font-bold text-[#0F172A] leading-tight mb-4" style={{ fontSize: 'clamp(22px, 5vw, 36px)' }}>
                        Top enrolled{' '}
                        <span style={{ background: `linear-gradient(135deg, ${B.primary}, ${B.secondary})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            programs
                        </span>
                    </h2>
                    <p className="text-[16px] text-[#6B7280] max-w-[480px] mx-auto leading-relaxed">
                        Explore our highest-rated masterclasses and curriculum designed by industry experts.
                    </p>
                </div>

                <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5">
                    {COURSES.map((t, i) => (
                        <div key={i}
                            className={`section-animate d${(i % 3) + 1} rounded-[14px] overflow-hidden bg-white hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(0,0,0,0.14)] transition-all duration-300`}
                            style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.07)' }}
                        >
                            {/* Thumbnail */}
                            <div className={`h-44 relative flex items-center justify-center`}
                                style={{ background: `linear-gradient(to bottom right, ${t.color1}, ${t.color2})` }}>
                                <div className="absolute inset-0" style={{
                                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                                    backgroundSize: '20px 20px',
                                }} />
                                <div className="relative z-10 w-4/5 space-y-2">
                                    <div className="h-2 rounded bg-white/20 w-full" />
                                    <div className="h-2 rounded bg-white/14 w-3/4" />
                                    <div className="h-2 rounded bg-white/10 w-1/2" />
                                    <div className="flex gap-2 mt-3">
                                        <div className="h-8 rounded-lg flex-1 bg-white/10" />
                                        <div className="h-8 rounded-lg flex-1 bg-white/10" />
                                    </div>
                                </div>
                                <div className="absolute bottom-2 right-3 text-[10px] font-mono" style={{ color: 'rgba(255,255,255,0.7)' }}>
                                    {t.students.toLocaleString()}+ students
                                </div>
                            </div>
                            {/* Card body */}
                            <div className="p-4">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#9CA3AF] mb-1">{t.cat}</p>
                                <h3 className="text-[15px] font-semibold text-[#0F172A] mb-3">{t.title}</h3>
                                <div className="flex items-center gap-2">
                                    <button
                                        className="text-xs font-semibold px-3 py-1.5 rounded-lg text-white transition-all duration-150"
                                        style={{ background: `linear-gradient(135deg, ${B.secondary}, #00b094)` }}
                                        onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.12)'}
                                        onMouseLeave={e => e.currentTarget.style.filter = ''}>
                                        View Syllabus
                                    </button>
                                    <button className="text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-200 text-gray-500 hover:border-teal-300 hover:text-teal-600 transition-all duration-150">
                                        Demo Class
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
