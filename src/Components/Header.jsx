export default function Header() {

    return (
        <>

            <header className="flex justify-between items-center py-7 px-4 text-lg bg-gray-900 text-white sticky top-0 right-0 left-0">

                <div className="text-2xl ml-6">
                    <a href="/">Pietro Ponte</a>
                </div>

                <nav className="justify-between ">
                    <a href="#" className="group hover:text-cyan-500 transition duration-200 ease-in-out">
                        <span className="bg-left-bottom bg-gradient-to-r from-cyan-500 to-cyan-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">About</span>
                    </a>
                    <a href="#" className="ml-8 group hover:text-cyan-500 transition duration-200 ease-in-out">
                        <span className="bg-left-bottom bg-gradient-to-r from-cyan-500 to-cyan-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Skills</span>
                    </a>
                    <a href="#" className="ml-8 group  hover:text-cyan-500 transition duration-200 ease-in-out">
                        <span className="bg-left-bottom bg-gradient-to-r from-cyan-500 to-cyan-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Projects</span>
                    </a>
                    <a href="#" className="ml-8 mr-6 group  hover:text-cyan-500 transition duration-200 ease-in-out">
                        <span className="bg-left-bottom bg-gradient-to-r from-cyan-500 to-cyan-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Contacts</span>
                    </a>
                </nav>

            </header>

        </>

    )
}