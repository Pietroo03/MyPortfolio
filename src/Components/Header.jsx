export default function Header() {

    return (
        <>

            <header className="flex justify-between py-7 px-4 text-lg bg-gray-900 text-white sticky top-0 right-0 left-0">

                <div className="text-2xl">
                    <a href="/">Pietro Ponte</a>
                </div>

                <nav>
                    <a href="/" className="ml-4 hover:text-cyan-500 hover:underline underline-offset-8">About</a>
                    <a href="/" className="ml-4 hover:text-cyan-500 hover:underline underline-offset-8">Skills</a>
                    <a href="/" className="ml-4 hover:text-cyan-500 hover:underline underline-offset-8">Projects</a>
                    <a href="/" className="ml-4 hover:text-cyan-500 hover:underline underline-offset-8">Contacts</a>
                </nav>

            </header>

        </>

    )
}