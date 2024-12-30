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
import Jobsearch from './COMPONENTS/relevant_job'
import CL_templates from './PAGES/template_CL'
import Navbar_Rec from './COMPONENTS/navbar_rec'
// import TemplateSelector from './COMPONENTS/template_selector'
import Minamilist_focus from './COMPONENTS/Minimalist_focus'
import ModernInput from './COMPONENTS/Modern_input'
import Modern from './COMPONENTS/modern_edge'
import CreativeInput from './COMPONENTS/Creative_input'
import Creative from './COMPONENTS/creative_flair'
import TechInput from './COMPONENTS/Tech_input'
import Tech from './COMPONENTS/Tech_Savvy'
import MinimalistInput from './COMPONENTS/Minimalist_input'
import ClassicInput from './COMPONENTS/Classic_input'
import Classic from './COMPONENTS/classic'
import BoldInput from './COMPONENTS/Bold_input'
import Bold from './COMPONENTS/bold_statement'
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
    // { path: "/templates",
    //   element:  <><Navbar/><TemplateSelector/><Footer/> </>
    //  },
    { path: "/coverletter_templates",
      element:  <><Navbar/><CL_templates/><Footer/> </>
     },
    { path: "/recruiter",
      element: <><Navbar_Rec/> <Recruiter/><Footer/> </> 
    },
    { path: "/jobs",
      element: <><Navbar/> <Jobsearch/><Footer/> </> 
    },

    { path: "/Signup", 
      element:  <><Navbar/><SignupForm/><Footer/> </> 
    },
    { path: "/findcandidate",
      element: <><Navbar_Rec/> <Rec_input /><Footer/> </> 
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
      element: <><Navbar_Rec/> <JobPostingForm /><Footer/> </> 
    },
    { path: "/Minimalist_input",
      element: <><Navbar_Rec/> <MinimalistInput/><Footer/> </> 
    },
    { path: "/Minimalist_focus",
    element: <>  <Minamilist_focus/> </> 
    },
    { path: "/Modern_input",
      element: <> <Navbar/> <ModernInput/> <Footer/> </> 
    },
    { path: "/modern_edge",
      element: <> <Modern/>  </> 
    },
    { path: "/Creative_input",
      element: <> <Navbar/> <CreativeInput/> <Footer/> </> 
    },
    { path: "/creative_flair",
      element: <>  <Creative/>  </> 
    },
    { path: "/Tech_input",
      element: <> <Navbar/> <TechInput/> <Footer/> </> 
    },
    { path: "/tech-savvy",
      element: <>  <Tech/> </> 
    },
   
    { path: "/Bold_input",
    element: <> <Navbar/> <BoldInput/> <Footer/> </> 
  },
  { path: "/bold_statement",
    element: <>  <Bold/> </> 
  },
  { path: "/Classic_input",
    element: <> <Navbar/> < ClassicInput/> <Footer/> </> 
  },
  { path: "/classic",
    element: <>  <Classic/> </> 
  },

  

  ])

  return (
    <>
  <RouterProvider router={ route }/>
    </>
  )
}

export default App

