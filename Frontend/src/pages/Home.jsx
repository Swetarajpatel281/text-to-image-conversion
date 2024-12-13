import Description from "../components/Description"
import Developer from "../components/Developer"
import GenerateBtn from "../components/GenerateBtn"
import Header from "../components/Header"
import Steps from "../components/Steps"
import Testimonials from "../components/Testimonials"


const Home = () => {
  return (
    <div>
    <Header />
    <Steps/>
    <Description />
    <Testimonials />
    <GenerateBtn />
    <Developer />
    </div>
  )
}

export default Home
