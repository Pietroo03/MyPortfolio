import { useEffect, useState } from 'react';
import { useAnimation } from 'framer-motion';

export default function UseScrollAnimation(sectionId) { // <-- Esporta con 'export function'
    const controls = useAnimation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    controls.start({ opacity: 1, y: 0, scale: 1 });
                } else {
                    setIsVisible(false);
                    controls.start({ opacity: 0, y: 50, scale: 0.5 }); // Reset animazione
                }
            },
            { threshold: 0.2 } // Attiva quando il 20% della sezione è visibile
        );

        const section = document.getElementById(sectionId);
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, [controls, sectionId]);

    return { controls, isVisible };
}
