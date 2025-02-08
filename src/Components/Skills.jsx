import skills from '../Data/skills';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UseScrollAnimation from '../Animation/ScrollAnimation';
import { useState } from 'react';

export default function Skills() {
    const { controls } = UseScrollAnimation('skills');
    const [hoveredSkill, setHoveredSkill] = useState(null);

    return (
        <section id="skills" className="md:pt-16 px-2 md:px-8 lg:px-20 bg-gray-700">
            <div className='container mx-auto'>
                {/* Titolo animato */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-3xl md:text-4xl lg:text-5xl text-center pb-10 text-white"
                >
                    Let's go over the skills I have learned during the Boolean course and beyond.
                </motion.div>

                {/* Griglia con bottoni uniformi */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.5 }}
                    className="flex flex-wrap justify-center gap-6"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredSkill(index)}
                            onMouseLeave={() => setHoveredSkill(null)}
                        >
                            <div className="flex items-center justify-center gap-3 px-6 py-4 w-[180px] bg-gray-800 text-white rounded-xl text-xl font-semibold shadow-lg transition-transform transform hover:scale-105 text-center">
                                {/* Nome della skill */}
                                <span>{skill.name}</span>

                                {/* Icona appare solo all'hover */}
                                {hoveredSkill === index && skill.icon && (
                                    skill.type === 'fa' ? (
                                        <FontAwesomeIcon icon={skill.icon} className="text-3xl" style={{ color: skill.color }} />
                                    ) : (
                                        <skill.icon className="text-3xl" style={{ color: skill.color }} />
                                    )
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
