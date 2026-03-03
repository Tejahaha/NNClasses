/**
 * ComingSoon.jsx
 * Beautifully styled coming soon placeholder for future modules.
 * Glass/neumorphic design matching the new portal theme.
 */

import {
    BookOpen, FlaskConical, Trophy, StickyNote,
    TrendingUp, Sparkles,
} from 'lucide-react';

const MODULE_META = {
    subjects: {
        label: 'Subjects',
        desc: 'Browse all your subjects, chapters, and study materials in one place.',
        icon: BookOpen,
        color: '#8B5CF6',
    },
    tests: {
        label: 'Tests',
        desc: 'Practice tests and mock exams to measure your preparation.',
        icon: FlaskConical,
        color: '#06B6D4',
    },
    results: {
        label: 'Results',
        desc: 'Track your test scores, grades, and performance analytics.',
        icon: Trophy,
        color: '#F59E0B',
    },
    notes: {
        label: 'Notes',
        desc: 'Access organized study notes and reference materials.',
        icon: StickyNote,
        color: '#3B82F6',
    },
    progress: {
        label: 'Progress',
        desc: 'Visualize your learning journey with detailed progress charts.',
        icon: TrendingUp,
        color: '#10B981',
    },
};

export default function ComingSoon({ module }) {
    const meta = MODULE_META[module] || {
        label: module,
        desc: 'This section is coming soon.',
        icon: Sparkles,
        color: '#8B5CF6',
    };

    const Icon = meta.icon;

    return (
        <div
            className="flex-1 flex flex-col items-center justify-center h-full px-6"
            style={{
                background: 'var(--p-content-bg)',
            }}
        >
            <div
                className="flex flex-col items-center gap-6 max-w-sm text-center"
                style={{ animation: 'portalFadeIn 0.5s ease both' }}
            >
                {/* Icon container with glass effect */}
                <div
                    className="w-24 h-24 rounded-3xl flex items-center justify-center relative"
                    style={{
                        background: 'var(--p-card)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid var(--p-border-med)',
                        boxShadow: `0 8px 32px ${meta.color}20`,
                    }}
                >
                    <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center"
                        style={{
                            background: `linear-gradient(135deg, ${meta.color}, ${meta.color}AA)`,
                            boxShadow: `0 4px 16px ${meta.color}40`,
                        }}
                    >
                        <Icon size={28} color="#FFFFFF" />
                    </div>

                    {/* Decorative sparkle */}
                    <div
                        className="absolute -top-2 -right-2 w-6 h-6 rounded-lg flex items-center justify-center"
                        style={{
                            background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
                            boxShadow: '0 2px 8px rgba(245, 158, 11, 0.3)',
                        }}
                    >
                        <Sparkles size={12} color="#FFFFFF" />
                    </div>
                </div>

                <div>
                    <h3
                        className="font-bold text-xl mb-2"
                        style={{
                            background: `linear-gradient(135deg, var(--p-gradient-text-from), var(--p-gradient-text-to))`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        {meta.label}
                    </h3>
                    <p
                        className="text-sm leading-relaxed mb-1"
                        style={{ color: 'var(--p-text-3)' }}
                    >
                        {meta.desc}
                    </p>
                </div>

                {/* Status badge */}
                <div
                    className="flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full"
                    style={{
                        background: 'var(--p-active-item)',
                        color: 'var(--p-accent)',
                        border: '1px solid rgba(139, 92, 246, 0.15)',
                    }}
                >
                    <span
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{
                            background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)',
                        }}
                    />
                    Coming Soon — Under Development
                </div>
            </div>
        </div>
    );
}
