import { useState } from 'react';
import usePortalState from '../../hooks/usePortalState';
import TopBar from './TopBar';
import PortalSidebar from './PortalSidebar';
import BottomNav from './BottomNav';
import Dashboard from './Dashboard';
import ComingSoon from './ComingSoon';
import PDFViewer from '../QP_components/PDFViewer';
import AssignmentsModule from '../QP_components/AssignmentsModule';

export default function PortalLayout() {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const {
        activeModule,
        selectedItem,
        classLevel,
        setClassLevel,
        assignmentState,
        setAssignmentState,
        qpSidebarOpen,
        setQpSidebarOpen,
        handleClassChange,
        handleModuleSelect,
        handleYearSelect
    } = usePortalState(setMobileMenuOpen);

    // Determine which content to show
    const renderContent = () => {
        switch (activeModule) {
            case 'dashboard':
                return <Dashboard onNavigate={handleModuleSelect} />;

            case 'question-papers':
                return (
                    <div className="flex flex-1 overflow-hidden">
                        {/* QP sub-sidebar for year selection (desktop) */}
                        <div className="hidden md:flex" style={{ flexShrink: 0 }}>
                            <div
                                className="flex flex-col h-full overflow-y-auto"
                                style={{
                                    width: 240,
                                    background: 'var(--p-sub-surface)',
                                    backdropFilter: 'blur(12px)',
                                    borderRight: '1px solid var(--p-border)',
                                }}
                            >
                                <QPSubSidebar
                                    selectedYear={selectedItem?.year ?? null}
                                    onYearSelect={handleYearSelect}
                                    assignmentState={assignmentState}
                                    setAssignmentState={setAssignmentState}
                                />
                            </div>
                        </div>

                        {/* Mobile QP bottom sheet */}
                        <div className="md:hidden">
                            {qpSidebarOpen && (
                                <div
                                    className="fixed inset-0 z-[45] bg-black/40 backdrop-blur-sm"
                                    onClick={() => setQpSidebarOpen(false)}
                                    style={{
                                        animation: 'portalFadeIn 0.2s ease both',
                                    }}
                                />
                            )}
                            <div
                                className="fixed left-0 right-0 bottom-0 z-50 overflow-hidden"
                                style={{
                                    maxHeight: '70vh',
                                    background: 'var(--p-dropdown-bg)',
                                    backdropFilter: 'blur(24px)',
                                    borderTop: '1px solid var(--p-border)',
                                    borderRadius: '20px 20px 0 0',
                                    boxShadow: '0 -8px 32px rgba(0,0,0,0.2)',
                                    transform: qpSidebarOpen ? 'translateY(0)' : 'translateY(100%)',
                                    transition: 'transform 0.35s cubic-bezier(0.32, 0.72, 0, 1)',
                                }}
                                onTouchStart={(e) => {
                                    const touch = e.touches[0];
                                    e.currentTarget._swipeStartY = touch.clientY;
                                    e.currentTarget._swipeDelta = 0;
                                }}
                                onTouchMove={(e) => {
                                    const touch = e.touches[0];
                                    const delta = touch.clientY - (e.currentTarget._swipeStartY || 0);
                                    e.currentTarget._swipeDelta = delta;
                                    if (delta > 0) {
                                        e.currentTarget.style.transform = `translateY(${delta}px)`;
                                        e.currentTarget.style.transition = 'none';
                                    }
                                }}
                                onTouchEnd={(e) => {
                                    const delta = e.currentTarget._swipeDelta || 0;
                                    e.currentTarget.style.transition = 'transform 0.35s cubic-bezier(0.32, 0.72, 0, 1)';
                                    if (delta > 80) {
                                        setQpSidebarOpen(false);
                                        e.currentTarget.style.transform = 'translateY(100%)';
                                    } else {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }
                                }}
                            >
                                {/* Drag handle */}
                                <div className="flex items-center justify-center pt-3 pb-1">
                                    <div
                                        className="w-10 h-1 rounded-full"
                                        style={{ background: 'var(--p-text-4)', opacity: 0.4 }}
                                    />
                                </div>

                                {/* Sheet header */}
                                <div
                                    className="flex items-center justify-between px-5 py-3"
                                    style={{ borderBottom: '1px solid var(--p-border)' }}
                                >
                                    <div className="flex items-center gap-2.5">
                                        <div
                                            className="w-8 h-8 rounded-lg flex items-center justify-center"
                                            style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)' }}
                                        >
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                                                <path d="M3 1.5A1.5 1.5 0 0 1 4.5 0h5.086a1.5 1.5 0 0 1 1.06.44l2.415 2.414A1.5 1.5 0 0 1 13.5 3.914V13.5A1.5 1.5 0 0 1 12 15H4.5A1.5 1.5 0 0 1 3 13.5v-12Z" fill="white" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-bold" style={{ color: 'var(--p-text-1)' }}>
                                            Select Year
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => setQpSidebarOpen(false)}
                                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                                        style={{ color: 'var(--p-text-4)', background: 'var(--p-hover-violet)' }}
                                    >
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Scrollable content */}
                                <div className="overflow-y-auto" style={{ maxHeight: 'calc(70vh - 100px)' }}>
                                    <QPSubSidebar
                                        selectedYear={selectedItem?.year ?? null}
                                        onYearSelect={handleYearSelect}
                                        assignmentState={assignmentState}
                                        setAssignmentState={setAssignmentState}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col flex-1 overflow-hidden">
                            {/* Mobile sub-nav toggle — prominent CTA bar */}
                            <button
                                onClick={() => setQpSidebarOpen(true)}
                                className="md:hidden flex items-center gap-3 px-4 py-3.5 w-full text-left group"
                                style={{
                                    background: 'var(--p-card)',
                                    borderBottom: '1px solid var(--p-border)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                            >
                                {/* Left gradient accent bar */}
                                <span
                                    style={{
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        width: 4,
                                        background: 'linear-gradient(180deg, #8B5CF6, #06B6D4)',
                                        borderRadius: '0 4px 4px 0',
                                    }}
                                />

                                {/* Icon container */}
                                <span
                                    className="flex items-center justify-center shrink-0"
                                    style={{
                                        width: 36,
                                        height: 36,
                                        borderRadius: 10,
                                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.12), rgba(6, 182, 212, 0.08))',
                                        border: '1px solid rgba(139, 92, 246, 0.15)',
                                    }}
                                >
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M3 1.5A1.5 1.5 0 0 1 4.5 0h5.086a1.5 1.5 0 0 1 1.06.44l2.415 2.414A1.5 1.5 0 0 1 13.5 3.914V13.5A1.5 1.5 0 0 1 12 15H4.5A1.5 1.5 0 0 1 3 13.5v-12Z" fill="#8B5CF6" />
                                        <path d="M9.5 0v3a1 1 0 0 0 1 1h3" stroke="white" strokeWidth="0.8" fill="none" />
                                        <path d="M5.5 6.5h5M5.5 9h5M5.5 11.5h3" stroke="white" strokeWidth="0.9" strokeLinecap="round" />
                                    </svg>
                                </span>

                                {/* Label + helper text */}
                                <span className="flex-1 min-w-0">
                                    <span
                                        className="flex items-center gap-1.5 text-sm font-semibold"
                                        style={{ color: 'var(--p-text-1)' }}
                                    >
                                        {selectedItem?.year
                                            ? `Paper ${selectedItem.year}`
                                            : 'Tap to Browse Papers'
                                        }
                                        {/* Pulsing dot for attention */}
                                        {!selectedItem && (
                                            <span
                                                className="w-2 h-2 rounded-full animate-pulse"
                                                style={{
                                                    background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)',
                                                    boxShadow: '0 0 6px rgba(139, 92, 246, 0.5)',
                                                }}
                                            />
                                        )}
                                    </span>
                                    <span
                                        className="text-xs block mt-0.5"
                                        style={{ color: 'var(--p-text-4)' }}
                                    >
                                        {selectedItem?.year
                                            ? 'Tap to switch year'
                                            : 'Select a year to view question paper'
                                        }
                                    </span>
                                </span>

                                {/* Chevron arrow */}
                                <svg
                                    width="18" height="18" viewBox="0 0 18 18" fill="none"
                                    className="shrink-0"
                                    style={{ color: 'var(--p-accent)' }}
                                >
                                    <path d="M7 4.5l4.5 4.5L7 13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            <PDFViewer
                                selectedYear={selectedItem?.year ?? null}
                                pdfUrl={selectedItem?.pdfUrl ?? null}
                            />
                        </div>
                    </div>
                );

            case 'assignments':
                return (
                    <AssignmentsModule
                        assignmentState={{ ...assignmentState, classLvl: classLevel }}
                        setAssignmentState={(newState) => {
                            // If classLvl changed from within the module, keep header in sync
                            if (newState.classLvl && newState.classLvl !== classLevel) {
                                setClassLevel(newState.classLvl);
                            }
                            setAssignmentState(newState);
                        }}
                    />
                );

            default:
                return <ComingSoon module={activeModule} />;
        }
    };

    return (
        <div
            className="flex h-screen overflow-hidden"
            style={{
                fontFamily: "'Inter', 'Poppins', sans-serif",
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                background: 'var(--p-bg-gradient)',
            }}
        >
            {/* Sidebar */}
            <PortalSidebar
                collapsed={sidebarCollapsed}
                activeModule={activeModule}
                onModuleSelect={handleModuleSelect}
                mobileOpen={mobileMenuOpen}
                onMobileClose={() => setMobileMenuOpen(false)}
            />

            {/* Main area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* TopBar */}
                <TopBar
                    sidebarCollapsed={sidebarCollapsed}
                    onToggleSidebar={() => setSidebarCollapsed(c => !c)}
                    onMobileMenu={() => setMobileMenuOpen(true)}
                    activeModule={activeModule}
                    classLevel={classLevel}
                    onClassChange={handleClassChange}
                />

                {/* Content — safe-area padding for mobile BottomNav */}
                <main className="flex-1 overflow-hidden flex flex-col pb-[calc(72px+env(safe-area-inset-bottom))] md:pb-0">
                    {/* Mobile module transition — 150ms fade */}
                    <div
                        key={activeModule}
                        className="flex-1 flex flex-col overflow-hidden animate-[moduleIn_0.15s_ease_both] md:animate-none"
                    >
                        {renderContent()}
                    </div>
                </main>

                {/* Mobile bottom navigation — sole module navigator on mobile */}
                <BottomNav
                    activeModule={activeModule}
                    onModuleSelect={handleModuleSelect}
                />
            </div>
        </div>
    );
}

/* ── QP Year Selection Sub-Sidebar ── */
function QPSubSidebar({ selectedYear, onYearSelect }) {
    const AVAILABLE_YEARS = [2026, 2025, 2024, 2023, 2022];
    const sortedYears = [...AVAILABLE_YEARS].sort((a, b) => b - a);

    return (
        <div className="p-4">
            <p
                className="text-[10px] font-bold uppercase tracking-[0.15em] mb-3 px-1"
                style={{ color: 'var(--p-text-4)' }}
            >
                Previous Papers
            </p>
            <div className="space-y-1">
                {sortedYears.map(year => {
                    const isActive = selectedYear === year;
                    return (
                        <button
                            key={year}
                            onClick={() => onYearSelect({ year, pdfUrl: `/qp_PDFs/${year}.pdf` })}
                            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 relative"
                            style={{
                                background: isActive
                                    ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.06))'
                                    : 'transparent',
                                color: isActive ? 'var(--p-accent)' : 'var(--p-text-3)',
                                fontWeight: isActive ? 600 : 400,
                            }}
                            onMouseEnter={e => {
                                if (!isActive) {
                                    e.currentTarget.style.background = 'var(--p-hover-violet)';
                                    e.currentTarget.style.color = 'var(--p-text-2)';
                                }
                            }}
                            onMouseLeave={e => {
                                if (!isActive) {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = 'var(--p-text-3)';
                                }
                            }}
                        >
                            {/* Active indicator */}
                            <span
                                className="absolute left-0 rounded-r-full transition-all duration-200"
                                style={{
                                    width: isActive ? 3 : 0,
                                    top: 6,
                                    bottom: 6,
                                    background: 'linear-gradient(180deg, #8B5CF6, #06B6D4)',
                                }}
                            />
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ flexShrink: 0 }}>
                                <path
                                    d="M3 1.5A1.5 1.5 0 0 1 4.5 0h5.086a1.5 1.5 0 0 1 1.06.44l2.415 2.414A1.5 1.5 0 0 1 13.5 3.914V13.5A1.5 1.5 0 0 1 12 15H4.5A1.5 1.5 0 0 1 3 13.5v-12Z"
                                    fill={isActive ? '#8B5CF6' : '#CBD5E1'}
                                />
                                <path d="M9.5 0v3a1 1 0 0 0 1 1h3" stroke="white" strokeWidth="0.8" fill="none" />
                                <path d="M5.5 6.5h5M5.5 9h5M5.5 11.5h3" stroke="white" strokeWidth="0.9" strokeLinecap="round" />
                            </svg>
                            <span>Paper {year}</span>
                            {isActive && (
                                <span
                                    className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-md"
                                    style={{
                                        background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)',
                                        color: '#FFFFFF',
                                    }}
                                >
                                    OPEN
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}


