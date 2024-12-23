import ArchShape from './landingpage'
import Functionalities from './features'
import Comparison from './comparision'
import FAQ from './FAQs'
function  Resume() {
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
  
  export default Resume