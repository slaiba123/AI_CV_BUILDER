// import { useState } from 'react'
import Navbar from '../COMPONENTS/navbar'
import ArchShape from '../COMPONENTS/landingpage'
import Functionalities from '../COMPONENTS/features'
import Comparison from '../COMPONENTS/comparision'
import FAQ from '../COMPONENTS/FAQs'
import Footer from '../COMPONENTS/footer'
import CVslide from '../COMPONENTS/CV-slide'
function  Resume() {
    // const [count, setCount] = useState(0)
  
    return (
      <>
      <ArchShape/>
      <CVslide/>
      <Functionalities/>
      <Comparison/>
      <FAQ/>
      </>
    )
  }
  
  export default Resume