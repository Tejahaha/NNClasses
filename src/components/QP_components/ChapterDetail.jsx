import assignmentsData from './assignmentsData';
import TopicQuestions from './TopicQuestions';
import { useState } from 'react';

export default function ChapterDetail({ classLvl, subject, chapterId, onBack }) {
    const chapters = assignmentsData[classLvl]?.[subject] || [];
    const chapter = chapters.find(c => c.id === chapterId);

    const [activeTopicId, setActiveTopicId] = useState(chapter?.topics[0]?.id || null);

    if (!chapter) return null;

    const activeTopic = chapter.topics.find(t => t.id === activeTopicId);

    return (
        <div className="flex flex-col h-full" style={{ animation: 'fadeInUp 0.4s ease both' }}>
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 md:gap-4 mb-4 md:mb-6">
                <div>
                    <h2 className="text-lg md:text-xl font-bold" style={{ color: 'var(--p-text-1)' }}>{chapter.title}</h2>
                </div>

                {chapter.videoUrl && (
                    <a
                        href={chapter.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium text-white transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 self-start"
                        style={{ background: 'linear-gradient(135deg, #EF4444, #DC2626)' }}
                    >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        Watch Video Lesson
                    </a>
                )}
            </div>

            {/* Mobile: Horizontal scrollable topic tabs */}
            <div className="md:hidden mb-3 -mx-1">
                <div
                    className="flex gap-2 overflow-x-auto px-1 pb-2"
                    style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}
                >
                    {chapter.topics.map((t, idx) => {
                        const isActive = activeTopicId === t.id;
                        return (
                            <button
                                key={t.id}
                                onClick={() => setActiveTopicId(t.id)}
                                className="flex-shrink-0 px-3.5 py-2 rounded-xl text-sm transition-all duration-200 whitespace-nowrap"
                                style={{
                                    minHeight: 40,
                                    background: isActive
                                        ? 'linear-gradient(135deg, #8B5CF6, #06B6D4)'
                                        : 'var(--p-card)',
                                    color: isActive ? '#FFFFFF' : 'var(--p-text-2)',
                                    fontWeight: isActive ? 600 : 400,
                                    border: isActive ? 'none' : '1px solid var(--p-border)',
                                    boxShadow: isActive
                                        ? '0 4px 12px rgba(139, 92, 246, 0.25)'
                                        : '0 1px 3px rgba(0,0,0,0.04)',
                                }}
                            >
                                <span className="opacity-60 mr-1 text-xs">{idx + 1}.</span>
                                {t.title}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Content Layout */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-5 flex-1 min-h-0">
                {/* Desktop Topics Sidebar — hidden on mobile */}
                <div className="hidden md:block w-56 flex-shrink-0 rounded-2xl p-4 overflow-y-auto" style={{ background: 'var(--p-card)', border: '1px solid var(--p-border)', boxShadow: 'var(--p-shadow-sm)' }}>
                    <h3 className="text-xs font-bold uppercase tracking-wider mb-4 pl-2 mt-1" style={{ color: 'var(--p-text-4)' }}>Topics</h3>
                    <ul className="space-y-1">
                        {chapter.topics.map((t, idx) => {
                            const isActive = activeTopicId === t.id;
                            return (
                                <li key={t.id}>
                                    <button
                                        onClick={() => setActiveTopicId(t.id)}
                                        className="w-full text-left px-3 py-2.5 rounded-xl text-sm transition-colors block truncate"
                                        style={{
                                            background: isActive ? 'var(--p-active-item)' : 'transparent',
                                            color: isActive ? 'var(--p-text-1)' : 'var(--p-text-3)',
                                            fontWeight: isActive ? 600 : 400
                                        }}
                                        title={t.title}
                                    >
                                        <span className="mr-1.5 opacity-60 text-xs">{idx + 1}.</span> {t.title}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Main Topic Area — fills remaining space */}
                <div className="flex-1 rounded-2xl overflow-y-auto" style={{ background: 'var(--p-card)', border: '1px solid var(--p-border)', boxShadow: 'var(--p-shadow-sm)' }}>
                    {activeTopic ? (
                        <div className="p-4 md:p-6">
                            <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6 pb-3 md:pb-4 flex items-center" style={{ color: 'var(--p-text-1)', borderBottom: '1px solid var(--p-border)' }}>
                                <span className="w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center mr-2.5 md:mr-3 text-xs md:text-sm" style={{ background: 'var(--p-active-item)', color: 'var(--p-text-3)' }}>
                                    {chapter.topics.findIndex(t => t.id === activeTopic.id) + 1}
                                </span>
                                {activeTopic.title} Practice
                            </h3>
                            <TopicQuestions key={activeTopicId} topic={activeTopic} />
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-full text-sm p-6" style={{ color: 'var(--p-text-3)' }}>
                            Select a topic to view questions
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
