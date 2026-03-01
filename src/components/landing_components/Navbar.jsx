import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

/* ── Brand Tokens ── */
const B = {
    primary: '#1F5E78',
    secondary: '#2E7C97',
    light: '#5FA8C4',
    dark: '#123B4A',
    gold: '#D4A62A',
    goldLight: '#E8D38A',
    goldYellow: '#F4C542',
};

const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Faculties', href: '#benefits' },
    { label: 'FAQs', href: '#faqs' },
];

export default function Navbar() {
    const [shadow, setShadow] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fn = () => setShadow(window.scrollY > 8);
        window.addEventListener('scroll', fn);
        return () => window.removeEventListener('scroll', fn);
    }, []);

    const go = (e, href) => {
        e.preventDefault();
        setMobileOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="sticky top-0 w-full z-50 transition-colors duration-300"
            style={{
                backgroundColor: shadow ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
                backdropFilter: shadow ? 'blur(16px)' : 'none',
                height: '10vh',
                minHeight: '60px',
                maxHeight: '80px',
                borderBottom: `1px solid #E5E7EB`,
                boxShadow: shadow ? `0 4px 24px rgba(31,94,120,0.1)` : 'none',
                transition: 'box-shadow 0.25s ease',
            }}
        >
            <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="/"
                    onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="flex items-center gap-3 flex-shrink-0"
                >
                    <img
                        src="/faculty.png"
                        alt="N&N"
                        className="h-8 w-auto"
                        loading="lazy"
                        onError={e => { e.target.style.display = 'none'; }}
                    />
                    <span className="text-xl font-bold tracking-tight" style={{ color: B.primary }}>
                        N&N
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {NAV_LINKS.map(l => (
                        <a
                            key={l.label}
                            href={l.href}
                            onClick={e => go(e, l.href)}
                            className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150"
                            style={{ color: '#6B7280' }}
                            onMouseEnter={e => { e.currentTarget.style.color = B.primary; e.currentTarget.style.background = '#F0F7FA'; }}
                            onMouseLeave={e => { e.currentTarget.style.color = '#6B7280'; e.currentTarget.style.background = ''; }}
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                {/* CTA + Hamburger */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => navigate('/student-section')}
                        className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-white rounded-[10px] px-5 py-2.5 transition-all duration-200"
                        style={{ background: `linear-gradient(135deg, ${B.gold}, ${B.goldYellow})`, color: '#1A1A1A' }}
                        onMouseEnter={e => {
                            e.currentTarget.style.filter = 'brightness(1.08)';
                            e.currentTarget.style.transform = 'translateY(-1px)';
                            e.currentTarget.style.boxShadow = `0 8px 24px rgba(212,166,42,0.45)`;
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.filter = '';
                            e.currentTarget.style.transform = '';
                            e.currentTarget.style.boxShadow = '';
                        }}
                    >
                        Start Learning
                    </button>
                    <button
                        className="md:hidden p-3 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg transition-colors"
                        style={{ color: B.primary }}
                        onClick={() => setMobileOpen(o => !o)}
                    >
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                            {mobileOpen
                                ? <><path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></>
                                : <>
                                    <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </>
                            }
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile drawer */}
            {mobileOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-6 pt-3 pb-5 flex flex-col gap-1 shadow-lg">
                    {NAV_LINKS.map(l => (
                        <a key={l.label} href={l.href} onClick={e => go(e, l.href)}
                            className="py-3 px-3 font-medium rounded-lg border-b border-gray-100 last:border-0 transition-colors"
                            style={{ color: '#6B7280' }}
                            onMouseEnter={e => { e.currentTarget.style.color = B.primary; e.currentTarget.style.background = '#F0F7FA'; }}
                            onMouseLeave={e => { e.currentTarget.style.color = '#6B7280'; e.currentTarget.style.background = ''; }}>
                            {l.label}
                        </a>
                    ))}
                    <button onClick={() => { setMobileOpen(false); navigate('/student-section'); }}
                        className="mt-3 py-3 text-center w-full block font-semibold rounded-[10px] text-[#1A1A1A]"
                        style={{ background: `linear-gradient(135deg, ${B.gold}, ${B.goldYellow})` }}>
                        Start Learning
                    </button>
                </div>
            )}
        </motion.header>
    );
}
