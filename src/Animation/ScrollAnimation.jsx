import { useEffect, useState } from 'react';
import { useAnimation } from 'framer-motion';

export default function UseScrollAnimation(sectionId) {
    const controls = useAnimation();
    const [isVisible, setIsVisible] = useState(false);

    // Definisci l'animazione in base alla sezione
    const getAnimation = () => {
        switch (sectionId) {
            case "about":
                return { opacity: 1, y: 0, scale: 1 }; // Dall'alto verso il basso
            case "projects":
                return { opacity: 1, x: 0, scale: 1 }; // Da sinistra
            case "skills":
                return { opacity: 1, y: 0, scale: 1 }; // Dal basso verso l'alto
            default:
                return { opacity: 1, y: 0, scale: 1 };
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    controls.start(getAnimation());
                } else {
                    setIsVisible(false);
                    controls.start(
                        sectionId === "projects"
                            ? { opacity: 0, x: -400, scale: 0.5 } // Reset a sinistra
                            : { opacity: 0, y: sectionId === "about" ? -200 : 200, scale: 0.8 } // Reset in base alla direzione
                    );
                }
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById(sectionId);
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, [controls, sectionId]);

    return { controls, isVisible };
}
