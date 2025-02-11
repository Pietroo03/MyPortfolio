import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [offset, setOffset] = useState(-125);

    useEffect(() => {
        const updateOffset = () => {
            if (window.innerWidth < 640) { // sm
                setOffset(-315);
            }
        };

        updateOffset();
        window.addEventListener('resize', updateOffset);

        return () => window.removeEventListener('resize', updateOffset);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <>
            <header className="flex justify-between items-center py-2 md:py-7 px-2 md:px-8 text-2xl bg-slate-600/90 text-white sticky top-0 right-0 left-0 z-10">
                <div className="flex items-center text-3xl md:text-4xl">
                    <img
                        src="public/profile-photo.jpg"
                        alt=""
                        style={{ borderRadius: "50%" }}
                        className="w-[70px]" />

                    {/* Name link to about section */}
                    <span className="pl-5 group hover:text-blue-400 transition duration-200 ease-in-out hover:scale-110 transition duration-500 ease-in-out">
                        <Link
                            to="about"
                            smooth={true}
                            duration={2000}
                            offset={-125}
                            className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
                            Pietro Ponte
                        </Link>
                    </span>
                </div>

                {/* Desktop Menu  */}
                <nav className="hidden md:flex items-center">

                    {/* About link */}
                    <div className="group hover:text-blue-400 transition duration-200 ease-in-out hover:scale-110 transition duration-500 ease-in-out">
                        <Link
                            to="about"
                            smooth={true}
                            duration={2000}
                            offset={-125}
                            className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                            About
                        </Link>
                    </div>

                    {/* Projects link */}
                    <div className="ml-6 group hover:text-blue-400 transition duration-200 ease-in-out hover:scale-110 transition duration-500 ease-in-out">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={2000}
                            offset={-50}
                            className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                            Projects
                        </Link>
                    </div>

                    {/* Skills link */}
                    <div className="ml-6 group hover:text-blue-400 transition duration-200 ease-in-out hover:scale-110 transition duration-500 ease-in-out">
                        <Link
                            to="skills"
                            smooth={true}
                            duration={2000}
                            offset={-120}
                            className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                            Skills
                        </Link>
                    </div>

                    {/* Contacts link */}
                    <div className="mx-6 group hover:text-blue-400 transition duration-200 ease-in-out hover:scale-110 transition duration-500 ease-in-out">
                        <Link
                            to="contacts"
                            smooth={true}
                            duration={2500}
                            className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                            Contacts
                        </Link>
                    </div>
                </nav>

                {/* Mobile icon menu */}
                <div className="md:hidden flex items-center ">
                    <button onClick={toggleMenu} className="text-3xl cursor-pointer">
                        {menuOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                    </button>
                </div>
            </header>

            {/* Mobile menu  */}
            <div className={`${menuOpen ? "sticky top-[83px] bg-slate-600/90 text-white py-5 px-4 z-50" : "hidden"}`}>

                {/* About link */}
                <div className="text-xl py-3">
                    <Link
                        to="about"
                        smooth={true}
                        duration={2500}
                        offset={-371}
                        onClick={toggleMenu}
                        className="cursor-pointer hover:text-blue-400 transition duration-200 ease-in-out">
                        About
                    </Link>
                </div>

                {/* Projects link */}
                <div className="text-xl py-3">
                    <Link
                        to="projects"
                        smooth={true}
                        duration={2500}
                        offset={offset}
                        onClick={toggleMenu}
                        className="cursor-pointer hover:text-blue-400 transition duration-200 ease-in-out">
                        Projects
                    </Link>
                </div>

                {/* Sills link */}
                <div className="text-xl py-3">
                    <Link
                        to="skills"
                        smooth={true}
                        duration={2500}
                        offset={-300}
                        onClick={toggleMenu}
                        className="cursor-pointer hover:text-blue-400 transition duration-200 ease-in-out">
                        Skills
                    </Link>
                </div>

                {/* Contacts link */}
                <div className="text-xl py-3">
                    <Link
                        to="contacts"
                        smooth={true}
                        duration={2500}
                        onClick={toggleMenu}
                        className="cursor-pointer hover:text-blue-400 transition duration-200 ease-in-out">
                        Contacts
                    </Link>
                </div>
            </div >
        </>
    );
}
