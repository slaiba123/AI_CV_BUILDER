import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import ArchShape from './COMPONENTS/landingpage'
// import Functionalities from './COMPONENTS/features'
// import Comparison from './COMPONENTS/comparision'
// import FAQ from './COMPONENTS/FAQs'
// import CVslide from './COMPONENTS/CV-slide'
// import  BuilderSection from './COMPONENTS/builder_section'
import Navbar from './COMPONENTS/navbar'
// import Footer from './COMPONENTS/footer'
import InputForm from './input_form'
import TemplateSelect from './pageselect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
    {/*<ArchShape/>
    <Comparison/>
    <Functionalities/>
    <FAQ/>
    <CVslide/>
    <BuilderSection/>
    <Footer/> */}
    {/* <InputForm/> */}
    <TemplateSelect/>

    </>
  )
}

export default App

