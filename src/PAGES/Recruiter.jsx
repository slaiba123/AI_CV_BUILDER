import { useState } from 'react'
import Navbar from '../COMPONENTS/navbar'
import Rec_intro from '../COMPONENTS/recr_intro'
import Comparison from '../COMPONENTS/comparision'
import FAQ from '../COMPONENTS/FAQs'
import Footer from '../COMPONENTS/footer'
function  Recruiter() {
    const [count, setCount] = useState(0)
  
    return (
      <>
      <Navbar/>
      <Rec_intro/>
      <Comparison/>
      <FAQ/>
      <Footer/>
      </>
    )
  }
  
  export default Recruiter;