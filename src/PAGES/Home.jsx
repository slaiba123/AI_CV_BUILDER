import Intro from '../COMPONENTS/intro_page';
import BuilderSection from '../COMPONENTS/builder_section';
import TargetResume from '../COMPONENTS/Recruiter_div';
import WhyChoose from '../COMPONENTS/Whychoose';
import Navbar from '../COMPONENTS/navbar'
import Footer from '../COMPONENTS/footer'
function Home() {
    return(
        <>
        <Navbar/>
        <Intro/>
        <BuilderSection/>
        <TargetResume/>
        <WhyChoose/>
        <Footer/>
        </>
    )
}
export default Home;