import { useState } from 'react'
import Rec_intro from '../COMPONENTS/recr_intro'
import RecSteps from '../COMPONENTS/rec_steps'
import Comparison from '../COMPONENTS/comparision'
import FAQ from '../COMPONENTS/FAQs'
function  Recruiter() {
    const [count, setCount] = useState(0)
  
    return (
      <>
      <Rec_intro/>
      <Comparison/>
      <RecSteps/>
      <FAQ/>
      </>
    )
  }
  
  export default Recruiter;