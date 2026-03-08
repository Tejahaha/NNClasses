import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Landing page components (Keep Static)
import Navbar from './components/landing_components/Navbar';
import Hero from './components/landing_components/Hero';
import FloatingVideo from './components/landing_components/FloatingVideo';
import WhiteGridSection from './components/landing_components/WhiteGridSection';
import TeachingProcess from './components/landing_components/TeachingProcess';
import StrategyTabs from './components/landing_components/StrategyTabs';
import FacultyReveal from './components/landing_components/FacultyReveal';
import FAQ from './components/landing_components/FAQ';
import Footer from './components/landing_components/Footer';
import FloatingWhatsApp from './components/landing_components/FloatingWhatsApp';

// Lazy Loaded Routes
const StudentSection = lazy(() => import('./components/QP_components/StudentSection'));
const PortalLayout = lazy(() => import('./components/portal/PortalLayout'));

/* ── Page Loader (Fallback) ─────────────────── */
function PageLoader() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0A1628',
      zIndex: 9999
    }}>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
      <div style={{
        width: '40px',
        height: '40px',
        border: '3px solid rgba(255, 179, 71, 0.2)',
        borderTopColor: '#FFB347',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite'
      }} />
    </div>
  );
}

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
    <div style={{ fontFamily: 'var(--font-display)', WebkitFontSmoothing: 'antialiased' }}>
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
        <TeachingProcess />
        <StrategyTabs />

        {/* ── Remaining Sections ─────────── */}
        <FacultyReveal />
        <FAQ />
        <FloatingWhatsApp />
      </main>

      <Footer />
    </div>
  );
}

/* ── App with Router ─────────────────────────── */
export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/portal" element={<PortalLayout />} />
          <Route path="/student-section" element={<StudentSection />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
