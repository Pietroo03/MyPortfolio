import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faDiamond } from '@fortawesome/free-solid-svg-icons'


export default function About() {

    return (

        <>
            <section id="about" className="h-screen py-16 mx-20">
                <h1 className="text-7xl flex items-center">
                    <img src="/mano-che-saluta.gif" alt="" style={{ width: '72px' }} className='inline' />
                    <span className='pl-4'> Hi, I'm Pietro</span>
                </h1>

                <div className='text-3xl py-20'>
                    <p>I'm a Jr. Full-Stack Web Developer, I specialize in building dynamic and user-friendly web applications, with a strong focus on clean code, performance, and responsive design. This is my online space where I share with you my projects and my skills.</p>
                    <div className='text-4xl py-20'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} rotation={90} className='text-cyan-500' />
                        <span className='pl-4'>What will you find here?</span>
                    </div>
                    <ul>
                        <li className='pb-13 flex'>
                            <div>
                                <FontAwesomeIcon icon={faDiamond} className='text-blue-500' />
                            </div>
                            <div className='pl-4'>
                                <span className='font-bold text-indigo-400 inline-block group transition-transform duration-500 ease-in-out hover:scale-105 transition duration-200 ease-in-out'>
                                    <a href="#projects" className="bg-left-bottom bg-gradient-to-r from-indigo-400 to-indigo-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ">My Projects:</a>
                                </span>
                                <span className='pl-4'>a selection of my work developed during the <strong className='text-cyan-500'>Boolean</strong> course</span>
                            </div>
                        </li>
                        <li className='pb-13 flex'>
                            <div>
                                <FontAwesomeIcon icon={faDiamond} className='text-blue-500' />
                            </div>
                            <div className='pl-4'>
                                <span className='font-bold text-indigo-400 inline-block group transition-transform duration-200 ease-in-out hover:scale-105 transition duration-500 ease-in-out'>
                                    <a href="#skills" className="bg-left-bottom bg-gradient-to-r from-indigo-400 to-indigo-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ">My Skills:</a>
                                </span>
                                <span className='pl-4'>an overview of the technologies and tools I learnt and I use to develop modern and efficient web applications.</span>
                            </div>

                        </li>
                        <li className='flex'>
                            <div>
                                <FontAwesomeIcon icon={faDiamond} className='text-blue-500' />
                            </div>
                            <div className='pl-4'>
                                <span className='font-bold text-indigo-400 inline-block group transition-transform duration-200 ease-in-out hover:scale-105 transition duration-500 ease-in-out'>
                                    <a href="#contacts" className="bg-left-bottom bg-gradient-to-r from-indigo-400 to-indigo-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ">My Contacts:</a>
                                </span>
                                <span className='pl-4'>you can visit my GitHub, connect with me on LinkedIn, watch my CV and you can also contact me through email.</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section >

        </>

    )
}