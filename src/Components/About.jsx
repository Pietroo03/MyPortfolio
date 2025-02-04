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
                        <li className='pb-13'>
                            <FontAwesomeIcon icon={faDiamond} className='text-blue-500' />
                            <div className='inline pl-4 '>
                                <span className='font-bold text-indigo-400'>
                                    <a href="#projects">My Projects: </a>
                                </span>
                                <span>a selection of my work developed during the <strong className='text-cyan-500'>Boolean</strong> course</span>
                            </div>
                        </li>
                        <li className='pb-13 flex'>
                            <div>
                                <FontAwesomeIcon icon={faDiamond} className='text-blue-500' />
                            </div>
                            <div className='pl-4'>
                                <span className='font-bold text-indigo-400'>
                                    <a href="#skills">My Skills: </a>
                                </span>
                                <span>an overview of the technologies and tools I learnt and I use to develop modern and efficient web applications.</span>
                            </div>

                        </li>
                        <li className='flex'>
                            <div>
                                <FontAwesomeIcon icon={faDiamond} className='text-blue-500' />
                            </div>
                            <div className='pl-4'>
                                <span className='font-bold text-indigo-400'>
                                    <a href="#contacts">My Contacts: </a>
                                </span>
                                <span>you can visit my GitHub, connect with me on LinkedIn, watch my CV and you can also contact me through email.</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='text-center text-3xl pt-8 '>
                    <button className='rounded-full bg-indigo-800 hover:scale-125 transition duration-200 ease-in-out' style={{ width: '40px', height: '40px' }}>
                        <a href="#skills">↓</a>
                    </button>
                </div>
            </section >

        </>

    )
}