import React from "react";
import { FadeUp } from "./AnimateOnScroll";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FACULTY DATA — single source of truth.
   Add a new object here → card appears automatically.
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const FACULTY = [
    {
        name: 'Dr. Arjun Mehta',
        role: 'Mathematics',
        subject: 'IIT-JEE / Advanced',
        exp: '15 yrs',
        bio: 'Former IIT-Bombay faculty. Known for making calculus and algebra feel inevitable — 3 consecutive top-100 rankers.',
        tags: ['Calculus', 'Algebra', 'Probability'],
        image: '/faculty.png',
        accent: '#FF9E1B',
    },
    {
        name: 'Prof. Sunita Rao',
        role: 'Biology',
        subject: 'NEET / AIIMS',
        exp: '12 yrs',
        bio: 'Trained 10,000+ NEET aspirants. Visual teaching style turns complex physiology into vivid, exam-ready frameworks.',
        tags: ['Botany', 'Physiology', 'Genetics'],
        image: '/faculty.png',
        accent: '#34D399',
    },
    // ── Add more below ──────────────────────────────
    // {
    //     name: 'Mr. Rahul Verma',
    //     role: 'Physics',
    //     subject: 'IIT-JEE / NEET',
    //     exp: '10 yrs',
    //     bio: 'Description here.',
    //     tags: ['Mechanics', 'Optics'],
    //     image: '/faculty-rahul.png',
    //     accent: '#818CF8',
    // },
];

import { B } from '../../tokens/brand';

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Faculty Card — compact, all info always visible
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function FacultyCard({ f }) {
    return (
        <div
            style={{
                background: `linear-gradient(160deg, #0D1E35 0%, ${B.primary} 100%)`,
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                position: 'relative',
            }}
        >
            {/* Accent top bar */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: '2px',
                background: `linear-gradient(90deg, ${f.accent}, transparent)`,
                zIndex: 2,
            }} />

            {/* ── Top: photo + identity side by side ── */}
            <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
                padding: '24px 24px 18px',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
            }}>
                {/* Passport photo */}
                <div style={{
                    width: '140px',
                    height: '165px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    flexShrink: 0,
                    border: `2px solid ${f.accent}55`,
                    boxShadow: `0 0 24px ${f.accent}33`,
                }}>
                    <img
                        src={f.image}
                        alt={f.name}
                        loading="lazy"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'top center',
                        }}
                    />
                </div>

                {/* Name + role */}
                <div style={{ flex: 1, minWidth: 0, paddingTop: '4px' }}>
                    <p style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: f.accent,
                        marginBottom: '6px',
                    }}>
                        {f.role}
                    </p>
                    <h3 style={{
                        color: '#ffffff',
                        fontSize: '22px',
                        fontWeight: 800,
                        lineHeight: 1.15,
                        letterSpacing: '-0.01em',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}>
                        {f.name}
                    </h3>
                    <p style={{
                        fontSize: '13px',
                        color: 'rgba(255,255,255,0.38)',
                        marginTop: '6px',
                        fontWeight: 500,
                    }}>
                        {f.subject} · {f.exp}
                    </p>
                </div>
            </div>

            {/* ── Bio ── */}
            <div style={{ padding: '16px 24px 12px', flex: 1 }}>
                <p style={{
                    fontSize: '14px',
                    lineHeight: 1.7,
                    color: 'rgba(255,255,255,0.52)',
                }}>
                    {f.bio}
                </p>
            </div>

            {/* ── Tags ── */}
            <div style={{
                padding: '0 24px 20px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
            }}>
                {f.tags.map(tag => (
                    <span key={tag} style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        padding: '5px 14px',
                        borderRadius: '999px',
                        background: `${f.accent}14`,
                        color: f.accent,
                        border: `1px solid ${f.accent}30`,
                    }}>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Section — fits within 90vh (below navbar)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function FacultyReveal() {
    return (
        <>
            {/* ═══════════ DESKTOP (lg+) ═══════════ */}
            <section
                id="benefits"
                className="hidden lg:flex flex-col justify-center"
                style={{
                    minHeight: '90vh',
                    background: `radial-gradient(ellipse 100% 60% at 50% 0%, rgba(255,158,27,0.05) 0%, transparent 60%), ${B.dark}`,
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Grid texture */}
                <div style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none',
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.016) 1px, transparent 1px),' +
                        'linear-gradient(90deg, rgba(255,255,255,0.016) 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                }} />

                <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-12">
                    {/* ── Header row ── */}
                    <FadeUp>
                        <div className="flex items-end justify-between mb-10">
                            <div>
                                <div
                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-3 tracking-widest uppercase"
                                    style={{
                                        background: 'rgba(255,158,27,0.1)',
                                        color: B.goldYellow,
                                        border: '1px solid rgba(255,158,27,0.22)',
                                    }}
                                >
                                    ✦ Faculty
                                </div>
                                <h2
                                    className="font-display font-bold text-white leading-tight"
                                    style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', letterSpacing: '-0.02em' }}
                                >
                                    Learn from people who've{' '}
                                    <span style={{
                                        background: `linear-gradient(135deg, ${B.gold}, ${B.goldYellow})`,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}>
                                        been there.
                                    </span>
                                </h2>
                            </div>

                            {/* Live stat pills */}
                            <div className="flex items-center gap-3 flex-shrink-0">
                                <div style={{
                                    padding: '8px 18px',
                                    borderRadius: '999px',
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    textAlign: 'center',
                                }}>
                                    <p style={{ color: '#fff', fontWeight: 800, fontSize: '20px', lineHeight: 1 }}>
                                        {FACULTY.length}
                                    </p>
                                    <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '2px' }}>
                                        Educators
                                    </p>
                                </div>
                                <div style={{
                                    padding: '8px 18px',
                                    borderRadius: '999px',
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    textAlign: 'center',
                                }}>
                                    <p style={{ color: '#fff', fontWeight: 800, fontSize: '20px', lineHeight: 1 }}>
                                        {FACULTY.reduce((s, f) => s + parseInt(f.exp), 0)}+
                                    </p>
                                    <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '2px' }}>
                                        Yrs Exp.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeUp>

                    {/* ── Cards ── */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: `repeat(${Math.min(FACULTY.length, 3)}, 1fr)`,
                            gap: '16px',
                            alignItems: 'stretch',
                        }}
                    >
                        {FACULTY.map((f, i) => (
                            <FadeUp key={i} delay={i * 0.1}>
                                <FacultyCard f={f} />
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════ MOBILE (below lg) ═══════════ */}
            <section
                id="benefits-mobile"
                className="lg:hidden"
                style={{
                    background: `radial-gradient(ellipse 120% 50% at 50% 0%, rgba(255,158,27,0.05) 0%, transparent 55%), ${B.dark}`,
                    padding: '52px 16px 52px',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Grid texture */}
                <div style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none',
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.016) 1px, transparent 1px),' +
                        'linear-gradient(90deg, rgba(255,255,255,0.016) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }} />

                <div className="relative z-10">
                    {/* Header */}
                    <FadeUp>
                        <div className="mb-8">
                            <div
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-3 tracking-widest uppercase"
                                style={{
                                    background: 'rgba(255,158,27,0.1)',
                                    color: B.goldYellow,
                                    border: '1px solid rgba(255,158,27,0.22)',
                                }}
                            >
                                ✦ Faculty
                            </div>
                            <h2
                                className="font-display font-bold text-white leading-tight"
                                style={{ fontSize: '26px', letterSpacing: '-0.02em' }}
                            >
                                Learn from people who've{' '}
                                <span style={{
                                    background: `linear-gradient(135deg, ${B.gold}, ${B.goldYellow})`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}>
                                    been there.
                                </span>
                            </h2>
                        </div>
                    </FadeUp>

                    {/* Mobile cards — horizontal strip layout */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {FACULTY.map((f, i) => (
                            <FadeUp key={i} delay={i * 0.1}>
                                {/* Horizontal card — photo left, all info right */}
                                <div style={{
                                    background: `linear-gradient(135deg, #0D1E35 0%, ${B.primary} 100%)`,
                                    border: '1px solid rgba(255,255,255,0.07)',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    position: 'relative',
                                }}>
                                    {/* Accent bar */}
                                    <div style={{
                                        position: 'absolute', top: 0, left: 0, right: 0,
                                        height: '2px',
                                        background: `linear-gradient(90deg, ${f.accent}, transparent)`,
                                    }} />

                                    {/* Top row: photo + name */}
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '14px',
                                        padding: '16px 16px 12px',
                                    }}>
                                        {/* Photo */}
                                        <div style={{
                                            width: '58px',
                                            height: '58px',
                                            borderRadius: '50%',
                                            overflow: 'hidden',
                                            flexShrink: 0,
                                            border: `2px solid ${f.accent}55`,
                                            boxShadow: `0 0 12px ${f.accent}33`,
                                        }}>
                                            <img
                                                src={f.image}
                                                alt={f.name}
                                                loading="lazy"
                                                style={{
                                                    width: '100%', height: '100%',
                                                    objectFit: 'cover',
                                                    objectPosition: 'top center',
                                                }}
                                            />
                                        </div>

                                        {/* Name + meta */}
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <p style={{
                                                fontSize: '9px',
                                                fontWeight: 700,
                                                letterSpacing: '0.14em',
                                                textTransform: 'uppercase',
                                                color: f.accent,
                                                marginBottom: '2px',
                                            }}>
                                                {f.role}
                                            </p>
                                            <h3 style={{
                                                color: '#fff',
                                                fontSize: '16px',
                                                fontWeight: 800,
                                                lineHeight: 1.15,
                                                letterSpacing: '-0.01em',
                                            }}>
                                                {f.name}
                                            </h3>
                                            <p style={{
                                                fontSize: '11px',
                                                color: 'rgba(255,255,255,0.35)',
                                                marginTop: '2px',
                                            }}>
                                                {f.subject} · {f.exp}
                                            </p>
                                        </div>

                                        {/* Exp badge */}
                                        <div style={{
                                            flexShrink: 0,
                                            background: `${f.accent}18`,
                                            border: `1px solid ${f.accent}35`,
                                            borderRadius: '8px',
                                            padding: '6px 10px',
                                            textAlign: 'center',
                                        }}>
                                            <p style={{ color: f.accent, fontWeight: 800, fontSize: '15px', lineHeight: 1 }}>
                                                {f.exp.replace(' yrs', '')}
                                            </p>
                                            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '9px', fontWeight: 600, letterSpacing: '0.06em', marginTop: '2px' }}>
                                                YRS
                                            </p>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div style={{
                                        height: '1px',
                                        margin: '0 16px',
                                        background: `linear-gradient(90deg, ${f.accent}30, transparent)`,
                                    }} />

                                    {/* Bio */}
                                    <p style={{
                                        padding: '10px 16px',
                                        fontSize: '12px',
                                        lineHeight: 1.6,
                                        color: 'rgba(255,255,255,0.5)',
                                    }}>
                                        {f.bio}
                                    </p>

                                    {/* Tags */}
                                    <div style={{
                                        padding: '0 16px 14px',
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '6px',
                                    }}>
                                        {f.tags.map(tag => (
                                            <span key={tag} style={{
                                                fontSize: '10px',
                                                fontWeight: 700,
                                                letterSpacing: '0.05em',
                                                padding: '3px 10px',
                                                borderRadius: '999px',
                                                background: `${f.accent}14`,
                                                color: f.accent,
                                                border: `1px solid ${f.accent}30`,
                                            }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>

                    {/* Stats row */}
                    <FadeUp delay={0.2}>
                        <div style={{
                            marginTop: '16px',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            borderRadius: '14px',
                            overflow: 'hidden',
                            border: '1px solid rgba(255,255,255,0.07)',
                            background: 'rgba(10,22,40,0.6)',
                        }}>
                            {[
                                { val: `${FACULTY.length}`, label: 'Educators' },
                                { val: `${FACULTY.reduce((s, f) => s + parseInt(f.exp), 0)}+`, label: 'Yrs Exp.' },
                                { val: '10k+', label: 'Trained' },
                            ].map((stat, i) => (
                                <div key={i} style={{
                                    padding: '14px 8px',
                                    textAlign: 'center',
                                    borderRight: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                                }}>
                                    <p style={{
                                        fontWeight: 800, fontSize: '22px', lineHeight: 1,
                                        color: '#fff', marginBottom: '4px',
                                    }}>
                                        {stat.val}
                                    </p>
                                    <p style={{
                                        fontSize: '9px', fontWeight: 600,
                                        letterSpacing: '0.08em', textTransform: 'uppercase',
                                        color: 'rgba(255,255,255,0.3)',
                                    }}>
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </FadeUp>
                </div>
            </section>
        </>
    );
}