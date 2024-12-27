import Intro from '../COMPONENTS/intro_page';
import BuilderSection from '../COMPONENTS/builder_section';
import TargetResume from '../COMPONENTS/Recruiter_div';
import WhyChoose from '../COMPONENTS/Whychoose';
import JobSection from '../COMPONENTS/job_sec';
function Home() {
    return(
        <>
        <Intro/>
        <BuilderSection/>
        <JobSection/>
        <TargetResume/>
        <WhyChoose/>
        </>
    )
}
export default Home;