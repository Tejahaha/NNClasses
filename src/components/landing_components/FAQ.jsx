import { useState, useRef, useEffect } from 'react';
import { FadeUp, SlideLeft, SlideRight } from './AnimateOnScroll';

const B = {
    primary: '#0A1628',
    secondary: '#00C9A7',
    light: '#1B2C46',
    gold: '#FFB347',
    goldYellow: '#FF9E1B',
    goldLight: '#FFC875',
};

const FAQS = [
    {
        q: 'What is N & N Academy?',
        a: 'N & N Academy is a premium coaching institution built on trust, discipline, and academic authority — providing structured learning, expert faculty, and a rigorous exam-prep environment.',
        icon: '🎓',
    },
    {
        q: 'What courses do you offer?',
        a: 'We offer coaching for competitive exams including Quantitative Aptitude, Verbal Ability, General Knowledge, and Data Interpretation — tailored for banking, SSC, and other government exams.',
        icon: '📚',
    },
    {
        q: 'Who are the faculty members?',
        a: 'Our faculty are seasoned educators with 8–15+ years of experience, including former IIT professors and civil services experts. Scroll up to meet them individually.',
        icon: '👨‍🏫',
    },
    {
        q: 'How are the weekly tests structured?',
        a: 'Every week students take subject-specific tests followed by a regular part test. Results are reviewed with faculty to identify gaps and reinforce weak areas.',
        icon: '📝',
    },
    {
        q: 'What is the mobile policy?',
        a: 'Mobiles are deposited at the reception on entry. This ensures a distraction-free, focused study environment for all students throughout the session.',
        icon: '📵',
    },
    {
        q: 'How do I enrol?',
        a: 'Visit us at our Poranki, Vijayawada branch, or reach out via the contact details in the footer. Our team will guide you through the admission process.',
        icon: '✅',
    },
];

// Custom hook for smooth accordion height animation
const useAccordion = (isOpen) => {
    const contentRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? contentRef.current.scrollHeight : 0);
        }
    }, [isOpen]);

    return [contentRef, height];
};

const FAQItem = ({ item, index, isOpen, onToggle }) => {
    const [contentRef, height] = useAccordion(isOpen);

    return (
        <div
            className="group border-b border-[rgba(10,22,40,0.08)] first:border-t hover:bg-[rgba(0,201,167,0.04)] transition-colors duration-200"
            style={{
                borderRadius: index === 0 ? '12px 12px 0 0' : index === FAQS.length - 1 ? '0 0 12px 12px' : '0',
            }}
        >
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between gap-4 p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C9A7] focus-visible:ring-offset-2 rounded-lg"
                aria-expanded={isOpen}
            >
                <div className="flex items-center gap-4 flex-1 min-w-0">
                    <span className="text-xs font-bold tracking-wider text-[#FFB347] font-mono shrink-0">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={`text-[15px] leading-snug transition-all duration-200 ${isOpen ? 'font-bold text-[#0A1628]' : 'font-medium text-[rgba(10,22,40,0.85)]'}`}>
                        {item.q}
                    </span>
                </div>
                
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-gradient-to-br from-[#00C9A7] to-[#00A88C] rotate-180' : 'bg-[rgba(10,22,40,0.06)]'}`}>
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="transition-colors">
                        <path d="M3 5l4 4 4-4" stroke={isOpen ? '#fff' : 'rgba(10,22,40,0.5)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </button>

            <div 
                className="overflow-hidden transition-[height] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{ height }}
            >
                <div ref={contentRef} className="px-5 pb-5 pl-[54px]">
                    <div className="flex gap-3">
                        <div className="w-[3px] rounded-full shrink-0 bg-gradient-to-b from-[#00C9A7] to-transparent" />
                        <p className="text-sm leading-relaxed text-[rgba(10,22,40,0.6)]">
                            {item.a}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const MapSection = () => (
    <div className="rounded-3xl overflow-hidden border border-[rgba(10,22,40,0.1)] shadow-[0_24px_64px_rgba(10,22,40,0.1)]">
        <div className="p-5 flex items-center gap-4 bg-gradient-to-br from-[#0A1628] to-[#1B2C46]">
            <div className="relative w-9 h-9 shrink-0">
                <div className="absolute inset-0 rounded-full bg-[rgba(0,201,167,0.3)] animate-ping" />
                <div className="relative w-full h-full rounded-full bg-[#00C9A7] flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                        <path d="M9 1C6.24 1 4 3.24 4 6c0 4.25 5 11 5 11s5-6.75 5-11c0-2.76-2.24-5-5-5zm0 6.75A1.75 1.75 0 1 1 9 4.25a1.75 1.75 0 0 1 0 3.5z" fill="white" />
                    </svg>
                </div>
            </div>
            <div className="flex-1 min-w-0">
                <h3 className="text-white font-bold text-base leading-tight">Where are we located?</h3>
                <p className="text-white/50 text-xs mt-1">Poranki, Vijayawada, Andhra Pradesh</p>
            </div>
            <a
                href="https://www.google.com/maps/dir/?api=1&destination=Poranki,Vijayawada,Andhra+Pradesh,India"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-4 py-2 rounded-full bg-gradient-to-r from-[#FFB347] to-[#FF9E1B] text-[#1A1A1A] font-bold text-xs hover:shadow-lg hover:scale-105 transition-all"
            >
                Get Directions →
            </a>
        </div>

        <a
            href="https://www.google.com/maps/dir/?api=1&destination=Poranki,Vijayawada,Andhra+Pradesh,India"
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative"
        >
            <div className="relative w-full pb-[clamp(220px,50vw,38%)]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15303.663788070065!2d80.6938383158397!3d16.479793198170796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb6d490132f7%3A0x7ed35c62a6cf132a!2sPoranki%2C%20Vijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1772042750172!5m2!1sen!2sin"
                    className="absolute inset-0 w-full h-full border-0 pointer-events-none"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="N & N Academy Location"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[rgba(10,22,40,0.5)] backdrop-blur-sm">
                    <span className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#FFB347] to-[#FF9E1B] text-[#1A1A1A] font-bold text-sm shadow-xl">
                        📍 Open in Google Maps →
                    </span>
                </div>
            </div>
        </a>

        <div className="px-6 py-4 flex items-center gap-3 bg-slate-50 border-t border-[rgba(10,22,40,0.07)]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                <path d="M7 1C4.79 1 3 2.79 3 5c0 3.31 4 9 4 9s4-5.69 4-9c0-2.21-1.79-4-4-4zm0 5.5A1.5 1.5 0 1 1 7 3a1.5 1.5 0 0 1 0 3z" fill="#00C9A7" />
            </svg>
            <p className="text-sm font-semibold text-[#0A1628]">Poranki, Vijayawada, Andhra Pradesh, India</p>
        </div>
    </div>
);

const FloatingDots = () => {
    const dots = [
        { top: '12%', left: '6%', size: 8, delay: '0s', color: B.secondary },
        { top: '35%', left: '3%', size: 5, delay: '1.2s', color: B.gold },
        { top: '68%', left: '7%', size: 6, delay: '2.4s', color: B.secondary },
        { top: '15%', right: '5%', size: 6, delay: '0.6s', color: B.gold },
        { top: '50%', right: '3%', size: 9, delay: '1.8s', color: B.secondary },
        { top: '80%', right: '6%', size: 5, delay: '3s', color: B.gold },
    ];

    return (
        <>
            {dots.map((dot, i) => (
                <div
                    key={i}
                    className="absolute rounded-full pointer-events-none z-0 animate-[float_4s_ease-in-out_infinite]"
                    style={{
                        top: dot.top,
                        left: dot.left,
                        right: dot.right,
                        width: dot.size,
                        height: dot.size,
                        background: dot.color,
                        opacity: 0.35,
                        animationDelay: dot.delay,
                    }}
                />
            ))}
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-12px); }
                }
            `}</style>
        </>
    );
};

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            id="faqs"
            className="relative overflow-hidden bg-white py-[clamp(64px,10vw,120px)]"
        >
            {/* Background decorations */}
            <div className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,201,167,0.07)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,179,71,0.08)_0%,transparent_70%)] pointer-events-none" />
            <div 
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: 'linear-gradient(rgba(10,22,40,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(10,22,40,0.025) 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                }}
            />
            <FloatingDots />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <FadeUp className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[rgba(0,201,167,0.08)] border border-[rgba(0,201,167,0.2)] mb-5">
                        <span className="text-base">💬</span>
                        <span className="text-xs font-bold tracking-widest text-[#00C9A7] uppercase">
                            FAQs & Location
                        </span>
                    </div>
                    
                    <h2 className="text-[clamp(28px,5.5vw,52px)] font-extrabold text-[#0A1628] leading-tight tracking-tight mb-4">
                        Got questions?{' '}
                        <span className="bg-gradient-to-br from-[#FFB347] to-[#FF9E1B] bg-clip-text text-transparent">
                            We've got answers.
                        </span>
                    </h2>
                    
                    <p className="text-[clamp(15px,2vw,17px)] text-[rgba(10,22,40,0.55)] max-w-xl mx-auto leading-relaxed">
                        Everything you need to know about N & N Academy — admissions, courses, faculty, and more.
                    </p>
                </FadeUp>

                {/* Main content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(32px,5vw,72px)] items-start mb-16">
                    {/* FAQ List */}
                    <SlideLeft>
                        <div className="space-y-0">
                            {FAQS.map((item, i) => (
                                <FAQItem
                                    key={i}
                                    item={item}
                                    index={i}
                                    isOpen={openIndex === i}
                                    onToggle={() => handleToggle(i)}
                                />
                            ))}
                        </div>

                        {/* Email CTA */}
                        <div className="mt-7 flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-[rgba(0,201,167,0.1)] border border-[rgba(0,201,167,0.2)] flex items-center justify-center shrink-0">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M2 4h12v8H2V4zm0 0l6 5 6-5" stroke="#00C9A7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className="text-sm text-[rgba(10,22,40,0.5)]">
                                Still have questions?{' '}
                                <a
                                    href="mailto:hello@nnacademy.in"
                                    className="font-bold text-[#0A1628] underline underline-offset-4 hover:text-[#00C9A7] transition-colors"
                                >
                                    Email us directly →
                                </a>
                            </p>
                        </div>
                    </SlideLeft>

                    {/* Illustration */}
                    <SlideRight>
                        <div className="flex items-center justify-center h-full">
                            <img
                                src="/illustrations/FAQs-rafiki.svg"
                                alt="Questions illustration"
                                className="w-full max-w-[520px] h-auto animate-[faqFloat_7s_ease-in-out_infinite] drop-shadow-2xl"
                            />
                        </div>
                        <style>{`
                            @keyframes faqFloat {
                                0%, 100% { transform: translateY(0px) rotate(-2deg); }
                                50% { transform: translateY(-20px) rotate(2deg); }
                            }
                        `}</style>
                    </SlideRight>
                </div>

                {/* Map Section */}
                <FadeUp delay={0.2}>
                    <MapSection />
                </FadeUp>
            </div>
        </section>
    );
}