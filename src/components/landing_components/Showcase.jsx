import { useEffect, useRef } from 'react';

const TEMPLATES = [
    { title: 'SaaS Dashboard', cat: 'Full Stack · React + Node', color: 'from-violet-700 to-purple-900', lines: 2840 },
    { title: 'AI Chat Interface', cat: 'Frontend · Next.js 15', color: 'from-pink-700 to-rose-900', lines: 1240 },
    { title: 'E-commerce Platform', cat: 'Full Stack · Remix', color: 'from-blue-700 to-indigo-900', lines: 4200 },
    { title: 'Auth & Billing', cat: 'Backend · FastAPI + Stripe', color: 'from-emerald-700 to-teal-900', lines: 980 },
    { title: 'Real-Time Analytics', cat: 'Full Stack · Svelte + WS', color: 'from-amber-700 to-orange-900', lines: 3100 },
    { title: 'Mobile API Backend', cat: 'Backend · Go + gRPC', color: 'from-cyan-700 to-blue-900', lines: 1820 },
];

export default function Showcase() {
    const ref = useRef(null);
    const GRID_BG = {
        backgroundColor: '#F7F7FB',
        backgroundImage: 'linear-gradient(#E5E7EB 1px, transparent 1px), linear-gradient(90deg, #E5E7EB 1px, transparent 1px)',
        backgroundSize: '40px 40px',
    };

    useEffect(() => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) e.target.querySelectorAll('.section-animate').forEach(el => el.classList.add('visible'));
            });
        }, { threshold: 0.08 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <section ref={ref} id="showcase" className="py-24 max-md:py-16 relative" style={GRID_BG}>
            <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(247,247,251,0.5) 0%, rgba(247,247,251,0.92) 70%)' }} />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="section-animate text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
                        style={{ background: 'rgba(236,72,153,0.07)', color: '#EC4899', border: '1px solid rgba(236,72,153,0.18)' }}>
                        ✦ Showcase
                    </div>
                    <h2 className="font-semibold text-[#0F172A] leading-tight mb-4" style={{ fontSize: 'clamp(22px, 5vw, 36px)' }}>
                        What teams are{' '}
                        <span style={{ background: 'linear-gradient(135deg,#7C3AED,#EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            shipping
                        </span>
                    </h2>
                    <p className="text-[16px] text-[#6B7280] max-w-[480px] mx-auto leading-relaxed">
                        Explore production-ready templates generated with Nova and used by teams worldwide.
                    </p>
                </div>

                <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5">
                    {TEMPLATES.map((t, i) => (
                        <div key={i}
                            className={`section-animate d${(i % 3) + 1} rounded-[14px] overflow-hidden bg-white`}
                            style={{
                                boxShadow: '0 10px 30px rgba(0,0,0,0.07)',
                                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.14)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = '';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.07)';
                            }}
                        >
                            {/* Thumbnail */}
                            <div className={`h-44 bg-gradient-to-br ${t.color} relative flex items-center justify-center`}>
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
                                <div className="absolute bottom-2 right-3 text-[10px] font-mono" style={{ color: 'rgba(255,255,255,0.35)' }}>
                                    {t.lines.toLocaleString()} lines
                                </div>
                            </div>
                            {/* Card body */}
                            <div className="p-4">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#9CA3AF] mb-1">{t.cat}</p>
                                <h3 className="text-[15px] font-semibold text-[#0F172A] mb-3">{t.title}</h3>
                                <div className="flex items-center gap-2">
                                    <button
                                        className="text-xs font-semibold px-3 py-1.5 rounded-lg text-white transition-all duration-150"
                                        style={{ background: 'linear-gradient(135deg,#7C3AED,#A855F7)' }}
                                        onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.12)'}
                                        onMouseLeave={e => e.currentTarget.style.filter = ''}>
                                        Use Template
                                    </button>
                                    <button className="text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-200 text-gray-500 hover:border-purple-300 hover:text-purple-600 transition-all duration-150">
                                        Preview
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
