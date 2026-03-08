import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

import { B } from '../../tokens/brand';

const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Faculties', href: '#benefits' },
    { label: 'FAQs', href: '#faqs' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeSection, setActiveSection] = useState('');
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 24);
        window.addEventListener('scroll', fn, { passive: true });
        return () => window.removeEventListener('scroll', fn);
    }, []);

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
        };
        window.addEventListener('scroll', updateProgress, { passive: true });
        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3, rootMargin: '-64px 0px -40% 0px' }
        );

        ['about', 'features', 'benefits', 'faqs'].forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const go = (e, href) => {
        e.preventDefault();
        setMobileOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>


            <motion.header
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    zIndex: 50,
                    height: '10vh',
                    minHeight: '60px',
                    maxHeight: '80px',
                    isolation: 'isolate',
                    backgroundColor: scrolled ? 'rgba(6, 14, 26, 0.75)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(20px) saturate(160%)' : 'none',
                    WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(160%)' : 'none',
                    borderBottom: scrolled
                        ? '1px solid rgba(212, 166, 42, 0.14)'
                        : '1px solid transparent',
                    boxShadow: scrolled
                        ? '0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(212,166,42,0.07)'
                        : 'none',
                    transition: [
                        'background-color 350ms ease',
                        'backdrop-filter 350ms ease',
                        '-webkit-backdrop-filter 350ms ease',
                        'box-shadow 350ms ease',
                        'border-color 350ms ease',
                    ].join(', '),
                }}
            >
                <div style={{
                    height: '100%',
                    maxWidth: '80rem',
                    margin: '0 auto',
                    padding: '0 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>

                    {/* ── Logo (UNTOUCHED) ── */}
                    <a
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        style={{
                            height: "64px",
                            width: "240px",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <img
                            src="/logos/logonavbarbig.png"
                            alt="N&N Classes"
                            style={{
                                height: "64px",
                                transform: "scale(3)",
                                transformOrigin: "center"
                            }}
                        />
                    </a>

                    {/* ── Desktop Nav ── */}
                    <nav className="hidden md:flex" style={{ alignItems: 'center' }}>
                        {NAV_LINKS.map((l, i) => {
                            const isActive = activeSection === l.href.replace('#', '');
                            return (
                                <span key={l.label} style={{ display: 'flex', alignItems: 'center' }}>
                                    {i !== 0 && <span className="nn-sep" />}
                                    <a
                                        href={l.href}
                                        onClick={e => go(e, l.href)}
                                        className="nn-nav-link"
                                        style={isActive ? {
                                            color: 'rgba(244, 197, 66, 1)',
                                            textShadow: '0 0 12px rgba(244,197,66,0.5)'
                                        } : {}}
                                    >
                                        {l.label}
                                    </a>
                                </span>
                            );
                        })}
                    </nav>

                    {/* ── CTA + Hamburger ── */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <button
                            onClick={() => navigate('/portal')}
                            className="hidden md:inline-flex"
                            style={{
                                fontFamily: "'Rajdhani', sans-serif",
                                fontSize: '12px',
                                fontWeight: 700,
                                letterSpacing: '0.13em',
                                textTransform: 'uppercase',
                                color: '#1a1100',
                                background: `linear-gradient(135deg, ${B.gold} 0%, ${B.goldYellow} 55%, ${B.goldLight} 100%)`,
                                border: 'none',
                                borderRadius: '5px',
                                padding: '9px 22px',
                                cursor: 'pointer',
                                boxShadow: `0 0 0 1px rgba(212,166,42,0.5), 0 4px 20px rgba(212,166,42,0.28)`,
                                transition: 'transform 200ms ease, box-shadow 200ms ease, filter 200ms ease',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-1px)';
                                e.currentTarget.style.filter = 'brightness(1.1)';
                                e.currentTarget.style.boxShadow = `0 0 0 1px rgba(212,166,42,0.7), 0 8px 30px rgba(212,166,42,0.45)`;
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = '';
                                e.currentTarget.style.filter = '';
                                e.currentTarget.style.boxShadow = `0 0 0 1px rgba(212,166,42,0.5), 0 4px 20px rgba(212,166,42,0.28)`;
                            }}
                        >
                            Start Learning
                        </button>

                        {/* Hamburger — staggered lines for character */}
                        <button
                            className="md:hidden"
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: 'rgba(240, 215, 140, 0.8)',
                                cursor: 'pointer',
                                padding: '10px',
                                minHeight: '44px',
                                minWidth: '44px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            onClick={() => setMobileOpen(o => !o)}
                        >
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                {mobileOpen
                                    ? <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                    : <>
                                        <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                        <line x1="6" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                        <line x1="10" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                    </>
                                }
                            </svg>
                        </button>
                    </div>
                </div>

                {/* ── Mobile Drawer ── */}
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                        className="md:hidden"
                        style={{
                            padding: '4px 24px 22px',
                            backgroundColor: 'rgba(5, 12, 22, 0.97)',
                            backdropFilter: 'blur(28px)',
                            WebkitBackdropFilter: 'blur(28px)',
                            borderTop: `1px solid rgba(212,166,42,0.18)`,
                            borderBottom: `1px solid rgba(212,166,42,0.06)`,
                            boxShadow: '0 24px 60px rgba(0,0,0,0.7)',
                        }}
                    >
                        {NAV_LINKS.map(l => {
                            const isActive = activeSection === l.href.replace('#', '');
                            return (
                                <a
                                    key={l.label}
                                    href={l.href}
                                    onClick={e => go(e, l.href)}
                                    className="nn-mobile-link"
                                    style={isActive ? {
                                        color: 'rgba(244, 197, 66, 1)',
                                        textShadow: '0 0 12px rgba(244,197,66,0.5)'
                                    } : {}}
                                >
                                    {l.label}
                                </a>
                            );
                        })}
                        <button
                            onClick={() => { setMobileOpen(false); navigate('/portal'); }}
                            style={{
                                marginTop: '18px',
                                width: '100%',
                                fontFamily: "'Rajdhani', sans-serif",
                                fontSize: '13px',
                                fontWeight: 700,
                                letterSpacing: '0.13em',
                                textTransform: 'uppercase',
                                color: '#1a1100',
                                background: `linear-gradient(135deg, ${B.gold}, ${B.goldYellow})`,
                                border: 'none',
                                borderRadius: '5px',
                                padding: '14px',
                                cursor: 'pointer',
                                boxShadow: `0 4px 24px rgba(212,166,42,0.38)`,
                            }}
                        >
                            Start Learning
                        </button>
                    </motion.div>
                )}

                {/* Scroll progress bar */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    height: '3px',
                    width: `${scrollProgress}%`,
                    background: `linear-gradient(90deg, ${B.gold}, ${B.goldYellow}, ${B.goldLight})`,
                    boxShadow: `0 0 10px ${B.gold}AA, 0 0 3px ${B.goldLight}`,
                    transition: 'width 0.1s linear',
                    zIndex: 10,
                    borderRadius: '0 4px 4px 0',
                    opacity: scrolled ? 1 : 0,
                }} />
            </motion.header>
        </>
    );
}