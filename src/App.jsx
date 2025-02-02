import Header from "./Components/Header"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import Footer from "./Components/Footer"

function App() {

  return (
    <>

      <Header />

      <main className="text-gray-400 bg-gray-800 body-font h-screen">

        <About />
        <Skills />
        <Projects />
        <Footer />

      </main>

    </>
  )
}

export default App
