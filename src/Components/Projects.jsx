import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay, Navigation } from 'swiper/modules';
import projects from "../Data/projects";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {

    // Riferimento al Swiper
    const swiperRef = useRef([]);

    return (
        <section id="projects" className="md:pt-16 px-2 md:px-8 lg:px-20">
            <div className="text-4xl md:text-5xl lg:text-6xl text-center">
                Here you can see my projects developed during the Boolean course
            </div>
            {projects.map((project, index) => (
                <div key={index} className="mb-16">
                    {/* Titolo a sinistra */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-left">{project.title}</h2>

                    {/* Carosello */}
                    <div className="p-15 mx-auto h-auto w-full flex justify-center items-center relative">
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
                            className={`swiper-button-prev-${index} absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full cursor-pointer z-3`}
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </div>
                        <div
                            className={`swiper-button-next-${index} absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full cursor-pointer z-3`}
                        >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </div>

                    {/* Due colonne */}
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        {/* Funzioni */}
                        <div className="w-full md:w-1/3">
                            <h3 className="text-2xl font-semibold mb-4">Features</h3>
                            <ul className="list-disc list-inside text-lg">
                                {Array.isArray(project.functions) && project.functions.map((func, i) => (
                                    <li key={i}>{func}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Video */}
                        <div className="w-full md:w-2/3 pl-10 ">
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
        </section>
    );
}
