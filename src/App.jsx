
import './App.css'
import React, { useState, useEffect } from 'react'
import { Navbar, Hero, Discography, Galleries, News, Footer } from './components'

function App() {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsRendered(true);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <section id="top">
        <Navbar/>
      </section>
      <Hero/>
      <div className={`${isRendered ? 'opacity-100' : 'opacity-0'} transition-all duration-500 delay-1000 `}>
        <Discography/>
        <News/>
        <Galleries/>
        <Footer/>
      </div>
    </>
  )
}

export default App
