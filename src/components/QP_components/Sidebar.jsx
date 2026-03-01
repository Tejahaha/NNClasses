/**
 * Sidebar.jsx
 * Left navigation panel for the Student Section portal.
 * Contains module list + QP year accordion.
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import YearItem from './YearItem';
import AssignmentsSidebar from './AssignmentsSidebar';

// Years available in public/qp_PDFs/
const AVAILABLE_YEARS = [2026, 2025, 2024, 2023, 2022];


const MODULES = [
    { id: 'question-papers', label: 'Question Papers', icon: QuestionPapersIcon },
    { id: 'notes', label: 'Notes', icon: NotesIcon },
    { id: 'assignments', label: 'Assignments', icon: AssignmentsIcon },
    { id: 'results', label: 'Results', icon: ResultsIcon },
];

/* ── Module Icons ─────────────────────────────── */
function QuestionPapersIcon({ color }) {
    return (
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <rect x="3" y="1" width="11" height="15" rx="2" stroke={color} strokeWidth="1.6" />
            <path d="M6 5.5h5M6 8.5h5M6 11.5h3" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
            <path d="M14 5h3l-3-3v3Z" fill={color} />
            <rect x="12" y="5" width="5" height="11" rx="1.5" fill="#F7F8FA" stroke={color} strokeWidth="1.4" />
            <path d="M14 8h3M14 11h3M14 14h2" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
        </svg>
    );
}
function NotesIcon({ color }) {
    return (
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <rect x="3" y="2" width="14" height="16" rx="2" stroke={color} strokeWidth="1.6" />
            <path d="M7 7h6M7 10h6M7 13h4" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
            <circle cx="5.5" cy="2.5" r="1" fill={color} />
            <circle cx="14.5" cy="2.5" r="1" fill={color} />
        </svg>
    );
}
function AssignmentsIcon({ color }) {
    return (
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <rect x="3" y="3" width="14" height="14" rx="2" stroke={color} strokeWidth="1.6" />
            <path d="M7 7l2 2 4-4" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 12h6" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
        </svg>
    );
}
function ResultsIcon({ color }) {
    return (
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <rect x="2" y="10" width="4" height="8" rx="1" fill={color} />
            <rect x="8" y="6" width="4" height="12" rx="1" fill={color} opacity="0.7" />
            <rect x="14" y="2" width="4" height="16" rx="1" fill={color} opacity="0.4" />
        </svg>
    );
}

/* ── Sidebar Component ─────────────────────────── */
export default function Sidebar({ activeModule, onModuleSelect, selectedYear, onYearSelect, assignmentState, setAssignmentState, isOpen, onClose }) {
    const [qpOpen, setQpOpen] = useState(true);
    const [assignmentsOpen, setAssignmentsOpen] = useState(true);
    const navigate = useNavigate();

    const sortedYears = [...AVAILABLE_YEARS].sort((a, b) => b - a);

    return (
        <>
            {/* Mobile overlay backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-30 md:hidden"
                    style={{ background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(2px)' }}
                    onClick={onClose}
                />
            )}

            {/* Sidebar panel */}
            <aside
                className="fixed top-0 left-0 h-full z-40 flex flex-col md:relative md:flex md:z-auto"
                style={{
                    width: '268px',
                    background: '#FFFFFF',
                    borderRight: '1px solid #E5E7EB',
                    boxShadow: '2px 0 16px rgba(0,0,0,0.06)',
                    transform: `translateX(${isOpen ? '0%' : '-100%'})`,
                    transition: 'transform 0.28s cubic-bezier(0.4,0,0.2,1)',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                }}
                // Always visible on md+
                aria-label="Student section navigation"
            >
                {/* ── Portal Header ── */}
                <div
                    className="flex items-center justify-between px-5 py-5"
                    style={{ borderBottom: '1px solid #F0F2F5' }}
                >
                    <div className="flex items-center gap-3">
                        <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center"
                            style={{ background: 'linear-gradient(135deg, #1F5E78, #2E7C97)' }}
                        >
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                                <path d="M10 2L2 7l8 5 8-5-8-5Z" fill="white" />
                                <path d="M2 13l8 5 8-5" stroke="white" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-bold text-sm" style={{ color: '#1F5E78', lineHeight: '1.2' }}>
                                N & N Academy
                            </p>
                            <p className="text-xs" style={{ color: '#9CA3AF' }}>Student Section</p>
                        </div>
                    </div>

                    {/* Mobile close */}
                    <button
                        className="md:hidden p-1.5 rounded-lg transition-colors"
                        style={{ color: '#6B7280' }}
                        onClick={onClose}
                        aria-label="Close sidebar"
                        onMouseEnter={e => { e.currentTarget.style.background = '#F3F4F6'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                    >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>

                {/* ── Module Navigation ── */}
                <nav className="flex-1 px-3 py-4">
                    <p className="text-xs font-semibold uppercase tracking-widest mb-3 px-2" style={{ color: '#9CA3AF' }}>
                        Modules
                    </p>

                    <ul className="space-y-1">
                        {MODULES.map(mod => {
                            const isActive = activeModule === mod.id;
                            const IconComp = mod.icon;
                            const iconColor = isActive ? '#1F5E78' : '#9CA3AF';

                            return (
                                <li key={mod.id}>
                                    {/* Module button */}
                                    <button
                                        onClick={() => onModuleSelect(mod.id)}
                                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 relative"
                                        style={{
                                            background: isActive ? '#EEF6FA' : 'transparent',
                                            color: isActive ? '#1F5E78' : '#4B5563',
                                            fontWeight: isActive ? 600 : 400,
                                        }}
                                        onMouseEnter={e => {
                                            if (!isActive) {
                                                e.currentTarget.style.background = '#F3F9FC';
                                                e.currentTarget.style.color = '#1F5E78';
                                            }
                                        }}
                                        onMouseLeave={e => {
                                            if (!isActive) {
                                                e.currentTarget.style.background = 'transparent';
                                                e.currentTarget.style.color = '#4B5563';
                                            }
                                        }}
                                    >
                                        {/* Active left bar */}
                                        <span
                                            className="absolute left-0 top-2 bottom-2 rounded-r-full"
                                            style={{
                                                width: isActive ? '3px' : '0',
                                                background: '#1F5E78',
                                                transition: 'width 0.2s ease',
                                            }}
                                        />

                                        <span style={{ flexShrink: 0, marginLeft: '4px' }}>
                                            <IconComp color={iconColor} />
                                        </span>

                                        <span className="text-sm flex-1">{mod.label}</span>

                                        {/* Chevron for QP (accordion toggle) */}
                                        {mod.id === 'question-papers' && (
                                            <svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 14 14"
                                                fill="none"
                                                style={{
                                                    transform: isActive && qpOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    transition: 'transform 0.28s ease',
                                                    color: isActive ? '#1F5E78' : '#9CA3AF',
                                                    flexShrink: 0,
                                                }}
                                                onClick={e => {
                                                    if (isActive) {
                                                        e.stopPropagation();
                                                        setQpOpen(o => !o);
                                                    }
                                                }}
                                            >
                                                <path d="M2.5 5L7 9.5 11.5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        )}

                                        {/* Chevron for Assignments (accordion toggle) */}
                                        {mod.id === 'assignments' && (
                                            <svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 14 14"
                                                fill="none"
                                                style={{
                                                    transform: isActive && assignmentsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    transition: 'transform 0.28s ease',
                                                    color: isActive ? '#1F5E78' : '#9CA3AF',
                                                    flexShrink: 0,
                                                }}
                                                onClick={e => {
                                                    if (isActive) {
                                                        e.stopPropagation();
                                                        setAssignmentsOpen(o => !o);
                                                    }
                                                }}
                                            >
                                                <path d="M2.5 5L7 9.5 11.5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        )}
                                    </button>

                                    {/* QP year accordion */}
                                    {mod.id === 'question-papers' && isActive && (
                                        <div
                                            style={{
                                                maxHeight: qpOpen ? `${sortedYears.length * 52}px` : '0px',
                                                overflow: 'hidden',
                                                transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)',
                                            }}
                                        >
                                            <div
                                                className="ml-4 mt-1 mb-1 pl-3 space-y-0.5"
                                                style={{ borderLeft: '1.5px solid #D1E9F3' }}
                                            >
                                                <p className="text-xs font-semibold uppercase tracking-wider mb-2 mt-2 px-1" style={{ color: '#9CA3AF' }}>
                                                    Previous Papers
                                                </p>
                                                {sortedYears.map(year => (
                                                    <YearItem
                                                        key={year}
                                                        year={year}
                                                        isActive={selectedYear === year}
                                                        onClick={() => onYearSelect({ year, pdfUrl: `/qp_PDFs/${year}.pdf` })}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Assignments Nested Accordion */}
                                    {mod.id === 'assignments' && isActive && (
                                        <div
                                            style={{
                                                maxHeight: assignmentsOpen ? '500px' : '0px',
                                                overflow: 'hidden',
                                                transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)',
                                            }}
                                        >
                                            <AssignmentsSidebar
                                                assignmentState={assignmentState}
                                                setAssignmentState={setAssignmentState}
                                            />
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* ── Back to Home ── */}
                <div className="px-4 pb-6 pt-3" style={{ borderTop: '1px solid #F0F2F5' }}>
                    <button
                        onClick={() => navigate('/')}
                        className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm transition-all duration-200"
                        style={{ color: '#6B7280' }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#F3F4F6'; e.currentTarget.style.color = '#374151'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#6B7280'; }}
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M10 12L5.5 8 10 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Back to Home
                    </button>
                </div>
            </aside>
        </>
    );
}
