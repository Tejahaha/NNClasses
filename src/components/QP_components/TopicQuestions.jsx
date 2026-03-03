import { useState } from 'react';

export default function TopicQuestions({ topic }) {
    // Track selected answer per question: { [questionId]: 'Option X' }
    const [selected, setSelected] = useState({});

    if (!topic?.questions?.length) {
        return <div className="text-sm py-4" style={{ color: 'var(--p-text-3)' }}>No questions available for this topic.</div>;
    }

    const handleSelect = (qId, option) => {
        // Once answered, lock it in
        if (selected[qId]) return;
        setSelected(prev => ({ ...prev, [qId]: option }));
    };

    const answeredCount = Object.keys(selected).length;
    const correctCount = topic.questions.filter(q => selected[q.id] === q.correctAnswer).length;

    return (
        <div className="space-y-4 md:space-y-5">
            {topic.questions.map((q, idx) => {
                const chosen = selected[q.id];
                const isAnswered = !!chosen;
                const isCorrect = chosen === q.correctAnswer;

                return (
                    <div
                        key={q.id}
                        className="rounded-xl overflow-hidden transition-all duration-300"
                        style={{
                            background: 'var(--p-card)',
                            border: isAnswered
                                ? `1.5px solid ${isCorrect ? '#86EFAC' : '#FCA5A5'}`
                                : '1px solid var(--p-border)',
                            boxShadow: isAnswered
                                ? `0 4px 16px ${isCorrect ? 'rgba(34,197,94,0.08)' : 'rgba(239,68,68,0.08)'}`
                                : 'var(--p-shadow-sm)',
                        }}
                    >
                        {/* Question */}
                        <div className="p-3 pb-2 md:p-4 md:pb-3">
                            <div className="flex items-start gap-2 md:gap-3">
                                <span
                                    className="font-bold min-w-[24px] h-6 w-6 md:min-w-[28px] md:h-7 md:w-7 rounded-lg flex items-center justify-center text-xs flex-shrink-0 mt-0.5"
                                    style={{ background: 'var(--p-active-item)', color: 'var(--p-text-3)' }}
                                >
                                    {idx + 1}
                                </span>
                                <span className="flex-1 leading-relaxed text-sm md:text-base font-medium" style={{ color: 'var(--p-text-2)' }}>
                                    {q.text}
                                </span>
                            </div>
                        </div>

                        {/* Options — full width on mobile, indented on desktop */}
                        <div className="px-3 pb-3 md:px-4 md:pb-4 md:pl-[52px] space-y-2">
                            {q.options.map((opt, oIdx) => {
                                const letter = String.fromCharCode(65 + oIdx);
                                const isThis = chosen === opt;
                                const isCorrectOption = opt === q.correctAnswer;

                                let bg = 'var(--p-card)';
                                let border = 'var(--p-border)';
                                let color = 'var(--p-text-2)';
                                let ringColor = 'var(--p-border-strong)';

                                if (isAnswered) {
                                    if (isCorrectOption) {
                                        bg = '#F0FDF4';
                                        border = '#86EFAC';
                                        color = '#166534';
                                        ringColor = '#22C55E';
                                    } else if (isThis && !isCorrect) {
                                        bg = '#FEF2F2';
                                        border = '#FCA5A5';
                                        color = '#991B1B';
                                        ringColor = '#EF4444';
                                    } else {
                                        bg = '#F9FAFB';
                                        border = '#F3F4F6';
                                        color = '#9CA3AF';
                                    }
                                }

                                return (
                                    <button
                                        key={oIdx}
                                        onClick={() => handleSelect(q.id, opt)}
                                        disabled={isAnswered}
                                        className="w-full flex items-center text-sm min-h-[44px] p-3 rounded-xl transition-all duration-200 text-left active:scale-[0.97]"
                                        style={{
                                            background: bg,
                                            border: `1.5px solid ${border}`,
                                            color,
                                            cursor: isAnswered ? 'default' : 'pointer',
                                            opacity: isAnswered && !isCorrectOption && !isThis ? 0.6 : 1,
                                        }}
                                        onMouseEnter={e => {
                                            if (!isAnswered) {
                                                e.currentTarget.style.background = '#FAFAFA';
                                                e.currentTarget.style.borderColor = '#93C5FD';
                                            }
                                        }}
                                        onMouseLeave={e => {
                                            if (!isAnswered) {
                                                e.currentTarget.style.background = 'var(--p-card)';
                                                e.currentTarget.style.borderColor = 'var(--p-border)';
                                            }
                                        }}
                                    >
                                        {/* Radio circle */}
                                        <div
                                            className="w-5 h-5 rounded-full mr-2.5 md:mr-3 flex items-center justify-center flex-shrink-0 transition-all"
                                            style={{
                                                border: `2px solid ${ringColor}`,
                                                background: isThis ? ringColor : 'transparent',
                                            }}
                                        >
                                            {isThis && (
                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            )}
                                        </div>
                                        <span className="font-medium mr-1.5 opacity-50 text-xs">{letter}.</span>
                                        <span className="flex-1 text-sm">{opt}</span>

                                        {/* Result icon */}
                                        {isAnswered && isCorrectOption && (
                                            <svg className="w-5 h-5 ml-2 flex-shrink-0" style={{ color: '#22C55E' }} fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                        {isAnswered && isThis && !isCorrect && (
                                            <svg className="w-5 h-5 ml-2 flex-shrink-0" style={{ color: '#EF4444' }} fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Feedback after answering */}
                        {isAnswered && (
                            <div
                                className="mx-3 mb-3 md:mx-4 md:mb-4 md:ml-[52px] p-3 rounded-xl text-xs font-medium flex items-center transition-all"
                                style={{
                                    background: isCorrect ? '#F0FDF4' : '#FEF2F2',
                                    color: isCorrect ? '#166534' : '#991B1B',
                                    borderLeft: `3px solid ${isCorrect ? '#22C55E' : '#EF4444'}`,
                                    animation: 'fadeInUp 0.3s ease both',
                                }}
                            >
                                {isCorrect ? (
                                    <>
                                        <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Correct! Well done.
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        Incorrect. The correct answer is <strong className="ml-1">{q.correctAnswer}</strong>.
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                );
            })}

            {/* Score summary — shown after all answered */}
            {answeredCount === topic.questions.length && (
                <div
                    className="rounded-2xl p-4 md:p-5 text-center mt-4 md:mt-6"
                    style={{
                        background: 'linear-gradient(135deg, #F9F6F0, #E2E8F0)',
                        border: '1px solid #E2E8F0',
                        animation: 'fadeInUp 0.4s ease both',
                    }}
                >
                    <p className="text-2xl font-bold mb-1" style={{ color: '#0A1628' }}>
                        {correctCount}/{topic.questions.length}
                    </p>
                    <p className="text-sm" style={{ color: '#00C9A7' }}>
                        {correctCount === topic.questions.length
                            ? '🎉 Perfect score! Excellent work!'
                            : correctCount >= topic.questions.length / 2
                                ? '👍 Good effort! Review the ones you missed.'
                                : '📖 Keep practicing! Review the chapter material.'}
                    </p>
                </div>
            )}
        </div>
    );
}
