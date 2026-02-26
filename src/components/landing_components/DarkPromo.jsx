import { useEffect, useRef } from 'react';

const B = {
    primary: '#1F5E78',
    secondary: '#2E7C97',
    light: '#5FA8C4',
    dark: '#123B4A',
    gold: '#D4A62A',
    goldLight: '#E8D38A',
    goldYellow: '#F4C542',
};

const FACULTY = [
    {
        name: 'Dr. Arjun Mehta',
        role: 'Mathematics & Reasoning',
        bio: '15+ years teaching quantitative aptitude and advanced mathematics. Former IIT faculty with a track record of top rankers.',
        initials: 'AM',
        color: B.primary,
        tags: ['Quant Aptitude', 'Data Interpretation', 'Logical Reasoning'],
        exp: '15+ yrs',
    },
    {
        name: 'Prof. Sunita Rao',
        role: 'Verbal & Communication',
        bio: 'Expert in English language skills, reading comprehension, and verbal reasoning. Trained 10,000+ students for competitive exams.',
        initials: 'SR',
        color: B.secondary,
        tags: ['Verbal Ability', 'Reading Comprehension', 'Grammar'],
        exp: '12+ yrs',
    },
    {
        name: 'Mr. Kiran Desai',
        role: 'General Knowledge & Current Affairs',
        bio: 'Former civil services aspirant turned educator. Specialises in static GK, current affairs strategy, and exam-oriented preparation.',
        initials: 'KD',
        color: B.gold,
        tags: ['Static GK', 'Current Affairs', 'Polity & Economy'],
        exp: '10+ yrs',
    },
    {
        name: 'Dr. Priya Nair',
        role: 'Data Science & Analytics',
        bio: 'PhD in Statistics from TIFR. Bridges the gap between theory and industry, helping students master data-driven problem solving.',
        initials: 'PN',
        color: '#2E7C97',
        tags: ['Statistics', 'Machine Learning', 'SQL & Python'],
        exp: '8+ yrs',
    },
];

export default function DarkPromo() {
    const ref = useRef(null);
    useEffect(() => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting)
                    e.target.querySelectorAll('.section-animate').forEach(el => el.classList.add('visible'));
            });
        }, { threshold: 0.08 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <section
            ref={ref}
            id="benefits"
            className="py-24 max-md:py-16"
            style={{ background: `linear-gradient(160deg, ${B.dark} 0%, ${B.primary} 60%, ${B.dark} 100%)` }}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="section-animate text-center mb-14">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
                        style={{ background: 'rgba(95,168,196,0.12)', color: B.light, border: '1px solid rgba(95,168,196,0.28)' }}
                    >
                        👨‍🏫 Meet the Faculty
                    </div>
                    <h2 className="font-semibold text-white leading-tight mb-4" style={{ fontSize: 'clamp(22px, 5vw, 36px)' }}>
                        Learn from the{' '}
                        <span style={{
                            background: `linear-gradient(135deg, ${B.gold}, ${B.goldYellow})`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            best educators
                        </span>
                    </h2>
                    <p className="max-w-full sm:max-w-[500px] mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(14px, 3.5vw, 16px)' }}>
                        Our faculty brings decades of teaching experience, academic depth, and a
                        results-first mindset to every session.
                    </p>
                </div>

                {/* Faculty cards — 2-col on desktop, 1-col mobile */}
                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
                    {FACULTY.map((f, i) => (
                        <div
                            key={f.name}
                            className={`section-animate d${i + 1} relative rounded-[20px] p-4 sm:p-7 overflow-hidden group`}
                            style={{
                                background: 'rgba(10, 26, 33, 0.85)',
                                border: '1px solid rgba(95,168,196,0.14)',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                                transition: 'transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 32px 80px rgba(0,0,0,0.5)';
                                e.currentTarget.style.borderColor = `${f.color}50`;
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = '';
                                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)';
                                e.currentTarget.style.borderColor = 'rgba(95,168,196,0.14)';
                            }}
                        >
                            {/* Coloured top bar */}
                            <div
                                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[20px]"
                                style={{ background: `linear-gradient(90deg, ${f.color}, transparent)` }}
                            />

                            {/* Avatar + name row */}
                            <div className="flex items-start gap-4 mb-5">
                                {/* Initials avatar */}
                                <div
                                    className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center text-lg font-bold text-white"
                                    style={{
                                        background: `linear-gradient(135deg, ${f.color}, ${f.color}99)`,
                                        boxShadow: `0 4px 16px ${f.color}40`,
                                    }}
                                >
                                    {f.initials}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <h3 className="text-[18px] font-bold text-white">{f.name}</h3>
                                        {/* Experience badge */}
                                        <span
                                            className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
                                            style={{ background: `${B.gold}18`, color: B.goldYellow, border: `1px solid ${B.gold}30` }}
                                        >
                                            {f.exp}
                                        </span>
                                    </div>
                                    <p className="text-[13px] font-medium mt-0.5" style={{ color: f.color === B.gold ? B.goldLight : B.light }}>
                                        {f.role}
                                    </p>
                                </div>
                            </div>

                            {/* Bio */}
                            <p className="text-[14px] leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.5)' }}>
                                {f.bio}
                            </p>

                            {/* Subject tags */}
                            <div className="flex flex-wrap gap-2">
                                {f.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="text-[12px] font-medium px-3 py-1 rounded-full"
                                        style={{
                                            background: `rgba(95,168,196,0.08)`,
                                            color: 'rgba(255,255,255,0.55)',
                                            border: '1px solid rgba(95,168,196,0.15)',
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="section-animate text-center mt-12">
                    <button
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-bold rounded-[10px] px-9 py-4 text-base transition-all duration-200"
                        style={{ background: `linear-gradient(135deg, ${B.gold}, ${B.goldYellow})`, color: '#1A1A1A' }}
                        onMouseEnter={e => {
                            e.currentTarget.style.filter = 'brightness(1.08)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 12px 40px rgba(212,166,42,0.5)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.filter = '';
                            e.currentTarget.style.transform = '';
                            e.currentTarget.style.boxShadow = '';
                        }}
                    >
                        View All Faculty →
                    </button>
                </div>
            </div>
        </section>
    );
}
