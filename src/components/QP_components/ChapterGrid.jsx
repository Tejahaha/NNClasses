import assignmentsData from './assignmentsData';

export default function ChapterGrid({ classLvl, subject, onSelectChapter }) {
    const chapters = assignmentsData[classLvl]?.[subject] || [];

    return (
        <div style={{ animation: 'fadeInUp 0.4s ease both' }}>
            <h2 className="text-xl font-bold mb-1 text-gray-800">
                {subject}
            </h2>
            <p className="text-sm text-gray-500 mb-6">{classLvl} Class • {chapters.length} Chapters available</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {chapters.map((chap, idx) => (
                    <div
                        key={chap.id}
                        onClick={() => onSelectChapter(chap.id)}
                        className="bg-white rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:shadow-lg"
                        style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.03)', border: '1px solid #F3F4F6', transform: 'translateY(0)' }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div className="w-11 h-11 rounded-xl mb-4 flex items-center justify-center font-bold text-base" style={{ background: '#F9F6F0', color: '#0A1628' }}>
                            {idx + 1}
                        </div>
                        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 text-sm">{chap.title}</h3>
                        <p className="text-xs text-gray-500 mb-4">{chap.topics.length} Topics</p>

                        <div className="flex items-center text-xs font-medium" style={{ color: '#0A1628' }}>
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
