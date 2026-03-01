import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Landing page components
import Navbar from './components/landing_components/Navbar';
import Hero from './components/landing_components/Hero';
import FloatingVideo from './components/landing_components/FloatingVideo';
import WhiteGridSection from './components/landing_components/WhiteGridSection';
import { FacultyReveal } from './components/landing_components/facultyreveal';
// import DarkPromo from './components/landing_components/DarkPromo';  // hidden — file kept
// import Showcase from './components/landing_components/Showcase';  // hidden — file kept
// import Roadmap from './components/landing_components/Roadmap';  // hidden — file kept
import FAQ from './components/landing_components/FAQ';
import Footer from './components/landing_components/Footer';

// Student Section portal
import StudentSection from './components/QP_components/StudentSection';

/* ── Landing Page wrapper ─────────────────────── */
function LandingPage() {
  // Global scroll observer — triggers `.section-animate → .visible`
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const attach = () =>
      document.querySelectorAll('.section-animate').forEach(el => obs.observe(el));

    attach();
    const t = setTimeout(attach, 200);
    return () => { obs.disconnect(); clearTimeout(t); };
  }, []);

  return (
    <div style={{ fontFamily: "'General Sans', sans-serif", WebkitFontSmoothing: 'antialiased' }}>
      {/* ── Sticky Header ─────────────────────── */}
      <Navbar />

      <main>
        {/*
         * FLOATING VIDEO OVERLAP ARCHITECTURE
         * ─────────────────────────────────────
         * 1. Hero (70vh) has paddingBottom: clamp(200px, 24vw, 340px)
         *    This pushes its content up so the bottom portion is empty.
         *
         * 2. FloatingVideo is a height-0 pivot div placed between Hero and
         *    WhiteGridSection. Its absolute child is centered on this line
         *    with translateY(-50%), so it sits half-in-hero, half-in-white.
         *
         * 3. WhiteGridSection has paddingTop: clamp(210px, 26vw, 360px)
         *    This pushes content down enough to clear the video card.
         */}
        <Hero />
        <FloatingVideo />
        <WhiteGridSection />

        {/* ── Remaining Sections ─────────── */}
        <FacultyReveal />
        {/* <DarkPromo /> — hidden, file kept in /components */}
        {/* <Showcase /> — hidden, file kept in /components */}
        {/* <Roadmap /> — hidden, file kept in /components */}
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

/* ── App with Router ─────────────────────────── */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/student-section" element={<StudentSection />} />
      </Routes>
    </BrowserRouter>
  );
}
