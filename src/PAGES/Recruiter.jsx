import { useState } from 'react'
import Rec_intro from '../COMPONENTS/recr_intro'
import Comparison from '../COMPONENTS/comparision'
import FAQ from '../COMPONENTS/Recr_FAQs'
import JobPostingForm from '../COMPONENTS/JobPosting'
import Rec_input from './rec_input'
import RecruitmentSteps from '../COMPONENTS/recr_steps'
function  Recruiter() {
    const [count, setCount] = useState(0)
  
    return (
      <>
      <Rec_intro/>
      <RecruitmentSteps/>
      <Comparison/>
      <FAQ/>
      </>
    )
  }
  
  export default Recruiter;