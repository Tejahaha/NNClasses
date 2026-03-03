import assignmentsData from './assignmentsData';

export default function ChapterGrid({ classLvl, subject, onSelectChapter }) {
    const chapters = assignmentsData[classLvl]?.[subject] || [];

    return (
        <div style={{ animation: 'fadeInUp 0.4s ease both' }}>
            <h2 className="text-lg md:text-xl font-bold mb-1" style={{ color: 'var(--p-text-1)' }}>
                {subject}
            </h2>
            <p className="text-xs md:text-sm mb-4 md:mb-6" style={{ color: 'var(--p-text-3)' }}>{classLvl} Class • {chapters.length} Chapters available</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {chapters.map((chap, idx) => (
                    <div
                        key={chap.id}
                        onClick={() => onSelectChapter(chap.id)}
                        className="rounded-xl md:rounded-2xl p-4 md:p-5 cursor-pointer transition-all duration-300 hover:shadow-lg active:scale-[0.97]"
                        style={{ background: 'var(--p-card)', boxShadow: 'var(--p-shadow-sm)', border: '1px solid var(--p-border)', transform: 'translateY(0)' }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div className="w-9 h-9 md:w-11 md:h-11 rounded-lg md:rounded-xl mb-3 md:mb-4 flex items-center justify-center font-bold text-sm md:text-base" style={{ background: 'var(--p-active-item)', color: 'var(--p-text-1)' }}>
                            {idx + 1}
                        </div>
                        <h3 className="font-semibold mb-2 line-clamp-2 text-sm" style={{ color: 'var(--p-text-1)' }}>{chap.title}</h3>
                        <p className="text-xs mb-4" style={{ color: 'var(--p-text-3)' }}>{chap.topics.length} Topics</p>

                        <div className="flex items-center text-xs font-medium" style={{ color: 'var(--p-text-1)' }}>
                            View Chapter
                            <svg className="w-3.5 h-3.5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
