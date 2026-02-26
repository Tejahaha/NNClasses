export default function FloatingVideo() {
    return (
        <div style={{ position: 'relative', height: 0, zIndex: 30, overflow: 'visible' }}>
            {/* Halo glow — soft blue tint per brand spec */}
            <div style={{
                position: 'absolute',
                left: '50%',
                top: 0,
                width: 'min(82vw, 1140px)',
                transform: 'translateX(-50%) translateY(-50%)',
                aspectRatio: '16 / 9',
                borderRadius: '24px',
                boxShadow: '0 0 80px 24px rgba(31,94,120,0.28), 0 0 160px 48px rgba(95,168,196,0.14)',
                pointerEvents: 'none',
            }} />

            {/* Floating card — brand.light border (#5FA8C4) */}
            <div style={{
                position: 'absolute',
                left: '50%',
                top: 0,
                width: 'min(80vw, 1100px)',
                transform: 'translateX(-50%) translateY(-50%)',
                aspectRatio: '16 / 9',
                borderRadius: '20px',
                overflow: 'hidden',
                /*
                 * Gradient border: brand primary → brand light (academic blue tones)
                 * 3px padding = visible border thickness
                 */
                background: 'linear-gradient(135deg, #123B4A, #1F5E78, #5FA8C4)',
                padding: '3px',
                boxShadow:
                    '0 0 0 1px rgba(31,94,120,0.35),' +
                    '0 32px 80px rgba(18,59,74,0.5),' +
                    '0 0 40px rgba(95,168,196,0.22)',
            }}>
                {/* Inner clip */}
                <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '17px',
                    overflow: 'hidden',
                    background: '#000',
                }}>
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/iAtoZar5W58?si=JLP8je2q7QImr9BE&start=5"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        style={{ display: 'block', width: '100%', height: '100%' }}
                    />
                </div>
            </div>
        </div>
    );
}
