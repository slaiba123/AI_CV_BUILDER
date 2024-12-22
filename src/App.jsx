import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ArchShape from './landingpage'
import Functionalities from './features'
import Comparison from './comparision'
import FAQ from './FAQs'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ArchShape/>
    <Functionalities/>
    <Comparison/>
    <FAQ/>
    </>
  )
}

export default App

