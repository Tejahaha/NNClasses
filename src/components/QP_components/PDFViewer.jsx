/**
 * PDFViewer.jsx
 * Main content panel — shows placeholder when no year selected,
 * PDF preview + download when a year is active.
 */

export default function PDFViewer({ selectedYear, pdfUrl }) {
    /* ── Empty state ── */
    if (!selectedYear) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center h-full px-6" style={{ background: '#F7F8FA' }}>
                <div
                    className="flex flex-col items-center gap-5 max-w-md text-center"
                    style={{ animation: 'fadeInUp 0.5s ease both' }}
                >
                    {/* Illustration */}
                    <img src="/illustrations/Classroom-rafiki.svg" alt="Classroom" style={{ width: '260px', maxWidth: '80%' }} />

                    <div>
                        <h3 className="font-semibold text-lg mb-2" style={{ color: '#1F5E78' }}>
                            Select a Year to Preview
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                            Choose a question paper year from the sidebar to preview and download the PDF.
                        </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs px-4 py-2 rounded-full" style={{ background: '#EEF6FA', color: '#2E7C97' }}>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <circle cx="6.5" cy="6.5" r="5.5" stroke="#2E7C97" strokeWidth="1.3" />
                            <path d="M6.5 6v4" stroke="#2E7C97" strokeWidth="1.3" strokeLinecap="round" />
                            <circle cx="6.5" cy="3.5" r="0.75" fill="#2E7C97" />
                        </svg>
                        Expand "Question Papers" in the sidebar
                    </div>
                </div>
            </div>
        );
    }

    /* ── PDF Preview Card ── */
    return (
        <div
            className="flex-1 flex flex-col h-full overflow-auto px-6 py-6 md:px-10 md:py-8"
            style={{ background: '#F7F8FA' }}
        >
            {/* Page title bar */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#9CA3AF' }}>
                        Question Papers
                    </p>
                    <h1 className="text-xl font-bold" style={{ color: '#1F5E78' }}>
                        Question Paper — {selectedYear}
                    </h1>
                </div>

                {/* Badge */}
                <span
                    className="text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{ background: '#EEF6FA', color: '#1F5E78', border: '1px solid #D1E9F3' }}
                >
                    {selectedYear} Edition
                </span>
            </div>

            {/* Preview card */}
            <div
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{
                    background: '#FFFFFF',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                    border: '1px solid #E5E7EB',
                    flex: 1,
                    minHeight: '520px',
                    maxHeight: '680px',
                }}
            >
                {/* Card header */}
                <div
                    className="flex items-center justify-between px-5 py-4"
                    style={{ borderBottom: '1px solid #F0F2F5' }}
                >
                    <div className="flex items-center gap-2.5">
                        <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center"
                            style={{ background: 'linear-gradient(135deg, #1F5E78, #2E7C97)' }}
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <rect x="2" y="1" width="9" height="13" rx="1.5" fill="white" opacity="0.9" />
                                <path d="M4 5h5M4 7.5h5M4 10h3.5" stroke="#1F5E78" strokeWidth="1.1" strokeLinecap="round" />
                                <rect x="7" y="5" width="7" height="9" rx="1.2" fill="#D4A62A" opacity="0.25" stroke="#D4A62A" strokeWidth="1" />
                                <path d="M8.5 7.5h4M8.5 9.5h4M8.5 11.5h2.5" stroke="#D4A62A" strokeWidth="1" strokeLinecap="round" opacity="0.9" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-semibold" style={{ color: '#1F5E78' }}>
                                N & N Academy — Question Paper
                            </p>
                            <p className="text-xs" style={{ color: '#9CA3AF' }}>Academic Year {selectedYear}</p>
                        </div>
                    </div>

                    <span className="text-xs px-2 py-1 rounded-md" style={{ background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0' }}>
                        PDF
                    </span>
                </div>

                {/* iFrame PDF viewer */}
                <iframe
                    key={pdfUrl}
                    src={pdfUrl}
                    title={`Question Paper ${selectedYear}`}
                    className="w-full flex-1"
                    style={{ border: 'none', minHeight: '480px' }}
                    loading="lazy"
                />
            </div>

            {/* Download button */}
            <div className="mt-5 flex items-center gap-3">
                <a
                    href={pdfUrl}
                    download={`QP_${selectedYear}_N&N_Academy.pdf`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 font-semibold text-sm rounded-xl px-6 py-3 transition-all duration-200"
                    style={{
                        background: 'linear-gradient(135deg, #1F5E78, #2E7C97)',
                        color: '#FFFFFF',
                        boxShadow: '0 4px 14px rgba(31,94,120,0.30)',
                        textDecoration: 'none',
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(31,94,120,0.40)';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.transform = '';
                        e.currentTarget.style.boxShadow = '0 4px 14px rgba(31,94,120,0.30)';
                    }}
                >
                    {/* Download icon */}
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <path d="M8.5 2v9M5 8l3.5 3.5L12 8" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2.5 13.5h12" stroke="white" strokeWidth="1.7" strokeLinecap="round" />
                    </svg>
                    Download PDF — {selectedYear}
                </a>

                <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-medium text-sm rounded-xl px-5 py-3 transition-all duration-200"
                    style={{
                        background: '#FFFFFF',
                        color: '#4B5563',
                        border: '1.5px solid #E5E7EB',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                        textDecoration: 'none',
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.background = '#F3F9FC';
                        e.currentTarget.style.borderColor = '#D1E9F3';
                        e.currentTarget.style.color = '#1F5E78';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.background = '#FFFFFF';
                        e.currentTarget.style.borderColor = '#E5E7EB';
                        e.currentTarget.style.color = '#4B5563';
                    }}
                >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path d="M6 2H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                        <path d="M8 1h6v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14 1L7.5 7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                    Open in New Tab
                </a>
            </div>
        </div>
    );
}
