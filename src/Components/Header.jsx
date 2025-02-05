import { Link } from "react-scroll";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <>
            <header className="flex justify-between items-center py-7 px-2 md:px-8 text-2xl bg-slate-600/90 text-white sticky top-0 right-0 left-0">
                <div className="flex items-center text-3xl md:text-4xl">
                    <img
                        src="public/IMG_20250123_172511.jpg"
                        alt=""
                        style={{ width: "70px", borderRadius: "50%" }}
                    />
                    <span className="pl-5 group hover:text-blue-400 transition duration-200 ease-in-out hover:scale-110 transition duration-500 ease-in-out">
                        <Link
                            to="about"
                            smooth={true}
                            duration={1200}
                            offset={-125}
                            className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]"
                        >
                            Pietro Ponte
                        </Link>
                    </span>
                </div>

                {/* Menu Desktop */}
                <nav className="hidden md:flex items-center">
                    <div className="group hover:text-blue-400 transition duration-200 ease-in-out hover:scale-110 transition duration-500 ease-in-out">
                        <Link
                            to="about"
                            smooth={true}
                            duration={1200}
                            offset={-125}
                            className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                        >
                            About
                        </Link>
                    </div>
                    <div className="ml-6 group hover:text-blue-400 transition duration-200 ease-in-out hover:scale-110 transition duration-500 ease-in-out">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={1200}
                            className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                        >
                            Projects
                        </Link>
                    </div>
                    <div className="ml-6 group hover:text-blue-400 transition duration-200 ease-in-out hover:scale-110 transition duration-500 ease-in-out">
                        <Link
                            to="skills"
                            smooth={true}
                            duration={1200}
                            className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                        >
                            Skills
                        </Link>
                    </div>
                    <div className="mx-6 group hover:text-blue-400 transition duration-200 ease-in-out hover:scale-110 transition duration-500 ease-in-out">
                        <Link
                            to="contacts"
                            smooth={true}
                            duration={1200}
                            className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                        >
                            Contacts
                        </Link>
                    </div>
                </nav>

                {/* Icona del menu per mobile */}
                <div className="md:hidden flex items-center ">
                    <button onClick={toggleMenu} className="text-3xl cursor-pointer">
                        {menuOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                    </button>
                </div>
            </header>

            {/* Menu mobile */}
            <div
                className={`${menuOpen ? "sticky top-[123px] bg-slate-600/90 text-white py-5 px-4 z-50" : "hidden"}`}
            >
                <div className="text-xl py-3">
                    <Link
                        to="about"
                        smooth={true}
                        duration={1200}
                        offset={-371}
                        onClick={toggleMenu}
                        className="cursor-pointer hover:text-blue-400 transition duration-200 ease-in-out"
                    >
                        About
                    </Link>
                </div>
                <div className="text-xl py-3">
                    <Link
                        to="projects"
                        smooth={true}
                        duration={1200}
                        onClick={toggleMenu}
                        className="cursor-pointer hover:text-blue-400 transition duration-200 ease-in-out"
                    >
                        Projects
                    </Link>
                </div>
                <div className="text-xl py-3">
                    <Link
                        to="skills"
                        smooth={true}
                        duration={1200}
                        onClick={toggleMenu}
                        className="cursor-pointer hover:text-blue-400 transition duration-200 ease-in-out"
                    >
                        Skills
                    </Link>
                </div>
                <div className="text-xl py-3">
                    <Link
                        to="contacts"
                        smooth={true}
                        duration={1200}
                        onClick={toggleMenu}
                        className="cursor-pointer hover:text-blue-400 transition duration-200 ease-in-out"
                    >
                        Contacts
                    </Link>
                </div>
            </div >
        </>
    );
}
