/**
 * BottomNav.jsx
 * Persistent bottom navigation bar for mobile only (< md breakpoint).
 * This is the SOLE module navigation mechanism on mobile.
 * Desktop sidebar remains unchanged.
 */

import {
    LayoutDashboard, ClipboardCheck, FileText,
    FlaskConical, TrendingUp,
} from 'lucide-react';

const NAV_ITEMS = [
    { id: 'dashboard', label: 'Home', icon: LayoutDashboard },
    { id: 'assignments', label: 'Assign', icon: ClipboardCheck },
    { id: 'question-papers', label: 'Papers', icon: FileText },
    { id: 'tests', label: 'Tests', icon: FlaskConical },
    { id: 'progress', label: 'Progress', icon: TrendingUp },
];

export default function BottomNav({ activeModule, onModuleSelect }) {
    return (
        <nav
            className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
            style={{
                background: 'var(--p-surface)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                borderTop: '1px solid var(--p-border-med)',
                boxShadow: '0 -2px 16px rgba(0,0,0,0.06)',
                paddingBottom: 'env(safe-area-inset-bottom, 0px)',
            }}
        >
            <div className="flex items-stretch justify-around px-1"
                style={{ minHeight: 56 }}
            >
                {NAV_ITEMS.map(item => {
                    const isActive = activeModule === item.id;
                    const Icon = item.icon;

                    return (
                        <button
                            key={item.id}
                            onClick={() => onModuleSelect(item.id)}
                            className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 min-h-[48px] transition-all duration-150 active:scale-[0.92] relative"
                            style={{ WebkitTapHighlightColor: 'transparent' }}
                            aria-label={item.label}
                            aria-current={isActive ? 'page' : undefined}
                        >
                            {/* Active indicator line */}
                            {isActive && (
                                <span
                                    className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[3px] rounded-full"
                                    style={{
                                        background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)',
                                        boxShadow: '0 2px 8px rgba(139, 92, 246, 0.4)',
                                    }}
                                />
                            )}

                            {/* Icon */}
                            <span
                                className="flex items-center justify-center transition-all duration-150"
                                style={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: 10,
                                    background: isActive
                                        ? 'linear-gradient(135deg, #8B5CF6, #06B6D4)'
                                        : 'transparent',
                                    boxShadow: isActive
                                        ? '0 2px 8px rgba(139, 92, 246, 0.25)'
                                        : 'none',
                                }}
                            >
                                <Icon
                                    size={18}
                                    style={{
                                        color: isActive ? '#FFFFFF' : 'var(--p-text-4)',
                                        transition: 'color 0.15s ease',
                                    }}
                                />
                            </span>

                            {/* Label */}
                            <span
                                className="text-[10px] leading-none transition-colors duration-150"
                                style={{
                                    color: isActive ? 'var(--p-accent)' : 'var(--p-text-4)',
                                    fontWeight: isActive ? 700 : 500,
                                }}
                            >
                                {item.label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </nav>
    );
}
