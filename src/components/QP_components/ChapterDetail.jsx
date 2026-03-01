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
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">{chapter.title}</h2>
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

            {/* Content Layout — full width */}
            <div className="flex flex-col md:flex-row gap-5 flex-1 min-h-0">
                {/* Topics Sidebar */}
                <div className="w-full md:w-56 flex-shrink-0 bg-white rounded-2xl p-4 overflow-y-auto" style={{ border: '1px solid #E5E7EB', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 pl-2 mt-1">Topics</h3>
                    <ul className="space-y-1">
                        {chapter.topics.map((t, idx) => {
                            const isActive = activeTopicId === t.id;
                            return (
                                <li key={t.id}>
                                    <button
                                        onClick={() => setActiveTopicId(t.id)}
                                        className="w-full text-left px-3 py-2.5 rounded-xl text-sm transition-colors block truncate"
                                        style={{
                                            background: isActive ? '#F9F6F0' : 'transparent',
                                            color: isActive ? '#0A1628' : '#4B5563',
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
                <div className="flex-1 bg-white rounded-2xl overflow-y-auto" style={{ border: '1px solid #E5E7EB', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                    {activeTopic ? (
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-6 pb-4 border-b border-gray-100 flex items-center">
                                <span className="w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm" style={{ background: '#F3F4F6', color: '#6B7280' }}>
                                    {chapter.topics.findIndex(t => t.id === activeTopic.id) + 1}
                                </span>
                                {activeTopic.title} Practice
                            </h3>
                            <TopicQuestions topic={activeTopic} />
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                            Select a topic to view questions
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
