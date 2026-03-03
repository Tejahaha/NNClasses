/**
 * PortalSidebar.jsx
 * Collapsible left sidebar — icons only when collapsed (72px), icons + labels when expanded (260px).
 * Sections: Dashboard, Subjects, Assignments, Question Papers, Tests, Results, Notes, Progress.
 * Glass/neumorphic styling with violet/cyan gradient accents.
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    LayoutDashboard, BookOpen, ClipboardCheck, FileText,
    FlaskConical, Trophy, StickyNote, TrendingUp,
    ChevronLeft, Home, GraduationCap,
} from 'lucide-react';

const NAV_ITEMS = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'subjects', label: 'Subjects', icon: BookOpen },
    { id: 'assignments', label: 'Assignments', icon: ClipboardCheck },
    { id: 'question-papers', label: 'Question Papers', icon: FileText },
    { id: 'tests', label: 'Tests', icon: FlaskConical },
    { id: 'results', label: 'Results', icon: Trophy },
    { id: 'notes', label: 'Notes', icon: StickyNote },
    { id: 'progress', label: 'Progress', icon: TrendingUp },
];

export default function PortalSidebar({
    collapsed,
    activeModule,
    onModuleSelect,
    mobileOpen,
    onMobileClose,
}) {
    const navigate = useNavigate();
    const [hoveredItem, setHoveredItem] = useState(null);

    const sidebarWidth = collapsed ? 72 : 260;

    const renderNavItem = (item) => {
        const isActive = activeModule === item.id;
        const isHovered = hoveredItem === item.id;
        const Icon = item.icon;

        return (
            <li key={item.id}>
                <button
                    onClick={() => onModuleSelect(item.id)}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="w-full flex items-center gap-3 rounded-2xl transition-all duration-250 relative group"
                    style={{
                        padding: collapsed ? '12px' : '11px 14px',
                        justifyContent: collapsed ? 'center' : 'flex-start',
                        background: isActive
                            ? 'var(--p-active-bg)'
                            : isHovered
                                ? 'var(--p-hover-violet)'
                                : 'transparent',
                        color: isActive ? 'var(--p-accent)' : isHovered ? 'var(--p-text-2)' : 'var(--p-text-3)',
                        fontWeight: isActive ? 600 : 400,
                    }}
                    title={collapsed ? item.label : undefined}
                >
                    {/* Active indicator */}
                    <span
                        className="absolute left-0 rounded-r-full transition-all duration-300"
                        style={{
                            width: isActive ? 3 : 0,
                            top: 8,
                            bottom: 8,
                            background: 'linear-gradient(180deg, #8B5CF6, #06B6D4)',
                            boxShadow: isActive ? '0 0 8px rgba(139, 92, 246, 0.4)' : 'none',
                        }}
                    />

                    <span
                        className="flex items-center justify-center transition-all duration-200"
                        style={{
                            width: 36,
                            height: 36,
                            borderRadius: 12,
                            background: isActive
                                ? 'linear-gradient(135deg, #8B5CF6, #06B6D4)'
                                : isHovered
                                    ? 'rgba(139, 92, 246, 0.08)'
                                    : 'transparent',
                            flexShrink: 0,
                            boxShadow: isActive ? '0 4px 12px rgba(139, 92, 246, 0.25)' : 'none',
                        }}
                    >
                        <Icon
                            size={18}
                            style={{
                                color: isActive ? '#FFFFFF' : isHovered ? '#8B5CF6' : 'var(--p-text-4)',
                                transition: 'color 0.2s ease',
                            }}
                        />
                    </span>

                    {!collapsed && (
                        <span
                            className="text-sm whitespace-nowrap overflow-hidden"
                            style={{
                                opacity: 1,
                                transition: 'opacity 0.2s ease',
                            }}
                        >
                            {item.label}
                        </span>
                    )}

                    {/* Tooltip for collapsed state */}
                    {collapsed && isHovered && (
                        <div
                            className="absolute left-full ml-3 px-3 py-1.5 rounded-xl text-sm font-medium whitespace-nowrap z-[100] pointer-events-none"
                            style={{
                                background: 'rgba(30, 27, 75, 0.92)',
                                color: '#FFFFFF',
                                backdropFilter: 'blur(8px)',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                            }}
                        >
                            {item.label}
                            <span
                                className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0"
                                style={{
                                    borderTop: '5px solid transparent',
                                    borderBottom: '5px solid transparent',
                                    borderRight: '5px solid rgba(30, 27, 75, 0.92)',
                                }}
                            />
                        </div>
                    )}
                </button>
            </li>
        );
    };

    const sidebarContent = (
        <div className="flex flex-col h-full">
            {/* Brand header */}
            <div
                className="flex items-center gap-3 px-4 py-5 shrink-0"
                style={{
                    borderBottom: '1px solid var(--p-border)',
                    justifyContent: collapsed ? 'center' : 'flex-start',
                }}
            >
                <div
                    className="flex items-center justify-center shrink-0"
                    style={{
                        width: 38,
                        height: 38,
                        borderRadius: 14,
                        background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)',
                        boxShadow: '0 4px 16px rgba(139, 92, 246, 0.3)',
                    }}
                >
                    <GraduationCap size={20} color="#FFFFFF" />
                </div>
                {!collapsed && (
                    <div style={{ overflow: 'hidden' }}>
                        <p
                            className="font-bold text-sm leading-tight"
                            style={{ color: 'var(--p-text-1)' }}
                        >
                            N & N Academy
                        </p>
                        <p className="text-[11px]" style={{ color: 'var(--p-text-4)' }}>
                            Study Companion
                        </p>
                    </div>
                )}
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto px-3 py-4">
                {!collapsed && (
                    <p
                        className="text-[10px] font-bold uppercase tracking-[0.15em] mb-2 px-3"
                        style={{ color: 'var(--p-text-4)' }}
                    >
                        Menu
                    </p>
                )}
                <ul className="space-y-1">
                    {NAV_ITEMS.map(renderNavItem)}
                </ul>
            </nav>

            {/* Bottom section — back to home */}
            <div
                className="px-3 pb-5 pt-3 shrink-0"
                style={{ borderTop: '1px solid var(--p-border)' }}
            >
                <button
                    onClick={() => navigate('/')}
                    onMouseEnter={e => {
                        e.currentTarget.style.background = 'var(--p-hover-violet)';
                        e.currentTarget.style.color = 'var(--p-accent)';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'var(--p-text-4)';
                    }}
                    className="w-full flex items-center gap-3 rounded-2xl transition-all duration-200"
                    style={{
                        padding: collapsed ? '12px' : '11px 14px',
                        justifyContent: collapsed ? 'center' : 'flex-start',
                        color: 'var(--p-text-4)',
                    }}
                    title={collapsed ? 'Back to Home' : undefined}
                >
                    <span
                        className="flex items-center justify-center"
                        style={{ width: 36, height: 36, borderRadius: 12, flexShrink: 0 }}
                    >
                        <Home size={18} />
                    </span>
                    {!collapsed && (
                        <span className="text-sm">Back to Home</span>
                    )}
                </button>
            </div>
        </div>
    );

    return (
        <>
            {/* Mobile overlay */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 z-[55] md:hidden"
                    style={{
                        background: 'rgba(15, 23, 42, 0.4)',
                        backdropFilter: 'blur(4px)',
                    }}
                    onClick={onMobileClose}
                />
            )}

            {/* Mobile drawer — utilities only (module nav is in BottomNav) */}
            <aside
                className="fixed top-0 left-0 h-full z-[60] flex flex-col md:hidden"
                style={{
                    width: 280,
                    background: 'var(--p-surface-blur)',
                    backdropFilter: 'blur(24px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                    borderRight: '1px solid var(--p-border)',
                    boxShadow: 'var(--p-shadow-lg)',
                    transform: mobileOpen ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
            >
                <div className="flex flex-col h-full">
                    {/* Brand header */}
                    <div
                        className="flex items-center gap-3 px-4 py-5 shrink-0"
                        style={{ borderBottom: '1px solid var(--p-border)' }}
                    >
                        <div
                            className="flex items-center justify-center shrink-0"
                            style={{
                                width: 38, height: 38, borderRadius: 14,
                                background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)',
                                boxShadow: '0 4px 16px rgba(139, 92, 246, 0.3)',
                            }}
                        >
                            <GraduationCap size={20} color="#FFFFFF" />
                        </div>
                        <div style={{ overflow: 'hidden' }}>
                            <p className="font-bold text-sm leading-tight" style={{ color: 'var(--p-text-1)' }}>
                                N & N Academy
                            </p>
                            <p className="text-[11px]" style={{ color: 'var(--p-text-4)' }}>
                                Study Companion
                            </p>
                        </div>
                    </div>

                    {/* Utilities section */}
                    <nav className="flex-1 overflow-y-auto px-3 py-4">
                        <p
                            className="text-[10px] font-bold uppercase tracking-[0.15em] mb-2 px-3"
                            style={{ color: 'var(--p-text-4)' }}
                        >
                            Settings
                        </p>
                        <ul className="space-y-1">
                            {/* Back to Home */}
                            <li>
                                <button
                                    onClick={() => { navigate('/'); onMobileClose(); }}
                                    className="w-full flex items-center gap-3 rounded-2xl transition-all duration-200 active:scale-[0.97]"
                                    style={{ padding: '11px 14px', color: 'var(--p-text-3)' }}
                                >
                                    <span className="flex items-center justify-center" style={{ width: 36, height: 36, borderRadius: 12, flexShrink: 0 }}>
                                        <Home size={18} />
                                    </span>
                                    <span className="text-sm">Back to Home</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>

            {/* Desktop sidebar */}
            <aside
                className="hidden md:flex flex-col shrink-0 h-full relative z-10"
                style={{
                    width: sidebarWidth,
                    background: 'var(--p-surface)',
                    backdropFilter: 'blur(24px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                    borderRight: '1px solid var(--p-border)',
                    boxShadow: 'var(--p-shadow-sm)',
                    transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    overflow: 'hidden',
                }}
            >
                {sidebarContent}
            </aside>
        </>
    );
}
