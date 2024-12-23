import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ArchShape from './landingpage'
import Functionalities from './features'
import Comparison from './comparision'
import FAQ from './FAQs'
import CVslide from './CV-slide'
import  BuilderSection from './COMPONENTS/builder_section'
import Navbar from './COMPONENTS/navbar'
import Footer from './COMPONENTS/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <ArchShape/>
    <Comparison/>
    <Functionalities/>
    <FAQ/>
    <CVslide/>
    <BuilderSection/>
    <Footer/>
    </>
  )
}

export default App

