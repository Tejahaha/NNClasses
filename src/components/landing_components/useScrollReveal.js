import { useEffect, useRef } from 'react';

export function useScrollReveal(options = { threshold: 0.08 }) {
    const ref = useRef(null);

    useEffect(() => {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.querySelectorAll('.section-animate').forEach((el) => el.classList.add('visible'));
                }
            });
        }, options);

        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [options.threshold]);

    return ref;
}
