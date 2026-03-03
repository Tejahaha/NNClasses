/**
 * ThemeToggle.jsx
 * Premium sun / moon toggle with a circular clip-path ripple transition.
 *
 * When clicked the toggle:
 * 1. Creates a full-screen overlay coloured with the TARGET theme's bg.
 * 2. Expands the overlay from the button via `clip-path: circle()` (Web Animations API).
 * 3. Halfway through, flips the actual theme so the real UI re-paints under the overlay.
 * 4. On finish the overlay is removed — seamless handoff.
 */

import { useRef, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const btnRef = useRef(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleToggle = () => {
        if (isAnimating) return;

        const newTheme = theme === 'light' ? 'dark' : 'light';
        const btn = btnRef.current;

        // Fallback: No button rect → instant switch
        if (!btn) {
            setTheme(newTheme);
            return;
        }

        const rect = btn.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        // Radius needed to cover the full viewport from the button centre
        const maxRadius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y),
        );

        setIsAnimating(true);

        // ── Create overlay ──
        const overlay = document.createElement('div');
        Object.assign(overlay.style, {
            position: 'fixed',
            inset: '0',
            zIndex: '99999',
            pointerEvents: 'none',
            background: newTheme === 'dark' ? '#0B1120' : '#F8FAFF',
            clipPath: `circle(0px at ${x}px ${y}px)`,
            willChange: 'clip-path',
        });
        document.body.appendChild(overlay);

        // ── Animate via Web Animations API (compositor-friendly) ──
        const duration = 620; // ms
        const anim = overlay.animate(
            [
                { clipPath: `circle(0px at ${x}px ${y}px)` },
                { clipPath: `circle(${maxRadius}px at ${x}px ${y}px)` },
            ],
            {
                duration,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                fill: 'forwards',
            },
        );

        // Flip theme once the circle covers ~40 % of screen
        const flipDelay = Math.round(duration * 0.38);
        setTimeout(() => {
            setTheme(newTheme);
        }, flipDelay);

        anim.onfinish = () => {
            overlay.remove();
            setIsAnimating(false);
        };
    };

    const isDark = theme === 'dark';

    return (
        <button
            ref={btnRef}
            onClick={handleToggle}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            className="relative flex items-center justify-center rounded-xl transition-all duration-300 group"
            style={{
                width: 40,
                height: 40,
                background: isDark
                    ? 'rgba(139, 92, 246, 0.12)'
                    : 'var(--p-input-bg)',
                border: '1px solid var(--p-border)',
                cursor: 'pointer',
                overflow: 'hidden',
            }}
        >
            {/* Hover glow ring */}
            <span
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    boxShadow: isDark
                        ? '0 0 12px rgba(250, 204, 21, 0.25)'
                        : '0 0 12px rgba(139, 92, 246, 0.2)',
                }}
            />

            {/* Icon container with rotation */}
            <span
                className="relative z-10 flex items-center justify-center transition-transform duration-500"
                style={{
                    transform: isAnimating
                        ? `rotate(${isDark ? '180deg' : '-180deg'})`
                        : 'rotate(0deg)',
                }}
            >
                {isDark ? (
                    <Sun
                        size={18}
                        strokeWidth={2.2}
                        style={{ color: '#FACC15' }}
                    />
                ) : (
                    <Moon
                        size={18}
                        strokeWidth={2.2}
                        style={{ color: '#6D28D9' }}
                    />
                )}
            </span>
        </button>
    );
}
