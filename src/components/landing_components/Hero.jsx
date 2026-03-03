import { useNavigate } from 'react-router-dom';
import { FadeUp } from './AnimateOnScroll';
import Grainient from './Grainient';

const B = {
    primary: '#0A1628',   // Deep Navy
    secondary: '#00C9A7', // Electric Teal
    light: '#1B2C46',     // Lighter Navy for accents
    dark: '#050D18',      // Darker Navy for depth
    gold: '#FFB347',      // Warm Amber
    goldLight: '#FFC875', // Lighter Amber
    goldYellow: '#FF9E1B', // Richer Amber
};

export default function Hero() {
    const navigate = useNavigate();
    return (
        <section
            id="about"
            style={{
                minHeight: '40vh',
                paddingBottom: 'clamp(280px, 38vw, 520px)',
                paddingTop: '80px',
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

                {/* H1 */}
                <FadeUp delay={0.18}>
                    <h1
                        className="font-display font-bold text-white leading-tight tracking-tight mb-6 sm:mb-8"
                        style={{ fontSize: 'clamp(48px, 10vw, 84px)' }}
                    >
                        Fearless Learning. <br className="hidden sm:block" />
                        Zero Pressure.
                        <span className="block mt-4 sm:mt-6" style={{ background: `linear-gradient(135deg, ${B.gold}, ${B.goldYellow})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            N &amp; N Academy
                        </span>
                    </h1>
                </FadeUp>

                {/* CTAs */}
                <FadeUp delay={0.42}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                        <button
                            onClick={() => navigate('/student-section')}
                            className="w-full sm:w-auto flex items-center justify-center gap-2.5 font-bold rounded-[12px] px-8 py-4 text-[18px] transition-all duration-200"
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
                            className="w-full sm:w-auto flex items-center justify-center gap-2.5 font-semibold rounded-[12px] px-7 py-4 text-[18px] transition-all duration-300"
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

                {/* Trust bar */}
                <FadeUp delay={0.54}>
                    <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-6"
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
