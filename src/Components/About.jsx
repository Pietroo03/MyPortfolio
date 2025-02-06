import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faDiamond } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'


export default function About() {

    return (
        <>
            <section id="about" className="md:pt-16 px-2 md:px-8 lg:px-20  ">

                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Contenuto (Saluto + Paragrafo insieme da md in poi) */}
                    <div className="w-full md:w-2/3 order-2 md:order-1 flex flex-col">
                        {/* Saluto */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl flex items-center justify-start">
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
                    </div>

                    {/* Immagine (prima su mobile, a destra da md in poi) */}
                    <div className="w-full md:w-1/3 order-1 md:order-2 flex justify-center">
                        <img src="public/avatar3.png" alt="" className="w-3/4 md:w-full" />
                    </div>
                </div>


                <div className='text-3xl md:text-4xl py-10'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} rotation={90} className='text-cyan-500' />
                    <span className='pl-4'>What will you find here?</span>
                </div>
                <ul className='text-xl md:text-3xl'>
                    <li className='pb-10 md:pb-13 flex'>
                        <div>
                            <FontAwesomeIcon icon={faDiamond} className='text-blue-500' />
                        </div>
                        <div className='pl-4'>
                            <span className='font-bold text-indigo-400 inline-block group transition-transform duration-500 ease-in-out hover:scale-105'>
                                <Link to='projects' smooth={true} duration={900} className="cursor-pointer bg-left-bottom bg-gradient-to-r from-indigo-400 to-indigo-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">My Projects:</Link>
                            </span>
                            <span className='pl-4'>a selection of my work developed during the <strong className='text-cyan-500'>Boolean</strong> course</span>
                        </div>
                    </li>
                    <li className='pb-10 md:pb-13 flex'>
                        <div>
                            <FontAwesomeIcon icon={faDiamond} className='text-blue-500' />
                        </div>
                        <div className='pl-4'>
                            <span className='font-bold text-indigo-400 inline-block group transition-transform duration-200 ease-in-out hover:scale-105'>
                                <Link to='skills' smooth={true} duration={900} className="cursor-pointer bg-left-bottom bg-gradient-to-r from-indigo-400 to-indigo-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">My Skills:</Link>
                            </span>
                            <span className='pl-4'>an overview of the technologies and tools I learnt and I use to develop modern and efficient web applications.</span>
                        </div>
                    </li>
                    <li className='flex'>
                        <div>
                            <FontAwesomeIcon icon={faDiamond} className='text-blue-500' />
                        </div>
                        <div className='pl-4'>
                            <span className='font-bold text-indigo-400 inline-block group transition-transform duration-200 ease-in-out hover:scale-105'>
                                <Link to='contacts' smooth={true} duration={900} className="cursor-pointer bg-left-bottom bg-gradient-to-r from-indigo-400 to-indigo-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">My Contacts:</Link>
                            </span>
                            <span className='pl-4'>you can visit my GitHub, connect with me on LinkedIn, watch my CV and you can also contact me through email.</span>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}
