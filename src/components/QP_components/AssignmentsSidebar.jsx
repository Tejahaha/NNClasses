import { useState } from 'react';
import assignmentsData from './assignmentsData';

export default function AssignmentsSidebar({ assignmentState, setAssignmentState }) {
    const [expandedClass, setExpandedClass] = useState(assignmentState.classLvl || null);

    const classes = Object.keys(assignmentsData);

    const toggleClass = (cls) => {
        if (expandedClass === cls) {
            setExpandedClass(null);
        } else {
            setExpandedClass(cls);
        }
    };

    const selectSubject = (cls, sub) => {
        setAssignmentState({ classLvl: cls, subject: sub, chapterId: null });
    };

    return (
        <div className="mt-1 pb-2">
            {classes.map(cls => {
                const isClassExpanded = expandedClass === cls;
                return (
                    <div key={cls}>
                        <button
                            onClick={(e) => { e.stopPropagation(); toggleClass(cls); }}
                            className="w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors"
                            style={{
                                color: isClassExpanded ? '#1F5E78' : '#4B5563',
                                background: isClassExpanded ? '#EEF6FA' : 'transparent',
                                fontWeight: isClassExpanded ? 600 : 400
                            }}
                        >
                            <span className="ml-6">{cls} Class</span>
                            <svg
                                width="14" height="14" viewBox="0 0 14 14" fill="none"
                                style={{
                                    transform: isClassExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.28s ease',
                                }}
                            >
                                <path d="M2.5 5L7 9.5 11.5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {/* Subjects only — no chapters here */}
                        <div
                            style={{
                                maxHeight: isClassExpanded ? '200px' : '0px',
                                overflow: 'hidden',
                                transition: 'max-height 0.35s ease'
                            }}
                        >
                            <div className="ml-8 mt-1 space-y-0.5" style={{ borderLeft: '1.5px solid #D1E9F3' }}>
                                {isClassExpanded && Object.keys(assignmentsData[cls]).map(sub => {
                                    const isSubSelected = assignmentState.classLvl === cls && assignmentState.subject === sub;
                                    return (
                                        <button
                                            key={sub}
                                            onClick={(e) => { e.stopPropagation(); selectSubject(cls, sub); }}
                                            className="w-full text-left px-3 py-1.5 text-sm rounded-lg transition-colors block"
                                            style={{
                                                color: isSubSelected ? '#1F5E78' : '#6B7280',
                                                background: isSubSelected ? '#F3F9FC' : 'transparent',
                                                fontWeight: isSubSelected ? 600 : 400
                                            }}
                                        >
                                            <span className="ml-2">{sub}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
