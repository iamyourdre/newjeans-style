
import './App.css'
import { Navbar, Hero, Discography, Galleries, News, Footer } from './components'

function App() {

  return (
    <>
      <section id="top">
        <Navbar/>
      </section>
      <Hero/>
      <Discography/>
      <News/>
      <Galleries/>
      <Footer/>
    </>
  )
}

export default App
