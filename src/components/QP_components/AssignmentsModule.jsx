import { useEffect, useRef } from 'react';
import ChapterGrid from './ChapterGrid';
import ChapterDetail from './ChapterDetail';
import assignmentsData from './assignmentsData';

/* ── Breadcrumb Navigation ── */
function Breadcrumbs({ assignmentState, setAssignmentState }) {
    const { classLvl, subject, chapterId } = assignmentState;
    if (!classLvl) return null;

    const crumbs = [
        { label: 'Assignments', onClick: () => setAssignmentState({ classLvl: null, subject: null, chapterId: null }) },
    ];

    if (classLvl && subject) {
        crumbs.push({
            label: `${classLvl} Class`,
            onClick: () => setAssignmentState({ classLvl: null, subject: null, chapterId: null }),
        });
        crumbs.push({
            label: subject,
            onClick: () => setAssignmentState({ classLvl, subject, chapterId: null }),
        });
    }

    if (chapterId) {
        const chap = assignmentsData[classLvl]?.[subject]?.find(c => c.id === chapterId);
        crumbs.push({ label: chap?.title || 'Chapter', onClick: null });
    }

    return (
        <nav className="flex items-center gap-1 text-sm mb-5 flex-wrap" style={{ animation: 'fadeInUp 0.3s ease both' }}>
            {crumbs.map((crumb, idx) => {
                const isLast = idx === crumbs.length - 1;
                return (
                    <span key={idx} className="flex items-center gap-1">
                        {idx > 0 && (
                            <svg className="w-3.5 h-3.5 text-gray-300 mx-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        )}
                        {isLast ? (
                            <span className="font-semibold" style={{ color: 'var(--p-text-1)' }}>{crumb.label}</span>
                        ) : (
                            <button
                                onClick={crumb.onClick}
                                className="font-medium transition-colors hover:underline"
                                style={{ color: 'var(--p-text-3)' }}
                                onMouseEnter={e => e.currentTarget.style.color = 'var(--p-text-1)'}
                                onMouseLeave={e => e.currentTarget.style.color = 'var(--p-text-3)'}
                            >
                                {crumb.label}
                            </button>
                        )}
                    </span>
                );
            })}
        </nav>
    );
}

export default function AssignmentsModule({ assignmentState, setAssignmentState }) {
    const { classLvl, subject, chapterId } = assignmentState;
    const prevStateRef = useRef(assignmentState);

    /* ── Push browser history on state change ── */
    useEffect(() => {
        const prev = prevStateRef.current;
        // Only push if the state actually changed (avoid initial mount push)
        if (
            prev.classLvl !== classLvl ||
            prev.subject !== subject ||
            prev.chapterId !== chapterId
        ) {
            window.history.pushState(
                { assignmentState: { classLvl, subject, chapterId } },
                ''
            );
        }
        prevStateRef.current = { classLvl, subject, chapterId };
    }, [classLvl, subject, chapterId]);

    /* ── Listen for browser back ── */
    useEffect(() => {
        const handlePopState = (e) => {
            if (e.state?.assignmentState) {
                setAssignmentState(e.state.assignmentState);
            } else {
                // If no state, go back to default assignments view
                setAssignmentState({ classLvl: null, subject: null, chapterId: null });
            }
        };
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, [setAssignmentState]);

    if (!classLvl || !subject) {
        const subjects = classLvl ? Object.keys(assignmentsData[classLvl] || {}) : [];
        const subjectIcons = {
            'Mathematics': '📐',
            'Physics': '⚛️',
            'Chemistry': '🧪',
            'Biology': '🧬',
            'English': '📖',
            'Telugu': '🔤',
            'Hindi': '🔤',
        };

        return (
            <div className="flex-1 flex flex-col items-center justify-center h-full px-6" style={{ background: 'var(--p-content-bg)' }}>
                <div className="flex flex-col items-center gap-5 w-full max-w-lg text-center" style={{ animation: 'fadeInUp 0.4s ease both' }}>
                    <img src="/illustrations/Classroom-rafiki.svg" alt="Classroom" style={{ width: '200px', maxWidth: '60%' }} />
                    <div>
                        <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--p-text-1)' }}>
                            Assignments Explorer
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--p-text-3)' }}>
                            {classLvl
                                ? `Select a subject below to view ${classLvl} class assignments.`
                                : 'Select a class from the top bar to get started.'
                            }
                        </p>
                    </div>

                    {/* Subject cards — visible when class is selected */}
                    {classLvl && subjects.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full mt-2" style={{ animation: 'fadeInUp 0.5s ease 0.1s both' }}>
                            {subjects.map((subj) => (
                                <button
                                    key={subj}
                                    onClick={() => setAssignmentState({ classLvl, subject: subj, chapterId: null })}
                                    className="flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-200 active:scale-[0.97]"
                                    style={{
                                        background: 'var(--p-card)',
                                        border: '1px solid var(--p-border)',
                                        boxShadow: 'var(--p-shadow-sm)',
                                        cursor: 'pointer',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'translateY(-3px)';
                                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(139, 92, 246, 0.12)';
                                        e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'var(--p-shadow-sm)';
                                        e.currentTarget.style.borderColor = 'var(--p-border)';
                                    }}
                                >
                                    <span className="text-2xl">{subjectIcons[subj] || '📚'}</span>
                                    <span className="text-sm font-semibold" style={{ color: 'var(--p-text-1)' }}>{subj}</span>
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Hint for class selection */}
                    {!classLvl && (
                        <div className="flex items-center gap-2 text-xs px-4 py-2 rounded-full" style={{ background: 'var(--p-active-item)', color: 'var(--p-text-1)' }}>
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                                <circle cx="6.5" cy="6.5" r="5.5" stroke="#8B5CF6" strokeWidth="1.3" />
                                <path d="M6.5 6v4" stroke="#8B5CF6" strokeWidth="1.3" strokeLinecap="round" />
                                <circle cx="6.5" cy="3.5" r="0.75" fill="#8B5CF6" />
                            </svg>
                            Tap the class selector (11th / 12th) in the top bar
                        </div>
                    )}
                </div>
            </div>
        );
    }

    if (!chapterId) {
        return (
            <div className="flex-1 overflow-auto h-full p-5 md:p-8" style={{ background: 'var(--p-content-bg)' }}>
                <Breadcrumbs assignmentState={assignmentState} setAssignmentState={setAssignmentState} />
                <ChapterGrid
                    classLvl={classLvl}
                    subject={subject}
                    onSelectChapter={(chapId) => setAssignmentState({ ...assignmentState, chapterId: chapId })}
                />
            </div>
        );
    }

    return (
        <div className="flex-1 overflow-auto h-full p-5 md:p-8" style={{ background: 'var(--p-content-bg)' }}>
            <Breadcrumbs assignmentState={assignmentState} setAssignmentState={setAssignmentState} />
            <ChapterDetail
                classLvl={classLvl}
                subject={subject}
                chapterId={chapterId}
                onBack={() => setAssignmentState({ ...assignmentState, chapterId: null })}
            />
        </div>
    );
}
