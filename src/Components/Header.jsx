export default function Header() {

    return (
        <>

            <header className="flex justify-between items-center py-7 px-4 text-xl bg-slate-600/90 text-black sticky top-0 right-0 left-0">

                <div className="text-3xl ml-6 group hover:text-blue-400 transition duration-200 ease-in-out hover:scale-120 transition duration-500 ease-in-out">
                    <a href="/" className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Pietro Ponte</a>
                </div>

                <nav className="flex items-center">
                    <div className="group hover:text-blue-400 transition duration-200 ease-in-out hover:scale-120 transition duration-500 ease-in-out">
                        <a href="#about" className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ">About</a>
                    </div>
                    <div className="ml-6 group hover:text-blue-400 transition duration-200 ease-in-out hover:scale-120 transition duration-500 ease-in-out">
                        <a href="#projects" className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ">Projects</a>
                    </div>
                    <div className="ml-6 group hover:text-blue-400 transition duration-200 ease-in-out hover:scale-120 transition duration-500 ease-in-out">
                        <a href="#skills" className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ">Skills</a>
                    </div>
                    <div className="mx-6 group hover:text-blue-400 transition duration-200 ease-in-out hover:scale-120 transition duration-500 ease-in-out">
                        <a href="#contacts" className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ">Contacts</a>
                    </div>
                </nav>

            </header>

        </>

    )
}