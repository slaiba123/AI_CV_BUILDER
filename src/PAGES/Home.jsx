import Intro from '../COMPONENTS/intro_page';
import BuilderSection from '../COMPONENTS/builder_section';
import TargetResume from '../COMPONENTS/Recruiter_div';
import WhyChoose from '../COMPONENTS/Whychoose';
function Home() {
    return(
        <>
        <Intro/>
        <BuilderSection/>
        <TargetResume/>
        <WhyChoose/>
        </>
    )
}
export default Home;