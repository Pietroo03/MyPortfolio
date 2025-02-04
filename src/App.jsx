import Header from "./Components/Header"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import Footer from "./Components/Footer"

function App() {

  return (
    <>

      <Header />

      <main className="text-white bg-gray-800 ">

        <About />
        <Skills />
        <Projects />

      </main>

      <Footer />

    </>
  )
}

export default App
