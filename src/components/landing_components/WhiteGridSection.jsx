import { SlideLeft, SlideRight, StaggerContainer, StaggerItem, FadeUp } from './AnimateOnScroll';

const B = {
    primary: '#1F5E78',
    secondary: '#2E7C97',
    light: '#5FA8C4',
    dark: '#123B4A',
    gold: '#D4A62A',
    goldYellow: '#F4C542',
};

const GRID_BG = {
    backgroundColor: '#FFFFFF',
    backgroundImage:
        'linear-gradient(#E5E7EB 1px, transparent 1px),' +
        'linear-gradient(90deg, #E5E7EB 1px, transparent 1px)',
    backgroundSize: '40px 40px',
};

/* ─── SVG icon set ─── */
const Icon = {
    Teaching: () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    ),
    Book: () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
    ),
    Concept: () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18h6" /><path d="M10 22h4" />
            <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
        </svg>
    ),
    PYQ: () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
        </svg>
    ),
    Calendar: () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
        </svg>
    ),
    ClipboardCheck: () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
            <rect x="9" y="3" width="6" height="4" rx="1" /><path d="m9 12 2 2 4-4" />
        </svg>
    ),
    PhoneOff: () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07" />
            <path d="M14.5 2.5c2 1 3.5 3.5 3.5 5.5" /><line x1="1" y1="1" x2="23" y2="23" />
            <path d="M5.29 5.29A19.49 19.49 0 0 0 3.07 8.63 2 2 0 0 0 5 11h.09a12.84 12.84 0 0 0 2.7-.29 2 2 0 0 1 2.08.71L12 13" />
        </svg>
    ),
    Heart: () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
    ),
    Shield: () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
    ),
    MessageCircle: () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
    ),
    Target: () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
        </svg>
    ),
};

const SALIENT = [
    { Icon: Icon.Teaching, text: 'Expertised Teaching' },
    { Icon: Icon.Book, text: 'Text Book Reading' },
    { Icon: Icon.Concept, text: 'Conceptual Working' },
    { Icon: Icon.PYQ, text: 'Previous Year Questions Practicing' },
    { Icon: Icon.Calendar, text: 'Weekly Tests' },
    { Icon: Icon.ClipboardCheck, text: 'Regular Part Tests' },
];

const GUIDELINES = [
    { Icon: Icon.PhoneOff, text: 'Deposition of Mobile in Reception' },
    { Icon: Icon.Heart, text: 'Enjoy the Subject Without Fear' },
    { Icon: Icon.Shield, text: 'Face the Exam Without Pressure' },
    { Icon: Icon.MessageCircle, text: 'Clear Your Doubts with Faculty Directly' },
    { Icon: Icon.Target, text: 'Answer the Questions with Perfection' },
];

export default function WhiteGridSection() {
    return (
        <section
            id="features"
            style={{
                ...GRID_BG,
                paddingTop: 'clamp(100px, 18vw, 360px)',
                paddingBottom: '80px',
                minHeight: '60vh',
                position: 'relative',
            }}
        >
            <div className="absolute inset-0 pointer-events-none" style={{
                background:
                    'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(255,255,255,0.88) 0%, transparent 60%),' +
                    'radial-gradient(ellipse 90% 40% at 50% 100%, rgba(255,255,255,0.6) 0%, transparent 60%)',
            }} />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <FadeUp className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
                        style={{ background: `rgba(31,94,120,0.07)`, color: B.primary, border: `1px solid rgba(31,94,120,0.18)` }}>
                        ✦ Academics
                    </div>
                    <h2 className="font-semibold text-[#1A1A1A] leading-tight tracking-tight mb-4" style={{ fontSize: 'clamp(22px, 5vw, 36px)' }}>
                        What makes our{' '}
                        <span style={{ background: `linear-gradient(135deg, ${B.primary}, ${B.light})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            academics stand out
                        </span>
                    </h2>
                    <p className="text-[#6B7280] max-w-full sm:max-w-[500px] mx-auto leading-relaxed" style={{ fontSize: 'clamp(14px, 3.5vw, 17px)' }}>
                        A disciplined system built for results — the right environment, habits, and guidance.
                    </p>
                </FadeUp>

                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8">

                    {/* ── Panel 1: SALIENT FEATURES ── */}
                    <SlideLeft>
                        <div className="rounded-2xl overflow-hidden h-full"
                            style={{ background: `linear-gradient(135deg, ${B.dark} 0%, ${B.primary} 100%)`, boxShadow: `0 20px 60px rgba(18,59,74,0.28)` }}>
                            <div className="px-4 sm:px-7 pt-6 sm:pt-7 pb-5 border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                                <div className="flex items-center gap-3 mb-1">
                                    {/* Star icon */}
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill={B.goldYellow} stroke="none">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                    <h3 className="text-[13px] font-bold uppercase tracking-widest" style={{ color: B.goldYellow }}>
                                        Salient Features
                                    </h3>
                                </div>
                                <p className="text-[19px] font-bold text-white leading-snug">Our Academic Programme</p>
                            </div>

                            <StaggerContainer className="px-4 sm:px-7 py-6 flex flex-col gap-3">
                                {SALIENT.map(({ Icon: ItemIcon, text }, i) => (
                                    <StaggerItem key={i}>
                                        <div
                                            className="flex items-center gap-4 rounded-xl px-4 py-3.5 transition-all duration-150 cursor-default group"
                                            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                                            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = 'rgba(212,166,42,0.4)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                                            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = ''; }}
                                        >
                                            {/* Icon badge */}
                                            <span className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center"
                                                style={{ background: `linear-gradient(135deg, ${B.gold}, ${B.goldYellow})`, color: '#1A1A1A' }}>
                                                <ItemIcon />
                                            </span>
                                            <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>{text}</span>
                                            <svg className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                <path d="M3 7h8M7 3l4 4-4 4" stroke={B.goldYellow} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                    </SlideLeft>

                    {/* ── Panel 2: GUIDELINES ── */}
                    <SlideRight>
                        <div className="rounded-2xl overflow-hidden h-full"
                            style={{ background: '#FFFFFF', border: `2px solid ${B.light}44`, boxShadow: `0 20px 60px rgba(31,94,120,0.1)` }}>
                            <div className="px-4 sm:px-7 pt-6 sm:pt-7 pb-5 border-b"
                                style={{ borderColor: `${B.light}30`, background: `linear-gradient(135deg, rgba(31,94,120,0.06), rgba(95,168,196,0.04))` }}>
                                <div className="flex items-center gap-3 mb-1">
                                    {/* Guidelines book icon */}
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={B.secondary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                    </svg>
                                    <h3 className="text-[13px] font-bold uppercase tracking-widest" style={{ color: B.secondary }}>Guidelines</h3>
                                </div>
                                <p className="text-[19px] font-bold leading-snug" style={{ color: B.dark }}>For Our Students</p>
                            </div>

                            <StaggerContainer className="px-4 sm:px-7 py-6 flex flex-col gap-3">
                                {GUIDELINES.map(({ Icon: ItemIcon, text }, i) => (
                                    <StaggerItem key={i}>
                                        <div
                                            className="flex items-center gap-4 rounded-xl px-4 py-3.5 transition-all duration-150 cursor-default group"
                                            style={{ background: '#F7FAFC', border: `1px solid ${B.light}22` }}
                                            onMouseEnter={e => { e.currentTarget.style.background = `rgba(31,94,120,0.06)`; e.currentTarget.style.borderColor = `${B.primary}40`; e.currentTarget.style.transform = 'translateX(4px)'; }}
                                            onMouseLeave={e => { e.currentTarget.style.background = '#F7FAFC'; e.currentTarget.style.borderColor = `${B.light}22`; e.currentTarget.style.transform = ''; }}
                                        >
                                            {/* Icon badge */}
                                            <span className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center"
                                                style={{ background: `rgba(31,94,120,0.1)`, border: `1.5px solid ${B.primary}25`, color: B.primary }}>
                                                <ItemIcon />
                                            </span>
                                            <span className="text-sm font-medium text-[#1A1A1A]">{text}</span>
                                            <svg className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                <path d="M3 7h8M7 3l4 4-4 4" stroke={B.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>

                            {/* Warning banner */}
                            <div className="mx-4 sm:mx-7 mb-6 sm:mb-7 rounded-xl px-4 py-3 flex items-start gap-3"
                                style={{ background: `rgba(212,166,42,0.08)`, border: `1px solid rgba(212,166,42,0.3)` }}>
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#92710A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                    <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
                                </svg>
                                <p className="text-[12px] leading-relaxed font-medium" style={{ color: '#92710A' }}>
                                    These guidelines are <strong>mandatory</strong> for all enrolled students.
                                </p>
                            </div>
                        </div>
                    </SlideRight>

                </div>
            </div>
        </section>
    );
}
