/**
 * AnimateOnScroll — thin wrappers around motion/react's whileInView.
 * Import what you need from here rather than repeating motion boilerplate.
 */
import { motion } from 'motion/react';

const BASE = { once: true, margin: '0px 0px -60px 0px' };

/* Fade up — most common reveal */
export function FadeUp({ children, delay = 0, duration = 0.6, className = '', style = {} }) {
    return (
        <motion.div
            className={className}
            style={style}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
            viewport={BASE}
        >
            {children}
        </motion.div>
    );
}

/* Fade in — no vertical movement */
export function FadeIn({ children, delay = 0, duration = 0.55, className = '', style = {} }) {
    return (
        <motion.div
            className={className}
            style={style}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration, delay, ease: 'easeOut' }}
            viewport={BASE}
        >
            {children}
        </motion.div>
    );
}

/* Slide in from left */
export function SlideLeft({ children, delay = 0, duration = 0.65, className = '', style = {} }) {
    return (
        <motion.div
            className={className}
            style={style}
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
            viewport={BASE}
        >
            {children}
        </motion.div>
    );
}

/* Slide in from right */
export function SlideRight({ children, delay = 0, duration = 0.65, className = '', style = {} }) {
    return (
        <motion.div
            className={className}
            style={style}
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
            viewport={BASE}
        >
            {children}
        </motion.div>
    );
}

/* Scale pop — good for cards / icons */
export function ScalePop({ children, delay = 0, duration = 0.5, className = '', style = {} }) {
    return (
        <motion.div
            className={className}
            style={style}
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration, delay, ease: [0.34, 1.56, 0.64, 1] }}
            viewport={BASE}
        >
            {children}
        </motion.div>
    );
}

/* Stagger container — children animate in sequence */
export function StaggerContainer({ children, stagger = 0.1, className = '', style = {} }) {
    return (
        <motion.div
            className={className}
            style={style}
            initial="hidden"
            whileInView="visible"
            viewport={BASE}
            variants={{ visible: { transition: { staggerChildren: stagger } } }}
        >
            {children}
        </motion.div>
    );
}

/* StaggerItem — must be a direct child of StaggerContainer */
export function StaggerItem({ children, className = '', style = {} }) {
    return (
        <motion.div
            className={className}
            style={style}
            variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
            }}
        >
            {children}
        </motion.div>
    );
}

/*
 * FloatLoop — removed from this file.
 * Do NOT use FloatLoop on absolutely-positioned elements; the motion y-transform
 * will conflict with translateX(-50%) translateY(-50%) and break positioning.
 */
