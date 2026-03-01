import React, { useState, useEffect, useRef } from "react";
import { FadeUp } from "./AnimateOnScroll";

const B = {
    primary: '#0A1628',   // Deep Navy
    secondary: '#00C9A7', // Electric Teal
    light: '#1B2C46',     // Lighter Navy
    dark: '#050D18',      // Darker Navy
    gold: '#FFB347',      // Warm Amber
    goldYellow: '#FF9E1B', // Richer Amber
};

const FACULTY = [
    {
        name: 'Dr. Arjun Mehta',
        role: 'Mathematics & Quantitative Reasoning',
        exp: '15+ yrs',
        bio: 'Former IIT faculty with a track record of top rankers. Specialises in making complex mathematical concepts simple, approachable, and exam-ready.',
        tags: ['Quant Aptitude', 'Data Interpretation', 'Logical Reasoning'],
        accent: B.gold,
    },
    {
        name: 'Prof. Sunita Rao',
        role: 'Verbal Ability & Communication',
        exp: '12+ yrs',
        bio: 'Expert in English language skills, critical reading, and verbal reasoning. Trained 10,000+ students for competitive exams.',
        tags: ['Verbal Ability', 'Reading Comprehension', 'Grammar'],
        accent: B.light,
    },
];

export function FacultyReveal() {
    const sectionRef = useRef(null);
    const [showChevron, setShowChevron] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => {
                setShowChevron(entry.isIntersecting || entry.boundingClientRect.top < 0);
            },
            { threshold: 0 }
        );
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="benefits" className="py-20 relative" style={{ background: B.dark }}>
            {/* Scroll to Top Chevron */}
            <div className={`fixed bottom-8 right-6 sm:right-8 z-50 transition-all duration-500 delay-100 ${showChevron ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="p-3 sm:p-4 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,201,167,0.4)] cursor-pointer"
                    style={{ background: B.secondary, color: '#FFFFFF', border: `1px solid ${B.light}` }}
                    aria-label="Scroll to top"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 15l-6-6-6 6" />
                    </svg>
                </button>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Section header */}
                <FadeUp>
                    <div className="text-center mb-12">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
                            style={{ background: 'rgba(95,168,196,0.12)', color: B.light, border: '1px solid rgba(95,168,196,0.28)' }}
                        >
                            👨‍🏫 Meet the Faculty
                        </div>
                        <h2 className="font-semibold text-white leading-tight mb-4" style={{ fontSize: 'clamp(22px, 5vw, 36px)' }}>
                            Learn from the{' '}
                            <span style={{ background: `linear-gradient(135deg, ${B.gold}, ${B.goldYellow})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                best educators
                            </span>
                        </h2>
                    </div>
                </FadeUp>

                {/* Faculty cards */}
                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8">
                    {FACULTY.map((f, i) => (
                        <FadeUp key={i} delay={i * 0.12}>
                            <div className="flex flex-col">
                                {/* Full portrait image — no crop, no fixed height */}
                                <div style={{ position: 'relative' }}>
                                    <img
                                        src="/faculty.png"
                                        alt={f.name}
                                        loading="lazy"
                                        style={{ width: '100%', display: 'block', borderRadius: '16px' }}
                                    />
                                    {/* Exp badge */}
                                    <span
                                        className="absolute top-3 right-3 text-[11px] font-bold px-2.5 py-1 rounded-full"
                                        style={{ background: `linear-gradient(135deg, ${B.gold}, ${B.goldYellow})`, color: '#1A1A1A' }}
                                    >
                                        {f.exp}
                                    </span>
                                </div>

                                {/* Info below image */}
                                <div className="pt-4 flex flex-col gap-2">
                                    <h3 className="text-white font-bold text-[20px] leading-tight">{f.name}</h3>
                                    <p className="text-[13px] font-semibold" style={{ color: f.accent }}>{f.role}</p>
                                    <p className="text-[13px] leading-relaxed mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{f.bio}</p>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {f.tags.map(t => (
                                            <span
                                                key={t}
                                                className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                                                style={{ background: `${f.accent}22`, color: f.accent, border: `1px solid ${f.accent}44` }}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>

            </div>
        </section>
    );
}
