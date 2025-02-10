import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faDiamond } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import UseScrollAnimation from '../Animation/ScrollAnimation';

export default function About() {

    const { controls } = UseScrollAnimation('about')
    const [offset, setOffset] = useState(100);

    useEffect(() => {
        const updateOffset = () => {
            if (window.innerWidth < 640) { // sm
                setOffset(-85);
            } else if (window.innerWidth <= 1024) { // md
                setOffset(-50);
            } else if (window.innerWidth >= 1280) {
                setOffset(-80)
            }
        }

        updateOffset();
        window.addEventListener('resize', updateOffset);

        return () => window.removeEventListener('resize', updateOffset);
    }, []);

    return (
        <>
            <section id="about" className="py-10 md:py-40 lg:pt-30 px-2 md:px-8 lg:px-10 bg-gray-900">
                <div className="container mx-auto">
                    <div className="row flex flex-col md:flex-row items-center justify-between">
                        {/* Contenuto (Saluto + Paragrafo insieme da md in poi) */}
                        <motion.div
                            initial={{ opacity: 0, y: -200 }} // L'intero blocco parte più in basso
                            animate={controls} // Sale verso l'alto
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="w-full md:w-2/3 order-2 md:order-1 flex flex-col"
                        >
                            {/* Saluto */}
                            <h1 className="text-3xl pb-5 md:text-4xl lg:text-5xl flex items-center justify-start">
                                <div>Hi, I'm Pietro</div>
                            </h1>

                            {/* Paragrafo */}
                            <div className="text-xl md:text-2xl lg:text-3xl md:py-10">
                                <p>
                                    I'm a Jr. Full-Stack Web Developer, I specialize in building dynamic and user-friendly web applications,
                                    with a strong focus on clean code, performance, and responsive design. This is my online space where I
                                    share with you my projects and my skills.
                                </p>
                            </div>
                        </motion.div>

                        {/* Immagine (prima su mobile, a destra da md in poi) */}
                        <motion.div
                            initial={{ opacity: 0, y: -200 }} // L'intero blocco parte più in basso
                            animate={controls} // Sale verso l'alto
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="w-full md:w-1/3 order-1 md:order-2 flex justify-center">
                            <img src="public/avatar3.png" alt="" className="w-3/4 md:w-full" />
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: -200 }} // L'intero blocco parte più in basso
                        animate={controls} // Sale verso l'alto
                        transition={{ duration: 1.3, ease: "easeOut" }}
                        className='text-2xl sm:text-3xl md:text-4xl pb-8 pt-20 md:pb-15'>

                        <FontAwesomeIcon icon={faMagnifyingGlass} rotation={90} className='text-cyan-500' />
                        <span className='pl-4'>What will you find here?</span>
                    </motion.div>
                    <motion.ul
                        initial={{ opacity: 0, y: -200 }} // L'intero blocco parte più in basso
                        animate={controls} // Sale verso l'alto
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className='text-xl md:text-3xl'>
                        <li className='pb-10 md:pb-13 flex items-center'>
                            <div>
                                <FontAwesomeIcon icon={faDiamond} className='text-blue-500' />
                            </div>
                            <div className='pl-4'>
                                <span className='font-bold text-indigo-400 inline-block group transition-transform duration-500 ease-in-out hover:scale-105'>
                                    <Link to='projects' smooth={true} duration={2500} offset={offset} className="cursor-pointer bg-left-bottom bg-gradient-to-r from-indigo-400 to-indigo-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">My Projects:</Link>
                                </span>
                                <span className='pl-4'>a selection of my work developed during the <strong className='text-cyan-500'>Boolean</strong> course</span>
                            </div>
                        </li>
                        <li className='pb-10 md:pb-13 flex items-center'>
                            <div>
                                <FontAwesomeIcon icon={faDiamond} className='text-blue-500' />
                            </div>
                            <div className='pl-4'>
                                <span className='font-bold text-indigo-400 inline-block group transition-transform duration-200 ease-in-out hover:scale-105'>
                                    <Link to='skills' smooth={true} offset={-50} duration={2500} className="cursor-pointer bg-left-bottom bg-gradient-to-r from-indigo-400 to-indigo-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">My Skills:</Link>
                                </span>
                                <span className='pl-4'>an overview of the technologies and tools I learnt and I use to develop modern and efficient web applications.</span>
                            </div>
                        </li>
                        <li className='flex items-center'>
                            <div>
                                <FontAwesomeIcon icon={faDiamond} className='text-blue-500' />
                            </div>
                            <div className='pl-4'>
                                <span className='font-bold text-indigo-400 inline-block group transition-transform duration-200 ease-in-out hover:scale-105'>
                                    <Link to='contacts' smooth={true} duration={2500} className="cursor-pointer bg-left-bottom bg-gradient-to-r from-indigo-400 to-indigo-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">My Contacts:</Link>
                                </span>
                                <span className='pl-4'>you can visit my GitHub, connect with me on LinkedIn, watch my CV and you can also contact me through email.</span>
                            </div>
                        </li>
                    </motion.ul>
                </div>
            </section >
            <div className='text-gray-900 rotate-180 w-full'>
                <svg className="w-full h-[55px] md:h-[110px] lg:h-[150px] 3xl:h-[400px]"
                    viewBox="0 0 1440 100"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                >
                    <path className="wavePath-haxJK1 animationPaused-2hZ4IO "
                        d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
                        fill="currentColor" />
                </svg>
            </div>
        </>
    )
}
