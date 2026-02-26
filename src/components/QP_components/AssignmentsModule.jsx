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
                            <span className="font-semibold" style={{ color: '#1F5E78' }}>{crumb.label}</span>
                        ) : (
                            <button
                                onClick={crumb.onClick}
                                className="font-medium transition-colors hover:underline"
                                style={{ color: '#6B7280' }}
                                onMouseEnter={e => e.currentTarget.style.color = '#1F5E78'}
                                onMouseLeave={e => e.currentTarget.style.color = '#6B7280'}
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
        return (
            <div className="flex-1 flex flex-col items-center justify-center h-full px-6" style={{ background: '#F7F8FA' }}>
                <div className="flex flex-col items-center gap-5 max-w-md text-center" style={{ animation: 'fadeInUp 0.4s ease both' }}>
                    <img src="/illustrations/Classroom-rafiki.svg" alt="Classroom" style={{ width: '260px', maxWidth: '80%' }} />
                    <div>
                        <h3 className="font-bold text-lg mb-2" style={{ color: '#1F5E78' }}>
                            Assignments Explorer
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                            Select a class and subject from the sidebar to view available assignments and chapters.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    if (!chapterId) {
        return (
            <div className="flex-1 overflow-auto h-full p-5 md:p-8" style={{ background: '#F7F8FA' }}>
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
        <div className="flex-1 overflow-auto h-full p-5 md:p-8" style={{ background: '#F7F8FA' }}>
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
