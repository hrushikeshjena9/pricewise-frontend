import React, { useLayoutEffect } from 'react';

function SameHeightDiv({ dependency }) {
    useLayoutEffect(() => {
        const setEqualHeight = () => {
            const divs = document.querySelectorAll('.equal-height');
            let maxHeight = 0;

            // Reset heights before calculating
            divs.forEach(div => {
                div.style.height = 'auto';
            });

            divs.forEach(div => {
                const divHeight = div.clientHeight;
                maxHeight = Math.max(maxHeight, divHeight);
            });

            divs.forEach(div => {
                div.style.height = `${maxHeight}px`;
            });
        };
        setInterval(() => {
            setEqualHeight();            
        }, 1000);


        // Optionally, listen for window resize events to adjust heights dynamically.
        window.addEventListener('resize', setEqualHeight);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener('resize', setEqualHeight);
        };
    }, [dependency]);

    return null;
}

export default SameHeightDiv;
