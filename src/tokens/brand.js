/**
 * Unified Brand Design Tokens
 * 
 * This file contains the consolidated color palette for the entire application.
 * All components should import 'B' from this file to ensure brand consistency.
 */

export const brand = {
    /* --- Main Project Palette (Deep Navy & Amber) --- */
    primary: '#0A1628',       // Deep Navy
    secondary: '#00C9A7',     // Electric Teal
    light: '#1B2C46',         // Lighter Navy
    dark: '#050D18',          // Darkest Navy
    gold: '#FFB347',          // Warm Amber
    goldLight: '#FFC875',     // Lighter Amber
    goldYellow: '#FF9E1B',    // Richer Amber

    /* --- Navbar Specific (Teal Variant) --- */
    navTeal: '#1F5E78',
    navTealSecondary: '#2E7C97',
    navTealLight: '#5FA8C4',
    navTealDark: '#123B4A',
    navGold: '#D4A62A',
    navGoldLight: '#E8D38A',
    navGoldYellow: '#F4C542',

    /* --- Strategy & Subject Specifics --- */
    goldYellowMPC: '#F4A621',
    biologyGreen: '#34D399',
    physicsPurple: '#818CF8',
    chemistryTeal: '#4FD1C5',

    /* --- Teaching Process & Accents --- */
    accentIndigo: '#6366F1',
    accentAmber: '#F59E0B',
    accentEmerald: '#10B981',
    accentRed: '#EF4444',

    /* --- Communication & Social --- */
    whatsappGreen: '#25D366',
    whatsappGreenDark: '#1EBE5D',
};

/**
 * Backwards compatibility: Alias 'B' for components using the B.color pattern.
 * Note: Components using generic names like B.primary will now resolve to 
 * the unified project-wide color palette.
 */
export const B = brand;

export default brand;
