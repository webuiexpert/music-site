import React from 'react'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Search from './components/Search'
import Contact from './components/Contact'
import Header from './components/Header'

function App() {
  return (
    <div className="text-white overflow-hidden">
     <Header />
    <Hero />
    <Experience />
    <Search />
    <Contact />
    </div>
  )

  }
export default App