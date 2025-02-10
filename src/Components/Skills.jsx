import skills from '../Data/skills';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UseScrollAnimation from '../Animation/ScrollAnimation';
import { useState } from 'react';

export default function Skills() {
    const { controls } = UseScrollAnimation('skills');
    const [hoveredSkill, setHoveredSkill] = useState(null);

    return (
        <>
            <section id="skills" className="py-20 md:pb-80 md:pt-50 lg:pt-30  px-2 md:px-8 lg:px-10 bg-gray-700">
                <div className='container mx-auto'>
                    {/* Titolo animato */}
                    <motion.div
                        initial={{ opacity: 0, y: 200 }} // L'intero blocco parte più in basso
                        animate={controls} // Sale verso l'alto
                        transition={{ duration: 1, ease: "easeOut" }}
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
                        animate={controls} // Sale verso l'alto
                        transition={{ duration: 1.3, ease: "easeOut" }}
                        className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-15 pt-10 md:pt-20"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 200 }} // L'intero blocco parte più in basso
                                animate={controls}
                                transition={{ duration: 1.4, delay: index * 0.2, ease: "easeOut" }} // Ritardo progressivo per effetto fluido
                                onMouseEnter={() => setHoveredSkill(index)}
                                onMouseLeave={() => setHoveredSkill(null)}
                            >
                                <div
                                    className="group flex items-center justify-center gap-0 m-3 px-6 py-4 lg:px-12 lg:py-8 w-[131px] md:w-[180px] lg:w-[220px] 2xl:w-[250px] bg-blue-400/40 text-white rounded-xl text-lg md:text-xl lg:text-2xl font-semibold shadow-2xl border-2 border-transparent border-opacity-0 transition-transform transform-gpu will-change-transform
                                    md:hover:scale-110 hover:border-opacity-100 hover:border-blue-400 duration-500 ease-in-out text-center h-auto md:h-[88px]">
                                    {/* Nome della skill */}
                                    <span className="transition-all duration-500 ease-in-out ">
                                        {skill.name}
                                    </span>

                                    {/* Icona con animazione fluida */}
                                    <span
                                        className="md:hidden group-hover:inline   transition-all duration-500 ease-in-out">
                                        {skill.type === 'fa' ? (
                                            <FontAwesomeIcon icon={skill.icon} className="ml-1 md:ml-2 text-xl md:text-3xl lg:text-4xl" style={{ color: skill.color }} />
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

        </>
    );
}
