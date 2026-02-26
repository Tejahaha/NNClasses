/**
 * StudentSection.jsx
 * Main portal layout — full viewport, sidebar + content area.
 * Manages: activeModule, selectedYear, mobile sidebar toggle.
 */

import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import PDFViewer from './PDFViewer';
import qpData from './qpData';
import AssignmentsModule from './AssignmentsModule';

/* ── Coming Soon placeholder for future modules ── */
function ComingSoon({ module }) {
    const icons = {
        notes: (
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <rect x="8" y="5" width="28" height="34" rx="4" stroke="#2E7C97" strokeWidth="1.8" fill="#EEF6FA" />
                <path d="M14 14h16M14 20h16M14 26h10" stroke="#2E7C97" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
        ),
        assignments: (
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <rect x="7" y="7" width="30" height="30" rx="4" stroke="#2E7C97" strokeWidth="1.8" fill="#EEF6FA" />
                <path d="M15 22l5 5 10-10" stroke="#2E7C97" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        results: (
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <rect x="5" y="25" width="9" height="14" rx="2" fill="#2E7C97" opacity="0.7" />
                <rect x="18" y="17" width="9" height="22" rx="2" fill="#2E7C97" opacity="0.5" />
                <rect x="31" y="7" width="9" height="32" rx="2" fill="#2E7C97" opacity="0.3" />
            </svg>
        ),
    };

    const labels = {
        notes: 'Notes',
        assignments: 'Assignments',
        results: 'Results',
    };

    return (
        <div
            className="flex-1 flex flex-col items-center justify-center h-full px-6"
            style={{ background: '#F7F8FA' }}
        >
            <div
                className="flex flex-col items-center gap-5 max-w-sm text-center"
                style={{ animation: 'fadeInUp 0.4s ease both' }}
            >
                <div
                    className="w-24 h-24 rounded-3xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #EEF6FA, #D1E9F3)', boxShadow: '0 8px 32px rgba(31,94,120,0.10)' }}
                >
                    {icons[module] || null}
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-2" style={{ color: '#1F5E78' }}>
                        {labels[module] || module} — Coming Soon
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                        This section is currently being prepared. Check back soon for access to your {labels[module]?.toLowerCase() || module}.
                    </p>
                </div>

                <div
                    className="flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full"
                    style={{ background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)', color: '#92400E', border: '1px solid #FCD34D' }}
                >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <circle cx="6" cy="6" r="5" stroke="#92400E" strokeWidth="1.3" />
                        <path d="M6 3.5v3.5" stroke="#92400E" strokeWidth="1.3" strokeLinecap="round" />
                        <circle cx="6" cy="9" r="0.75" fill="#92400E" />
                    </svg>
                    Under Development
                </div>
            </div>
        </div>
    );
}

/* ── Mobile Top Bar ── */
function MobileTopBar({ activeModule, onHamburger }) {
    const moduleLabels = {
        'question-papers': 'Question Papers',
        notes: 'Notes',
        assignments: 'Assignments',
        results: 'Results',
    };

    return (
        <div
            className="md:hidden flex items-center gap-3 px-4 py-3.5"
            style={{
                background: '#FFFFFF',
                borderBottom: '1px solid #E5E7EB',
                boxShadow: '0 1px 8px rgba(0,0,0,0.05)',
            }}
        >
            <button
                onClick={onHamburger}
                className="p-2 rounded-lg transition-colors"
                style={{ color: '#4B5563' }}
                aria-label="Open navigation"
                onMouseEnter={e => { e.currentTarget.style.background = '#F3F4F6'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
            >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 6h14M3 10h14M3 14h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
            </button>

            <div className="flex items-center gap-2">
                <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #1F5E78, #2E7C97)' }}
                >
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                        <path d="M10 2L2 7l8 5 8-5-8-5Z" fill="white" />
                    </svg>
                </div>
                <div>
                    <p className="text-xs font-semibold" style={{ color: '#9CA3AF' }}>Student Section</p>
                    <p className="text-sm font-bold leading-tight" style={{ color: '#1F5E78' }}>
                        {moduleLabels[activeModule] || activeModule}
                    </p>
                </div>
            </div>
        </div>
    );
}

/* ── Main StudentSection Page ── */
export default function StudentSection() {
    const [activeModule, setActiveModule] = useState(() => {
        try { return sessionStorage.getItem('ss_activeModule') || 'question-papers'; } catch { return 'question-papers'; }
    });
    const [selectedItem, setSelectedItem] = useState(null);   // { year, pdfUrl }
    const [assignmentState, setAssignmentState] = useState(() => {
        try {
            const saved = sessionStorage.getItem('ss_assignmentState');
            return saved ? JSON.parse(saved) : { classLvl: null, subject: null, chapterId: null };
        } catch { return { classLvl: null, subject: null, chapterId: null }; }
    });
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Persist to sessionStorage on change
    useEffect(() => {
        try { sessionStorage.setItem('ss_activeModule', activeModule); } catch { }
    }, [activeModule]);
    useEffect(() => {
        try { sessionStorage.setItem('ss_assignmentState', JSON.stringify(assignmentState)); } catch { }
    }, [assignmentState]);

    const handleModuleSelect = (moduleId) => {
        setActiveModule(moduleId);
        // Reset year selection when switching modules
        if (moduleId !== 'question-papers') setSelectedItem(null);
        setSidebarOpen(false);
    };

    const handleYearSelect = (item) => {
        setSelectedItem(item);
        setSidebarOpen(false);
    };

    return (
        <div
            className="flex flex-col md:flex-row"
            style={{
                height: '100vh',
                overflow: 'hidden',
                background: '#F7F8FA',
                fontFamily: "'Inter', system-ui, sans-serif",
                WebkitFontSmoothing: 'antialiased',
            }}
        >
            {/* Desktop sidebar — hidden on mobile via md: className pattern */}
            <div className="hidden md:flex" style={{ flexShrink: 0 }}>
                <Sidebar
                    activeModule={activeModule}
                    onModuleSelect={handleModuleSelect}
                    selectedYear={selectedItem?.year ?? null}
                    onYearSelect={handleYearSelect}
                    assignmentState={assignmentState}
                    setAssignmentState={setAssignmentState}
                    isOpen={true}
                    onClose={() => { }}
                />
            </div>

            {/* Mobile sidebar — drawer (always rendered, toggled by isOpen) */}
            <div className="md:hidden">
                <Sidebar
                    activeModule={activeModule}
                    onModuleSelect={handleModuleSelect}
                    selectedYear={selectedItem?.year ?? null}
                    onYearSelect={handleYearSelect}
                    assignmentState={assignmentState}
                    setAssignmentState={setAssignmentState}
                    isOpen={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                />
            </div>

            {/* ── Right: Content area ── */}
            <div className="flex flex-col flex-1 overflow-hidden">
                {/* Mobile top bar */}
                <MobileTopBar activeModule={activeModule} onHamburger={() => setSidebarOpen(true)} />

                {/* Module content */}
                <div className="flex-1 overflow-auto flex flex-col">
                    {activeModule === 'question-papers' && (
                        <PDFViewer
                            selectedYear={selectedItem?.year ?? null}
                            pdfUrl={selectedItem?.pdfUrl ?? null}
                        />
                    )}
                    {activeModule === 'assignments' && (
                        <AssignmentsModule
                            assignmentState={assignmentState}
                            setAssignmentState={setAssignmentState}
                        />
                    )}
                    {activeModule !== 'question-papers' && activeModule !== 'assignments' && (
                        <ComingSoon module={activeModule} />
                    )}
                </div>
            </div>
        </div>
    );
}
