import React, { useEffect, useState } from 'react';

const SunAnimation = ({ className }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [sunPosition, setSunPosition] = useState(0);
    const [sunOpacity, setSunOpacity] = useState(1);
    const [sunClass, setSunClass] = useState('');

    useEffect(() => {
        setSunClass(className);
    }, [className]);

    useEffect(() => {
        const easeOutCubic = (t) => --t * t * t + 1;

        const handleScroll = () => {
            const currentPosition = window.scrollY;
            setScrollPosition(currentPosition);

            const transitionStart = 80; 
            const maxSunPosition = 400; 
            const scrollRange = maxSunPosition - transitionStart;

            let newSunPosition = 0;
            let newSunOpacity = 1;

            if (currentPosition > transitionStart) {
                const relativeScrollPosition = (currentPosition - transitionStart) * 0.3; // Slow down the movement by a factor of 0.1
                const easedPosition = easeOutCubic(Math.min(1, relativeScrollPosition / scrollRange));
                newSunPosition = Math.min(maxSunPosition, easedPosition * maxSunPosition);

                // Calculate new opacity based on scroll position
                newSunOpacity = Math.max(0.1, 1 - (relativeScrollPosition / scrollRange));
            }

            setSunPosition(newSunPosition);
            setSunOpacity(newSunOpacity);
        };

        const debounce = (func, wait) => {
            let timeout;
            return () => {
                clearTimeout(timeout);
                timeout = setTimeout(func, wait);
            };
        };

        const debouncedHandleScroll = debounce(handleScroll, 10);

        window.addEventListener('scroll', debouncedHandleScroll);
        return () => {
            window.removeEventListener('scroll', debouncedHandleScroll);
        };
    }, []);

    return (
        <div className={`sun ${sunClass}`} style={{ top: `${sunPosition}px`, opacity: sunOpacity }}></div>
    );
};

export default SunAnimation;