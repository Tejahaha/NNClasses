import Iridescence from './Iridescence';
import { useNavigate } from 'react-router-dom';

import { B } from '../../tokens/brand';

const COLS = {
    Product: ['Features', 'Roadmap', 'Changelog', 'Pricing', 'Security'],
    Company: ['About Us', 'Blog', 'Careers', 'Press Kit', 'Contact'],
    Resources: ['Documentation', 'API Reference', 'Community', 'Status', 'Partners'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
};

export default function Footer() {
    const navigate = useNavigate();
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
            <div className="relative py-16 sm:py-20 overflow-hidden text-center flex flex-col items-center justify-center min-h-[360px] sm:min-h-[420px]">
                {/* Iridescence fills the entire strip */}
                <div className="absolute inset-0" style={{ zIndex: 0 }}>
                    <Iridescence
                        color={[0.04, 0.09, 0.16]}   /* maps to brand primary Navy #0A1628 */
                        mouseReact
                        amplitude={0.12}
                        speed={0.2}
                    />
                </div>
                {/* Dark scrim so white text stays legible, opacity reduced to show iridescence */}
                <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, background: 'rgba(19, 72, 128, 0.64)' }} />

                <div className="relative max-w-2xl mx-auto px-4 sm:px-6" style={{ zIndex: 2 }}>
                    <h2 className="text-hero-fluid text-white mb-4">
                        Ready to{' '}
                        <span style={{ background: `linear-gradient(135deg, ${B.gold}, ${B.goldYellow})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            achieve more?
                        </span>
                    </h2>
                    <p className="text-body-fluid leading-relaxed mb-9" style={{ color: 'rgba(255,255,255,0.75)' }}>
                        Have questions about admissions, fees, or batch timings? We are here to help.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                        <a
                            href={`https://wa.me/917799698698?text=${encodeURIComponent("Hi, I want to know more about N&N Academy.")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-bold rounded-[10px] px-8 py-4 text-[17px] transition-all duration-200"
                            style={{ background: 'linear-gradient(135deg, #25D366, #1EBE5D)', color: '#FFFFFF', boxShadow: '0 0 30px rgba(37, 211, 102, 0.25)' }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 35px rgba(37, 211, 102, 0.45)'; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 0 30px rgba(37, 211, 102, 0.25)'; }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                            </svg>
                            WhatsApp Us
                        </a>

                        <button
                            onClick={() => window.open('tel:+917799698698')}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-bold rounded-[10px] px-8 py-4 text-[17px] transition-all duration-200"
                            style={{ background: `linear-gradient(135deg, ${B.gold}, ${B.goldYellow})`, color: '#1A1A1A', boxShadow: '0 0 30px rgba(212,166,42,0.25)' }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 35px rgba(212,166,42,0.45)'; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 0 30px rgba(212,166,42,0.25)'; }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            Book Appointment
                        </button>
                    </div>
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
                                alt="N&N Classes Logo"
                                loading="lazy"
                                className="h-8 w-auto"
                                onError={e => { e.target.style.display = 'none'; }}
                            />
                            <span className="text-2xl font-bold font-display" style={{ color: 'rgba(255,255,255,0.9)' }}>
                                N &amp; N
                            </span>
                        </div>
                        <p className="text-[16px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.3)', maxWidth: 280 }}>
                            The premier coaching institute that helps students learn, grow, and achieve their goals — anchored in trust, discipline, and academic authority.
                        </p>
                    </div>

                    {Object.entries(COLS).map(([group, links]) => (
                        <div key={group}>
                            <h4 className="text-[14px] font-bold uppercase tracking-widest mb-4"
                                style={{ color: B.light, opacity: 0.6 }}>
                                {group}
                            </h4>
                            <ul className="space-y-3">
                                {links.map(l => (
                                    <li key={l}>
                                        <a href="/"
                                            className="text-[16px] transition-colors duration-150 text-white/55 hover:text-white/85">
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
                    <p className="text-[14px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        © {new Date().getFullYear()} N &amp; N Academy. All rights reserved.
                    </p>
                    <div className="flex gap-5">
                        {['Privacy', 'Terms', 'Cookies'].map(l => (
                            <a key={l} href="/" className="text-[14px] transition-colors duration-150 text-white/50 hover:text-[#1B2C46]">
                                {l}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
