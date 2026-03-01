export default function FloatingVideo() {
    return (
        <div style={{ position: 'relative', height: 0, zIndex: 30, overflow: 'visible' }}>
            {/* Halo glow — electric teal tint */}
            <div style={{
                position: 'absolute',
                left: '50%',
                top: 0,
                width: 'min(80vw, 1100px)',          // ← matches card exactly now
                transform: 'translateX(-50%) translateY(-60%)',
                aspectRatio: '16 / 9',
                borderRadius: '20px',                // ← matches card border radius
                boxShadow: '0 0 60px 16px rgba(0,201,167,0.12), 0 0 120px 32px rgba(0,201,167,0.06)',
                pointerEvents: 'none',
            }} />

            {/* Floating card */}
            <div style={{
                position: 'absolute',
                left: '50%',
                top: 0,
                width: 'min(80vw, 1100px)',
                transform: 'translateX(-50%) translateY(-60%)',
                aspectRatio: '16 / 9',
                borderRadius: '20px',
                overflow: 'hidden',
                /*
                 * Gradient border: Deep Navy → Electric Teal
                 */
                background: 'linear-gradient(135deg, #050D18, #0A1628, #00C9A7)',
                padding: '3px',
                boxShadow:
                    '0 0 0 1px rgba(10,22,40,0.35),' +
                    '0 32px 80px rgba(5,13,24,0.6),' +
                    '0 0 40px rgba(0,201,167,0.15)',
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
                        src="https://www.youtube-nocookie.com/embed/iAtoZar5W58?si=JLP8je2q7QImr9BE&start=5"
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
