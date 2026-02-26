import Iridescence from './Iridescence';

const B = {
    primary: '#1F5E78',
    secondary: '#2E7C97',
    light: '#5FA8C4',
    dark: '#123B4A',
    gold: '#D4A62A',
    goldYellow: '#F4C542',
};

const COLS = {
    Product: ['Features', 'Roadmap', 'Changelog', 'Pricing', 'Security'],
    Company: ['About Us', 'Blog', 'Careers', 'Press Kit', 'Contact'],
    Resources: ['Documentation', 'API Reference', 'Community', 'Status', 'Partners'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
};

export default function Footer() {
    return (
        <footer style={{
            /* Shiny black glossy base */
            background: 'linear-gradient(180deg, #0A0A0A 0%, #111111 40%, #0D0D0D 100%)',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Top gloss sheen — the key glossy effect */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 30%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.35) 70%, transparent 100%)',
                zIndex: 10,
            }} />
            {/* Radial specular highlight — centre top */}
            <div style={{
                position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                width: '70%', height: '280px',
                background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.05) 0%, transparent 70%)',
                pointerEvents: 'none', zIndex: 1,
            }} />
            {/* Final CTA strip — Iridescence WebGL background */}
            <div className="relative py-20 overflow-hidden text-center" style={{ minHeight: '420px' }}>
                {/* Iridescence fills the entire strip */}
                <div className="absolute inset-0" style={{ zIndex: 0 }}>
                    <Iridescence
                        color={[0.12, 0.37, 0.47]}   /* maps to brand primary #1F5E78 */
                        mouseReact
                        amplitude={0.12}
                        speed={0.2}
                    />
                </div>
                {/* Dark scrim so white text stays legible */}
                <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, background: 'rgba(18,59,74,0.55)' }} />

                <div className="relative max-w-2xl mx-auto px-4 sm:px-6" style={{ zIndex: 2 }}>
                    <h2 className="text-[42px] max-md:text-[28px] font-bold text-white leading-tight mb-4 tracking-tight">
                        Ready to{' '}
                        <span style={{ background: `linear-gradient(135deg, ${B.gold}, ${B.goldYellow})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            achieve more?
                        </span>
                    </h2>
                    <p className="text-[16px] leading-relaxed mb-9" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        Join 4,000+ learners and teams building with Nova. Start for free — no credit card required.
                    </p>
                    <button
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-bold rounded-[10px] px-9 py-4 text-base transition-all duration-200"
                        style={{
                            background: `linear-gradient(135deg, ${B.gold}, ${B.goldYellow})`,
                            color: '#1A1A1A',
                            boxShadow: '0 0 40px rgba(212,166,42,0.35)',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.filter = 'brightness(1.08)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 12px 40px rgba(212,166,42,0.55)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.filter = '';
                            e.currentTarget.style.transform = '';
                            e.currentTarget.style.boxShadow = '0 0 40px rgba(212,166,42,0.35)';
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M9 1.5L11.5 7H17L12.6 10.5L14.5 17L9 13.2L3.5 17L5.4 10.5L1 7H6.5L9 1.5Z" fill="currentColor" />
                        </svg>
                        Request Early Access — Free
                    </button>
                    <p className="mt-3 text-[13px]" style={{ color: 'rgba(255,255,255,0.25)' }}>
                        No credit card · Cancel anytime
                    </p>
                </div>
            </div>

            {/* Link columns — glassy panel */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14" style={{ position: 'relative', zIndex: 2 }}>
                {/* Subtle inner gloss panel */}
                <div style={{
                    position: 'absolute', inset: '0 0 auto 0', height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
                }} />
                <div className="grid grid-cols-5 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-8 sm:gap-10">
                    {/* Brand */}
                    <div className="col-span-2 sm:max-lg:col-span-3">
                        <div className="flex items-center gap-2.5 mb-4">
                            <img
                                src="/logo.png"
                                alt="Nova"
                                className="h-8 w-auto"
                                onError={e => { e.target.style.display = 'none'; }}
                            />
                            <span className="text-xl font-bold" style={{ color: B.light }}>
                                Nova
                            </span>
                        </div>
                        <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.3)', maxWidth: 220 }}>
                            The AI platform that helps teams build, ship, and scale faster — anchored in trust, discipline, and academic authority.
                        </p>
                    </div>

                    {Object.entries(COLS).map(([group, links]) => (
                        <div key={group}>
                            <h4 className="text-[11px] font-bold uppercase tracking-widest mb-4"
                                style={{ color: B.light, opacity: 0.6 }}>
                                {group}
                            </h4>
                            <ul className="space-y-3">
                                {links.map(l => (
                                    <li key={l}>
                                        <a href="#"
                                            className="text-[13px] transition-colors duration-150"
                                            style={{ color: 'rgba(255,255,255,0.3)' }}
                                            onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
                                            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}>
                                            {l}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar — glossy divider */}
                <div className="mt-12 pt-6 flex flex-wrap items-center justify-between gap-4"
                    style={{
                        borderTop: '1px solid rgba(255,255,255,0.07)',
                        boxShadow: '0 -1px 0 rgba(255,255,255,0.04)',
                    }}>
                    <p className="text-[12px]" style={{ color: 'rgba(255,255,255,0.2)' }}>
                        © {new Date().getFullYear()} Nova AI, Inc. All rights reserved.
                    </p>
                    <div className="flex gap-5">
                        {['Privacy', 'Terms', 'Cookies'].map(l => (
                            <a key={l} href="#" className="text-[12px] transition-colors duration-150"
                                style={{ color: 'rgba(255,255,255,0.2)' }}
                                onMouseEnter={e => e.currentTarget.style.color = B.light}
                                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.2)'}>
                                {l}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
