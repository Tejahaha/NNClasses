import { useState } from 'react';
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem } from './AnimateOnScroll';

const faqIllustrationStyle = `
@keyframes faqFloat {
  0%, 100% { transform: translateY(0px) rotate(-2deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
}
.faq-illustration {
  animation: faqFloat 7s ease-in-out infinite;
  filter: drop-shadow(0 24px 48px rgba(31,94,120,0.15));
}
`;

const B = {
    primary: '#1F5E78',
    light: '#5FA8C4',
    dark: '#123B4A',
    gold: '#D4A62A',
    goldYellow: '#F4C542',
};

const FAQS = [
    { q: 'What is N & N Academy?', a: 'N & N Academy is a premium coaching institution built on trust, discipline, and academic authority — providing structured learning, expert faculty, and a rigorous exam-prep environment.' },
    { q: 'What courses do you offer?', a: 'We offer coaching for competitive exams including Quantitative Aptitude, Verbal Ability, General Knowledge, and Data Interpretation — tailored for banking, SSC, and other government exams.' },
    { q: 'Who are the faculty members?', a: 'Our faculty are seasoned educators with 8–15+ years of experience, including former IIT professors and civil services experts. Scroll up to meet them individually.' },
    { q: 'How are the weekly tests structured?', a: 'Every week students take subject-specific tests followed by a regular part test. Results are reviewed with faculty to identify gaps and reinforce weak areas.' },
    { q: 'What is the mobile policy?', a: 'Mobiles are deposited at the reception on entry. This ensures a distraction-free, focused study environment for all students throughout the session.' },
    { q: 'How do I enrol?', a: 'Visit us at our Poranki, Vijayawada branch, or reach out via the contact details in the footer. Our team will guide you through the admission process.' },
];

export default function FAQ() {
    const [open, setOpen] = useState(null);

    return (
        <section id="faqs" className="py-24 max-md:py-16" style={{ backgroundColor: '#EFF4EE' }}>
            <style>{faqIllustrationStyle}</style>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* ── Section header ── */}
                <FadeUp className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
                        style={{ background: `rgba(31,94,120,0.07)`, color: B.primary, border: `1px solid rgba(31,94,120,0.16)` }}>
                        ？ FAQs &amp; Location
                    </div>
                    <h2 className="font-semibold text-[#1A1A1A] leading-tight mb-4" style={{ fontSize: 'clamp(22px, 5vw, 36px)' }}>
                        Got questions?{' '}
                        <span style={{ background: `linear-gradient(135deg, ${B.primary}, ${B.light})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            We've got answers.
                        </span>
                    </h2>
                </FadeUp>

                {/* ── Two-column: FAQ left, SVG right ── */}
                <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-12 items-center mb-16">

                    {/* LEFT — FAQ accordion */}
                    <SlideLeft>
                        <StaggerContainer className="flex flex-col" stagger={0.07}>
                            {FAQS.map((item, i) => (
                                <StaggerItem key={i}>
                                    <div className="border-b border-gray-200 first:border-t">
                                        <button
                                            className="w-full text-left flex items-center justify-between gap-5 py-5 px-1 group"
                                            onClick={() => setOpen(open === i ? null : i)}
                                        >
                                            <span
                                                className="text-[15px] font-medium leading-snug transition-colors duration-150"
                                                style={{ color: open === i ? B.primary : '#0F172A' }}
                                            >
                                                {item.q}
                                            </span>
                                            <span
                                                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                                                style={{
                                                    background: open === i ? `rgba(31,94,120,0.1)` : 'rgba(0,0,0,0.04)',
                                                    color: open === i ? B.primary : '#6B7280',
                                                    transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    transition: 'transform 0.3s ease, background 0.2s, color 0.2s',
                                                }}
                                            >
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                    <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </button>
                                        <div style={{
                                            overflow: 'hidden',
                                            maxHeight: open === i ? '300px' : '0',
                                            transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        }}>
                                            <p className="pb-5 px-1 text-[14px] text-[#6B7280] leading-relaxed">{item.a}</p>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>

                        <FadeUp delay={0.3}>
                            <p className="mt-8 text-[13px] text-[#9CA3AF]">
                                Still have questions?{' '}
                                <a href="mailto:hello@nnacademy.in" className="underline underline-offset-2 font-medium"
                                    style={{ color: B.primary }}>
                                    Email us
                                </a>
                            </p>
                        </FadeUp>
                    </SlideLeft>

                    {/* RIGHT — Big SVG illustration */}
                    <SlideRight>
                        <div className="flex items-center justify-center">
                            <img
                                src="/illustrations/FAQs-rafiki.svg"
                                alt="Questions illustration"
                                className="faq-illustration"
                                style={{ width: '100%', maxWidth: '520px', height: 'auto' }}
                            />
                        </div>
                    </SlideRight>

                </div>

                {/* ── Full-width Map card ── */}
                <FadeUp delay={0.2}>
                    <div
                        className="rounded-2xl overflow-hidden"
                        style={{
                            border: `1.5px solid rgba(31,94,120,0.18)`,
                            boxShadow: `0 16px 48px rgba(31,94,120,0.12)`,
                        }}
                    >
                        {/* Card header */}
                        <div className="px-6 py-5 flex items-center gap-3"
                            style={{ background: `linear-gradient(135deg, ${B.dark}, ${B.primary})` }}>
                            <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                                style={{ background: 'rgba(255,255,255,0.15)' }}>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M9 1C6.24 1 4 3.24 4 6c0 4.25 5 11 5 11s5-6.75 5-11c0-2.76-2.24-5-5-5zm0 6.75A1.75 1.75 0 1 1 9 4.25a1.75 1.75 0 0 1 0 3.5z" fill="white" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-[16px] leading-tight">Where are we located?</h3>
                                <p className="text-[12px] mt-0.5" style={{ color: 'rgba(255,255,255,0.55)' }}>
                                    Poranki, Vijayawada, Andhra Pradesh — click the map to get directions
                                </p>
                            </div>
                        </div>

                        {/* Map embed */}
                        <a
                            href="https://www.google.com/maps/dir/?api=1&destination=Poranki,Vijayawada,Andhra+Pradesh,India"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                            title="Open in Google Maps for directions"
                        >
                            <div style={{ position: 'relative', width: '100%', paddingBottom: 'clamp(220px, 50vw, 38%)' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15303.663788070065!2d80.6938383158397!3d16.479793198170796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb6d490132f7%3A0x7ed35c62a6cf132a!2sPoranki%2C%20Vijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1772042750172!5m2!1sen!2sin"
                                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, pointerEvents: 'none' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="N & N Academy Location"
                                />
                                {/* Hover overlay */}
                                <div
                                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                    style={{ background: 'rgba(18,59,74,0.52)', backdropFilter: 'blur(2px)' }}
                                >
                                    <span
                                        className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm shadow-lg"
                                        style={{ background: `linear-gradient(135deg, ${B.gold}, ${B.goldYellow})`, color: '#1A1A1A' }}
                                    >
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path d="M7 1C5.07 1 3.5 2.57 3.5 4.5c0 2.92 3.5 8.5 3.5 8.5S10.5 7.42 10.5 4.5C10.5 2.57 8.93 1 7 1zm0 4.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" fill="currentColor" />
                                        </svg>
                                        Open in Google Maps →
                                    </span>
                                </div>
                            </div>
                        </a>

                        {/* Address pill */}
                        <div className="px-4 sm:px-6 py-4 flex flex-wrap items-center gap-3"
                            style={{ background: '#F7FAFC', borderTop: `1px solid rgba(31,94,120,0.08)` }}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                                <path d="M7 1C4.79 1 3 2.79 3 5c0 3.31 4 9 4 9s4-5.69 4-9c0-2.21-1.79-4-4-4zm0 5.5A1.5 1.5 0 1 1 7 3a1.5 1.5 0 0 1 0 3z" fill={B.primary} />
                            </svg>
                            <p className="text-[13px] font-medium" style={{ color: B.dark }}>
                                Poranki, Vijayawada, Andhra Pradesh, India
                            </p>
                        </div>
                    </div>
                </FadeUp>

            </div>
        </section>
    );
}
