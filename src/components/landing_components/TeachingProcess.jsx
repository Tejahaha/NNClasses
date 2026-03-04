import { StaggerContainer, StaggerItem, FadeUp } from './AnimateOnScroll'

const B = {
    primary: '#0A1628',
    dark: '#050D18',
    gold: '#FFB347',
    goldLight: '#FFC875',
    goldYellow: '#FF9E1B',
}

const GRID_BG = {
    backgroundColor: '#F8F9FD',
    backgroundImage:
        'linear-gradient(#E2E8F0 1px, transparent 1px),' +
        'linear-gradient(90deg, #E2E8F0 1px, transparent 1px)',
    backgroundSize: '44px 44px',
}

const STEPS = [
    {
        title: 'Great Lecturers',
        desc: 'Expert IIT faculty who make every concept crystal clear.',
        image: '/illustrations/step1.svg',
        accent: '#6366F1',
        num: '01',
    },
    {
        title: 'Textbook Reading',
        desc: 'Structured reading to build rock-solid foundations.',
        image: '/illustrations/step2.svg',
        accent: '#F59E0B',
        num: '02',
    },
    {
        title: 'Concept Application',
        desc: 'Solving real problems to sharpen aptitude and speed.',
        image: '/illustrations/step3.svg',
        accent: '#10B981',
        num: '03',
    },
    {
        title: 'Previous Year Qs',
        desc: 'Targeted practice with past papers for exam mastery.',
        image: '/illustrations/step4.svg',
        accent: '#EF4444',
        num: '04',
    },
]

const Arrow = () => (
    <div className="hidden lg:flex items-center justify-center flex-shrink-0 px-2">
        <svg width="44" height="24" viewBox="0 0 44 24" fill="none">
            <path
                d="M2 12 L38 12"
                stroke={B.goldYellow}
                strokeWidth="2"
                strokeDasharray="5 3"
                strokeLinecap="round"
            />
            <path
                d="M34 6 L42 12 L34 18"
                stroke={B.goldYellow}
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
        </svg>
    </div>
)

export default function TeachingProcess() {
    return (
        <section
            id="teaching-process"
            style={{ ...GRID_BG, paddingTop: '96px', paddingBottom: '96px', position: 'relative' }}
        >
            {/* Warm radial tint */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(ellipse 80% 55% at 50% 0%, rgba(255,179,71,0.07) 0%, transparent 65%)',
                }}
            />

            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8">

                {/* ── Section Header ── */}
                <FadeUp className="text-center mb-20">
                    <div
                        className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase"
                        style={{
                            background: 'rgba(10,22,40,0.06)',
                            color: B.primary,
                            border: '1px solid rgba(10,22,40,0.15)',
                            fontFamily: 'var(--font-display)',
                        }}
                    >
                        ✦ Teaching System
                    </div>

                    <h2
                        className="font-display font-bold text-[#111827] tracking-tight mb-5"
                        style={{ fontSize: 'clamp(34px, 6vw, 52px)', lineHeight: 1.1 }}
                    >
                        Our{' '}
                        <span
                            style={{
                                background: `linear-gradient(135deg, ${B.primary} 0%, ${B.goldYellow} 100%)`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Teaching System
                        </span>
                    </h2>

                    <p
                        className="text-[#6B7280] max-w-lg mx-auto leading-relaxed"
                        style={{ fontSize: 'clamp(16px, 2vw, 18px)' }}
                    >
                        A structured pipeline designed to turn every concept into a rank.
                    </p>
                </FadeUp>

                {/* ── Cards Row ── */}
                <StaggerContainer
                    className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row items-start justify-center gap-6 lg:gap-0"
                    stagger={0.1}
                >
                    {STEPS.map((step, i) => (
                        <div
                            key={i}
                            className="flex flex-col lg:flex-row items-center justify-center flex-shrink-0 w-full lg:w-auto"
                        >
                            <StaggerItem>
                                <div
                                    className="relative rounded-3xl overflow-hidden group w-full max-w-[280px] md:w-[260px] cursor-default transition-all duration-300 hover:-translate-y-2 mx-auto"
                                    style={{
                                        background: `linear-gradient(160deg, ${B.dark} 0%, ${B.primary} 100%)`,
                                        border: `1px solid rgba(255,255,255,0.07)`,
                                        boxShadow: '0 16px 48px rgba(0,0,0,0.22)',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.boxShadow = `0 24px 64px rgba(0,0,0,0.35), 0 0 0 1px ${step.accent}55`
                                        e.currentTarget.style.borderColor = `${step.accent}44`
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.22)'
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                                    }}
                                >
                                    {/* Accent top bar */}
                                    <div
                                        className="absolute top-0 left-0 right-0 h-[3px] z-20"
                                        style={{ background: `linear-gradient(90deg, ${step.accent}, transparent)` }}
                                    />

                                    {/* SVG illustration area */}
                                    <div
                                        className="relative w-full flex items-center justify-center"
                                        style={{ height: '220px', padding: '20px 20px 0 20px' }}
                                    >
                                        {/* Soft glow behind SVG */}
                                        <div
                                            className="absolute inset-0 opacity-20 pointer-events-none"
                                            style={{
                                                background: `radial-gradient(ellipse at 50% 60%, ${step.accent} 0%, transparent 70%)`,
                                            }}
                                        />
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="relative z-10 w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.06]"
                                            style={{ maxHeight: '200px' }}
                                        />
                                    </div>

                                    {/* Text content */}
                                    <div className="px-5 pb-6 pt-4">
                                        {/* Step number */}
                                        <span
                                            className="font-display text-[11px] font-bold tracking-[0.18em] uppercase mb-2 block"
                                            style={{ color: step.accent }}
                                        >
                                            Step {step.num}
                                        </span>
                                        <h3
                                            className="font-display text-white font-bold mb-2 leading-snug"
                                            style={{ fontSize: '19px' }}
                                        >
                                            {step.title}
                                        </h3>
                                        <p
                                            className="text-white/60 leading-relaxed"
                                            style={{ fontSize: '13.5px' }}
                                        >
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </StaggerItem>

                            {i < STEPS.length - 1 && <Arrow />}
                        </div>
                    ))}
                </StaggerContainer>

                {/* ── Motto Banner ── */}
                <FadeUp delay={0.45} className="mt-20 flex justify-center w-full px-4">
                    <div
                        className="relative rounded-3xl w-full max-w-4xl overflow-hidden text-center"
                        style={{
                            background: `linear-gradient(140deg, ${B.dark} 0%, #0F1F3D 50%, ${B.primary} 100%)`,
                            border: `1px solid rgba(255,179,71,0.35)`,
                            boxShadow: '0 24px 80px rgba(0,0,0,0.35)',
padding: 'clamp(20px, 5vw, 52px) clamp(16px, 5vw, 64px)',                        }}
                    >
                        {/* Background gold glow */}
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background: `radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,158,27,0.12) 0%, transparent 70%)`,
                            }}
                        />

                        {/* Decorative quotation marks */}
                        <div
                            className="absolute top-4 left-6 font-display font-bold select-none pointer-events-none"
                            style={{ fontSize: '80px', lineHeight: 1, color: `rgba(255,179,71,0.35)` }}
                        >
                            "
                        </div>

                       <p
    className="relative z-10 leading-tight"
    style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(20px, 5.5vw, 44px)',
        fontWeight: 700,
        color: '#ffffff',
        letterSpacing: '-0.01em',
    }}
>
    <span style={{ opacity: 0.65, fontWeight: 500, fontStyle: 'italic', fontSize: '0.78em' }}>
        Our believe,
    </span>

    <span
        className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mt-2"
    >
        <span style={{ color: B.goldLight, whiteSpace: 'nowrap' }}>TextBook Reading</span>
        <span style={{ color: 'rgba(255,255,255,0.35)', fontWeight: 300 }}>=</span>
        <span style={{ color: B.goldYellow, whiteSpace: 'nowrap' }}>MOTHER FEEDING</span>
    </span>
</p>
                    </div>
                </FadeUp>

            </div>
        </section>
    )
}