import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay, Navigation } from 'swiper/modules';
import projects from "../Data/projects";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faDiamond } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import UseScrollAnimation from '../Animation/ScrollAnimation';

export default function Projects() {

    const { controls, isVisible } = UseScrollAnimation('projects')
    const swiperRef = useRef([]);

    return (
        <>
            <section id="projects" className="pt-10 md:py-40 lg:pt-30 md:pt-65 px-2 md:px-8 lg:px-10 bg-gray-800">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: 200 }} // L'intero blocco parte più in basso
                        animate={{ opacity: 1, x: 0 }} // Sale verso l'alto
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-3xl md:text-4xl lg:text-5xl text-center pb-10">
                        Here you can see my projects developed during the Boolean course
                    </motion.div>
                    {projects.map((project, index) => (
                        <div key={index} className="mb-20">
                            {/* Titolo a sinistra */}
                            <motion.div
                                initial={{ opacity: 0, x: 200 }} // L'intero blocco parte più in basso
                                animate={{ opacity: 1, x: 0 }} // Sale verso l'alto
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="text-3xl md:text-5xl lg:text-5xl pt-8 md:pt-15 text-left text-sky-600 font-bold">
                                {project.title}
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 200 }} // L'intero blocco parte più in basso
                                animate={{ opacity: 1, x: 0 }} // Sale verso l'alto
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="text-xl md:text-2xl lg:text-3xl pt-8 md:pt-15 text-left">
                                {project.description}
                            </motion.div>

                            {/* Carosello */}
                            <motion.div
                                initial={{ opacity: 0, x: 200 }} // L'intero blocco parte più in basso
                                animate={{ opacity: 1, x: 0 }} // Sale verso l'alto
                                transition={{ duration: 1.3, ease: "easeOut" }}
                                className="pt-8 lg:p-15 mx-auto h-auto w-full flex justify-center items-center relative">
                                {/* Swiper Carousel */}
                                <Swiper
                                    ref={(el) => (swiperRef.current[index] = el)}
                                    spaceBetween={10}
                                    slidesPerView={1}
                                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                                    modules={[Autoplay, Navigation]}
                                    loop={true}
                                    className="w-full h-auto"
                                    navigation={{
                                        prevEl: `.swiper-button-prev-${index}`,
                                        nextEl: `.swiper-button-next-${index}`,
                                    }}
                                >
                                    {/* Controllo che project.image sia un array */}
                                    {Array.isArray(project.image) && project.image.map((img, i) => (
                                        <SwiperSlide key={i}>
                                            <img src={img} alt={`Slide ${i}`} className="w-full h-auto object-contain rounded-lg" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {/* Bottoni dentro il carosello */}
                                <motion.div
                                    initial={{ opacity: 0, x: 200 }} // L'intero blocco parte più in basso
                                    animate={{ opacity: 1, x: 0 }} // Sale verso l'alto
                                    transition={{ duration: 1.3, ease: "easeOut" }}
                                    className={`hidden md:block swiper-button-prev-${index} absolute top-1/2 left-1/15 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full cursor-pointer z-3`}
                                >
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 200 }} // L'intero blocco parte più in basso
                                    animate={{ opacity: 1, x: 0 }} // Sale verso l'alto
                                    transition={{ duration: 1.3, ease: "easeOut" }}
                                    className={`hidden md:block swiper-button-next-${index} absolute top-1/2 right-1/15 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full cursor-pointer z-3`}
                                >
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </motion.div>
                            </motion.div>

                            {/* Due colonne */}
                            <motion.div
                                initial={{ opacity: 0, x: 200 }} // L'intero blocco parte più in basso
                                animate={{ opacity: 1, x: 0 }} // Sale verso l'alto
                                transition={{ duration: 1.4, ease: "easeOut" }}
                                className="flex flex-col md:flex-row flex-wrap items-center lg:pt-10">
                                {/* Funzioni */}
                                <motion.div
                                    initial={{ opacity: 0, x: 200 }} // L'intero blocco parte più in basso
                                    animate={{ opacity: 1, x: 0 }} // Sale verso l'alto
                                    transition={{ duration: 1.4, ease: "easeOut" }}
                                    className="w-full lg:w-1/3 py-5 md:py-10">
                                    <h3 className="text-3xl font-semibold mb-8">Features</h3>
                                    <motion.ul
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={controls}
                                        transition={{ duration: 0.5, delay: 0.5, }}
                                        className="text-xl xl:text-2xl ">
                                        {Array.isArray(project.functions) && project.functions.map((func, i) => (
                                            <motion.li
                                                initial={{ opacity: 0, x: 200 }} // L'intero blocco parte più in basso
                                                animate={{ opacity: 1, x: 0 }} // Sale verso l'alto
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                                key={i}
                                                className='flex pb-4 md:pb-6 items-center'>
                                                <FontAwesomeIcon icon={faDiamond} className='text-blue-500 pr-5' />
                                                <span>{func}</span>
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                </motion.div>

                                {/* Video */}
                                <motion.div
                                    initial={{ opacity: 0, x: 200 }} // L'intero blocco parte più in basso
                                    animate={{ opacity: 1, x: 0 }} // Sale verso l'alto
                                    transition={{ duration: 1.4, ease: "easeOut" }}
                                    className="w-full lg:w-2/3 lg:pl-15  md:pt-0 ">
                                    <video
                                        src={project.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full rounded-lg shadow-lg"
                                    ></video>
                                </motion.div>

                            </motion.div>

                        </div>
                    ))}
                </div>
            </section>
            <div className='text-gray-700 w-full'>
                <svg className="w-full h-[55px] md:h-[110px] lg:h-[150px] 3xl:h-[400px] aspect-[1440/100]"
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

    );
}
