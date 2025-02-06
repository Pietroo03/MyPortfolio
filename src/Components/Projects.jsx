import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay, Navigation } from 'swiper/modules';
import projects from "../Data/projects";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faDiamond } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {

    // Riferimento al Swiper
    const swiperRef = useRef([]);

    return (
        <section id="projects" className="pt-30 md:pt-65 px-2 md:px-8 lg:px-20">
            <div className="container mx-auto">
                <div className="text-3xl md:text-4xl lg:text-5xl text-center">
                    Here you can see my projects developed during the Boolean course
                </div>
                {projects.map((project, index) => (
                    <div key={index} className="mb-20">
                        {/* Titolo a sinistra */}
                        <div className="text-2xl md:text-4xl lg:text-5xl pt-8 md:pt-15 text-left text-sky-600 font-bold">{project.title}</div>

                        {/* Carosello */}
                        <div className="pt-8 md:p-15 mx-auto h-auto w-full flex justify-center items-center relative">
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
                            <div
                                className={`hidden md:block swiper-button-prev-${index} absolute top-1/2 left-1/15 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full cursor-pointer z-3`}
                            >
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </div>
                            <div
                                className={`hidden md:block swiper-button-next-${index} absolute top-1/2 right-1/15 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full cursor-pointer z-3`}
                            >
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                        </div>

                        {/* Due colonne */}
                        <div className="flex flex-col md:flex-row flex-wrap items-center pt-10">
                            {/* Funzioni */}
                            <div className="w-full md:w-1/3">
                                <h3 className="text-3xl font-semibold mb-8">Features</h3>
                                <ul className="text-xl xl:text-2xl ">
                                    {Array.isArray(project.functions) && project.functions.map((func, i) => (
                                        <li key={i} className='flex pb-4 md:pb-6 items-center'>
                                            <FontAwesomeIcon icon={faDiamond} className='text-blue-500 pr-5' />
                                            <span>{func}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Video */}
                            <div className="w-full md:w-2/3 md:pl-15 pt-8 md:pt-0 ">
                                <video
                                    src={project.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full rounded-lg shadow-lg"
                                ></video>
                            </div>

                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}
