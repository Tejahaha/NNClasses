import { useScrollReveal } from './useScrollReveal';

const B = {
    primary: '#0A1628',   // Deep Navy
    secondary: '#00C9A7', // Electric Teal
    light: '#1B2C46',     // Lighter Navy
    dark: '#050D18',      // Darker Navy
    gold: '#FFB347',      // Warm Amber
    goldLight: '#FFC875', // Lighter Amber
    goldYellow: '#FF9E1B', // Richer Amber
};

const PHASES = [
    { q: 'Q1 2025', phase: 'Foundation', status: 'done', items: ['Core AI engine', 'VS Code extension', 'Team collaboration', 'Basic scaffolding'] },
    { q: 'Q2 2025', phase: 'Intelligence', status: 'done', items: ['Codebase understanding', 'Custom fine-tuning', 'Multi-language support', 'Advanced codegen'] },
    { q: 'Q3 2025', phase: 'Scale', status: 'active', items: ['Enterprise SSO', 'One-click deploy', 'API ecosystem', 'Analytics dashboard'] },
    { q: 'Q4 2025', phase: 'Ecosystem', status: 'upcoming', items: ['Partner marketplace', 'White-label SDK', 'Mobile offline', 'Agent automations'] },
    { q: 'Q1 2026', phase: 'Intelligence 2.0', status: 'upcoming', items: ['Multi-agent AI', 'Design-to-code', 'Predictive review', 'Self-healing AI'] },
];

export default function Roadmap() {
    const ref = useScrollReveal();

    const badge = s => ({
        done: { bg: 'rgba(34,197,94,0.12)', color: '#16a34a', text: '✓ Complete' },
        active: { bg: `rgba(31,94,120,0.12)`, color: B.primary, text: '⚡ In Progress' },
        upcoming: { bg: 'rgba(107,114,128,0.1)', color: '#6B7280', text: '◷ Upcoming' },
    }[s]);

    /* Dark Navy tinted cards */
    const card = s => ({
        done: { from: '#1B2C46', to: '#0A1628', border: 'rgba(0,201,167,0.35)', dot: '#00C9A7' },
        active: { from: '#0A1628', to: '#050D18', border: `rgba(0,201,167,0.6)`, dot: '#00C9A7' },
        upcoming: { from: '#050D18', to: '#0A1628', border: 'rgba(255,255,255,0.08)', dot: '#6B7280' },
    }[s]);

    return (
        <section ref={ref} id="roadmap" className="py-24 max-md:py-16"
            style={{ background: B.dark }}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="section-animate text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
                        style={{ background: 'rgba(95,168,196,0.12)', color: B.light, border: `1px solid rgba(95,168,196,0.28)` }}>
                        ◎ Roadmap
                    </div>
                    <h2 className="font-semibold text-white leading-tight mb-4" style={{ fontSize: 'clamp(22px, 5vw, 36px)' }}>
                        What's{' '}
                        <span style={{ background: `linear-gradient(135deg, ${B.gold}, ${B.goldYellow})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            coming up
                        </span>
                    </h2>
                    <p className="max-w-full sm:max-w-[480px] mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)', fontSize: 'clamp(14px, 3.5vw, 16px)' }}>
                        We ship fast and publicly. Here's exactly what we're building and when.
                    </p>
                </div>

                <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5">
                    {PHASES.map((m, i) => {
                        const b = badge(m.status);
                        const c = card(m.status);
                        return (
                            <div key={i}
                                className={`section-animate d${(i % 3) + 1} rounded-xl p-6 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,201,167,0.14)] transition-all duration-300`}
                                style={{
                                    background: `linear-gradient(135deg, ${c.from}, ${c.to})`,
                                    border: `1px solid ${c.border}`,
                                    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                                }}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B7280]">{m.q}</span>
                                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                                        style={{ background: b.bg, color: b.color }}>{b.text}</span>
                                </div>
                                <h3 className="text-[18px] font-bold mb-4" style={{ color: '#1A1A1A' }}>{m.phase}</h3>
                                <ul className="space-y-2.5">
                                    {m.items.map((item, j) => (
                                        <li key={j} className="flex items-center gap-2.5 text-[13px] text-[#4B5563]">
                                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: c.dot }} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
