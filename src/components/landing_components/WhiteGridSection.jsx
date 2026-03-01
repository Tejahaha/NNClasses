import { SlideLeft, SlideRight, StaggerContainer, StaggerItem, FadeUp } from './AnimateOnScroll';

const B = {
    primary: '#0A1628',   // Deep Navy
    secondary: '#00C9A7', // Electric Teal
    light: '#1B2C46',     // Lighter Navy
    dark: '#050D18',      // Darker Navy
    gold: '#FFB347',      // Warm Amber
    goldLight: '#FFC875', // Lighter Amber
    goldYellow: '#FF9E1B', // Richer Amber
};

const GRID_BG = {
    backgroundColor: '#fffefd', /* Slightly tinted off-white */
    backgroundImage:
        'linear-gradient(#E2E8F0 1px, transparent 1px),' +
        'linear-gradient(90deg, #E2E8F0 1px, transparent 1px)',
    backgroundSize: '40px 40px',
};

/* ─── SVG icon set ─── */
const Icon = {
    Teaching: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    ),
    Book: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
    ),
    Concept: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18h6" /><path d="M10 22h4" />
            <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
        </svg>
    ),
    PYQ: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
        </svg>
    ),
    Calendar: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
        </svg>
    ),
    ClipboardCheck: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
            <rect x="9" y="3" width="6" height="4" rx="1" /><path d="m9 12 2 2 4-4" />
        </svg>
    ),
    PhoneOff: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07" />
            <path d="M14.5 2.5c2 1 3.5 3.5 3.5 5.5" /><line x1="1" y1="1" x2="23" y2="23" />
            <path d="M5.29 5.29A19.49 19.49 0 0 0 3.07 8.63 2 2 0 0 0 5 11h.09a12.84 12.84 0 0 0 2.7-.29 2 2 0 0 1 2.08.71L12 13" />
        </svg>
    ),
    Heart: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
    ),
    Shield: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
    ),
    MessageCircle: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
    ),
    Target: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
        </svg>
    ),
};

const SALIENT = [
    { Icon: Icon.Teaching, title: 'Expertised Teaching', desc: 'Learn from highly qualified faculty.' },
    { Icon: Icon.Book, title: 'Text Book Reading', desc: 'Deep dive into core conceptual material.' },
    { Icon: Icon.Concept, title: 'Conceptual Working', desc: 'Master fundamentals, not just formulas.' },
    { Icon: Icon.PYQ, title: 'Previous Year Questions', desc: 'Extensive practice with real past exams.' },
    { Icon: Icon.Calendar, title: 'Weekly Tests', desc: 'Regular assessments to track progress.' },
    { Icon: Icon.ClipboardCheck, title: 'Regular Part Tests', desc: 'Targeting specific syllabus sections.' },
];

const GUIDELINES = [
    { Icon: Icon.PhoneOff, title: 'No Mobiles', desc: 'Mandatory safe deposition at reception.' },
    { Icon: Icon.Heart, title: 'Fearless Learning', desc: 'Enjoy the subject without any anxiety.' },
    { Icon: Icon.Shield, title: 'Pressure Proof', desc: 'Face the examination completely pressure-free.' },
    { Icon: Icon.MessageCircle, title: 'Direct Access', desc: 'Clear your doubts with faculty anytime.' },
    { Icon: Icon.Target, title: 'Perfect Accuracy', desc: 'Answer questions with absolute perfection.' },
];

export default function WhiteGridSection() {
    return (
        <section
            id="features"
            style={{
                ...GRID_BG,
                paddingTop: 'clamp(120px, 22vw, 380px)',
                paddingBottom: '80px',
                minHeight: '60vh',
                position: 'relative',
            }}
        >
            {/* Mesh Gradient Tint Overlay */}
            <div className="absolute inset-0 pointer-events-none" style={{
                background:
                    'radial-gradient(ellipse 80% 60% at 20% -10%, rgba(0,201,167,0.06) 0%, transparent 70%),' +
                    'radial-gradient(ellipse 70% 50% at 80% 30%, rgba(255,179,71,0.04) 0%, transparent 60%),' +
                    'radial-gradient(ellipse 90% 70% at 50% 110%, rgba(10,22,40,0.08) 0%, transparent 80%)',
                zIndex: 0,
            }} />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <FadeUp className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-5 font-display"
                        style={{ background: `rgba(10,22,40,0.07)`, color: B.primary, border: `1px solid rgba(10,22,40,0.18)`, letterSpacing: '0.05em' }}>
                        ✦ Academics
                    </div>
                    <h2 className="font-display font-bold text-[#1A1A1A] leading-tight tracking-tight mb-4" style={{ fontSize: 'clamp(28px, 6vw, 42px)' }}>
                        What makes our{' '}
                        <span style={{ background: `linear-gradient(135deg, ${B.primary}, ${B.secondary})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            academics stand out
                        </span>
                    </h2>
                    <p className="text-[#6B7280] max-w-full sm:max-w-xl mx-auto leading-relaxed" style={{ fontSize: 'clamp(16px, 4vw, 18px)' }}>
                        A disciplined system built for results — the right environment, habits, and guidance to ensure every student reaches their apex potential.
                    </p>
                </FadeUp>

                <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-8 pt-4">

                    {/* ── Panel 1: SALIENT FEATURES ── */}
                    <SlideLeft>
                        <div className="rounded-3xl overflow-hidden h-full flex flex-col"
                            style={{ background: `linear-gradient(135deg, ${B.dark} 0%, ${B.primary} 100%)`, boxShadow: `0 24px 80px rgba(18,59,74,0.28)` }}>
                            <div className="px-6 sm:px-8 pt-8 sm:pt-9 pb-6 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full" style={{ background: 'rgba(212,166,42,0.15)', color: B.goldYellow }}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    </span>
                                    <h3 className="text-sm font-bold uppercase tracking-widest" style={{ color: B.goldLight }}>
                                        Programme Salient Features
                                    </h3>
                                </div>
                                <p className="font-display text-[26px] sm:text-[32px] font-bold text-white leading-tight">Academic Blueprint</p>
                            </div>

                            <StaggerContainer className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 content-start">
                                {SALIENT.map(({ Icon: ItemIcon, title, desc }, i) => (
                                    <StaggerItem key={i}>
                                        <div
                                            className="flex flex-col items-start gap-4 rounded-2xl p-5 h-full transition-all duration-300 cursor-default group"
                                            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.background = 'rgba(255,255,255,0.09)';
                                                e.currentTarget.style.borderColor = 'rgba(212,166,42,0.3)';
                                                e.currentTarget.style.transform = 'translateY(-4px)';
                                                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                                                e.currentTarget.style.transform = '';
                                                e.currentTarget.style.boxShadow = '';
                                            }}
                                        >
                                            <span
                                                className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                                                style={{ background: `rgba(212,166,42,0.15)`, color: B.goldYellow }}
                                            >
                                                <ItemIcon />
                                            </span>
                                            <div>
                                                <h4 className="font-bold text-white text-lg mb-1">{title}</h4>
                                                <p className="text-[14px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>{desc}</p>
                                            </div>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                    </SlideLeft>

                    {/* ── Panel 2: GUIDELINES ── */}
                    <SlideRight>
                        <div className="rounded-3xl flex flex-col overflow-hidden h-full"
                            style={{ background: '#F9F6F0', border: `1px solid rgba(10,22,40,0.1)`, boxShadow: `0 24px 80px rgba(10,22,40,0.06)` }}>
                            <div className="px-6 sm:px-8 pt-8 sm:pt-9 pb-6 border-b relative overflow-hidden"
                                style={{ borderColor: `rgba(10,22,40,0.08)`, background: `linear-gradient(135deg, rgba(10,22,40,0.03), rgba(0,201,167,0.02))` }}>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[rgba(0,201,167,0.05)] to-transparent rounded-full blur-3xl -mr-10 -mt-10" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="flex items-center justify-center w-8 h-8 rounded-full" style={{ background: 'rgba(0,201,167,0.12)', color: B.secondary }}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                            </svg>
                                        </span>
                                        <h3 className="text-sm font-bold uppercase tracking-widest" style={{ color: B.secondary }}>Strict Guidelines</h3>
                                    </div>
                                    <p className="font-display text-[26px] sm:text-[32px] font-bold text-[#1A1A1A] leading-tight">Student Success Code</p>
                                </div>
                            </div>

                            <StaggerContainer className="p-6 sm:p-8 flex flex-col gap-4 flex-1">
                                {GUIDELINES.map(({ Icon: ItemIcon, title, desc }, i) => (
                                    <StaggerItem key={i}>
                                        <div
                                            className="flex items-center gap-5 rounded-2xl p-4 transition-all duration-300 cursor-default group"
                                            style={{ background: '#F8FAFC', border: `1px solid rgba(10,22,40,0.05)` }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.background = '#F9F6F0';
                                                e.currentTarget.style.borderColor = `rgba(0,201,167,0.3)`;
                                                e.currentTarget.style.transform = 'translateY(-3px)';
                                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,201,167,0.08)';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.background = '#F8FAFC';
                                                e.currentTarget.style.borderColor = `rgba(10,22,40,0.05)`;
                                                e.currentTarget.style.transform = '';
                                                e.currentTarget.style.boxShadow = '';
                                            }}
                                        >
                                            <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center transition-colors duration-300 group-hover:bg-[#00C9A7] group-hover:text-white"
                                                style={{ background: `#F9F6F0`, border: `1.5px solid rgba(0,201,167,0.2)`, color: B.secondary, boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                                                <ItemIcon />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#1A1A1A] text-lg mb-0.5">{title}</h4>
                                                <p className="text-[14px] leading-relaxed text-[#6B7280]">{desc}</p>
                                            </div>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>

                            {/* Warning banner */}
                            <div className="mx-6 sm:mx-8 mb-6 sm:mb-8 rounded-xl px-5 py-4 flex items-start gap-4"
                                style={{ background: `rgba(212,166,42,0.1)`, border: `1px solid rgba(212,166,42,0.3)` }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B48600" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                    <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
                                </svg>
                                <p className="text-[14px] leading-relaxed font-semibold text-[#B48600]">
                                    Compliance with these behavioral and academic guidelines is a mandatory requirement for all enrolled students.
                                </p>
                            </div>
                        </div>
                    </SlideRight>

                </div>
            </div>
        </section>
    );
}
