import { useState } from 'react'
import Home from './PAGES/Home'
import Resume from './PAGES/resume'
import ResumeInput from './PAGES/input_form'
import TemplateSelect from './PAGES/pageselect'
import Recruiter from './PAGES/Recruiter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>   
    <Resume/>
    <ResumeInput/>
    <TemplateSelect/>
    <Recruiter/>

    </>
  )
}

export default App

