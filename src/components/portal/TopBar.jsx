/**
 * TopBar.jsx
 * Top navigation bar for the Student Portal.
 * Contains: logo, search, class selector, streak, notifications, profile avatar.
 */

import { useState, useRef, useEffect } from 'react';
import {
    Search, Bell, ChevronDown, Menu, Flame,
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function TopBar({ sidebarCollapsed, onToggleSidebar, onMobileMenu, activeModule, classLevel, onClassChange }) {
    const [classDropdownOpen, setClassDropdownOpen] = useState(false);
    const [searchFocused, setSearchFocused] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const dropdownRef = useRef(null);
    const showClassSelector = activeModule === 'assignments';

    // Close dropdown on outside click
    useEffect(() => {
        const handler = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setClassDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    return (
        <header
            className="flex items-center gap-3 px-4 md:px-6 h-16 relative z-20 shrink-0"
            style={{
                background: 'var(--p-surface)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                borderBottom: '1px solid var(--p-border-med)',
                boxShadow: 'var(--p-shadow-sm)',
            }}
        >
            {/* Mobile hamburger */}
            <button
                onClick={onMobileMenu}
                className="md:hidden p-2 rounded-xl transition-all duration-200"
                style={{ color: 'var(--p-text-2)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--p-hover-violet-strong)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                aria-label="Toggle menu"
            >
                <Menu size={20} />
            </button>

            {/* Mobile module title — visible only on mobile */}
            <span
                className="md:hidden text-sm font-semibold truncate flex-1"
                style={{ color: 'var(--p-text-1)' }}
            >
                {activeModule === 'dashboard' ? 'Dashboard'
                    : activeModule === 'question-papers' ? 'Question Papers'
                        : activeModule === 'assignments' ? 'Assignments'
                            : activeModule === 'tests' ? 'Tests'
                                : activeModule === 'results' ? 'Results'
                                    : activeModule === 'notes' ? 'Notes'
                                        : activeModule === 'progress' ? 'Progress'
                                            : activeModule.charAt(0).toUpperCase() + activeModule.slice(1)}
            </span>

            {/* Desktop sidebar toggle */}
            <button
                onClick={onToggleSidebar}
                className="hidden md:flex p-2 rounded-xl transition-all duration-200 items-center justify-center"
                style={{ color: 'var(--p-text-2)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--p-hover-violet-strong)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                aria-label="Toggle sidebar"
            >
                <Menu size={20} />
            </button>

            {/* Search bar — desktop only */}
            <div
                className="hidden md:block flex-1 max-w-lg relative"
                style={{
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
            >
                <div
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl transition-all duration-300"
                    style={{
                        background: searchFocused
                            ? 'var(--p-input-bg-focus)'
                            : 'var(--p-input-bg)',
                        border: searchFocused
                            ? '1.5px solid rgba(139, 92, 246, 0.3)'
                            : '1.5px solid transparent',
                        boxShadow: searchFocused
                            ? '0 4px 20px rgba(139, 92, 246, 0.12), 0 0 0 3px rgba(139, 92, 246, 0.06)'
                            : 'none',
                    }}
                >
                    <Search
                        size={16}
                        style={{
                            color: searchFocused ? '#8B5CF6' : '#94A3B8',
                            transition: 'color 0.2s ease',
                            flexShrink: 0,
                        }}
                    />
                    <input
                        type="text"
                        placeholder="Search chapters, papers…"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        onFocus={() => setSearchFocused(true)}
                        onBlur={() => setSearchFocused(false)}
                        className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
                        style={{ color: 'var(--p-text-1)', fontFamily: "'Inter', sans-serif" }}
                    />
                    <kbd
                        className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded-md text-[10px] font-medium"
                        style={{
                            background: 'var(--p-border)',
                            color: 'var(--p-text-4)',
                            border: '1px solid var(--p-border-strong)',
                        }}
                    >
                        ⌘K
                    </kbd>
                </div>
            </div>

            {/* Class selector + Theme toggle — visible on both mobile and desktop */}
            <div className="flex items-center gap-2 ml-auto md:ml-0">
                {/* Class Selector — only on Assignments */}
                {showClassSelector && (
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setClassDropdownOpen(o => !o)}
                            className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 min-h-[44px]"
                            style={{
                                background: 'var(--p-active-item)',
                                color: 'var(--p-accent)',
                                border: '1px solid rgba(139, 92, 246, 0.15)',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'var(--p-hover-violet-med)';
                                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'var(--p-active-item)';
                                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.15)';
                            }}
                        >
                            Class {classLevel}
                            <ChevronDown
                                size={14}
                                style={{
                                    transform: classDropdownOpen ? 'rotate(180deg)' : 'rotate(0)',
                                    transition: 'transform 0.2s ease',
                                }}
                            />
                        </button>

                        {classDropdownOpen && (
                            <div
                                className="absolute right-0 top-full mt-2 rounded-2xl overflow-hidden py-1.5 min-w-[140px] z-50"
                                style={{
                                    background: 'var(--p-dropdown-bg)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid var(--p-border-med)',
                                    boxShadow: 'var(--p-shadow-lg)',
                                }}
                            >
                                {['11th', '12th'].map(level => (
                                    <button
                                        key={level}
                                        onClick={() => { onClassChange(level); setClassDropdownOpen(false); }}
                                        className="w-full text-left px-4 py-3 text-sm transition-all duration-150 flex items-center gap-2 min-h-[44px]"
                                        style={{
                                            color: classLevel === level ? 'var(--p-accent)' : 'var(--p-text-2)',
                                            background: classLevel === level ? 'var(--p-hover-violet-strong)' : 'transparent',
                                            fontWeight: classLevel === level ? 600 : 400,
                                        }}
                                        onMouseEnter={e => {
                                            if (classLevel !== level) e.currentTarget.style.background = 'var(--p-hover-violet)';
                                        }}
                                        onMouseLeave={e => {
                                            if (classLevel !== level) e.currentTarget.style.background = 'transparent';
                                        }}
                                    >
                                        {classLevel === level && (
                                            <span
                                                className="w-1.5 h-1.5 rounded-full"
                                                style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)' }}
                                            />
                                        )}
                                        Class {level}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Theme toggle — always visible */}
                <ThemeToggle />
            </div>

            {/* Right section — desktop only (search, streak, notifications, avatar) */}
            <div className="hidden md:flex items-center gap-3">
                {/* Streak indicator */}
                <div
                    className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold"
                    style={{
                        background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.1), rgba(239, 68, 68, 0.08))',
                        color: '#EA580C',
                        border: '1px solid rgba(251, 146, 60, 0.15)',
                    }}
                >
                    <Flame size={15} style={{ color: '#F97316' }} />
                    <span>7</span>
                </div>

                {/* Notifications */}
                <button
                    className="relative p-2.5 rounded-xl transition-all duration-200"
                    style={{ color: 'var(--p-text-3)' }}
                    onMouseEnter={e => {
                        e.currentTarget.style.background = 'var(--p-hover-violet-strong)';
                        e.currentTarget.style.color = 'var(--p-accent)';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'var(--p-text-3)';
                    }}
                    aria-label="Notifications"
                >
                    <Bell size={18} />
                    {/* Notification dot */}
                    <span
                        className="absolute top-2 right-2 w-2 h-2 rounded-full"
                        style={{
                            background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)',
                            boxShadow: '0 0 6px rgba(139, 92, 246, 0.5)',
                        }}
                    />
                </button>

                {/* Profile avatar */}
                <button
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-200"
                    style={{
                        background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)',
                        color: '#FFFFFF',
                        boxShadow: '0 2px 8px rgba(139, 92, 246, 0.3)',
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 4px 16px rgba(139, 92, 246, 0.4)';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(139, 92, 246, 0.3)';
                    }}
                    aria-label="Profile"
                >
                    S
                </button>
            </div>
        </header>
    );
}
