/**
 * Dashboard.jsx
 * Welcome / overview page for the student portal.
 * Shows greeting, quick stats cards, recent activity, and shortcuts.
 * Design: Glass/neumorphic cards with violet/cyan gradient accents.
 */

import {
    BookOpen, FileText, ClipboardCheck, Trophy,
    TrendingUp, Clock, ArrowRight, Zap,
    Target, Calendar,
} from 'lucide-react';

const QUICK_STATS = [
    {
        label: 'Subjects',
        value: '6',
        sublabel: 'Active courses',
        icon: BookOpen,
        gradient: 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
        shadowColor: 'rgba(139, 92, 246, 0.25)',
    },
    {
        label: 'Assignments',
        value: '12',
        sublabel: '3 pending',
        icon: ClipboardCheck,
        gradient: 'linear-gradient(135deg, #06B6D4, #67E8F9)',
        shadowColor: 'rgba(6, 182, 212, 0.25)',
    },
    {
        label: 'Papers',
        value: '24',
        sublabel: 'Available',
        icon: FileText,
        gradient: 'linear-gradient(135deg, #3B82F6, #93C5FD)',
        shadowColor: 'rgba(59, 130, 246, 0.25)',
    },
    {
        label: 'Score',
        value: '87%',
        sublabel: 'Average',
        icon: Trophy,
        gradient: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
        shadowColor: 'rgba(245, 158, 11, 0.25)',
    },
];

const RECENT_ACTIVITY = [
    { text: 'Completed Mathematics Chapter 5 quiz', time: '2h ago', icon: Target, color: '#8B5CF6' },
    { text: 'Downloaded Physics 2025 Paper', time: '5h ago', icon: FileText, color: '#06B6D4' },
    { text: 'Started Chemistry Assignment 3', time: '1d ago', icon: ClipboardCheck, color: '#3B82F6' },
    { text: 'Scored 92% in Biology Test', time: '2d ago', icon: Trophy, color: '#F59E0B' },
];

const QUICK_ACCESS = [
    { label: 'Question Papers', desc: 'Browse previous year papers', module: 'question-papers', icon: FileText, color: '#8B5CF6' },
    { label: 'Assignments', desc: 'View and submit assignments', module: 'assignments', icon: ClipboardCheck, color: '#06B6D4' },
    { label: 'Notes', desc: 'Access study materials', module: 'notes', icon: BookOpen, color: '#3B82F6' },
    { label: 'Tests', desc: 'Practice and mock tests', module: 'tests', icon: Zap, color: '#F59E0B' },
];

export default function Dashboard({ onNavigate }) {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

    return (
        <div
            className="flex-1 overflow-auto h-full"
            style={{
                background: 'var(--p-content-bg)',
            }}
        >
            <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 md:py-8">
                {/* Welcome header */}
                <div className="mb-6 md:mb-8" style={{ animation: 'portalFadeIn 0.5s ease both' }}>
                    <div className="flex items-center gap-2 mb-1">
                        <Calendar size={14} style={{ color: 'var(--p-text-4)' }} />
                        <p className="text-xs font-medium" style={{ color: 'var(--p-text-4)' }}>
                            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                    </div>
                    <h1
                        className="text-2xl md:text-3xl font-bold mb-1"
                        style={{
                            background: `linear-gradient(135deg, var(--p-gradient-text-from) 0%, var(--p-gradient-text-to) 100%)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        {greeting}, Student! 👋
                    </h1>
                    <p className="text-sm" style={{ color: 'var(--p-text-3)' }}>
                        Here's what's happening with your studies today.
                    </p>
                </div>

                {/* Stats grid */}
                <div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8"
                    style={{ animation: 'portalFadeIn 0.5s ease 0.1s both' }}
                >
                    {QUICK_STATS.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={stat.label}
                                className="rounded-2xl md:rounded-3xl p-4 md:p-5 transition-all duration-300 cursor-default group active:scale-[0.97]"
                                style={{
                                    background: 'var(--p-card)',
                                    backdropFilter: 'blur(12px)',
                                    border: '1px solid var(--p-border)',
                                    boxShadow: 'var(--p-shadow-card)',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = `0 8px 32px ${stat.shadowColor}`;
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'var(--p-shadow-card)';
                                }}
                            >
                                <div
                                    className="w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center mb-2.5 md:mb-3"
                                    style={{
                                        background: stat.gradient,
                                        boxShadow: `0 4px 12px ${stat.shadowColor}`,
                                    }}
                                >
                                    <Icon size={18} color="#FFFFFF" />
                                </div>
                                <p
                                    className="text-xl md:text-2xl font-bold mb-0.5"
                                    style={{ color: 'var(--p-text-1)' }}
                                >
                                    {stat.value}
                                </p>
                                <p className="text-sm font-medium" style={{ color: 'var(--p-text-2)' }}>
                                    {stat.label}
                                </p>
                                <p className="text-xs mt-0.5" style={{ color: 'var(--p-text-4)' }}>
                                    {stat.sublabel}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6">
                    {/* Quick Access — takes 3 cols */}
                    <div
                        className="lg:col-span-3"
                        style={{ animation: 'portalFadeIn 0.5s ease 0.2s both' }}
                    >
                        <h2 className="text-lg font-bold mb-4" style={{ color: 'var(--p-text-1)' }}>
                            Quick Access
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {QUICK_ACCESS.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <button
                                        key={item.module}
                                        onClick={() => onNavigate(item.module)}
                                        className="text-left rounded-2xl p-4 transition-all duration-300 group flex items-start gap-4 active:scale-[0.97]"
                                        style={{
                                            background: 'var(--p-card)',
                                            backdropFilter: 'blur(12px)',
                                            border: '1px solid var(--p-border)',
                                            boxShadow: 'var(--p-shadow-sm)',
                                        }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                            e.currentTarget.style.boxShadow = 'var(--p-shadow-card-hover)';
                                            e.currentTarget.style.borderColor = 'var(--p-border-strong)';
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = 'var(--p-shadow-sm)';
                                            e.currentTarget.style.borderColor = 'var(--p-border)';
                                        }}
                                    >
                                        <div
                                            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                            style={{
                                                background: `${item.color}12`,
                                                border: `1px solid ${item.color}20`,
                                            }}
                                        >
                                            <Icon size={18} style={{ color: item.color }} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p
                                                className="text-sm font-semibold mb-0.5 flex items-center gap-1"
                                                style={{ color: 'var(--p-text-1)' }}
                                            >
                                                {item.label}
                                                <ArrowRight
                                                    size={14}
                                                    className="transition-transform duration-200"
                                                    style={{
                                                        color: 'var(--p-text-4)',
                                                        opacity: 0,
                                                        transform: 'translateX(-4px)',
                                                    }}
                                                />
                                            </p>
                                            <p className="text-xs" style={{ color: 'var(--p-text-4)' }}>
                                                {item.desc}
                                            </p>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Recent Activity — takes 2 cols */}
                    <div
                        className="lg:col-span-2"
                        style={{ animation: 'portalFadeIn 0.5s ease 0.3s both' }}
                    >
                        <h2 className="text-lg font-bold mb-4" style={{ color: 'var(--p-text-1)' }}>
                            Recent Activity
                        </h2>
                        <div
                            className="rounded-2xl overflow-hidden"
                            style={{
                                background: 'var(--p-card)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid var(--p-border)',
                                boxShadow: 'var(--p-shadow-card)',
                            }}
                        >
                            {RECENT_ACTIVITY.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-3 px-4 py-3.5 transition-colors duration-150"
                                        style={{
                                            borderBottom: idx < RECENT_ACTIVITY.length - 1
                                                ? '1px solid var(--p-border)'
                                                : 'none',
                                        }}
                                        onMouseEnter={e => e.currentTarget.style.background = 'var(--p-hover-violet)'}
                                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                                    >
                                        <div
                                            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                                            style={{
                                                background: `${item.color}12`,
                                            }}
                                        >
                                            <Icon size={14} style={{ color: item.color }} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p
                                                className="text-sm leading-snug"
                                                style={{ color: 'var(--p-text-body)' }}
                                            >
                                                {item.text}
                                            </p>
                                            <p className="flex items-center gap-1 mt-1 text-xs" style={{ color: 'var(--p-text-4)' }}>
                                                <Clock size={10} />
                                                {item.time}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Study streak card */}
                <div
                    className="mt-6 md:mt-8 rounded-2xl md:rounded-3xl p-5 md:p-8 relative overflow-hidden"
                    style={{
                        background: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 40%, #4C1D95 100%)',
                        boxShadow: '0 12px 40px rgba(139, 92, 246, 0.3)',
                        animation: 'portalFadeIn 0.5s ease 0.4s both',
                    }}
                >
                    {/* Decorative circles */}
                    <div
                        className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-20"
                        style={{ background: 'radial-gradient(circle, #06B6D4, transparent)' }}
                    />
                    <div
                        className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-15"
                        style={{ background: 'radial-gradient(circle, #F59E0B, transparent)' }}
                    />

                    <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <TrendingUp size={20} color="rgba(255,255,255,0.8)" />
                                <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>
                                    Keep the momentum going!
                                </p>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                                🔥 7 Day Study Streak
                            </h3>
                            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                                You're consistently studying every day. Great discipline!
                            </p>
                        </div>
                        <div
                            className="flex gap-1.5 shrink-0"
                        >
                            {[...Array(7)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center text-xs font-bold"
                                    style={{
                                        background: i < 7
                                            ? 'rgba(255, 255, 255, 0.2)'
                                            : 'rgba(255, 255, 255, 0.08)',
                                        color: i < 7
                                            ? '#FFFFFF'
                                            : 'rgba(255, 255, 255, 0.3)',
                                        border: '1px solid rgba(255, 255, 255, 0.15)',
                                    }}
                                >
                                    {i < 7 ? '🔥' : (i + 1)}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
