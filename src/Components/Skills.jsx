import skills from '../Data/skills';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UseScrollAnimation from '../Animation/ScrollAnimation';
import { useState } from 'react';

export default function Skills() {
    const { controls } = UseScrollAnimation('skills');
    const [hoveredSkill, setHoveredSkill] = useState(null);

    return (
        <section id="skills" className="pt-30 pb-40 md:pt-80 md:pb-100 px-2 md:px-8 lg:px-20 bg-gray-700">
            <div className='container mx-auto'>
                {/* Titolo animato */}
                <motion.div
                    initial={{ opacity: 0, y: 200 }} // L'intero blocco parte più in basso
                    animate={{ opacity: 1, y: 0 }} // Sale verso l'alto
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-3xl md:text-4xl lg:text-5xl text-center md:pb-10 text-white"
                >
                    <div>Let's go over the skills I have learned during the <span className='text-cyan-500'><strong>Boolean</strong></span>  course and beyond.
                    </div>
                    <br />
                    <div>The goal is to continuously add more skills to this section.</div>
                </motion.div>

                {/* Griglia con bottoni uniformi */}
                <motion.div
                    initial={{ opacity: 0, y: 200 }} // L'intero blocco parte più in basso
                    animate={{ opacity: 1, y: 0 }} // Sale verso l'alto
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-15 pt-10 md:pt-20"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 200 }} // L'intero blocco parte più in basso
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: index * 0.3, ease: "easeOut" }} // Ritardo progressivo per effetto fluido
                            onMouseEnter={() => setHoveredSkill(index)}
                            onMouseLeave={() => setHoveredSkill(null)}
                        >
                            <div
                                className="group flex items-center justify-center gap-0 m-3 px-6 py-4 lg:px-12 lg:py-8 w-[130px] md:w-[180px] lg:w-[220px] bg-blue-400/40 text-white rounded-xl text-lg md:text-xl lg:text-2xl font-semibold shadow-lg border-2 border-transparent border-opacity-0 transition-transform transform-gpu will-change-transform hover:scale-105 hover:border-opacity-100 hover:border-blue-400 duration-500 ease-in-out text-center">
                                {/* Nome della skill */}
                                <span className="transition-all duration-500 ease-in-out group-hover:mr-2">
                                    {skill.name}
                                </span>

                                {/* Icona con animazione fluida */}
                                <span
                                    className="opacity-0 w-0 scale-75 group-hover:w-auto group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out">
                                    {skill.type === 'fa' ? (
                                        <FontAwesomeIcon icon={skill.icon} className="ml-2 text-2xl md:text-3xl lg:text-4xl" style={{ color: skill.color }} />
                                    ) : (
                                        <skill.icon className="ml-2 text-2xl md:text-3xl lg:text-4xl" style={{ color: skill.color }} />
                                    )}
                                </span>
                            </div>
                        </motion.div>
                    ))}

                </motion.div>
            </div>
        </section>
    );
}
