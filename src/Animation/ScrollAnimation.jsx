import { useEffect, useState } from 'react';
import { useAnimation } from 'framer-motion';

export default function UseScrollAnimation(sectionId) {
    const controls = useAnimation();
    const [isVisible, setIsVisible] = useState(false);

    // Animation based on the section
    const getAnimation = () => {
        switch (sectionId) {
            case "about":
                return { opacity: 1, y: 0, scale: 1 }; // Top to Bottom
            case "projects":
                return { opacity: 1, x: 0, scale: 1 }; // From left
            case "skills":
                return { opacity: 1, y: 0, scale: 1 }; // Bottom to Top
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
                    // Reset
                    setIsVisible(false);
                    controls.start(
                        sectionId === "projects"
                            ? { opacity: 0, x: -400, scale: 0.5 }
                            : { opacity: 0, y: sectionId === "about" ? -200 : 200, scale: 0.8 }
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

    return { controls };
}
