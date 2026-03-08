import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { FadeUp } from './AnimateOnScroll'
import { B } from '../../tokens/brand';

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
        alt: 'Expert IIT faculty lecturers',
        accent: '#6366F1',
        num: '01',
    },
    {
        title: 'Textbook Reading',
        desc: 'Structured reading to build rock-solid foundations.',
        image: '/illustrations/step2.svg',
        alt: 'Structured textbook reading methodology',
        accent: '#F59E0B',
        num: '02',
    },
    {
        title: 'Concept Application',
        desc: 'Solving real problems to sharpen aptitude and speed.',
        image: '/illustrations/step3.svg',
        alt: 'Concept application through problem solving',
        accent: '#10B981',
        num: '03',
    },
    {
        title: 'Previous Year Qs',
        desc: 'Targeted practice with past papers for exam mastery.',
        image: '/illustrations/step4.svg',
        alt: 'Previous year question paper practice',
        accent: '#EF4444',
        num: '04',
    },
]

export default function TeachingProcess() {
    return (
        <section
            id="teaching-process"
            style={{ ...GRID_BG, position: 'relative' }}
            className="py-[clamp(80px,10vw,140px)] overflow-visible"
        >
            {/* Warm radial tint */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(ellipse 80% 55% at 50% 0%, rgba(255,179,71,0.07) 0%, transparent 65%)',
                }}
            />

            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

                {/* ── Left Sticky Side ── */}
                <div className="lg:w-[35%] w-full lg:sticky relative z-20" style={{ top: 'max(120px, 15vh)' }}>
                    <FadeUp>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6" style={{ background: 'rgba(10,22,40,0.04)', color: B.primary, border: '1px solid rgba(10,22,40,0.08)' }}>
                            <span style={{ color: B.goldYellow }}>◆</span> The Pipeline
                        </div>

                        <h2 className="font-display font-bold text-[#111827] tracking-tight mb-6" style={{ fontSize: 'clamp(40px, 4.5vw, 64px)', lineHeight: 1.05 }}>
                            How we build <br className="hidden lg:block" />
                            <span style={{ background: `linear-gradient(135deg, ${B.primary} 0%, ${B.goldYellow} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                top ranks.
                            </span>
                        </h2>

                        <p className="text-[#6B7280] leading-relaxed max-w-sm" style={{ fontSize: 'clamp(16px, 1.2vw, 18px)' }}>
                            A rigorous, step-by-step learning architecture. We don't just teach concepts—we systematically train students to execute them perfectly under exam pressure.
                        </p>

                        <div className="hidden lg:flex items-center gap-4 mt-16 text-[#111827] opacity-40">
                            <div className="w-12 h-[2px] bg-current"></div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] mt-[2px]">Scroll to explore steps</span>
                        </div>
                    </FadeUp>
                </div>

                {/* ── Right Stacking Cards Side ── */}
                <div className="lg:w-[65%] w-full flex flex-col relative" style={{ paddingBottom: '5vh' }}>
                    {STEPS.map((step, i) => {
                        // The offset creates the visual stacking so the cards peak out vertically
                        const topOffset = `calc(max(120px, 15vh) + ${i * 24}px)`;

                        return (
                            <div
                                key={i}
                                className="sticky w-full transition-transform duration-500 will-change-transform"
                                style={{
                                    top: topOffset,
                                    zIndex: i + 1,
                                    // Spacing creates the scroll-delay between cards overlapping
                                    marginBottom: i === STEPS.length - 1 ? 0 : '18vh' // scroll 18vh to see the next card
                                }}
                            >
                                <div
                                    className="relative rounded-[32px] overflow-hidden group w-full flex flex-col sm:flex-row transition-all duration-300 hover:-translate-y-1"
                                    style={{
                                        background: `linear-gradient(160deg, ${B.dark} 0%, #0D1C33 100%)`,
                                        border: `1px solid rgba(255,255,255,0.08)`,
                                        boxShadow: '0 -12px 64px -20px rgba(0,0,0,0.2), 0 32px 80px -20px rgba(10,22,40,0.6)',
                                    }}
                                >
                                    {/* Glowing Accent Top Bar */}
                                    <div className="absolute top-0 left-0 right-0 h-1 z-20 opacity-80" style={{ background: `linear-gradient(90deg, ${step.accent}, transparent)` }} />

                                    {/* Text Side */}
                                    <div className="flex-1 p-8 sm:p-12 lg:p-12 xl:p-16 flex flex-col justify-center relative z-10 min-h-[300px] sm:min-h-[420px]">
                                        {/* Huge Watermark Number */}
                                        <div className="absolute -top-10 -left-6 font-display font-bold leading-none select-none pointer-events-none text-white transition-opacity duration-700 group-hover:opacity-[0.06]" style={{ fontSize: '240px', opacity: 0.02 }}>
                                            {step.num}
                                        </div>

                                        <div className="inline-flex items-center gap-3 mb-6 relative z-10">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-full text-[13px] font-bold" style={{ backgroundColor: `${step.accent}25`, color: step.accent }}>
                                                {step.num}
                                            </span>
                                            <span className="text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: step.accent }}>Phase</span>
                                        </div>

                                        <h3 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-display font-bold text-white mb-5 relative z-10 leading-[1.1]">
                                            {step.title}
                                        </h3>

                                        <p className="text-[16px] sm:text-[17px] text-white/60 leading-relaxed max-w-sm relative z-10 font-medium">
                                            {step.desc}
                                        </p>
                                    </div>

                                    {/* Visual Side */}
                                    <div className="w-full sm:w-[45%] relative flex items-center justify-center p-10 bg-black/20 sm:border-l border-t sm:border-t-0 border-white/5 min-h-[260px] sm:min-h-[420px]">
                                        {/* Radial glow matching step accent */}
                                        <div className="absolute inset-0 transition-opacity duration-700 opacity-20 group-hover:opacity-50" style={{ background: `radial-gradient(circle at center, ${step.accent} 0%, transparent 75%)` }} />

                                        {/* Grain overlay for pro-max texture */}
                                        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")', opacity: 0.03, mixBlendMode: 'overlay' }}></div>

                                        <img
                                            src={step.image}
                                            alt={step.alt}
                                            loading="lazy"
                                            width={200}
                                            height={200}
                                            className="relative z-10 w-full max-w-[180px] lg:max-w-[200px] xl:max-w-[240px] h-auto object-contain transition-transform duration-700 ease-[cubic-bezier(0.2,1,0.3,1)] group-hover:scale-110 group-hover:-translate-y-3 drop-shadow-2xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* ── Motto Banner ── */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 mt-12 sm:mt-24 bg-transparent pl-0 lg:pl-[35%]">
                <FadeUp delay={0.2} className="flex justify-center lg:justify-end w-full">
                    <div
                        className="relative rounded-3xl w-full overflow-hidden text-center"
                        style={{
                            background: `linear-gradient(140deg, ${B.dark} 0%, #0F1F3D 50%, ${B.primary} 100%)`,
                            border: `1px solid rgba(255,179,71,0.35)`,
                            boxShadow: '0 24px 80px rgba(0,0,0,0.35)',
                            padding: 'clamp(32px, 5vw, 52px) clamp(20px, 5vw, 64px)',
                        }}
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
                                fontSize: 'clamp(20px, 3.5vw, 40px)',
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