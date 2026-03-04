import { useEffect, useRef, useState } from 'react';
import { FadeUp, SlideLeft, SlideRight } from './AnimateOnScroll';

/* ── Brand tokens ── */
const B = {
    primary: '#0A1628',
    dark: '#050D18',
    goldYellow: '#FF9E1B',
    goldLight: '#FFC875',
};

const SUBJECTS = [
    { label: 'Biology', marks: 350, maxMarks: 360, color: '#34D399' },
    { label: 'Chemistry', marks: 150, maxMarks: 360, color: B.goldYellow },
    { label: 'Physics', marks: 140, maxMarks: 360, color: '#818CF8' },
];

/* Animated horizontal bar — shared */
function AnimatedBar({ pct, color, inView, thin = false }) {
    return (
        <div
            style={{
                height: thin ? '6px' : '16px',
                borderRadius: '999px',
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.07)',
                flexShrink: 0,
            }}
        >
            <div
                style={{
                    height: '100%',
                    borderRadius: '999px',
                    width: inView ? `${pct}%` : '0%',
                    transition: 'width 1.1s ease 0.2s',
                    background: `linear-gradient(90deg, ${color}88, ${color})`,
                    boxShadow: `0 0 8px ${color}55`,
                }}
            />
        </div>
    );
}

export default function BIPCStrategy() {
    const sectionRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
            { threshold: 0.15 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div
            id="bipc-strategy"
            ref={sectionRef}
            className="relative w-full animate-in fade-in duration-500"
        >
            {/* Mesh tint overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(ellipse 80% 50% at 80% 0%, rgba(52,211,153,0.06) 0%, transparent 70%),' +
                        'radial-gradient(ellipse 60% 40% at 20% 100%, rgba(255,158,27,0.04) 0%, transparent 60%)',
                    zIndex: 0,
                }}
            />

            <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">

                {/* ═══════════════════════════════════════
                    MOBILE LAYOUT — hidden on lg+
                ════════════════════════════════════════ */}
                <div className="lg:hidden">
                    <FadeUp>
                        {/* Path badge */}
                        <div className="flex justify-center mb-5">
                            <div
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold font-display"
                                style={{
                                    background: 'rgba(10,22,40,0.07)',
                                    color: B.primary,
                                    border: '1px solid rgba(10,22,40,0.18)',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                ✦ BIPC Path
                            </div>
                        </div>

                        {/* Heading */}
                        <h2
                            className="font-display font-bold text-[#1A1A1A] leading-tight tracking-tight text-center mb-2"
                            style={{ fontSize: '26px' }}
                        >
                            Strategy to Become a{' '}
                            <span style={{
                                background: `linear-gradient(135deg, ${B.primary}, #34D399)`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>
                                Medico
                            </span>
                        </h2>
                        <p className="text-[#6B7280] text-center text-sm mb-7 leading-relaxed">
                            Our academic system maximizes NEET scoring potential.
                        </p>

                        {/* ── Scorecard ── */}
                        <div
                            className="rounded-2xl overflow-hidden"
                            style={{
                                background: `linear-gradient(160deg, ${B.dark} 0%, ${B.primary} 100%)`,
                                border: '1px solid rgba(255,255,255,0.08)',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
                            }}
                        >
                            {/* Target banner */}
                            <div
                                className="flex items-center justify-between px-5 py-4"
                                style={{
                                    background: 'linear-gradient(90deg, rgba(52,211,153,0.15), rgba(52,211,153,0.05))',
                                    borderBottom: '1px solid rgba(52,211,153,0.15)',
                                }}
                            >
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-widest mb-0.5"
                                        style={{ color: 'rgba(255,255,255,0.45)' }}>
                                        NEET Target
                                    </p>
                                    <p className="text-white font-display font-bold text-base">
                                        Marks = Medical Seat
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="font-mono font-bold leading-none"
                                        style={{ fontSize: '44px', color: '#34D399' }}>
                                        640+
                                    </p>
                                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                                        out of 720
                                    </p>
                                </div>
                            </div>

                            {/* Subject rows */}
                            <div className="flex flex-col px-5 py-4 gap-5">
                                <p className="text-xs font-semibold uppercase tracking-widest"
                                    style={{ color: 'rgba(255,255,255,0.35)' }}>
                                    Score Distribution
                                </p>
                                {SUBJECTS.map(({ label, marks, maxMarks, color }, i) => (
                                    <div key={i} className="flex flex-col gap-2">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div style={{
                                                    width: '8px', height: '8px',
                                                    borderRadius: '50%',
                                                    background: color,
                                                    boxShadow: `0 0 6px ${color}`,
                                                    flexShrink: 0,
                                                }} />
                                                <span className="text-white font-semibold text-sm">{label}</span>
                                            </div>
                                            <div className="flex items-baseline gap-1">
                                                <span className="font-mono font-bold text-lg" style={{ color }}>
                                                    {marks}
                                                </span>
                                                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                                                    /{maxMarks}
                                                </span>
                                            </div>
                                        </div>
                                        <AnimatedBar pct={(marks / maxMarks) * 100} color={color} inView={inView} thin />
                                    </div>
                                ))}
                            </div>

                            {/* Total footer */}
                            <div
                                className="flex items-center justify-between px-5 py-3"
                                style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
                            >
                                <span className="text-xs font-semibold uppercase tracking-wider"
                                    style={{ color: 'rgba(255,255,255,0.35)' }}>
                                    Total Marks
                                </span>
                                <span className="font-mono font-bold text-white text-base">
                                    {SUBJECTS.reduce((s, x) => s + x.marks, 0)}{' '}
                                    <span style={{ color: 'rgba(255,255,255,0.35)', fontWeight: 400 }}>/ 720</span>
                                </span>
                            </div>
                        </div>
                    </FadeUp>
                </div>

                {/* ═══════════════════════════════════════
                    DESKTOP LAYOUT — hidden below lg (UNTOUCHED)
                ════════════════════════════════════════ */}
                <div className="hidden lg:block">
                    {/* Header */}
                    <FadeUp className="text-center mb-14">
                        <div
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-lg font-semibold mb-5 font-display shadow-sm"
                            style={{
                                background: 'rgba(10,22,40,0.07)',
                                color: B.primary,
                                border: '1px solid rgba(10,22,40,0.18)',
                                letterSpacing: '0.05em',
                            }}
                        >
                            ✦ BIPC Path
                        </div>
                        <h2
                            className="font-display font-bold text-[#1A1A1A] leading-tight tracking-tight mb-4"
                            style={{ fontSize: 'clamp(28px, 6vw, 42px)' }}
                        >
                            Strategy to Become a{' '}
                            <span
                                style={{
                                    background: `linear-gradient(135deg, ${B.primary}, #34D399)`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                Medico
                            </span>
                        </h2>
                        <p
                            className="text-[#6B7280] max-w-xl mx-auto leading-relaxed"
                            style={{ fontSize: 'clamp(15px, 4vw, 17px)' }}
                        >
                            Our academic system maximizes NEET scoring potential.
                        </p>
                    </FadeUp>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Left — Score breakdown bars */}
                        <SlideLeft>
                            <div
                                className="rounded-xl shadow-lg border p-7 sm:p-8 flex flex-col gap-7"
                                style={{
                                    background: `linear-gradient(145deg, ${B.dark} 0%, ${B.primary} 100%)`,
                                    borderColor: 'rgba(255,255,255,0.09)',
                                }}
                            >
                                <div>
                                    <h3 className="font-display font-semibold text-white text-xl mb-1">
                                        NEET Score Distribution
                                    </h3>
                                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.50)' }}>
                                        Total 720 marks
                                    </p>
                                </div>

                                {SUBJECTS.map(({ label, marks, maxMarks, color }, i) => (
                                    <div key={i} className="flex flex-col gap-2.5">
                                        <div className="flex items-center justify-between">
                                            <span className="font-semibold text-white text-sm">{label}</span>
                                            <span className="font-mono font-bold text-base" style={{ color }}>
                                                {marks} Marks
                                            </span>
                                        </div>
                                        <AnimatedBar pct={(marks / maxMarks) * 100} color={color} inView={inView} />
                                        <div className="flex justify-between text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                                            <span>0</span>
                                            <span>{maxMarks}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </SlideLeft>

                        {/* Right — Goal card + tips */}
                        <SlideRight>
                            <div className="flex flex-col gap-5 h-full">
                                {/* Big goal card */}
                                <div
                                    className="rounded-xl shadow-lg flex flex-col items-center justify-center text-center p-8 sm:p-10"
                                    style={{
                                        background: `linear-gradient(135deg, ${B.dark} 0%, ${B.primary} 50%, rgba(52,211,153,0.12) 100%)`,
                                        border: '1px solid rgba(52,211,153,0.30)',
                                        boxShadow: '0 24px 64px rgba(52,211,153,0.12)',
                                    }}
                                >
                                    <p
                                        className="text-sm font-semibold uppercase tracking-widest mb-4"
                                        style={{ color: 'rgba(255,255,255,0.50)' }}
                                    >
                                        Target Score
                                    </p>
                                    <p
                                        className="font-mono font-bold leading-none mb-2"
                                        style={{ fontSize: 'clamp(48px, 10vw, 76px)', color: '#34D399' }}
                                    >
                                        640+
                                    </p>
                                    <p className="font-display font-semibold text-white text-lg mt-1">
                                        Marks = Medical Seat
                                    </p>
                                    <p className="text-sm mt-3" style={{ color: 'rgba(255,255,255,0.45)' }}>
                                        out of 720 total marks
                                    </p>
                                </div>

                                {/* Breakdown chips */}
                                <div className="grid grid-cols-3 gap-3">
                                    {SUBJECTS.map(({ label, marks, color }, i) => (
                                        <div
                                            key={i}
                                            className="rounded-xl border p-4 flex flex-col items-center gap-1 text-center transition-all duration-300 hover:scale-105"
                                            style={{
                                                background: 'rgba(10,22,40,0.04)',
                                                borderColor: `${color}33`,
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.background = `${color}0D`;
                                                e.currentTarget.style.borderColor = `${color}66`;
                                                e.currentTarget.style.boxShadow = `0 8px 24px ${color}22`;
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.background = 'rgba(10,22,40,0.04)';
                                                e.currentTarget.style.borderColor = `${color}33`;
                                                e.currentTarget.style.boxShadow = '';
                                            }}
                                        >
                                            <span className="font-mono font-bold text-xl" style={{ color }}>
                                                {marks}
                                            </span>
                                            <span className="text-[12px] text-[#6B7280] font-medium leading-tight">
                                                {label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </SlideRight>
                    </div>
                </div>

            </div>
        </div>
    );
}