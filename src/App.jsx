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
        <Projects />
        <Skills />

      </main>



      <Footer />




    </>
  )
}

export default App
