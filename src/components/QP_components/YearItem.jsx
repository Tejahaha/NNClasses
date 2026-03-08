/**
 * YearItem.jsx
 * A single clickable year entry inside the QP sidebar accordion.
 */

export default function YearItem({ year, isActive, onClick }) {
    return (
        <button
            onClick={onClick}
            className="w-full text-left flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 group relative overflow-hidden bg-transparent text-[#4B5563] hover:bg-[#FAFAFA] hover:text-[#0A1628]"
            style={isActive ? { background: '#F9F6F0', color: '#0A1628' } : {}}
            aria-pressed={isActive}
        >
            {/* Left accent bar */}
            <span
                className="absolute left-0 top-0 bottom-0 rounded-r-full transition-all duration-200"
                style={{
                    width: isActive ? '3px' : '0px',
                    background: '#00C9A7',
                }}
            />

            {/* File icon */}
            <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                style={{ flexShrink: 0, marginLeft: '6px', opacity: isActive ? 1 : 0.5 }}
            >
                <path
                    d="M3 1.5A1.5 1.5 0 0 1 4.5 0h5.086a1.5 1.5 0 0 1 1.06.44l2.415 2.414A1.5 1.5 0 0 1 13.5 3.914V13.5A1.5 1.5 0 0 1 12 15H4.5A1.5 1.5 0 0 1 3 13.5v-12Z"
                    fill={isActive ? '#00C9A7' : '#9CA3AF'}
                />
                <path
                    d="M9.5 0v3a1 1 0 0 0 1 1h3"
                    stroke="white"
                    strokeWidth="0.8"
                    fill="none"
                />
                <path d="M5.5 6.5h5M5.5 9h5M5.5 11.5h3" stroke="white" strokeWidth="0.9" strokeLinecap="round" />
            </svg>

            <span className="text-sm font-medium">
                Question Paper {year}
            </span>

            {isActive && (
                <span
                    className="ml-auto text-xs font-semibold px-1.5 py-0.5 rounded"
                    style={{ background: '#D4A62A', color: '#fff', fontSize: '10px' }}
                >
                    OPEN
                </span>
            )}
        </button>
    );
}
