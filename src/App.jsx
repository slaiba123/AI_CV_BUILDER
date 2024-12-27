import { useState } from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Navbar from './COMPONENTS/navbar'
import Home from './PAGES/Home'
import Resume from './PAGES/resume'
import ResumeInput from './PAGES/input_form'
import TemplateSelect from './PAGES/pageselect'
import Recruiter from './PAGES/Recruiter'
import Footer from './COMPONENTS/footer'
import SignupForm from './COMPONENTS/signup'
import SignIn from './COMPONENTS/signin'
import Coverletter from './PAGES/Coverletter'
import CoverLetterInput from './PAGES/CoverLetter_input'
import JobPostingForm from './COMPONENTS/JobPosting'
import Rec_input from './PAGES/rec_input'


function App() {
  const route= createBrowserRouter([
    { path: "/",
      element: <> <Navbar/> <Home/> <Footer/> </> 
    },
    { path: "/resume",
      element:  <><Navbar/><Resume/><Footer/> </> 
    },
    { path: "/resume_input",
      element:  <><Navbar/><ResumeInput/><Footer/> </> 
    },
    { path: "/templates",
      element:  <><Navbar/><TemplateSelect/><Footer/> </>
     },
    // { path: "/CL_templates",
    //   element:  <><Navbar/><TemplateSelect/><Footer/> </>
    //  },
    { path: "/recruiter",
      element: <><Navbar/> <Recruiter/><Footer/> </> 
    },

    { path: "/Signup", 
      element:  <><Navbar/><SignupForm/><Footer/> </> 
    },
    { path: "/findcandidate",
      element: <><Navbar/> <Rec_input /><Footer/> </> 
    },
    { path: "/CoverLetter_input",
      element:  <><Navbar/>< CoverLetterInput/><Footer/> </> 
    },
    { path: "/coverletter",
      element: <><Navbar/> <Coverletter /><Footer/> </> 
    },
    { path: "/signin",
      element: <><Navbar/> <SignIn /><Footer/> </> 
    },
    { path: "/job-posting",
      element: <><Navbar/> <JobPostingForm /><Footer/> </> 
    },
    // { path: "/register",
    //   element: <><Navbar/> <Register /><Footer/> </> 
    // },*/}


  // const [count, setCount] = useState(0)

  ])

  return (
    <>
  <RouterProvider router={ route }/>
    </>
  )
}

export default App

