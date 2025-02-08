import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {

    return (
        <>

            <footer id="contacts" className="py-7 px-2 md:px-4 text-xl bg-slate-600 text-white">
                <div className="flex flex-col md:items-center">
                    <a href="https://github.com/Pietroo03" className='my-2 group hover:text-cyan-500 transition duration-200 ease-in-out'>
                        <FontAwesomeIcon icon={faGithub} />
                        <span className="bg-left-bottom bg-gradient-to-r from-cyan-500 to-cyan-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"> GitHub | Pietroo03</span>
                    </a>
                    <a href="https://www.linkedin.com/in/pietro-ponte-333829348/" className='my-2 group hover:text-cyan-500 transition duration-200 ease-in-out'>
                        <FontAwesomeIcon icon={faLinkedin} />
                        <span className="bg-left-bottom bg-gradient-to-r from-cyan-500 to-cyan-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"> LinkedIn | Pietro Ponte</span>
                    </a>
                    <a href='mailto:pietroponte0103@gmail.com' className='my-2 group hover:text-cyan-500 transition duration-200 ease-in-out'>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span className="bg-left-bottom bg-gradient-to-r from-cyan-500 to-cyan-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"> Email | pietroponte0103@gmail.com</span>
                    </a>
                    <a href="/CV-Pietro-Ponte.pdf" download='CV-Pietro-Ponte' className='my-2 group hover:text-cyan-500 transition duration-200 ease-in-out'>
                        <FontAwesomeIcon icon={faFile} />
                        <span className="bg-left-bottom bg-gradient-to-r from-cyan-500 to-cyan-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"> Download my Curriculum Vitae</span>
                    </a>
                </div>
            </footer>

        </>

    )
}
