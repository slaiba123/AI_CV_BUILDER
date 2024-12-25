import { useState } from 'react'
import Navbar from '../COMPONENTS/navbar'
import ArchShape from '../COMPONENTS/landingpage'
import Functionalities from '../COMPONENTS/features'
import Comparison from '../COMPONENTS/comparision'
import FAQ from '../COMPONENTS/FAQs'
import Footer from '../COMPONENTS/footer'
function  Resume() {
    const [count, setCount] = useState(0)
  
    return (
      <>
      <Navbar/>
      <ArchShape/>
      <Functionalities/>
      <Comparison/>
      <FAQ/>
      <Footer/>
      </>
    )
  }
  
  export default Resume