import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min';

const AuroraBackground = ({ children }) => {
    const [vantaEffect, setVantaEffect] = useState(null);
    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                FOG({
                    el: vantaRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    highlightColor: 0x003399, // School Brand Blue
                    midtoneColor: 0x001133,  // Darker Blue
                    lowlightColor: 0x000000, // Black
                    baseColor: 0x000511,     // Very Deep Blue
                    blurFactor: 0.60,
                    speed: 1.50,
                    zoom: 0.80
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <div ref={vantaRef} className="relative w-full h-full overflow-hidden">
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
};

export default AuroraBackground;
