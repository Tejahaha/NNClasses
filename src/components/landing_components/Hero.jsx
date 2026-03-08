import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FadeUp } from './AnimateOnScroll';
import Grainient from './Grainient';

import { B } from '../../tokens/brand';

export default function Hero() {
    const navigate = useNavigate();

    // Stats Animation Logic
    const [counts, setCounts] = useState({ students: 0, years: 0, results: 0 });
    const rafId = useRef(null);

    useEffect(() => {
        const duration = 1200; // 1.2 seconds
        const startTime = performance.now();

        const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out cubic: 1 - pow(1 - x, 3)
            const easedProgress = 1 - Math.pow(1 - progress, 3);

            setCounts({
                students: Math.floor(easedProgress * 500),
                years: Math.floor(easedProgress * 10),
                results: Math.floor(easedProgress * 98)
            });

            if (progress < 1) {
                rafId.current = requestAnimationFrame(animate);
            }
        };

        rafId.current = requestAnimationFrame(animate);
        return () => { if (rafId.current) cancelAnimationFrame(rafId.current); };
    }, []);

    return (
        <section
            id="about"
            style={{
                minHeight: 'clamp(calc(100svh - 64px), 80vh, 100vh)',
                paddingBottom: 'clamp(140px, 34vw, 520px)',
                paddingTop: 'clamp(70px, 10vh, 100px)',
                position: 'relative',
                overflow: 'visible',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
            }}
        >
            {/* Grainient WebGL background */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <Grainient
                    color1={B.light}
                    color2={B.primary}
                    color3={B.dark}
                    timeSpeed={0.18}
                    warpStrength={0.8}
                    warpFrequency={4}
                    warpSpeed={1.2}
                    warpAmplitude={60}
                    rotationAmount={320}
                    noiseScale={2}
                    colorBalance={0.05}
                    blendAngle={15}
                    blendSoftness={0.08}
                    grainAmount={0.055}
                    grainScale={1.8}
                    grainAnimated={false}
                    contrast={1.35}
                    gamma={1.0}
                    saturation={1.1}
                    centerX={0}
                    centerY={0}
                    zoom={0.85}
                />
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 pointer-events-none" style={{
                zIndex: 1,
                backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),' +
                    'linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
            }} />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">

                <h1 style={{
                    position: 'absolute',
                    width: '1px',
                    height: '1px',
                    padding: 0,
                    margin: '-1px',
                    overflow: 'hidden',
                    clip: 'rect(0,0,0,0)',
                    whiteSpace: 'nowrap',
                    border: 0,
                }}>
                    N&N Academy — IIT-JEE and NEET Coaching Institute in Vijayawada, Andhra Pradesh
                </h1>

                {/* Logo and Tagline */}
                <FadeUp delay={0.18}>
                    <div className="flex flex-col items-center justify-center w-full relative">
                        {/* Image scaled efficiently for mobile */}
                        <img
                            src="/logos/NNClassesLargeTransparant.png"
                            alt="N&N Academy — IIT-JEE and NEET Coaching Institute Vijayawada"
                            loading="eager"
                            width={1000}
                            height={300}
                            className="mx-auto block mt-8 sm:mt-16 mb-4 sm:mb-6 w-full max-w-[90vw] sm:max-w-[700px] md:max-w-[1000px] h-auto object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.05)]"
                        />

                        {/* Tagline Between Cursive-Style Lines */}
                        <div className="relative flex flex-col items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14 px-4 sm:px-6 w-full max-w-2xl sm:max-w-3xl mx-auto mt-[-5px] sm:mt-[-25px]">
                            {/* Golden Aura Glow */}
                            <div className="absolute inset-0 w-[120%] h-[150%] left-[-10%] top-[-25%] pointer-events-none opacity-60 mix-blend-screen" style={{ background: `radial-gradient(ellipse at center, ${B.gold}4D 0%, transparent 65%)`, filter: 'blur(24px)' }} />

                            {/* Top Golden Line */}
                            <div className="w-full h-[1px] sm:h-[2px] rounded-full pointer-events-none relative z-10" style={{ background: `linear-gradient(90deg, transparent, ${B.goldYellow}, transparent)`, boxShadow: `0 0 10px ${B.gold}` }} />

                            {/* Inner Golden Text */}
                            <p>
                                <span className="font-display font-semibold sm:font-semibold text-[15px] sm:text-[18px] md:text-[22px] tracking-[0.15em] sm:tracking-[0.35em] uppercase relative z-20 whitespace-normal sm:whitespace-nowrap text-center leading-relaxed" style={{ color: B.goldLight, textShadow: `0 0 20px border-transparent ${B.gold}, 0 0 40px ${B.goldYellow}` }}>
                                    Institute for IIT, JEE, NEET
                                </span>
                            </p>

                            {/* Bottom Golden Line */}
                            <div className="w-full h-[1px] sm:h-[2px] rounded-full pointer-events-none relative z-10" style={{ background: `linear-gradient(90deg, transparent, ${B.goldYellow}, transparent)`, boxShadow: `0 0 10px ${B.gold}` }} />
                        </div>
                    </div>
                </FadeUp>

                {/* CTAs */}
                <FadeUp delay={0.42}>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto px-2 sm:px-0">
                        <button
                            onClick={() => navigate('/student-section')}
                            className="w-full sm:w-auto flex items-center justify-center gap-2.5 font-bold rounded-[12px] px-8 py-4 text-[17px] sm:text-[18px] transition-all duration-200"
                            style={{ background: `linear-gradient(135deg, ${B.gold}, ${B.goldYellow})`, color: '#1A1A1A', boxShadow: '0 4px 20px rgba(212,166,42,0.4)' }}
                            onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(1.08)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(212,166,42,0.5)'; }}
                            onMouseLeave={e => { e.currentTarget.style.filter = ''; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 20px rgba(212,166,42,0.4)'; }}
                        >
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M9 1.5L11.25 7H16.5L12.375 10.5L14.25 16.5L9 13L3.75 16.5L5.625 10.5L1.5 7H6.75L9 1.5Z" fill="currentColor" />
                            </svg>
                            Start Learning
                        </button>
                        <button
                            className="w-full sm:w-auto flex items-center justify-center gap-2.5 font-semibold rounded-[12px] px-7 py-4 text-[17px] sm:text-[18px] transition-all duration-300"
                            style={{ background: 'rgba(255,255,255,0.12)', color: 'white', border: '1.5px solid rgba(255,255,255,0.3)' }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'rgba(212,166,42,0.15)';
                                e.currentTarget.style.borderColor = 'rgba(212,166,42,0.4)';
                                e.currentTarget.style.color = B.goldLight;
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                                e.currentTarget.style.color = 'white';
                                e.currentTarget.style.transform = '';
                            }}
                        >
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M7 6.5L12.5 9L7 11.5V6.5Z" fill="currentColor" />
                            </svg>
                            Watch Demo
                        </button>
                    </div>
                </FadeUp>

                {/* Social Proof Stats Bar */}
                <FadeUp delay={0.6}>
                    <div style={{ margin: '32px auto', maxWidth: '320px', borderTop: '1px solid rgba(255,255,255,0.1)' }} />
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-16 mx-auto w-fit">
                        <div className="text-center sm:text-left px-2 sm:px-4">
                            <div style={{ color: '#FFB347', fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 'bold' }}>{counts.students}+</div>
                            <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }} className="whitespace-nowrap">Students Enrolled</div>
                        </div>
                        <div className="hidden sm:block" style={{ width: '1px', height: '32px', background: 'rgba(255,255,255,0.15)' }} />
                        <div className="text-center sm:text-left px-2 sm:px-4">
                            <div style={{ color: '#FFB347', fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 'bold' }}>{counts.years}+</div>
                            <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }} className="whitespace-nowrap">Years Teaching</div>
                        </div>
                        <div className="hidden sm:block" style={{ width: '1px', height: '32px', background: 'rgba(255,255,255,0.15)' }} />
                        <div className="text-center sm:text-left px-2 sm:px-4">
                            <div style={{ color: '#FFB347', fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 'bold' }}>{counts.results}%</div>
                            <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }} className="whitespace-nowrap">Results</div>
                        </div>
                    </div>
                </FadeUp>

                {/* Trust bar */}
                <FadeUp delay={0.72}>
                    <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-6"
                        style={{ color: 'rgba(255,255,255,0.45)', fontSize: '15px' }}>
                        {['Trusted by 4,000+ users', 'Academic Authority', 'Premium Coaching', '99.9% Uptime'].map(t => (
                            <span key={t} className="flex items-center gap-1.5">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M2 6l3 3 5-6" stroke={B.goldLight} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                {t}
                            </span>
                        ))}
                    </div>
                </FadeUp>

            </div>
        </section>
    );
}

