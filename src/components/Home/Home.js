import Nav_bar from "../Navbar/Navbar"
import './CSS/home.css'
import BackgroundSlider from "./BackgroundSlider"
import About from "./About"
import Features from "./Features"
import Contact from "./Contact"
import FAQ from "./FAQ"
import UpcomingFeatures from "./Upcoming"
import Team from "./Team"

const Home = () => {
    return (
        <div className="Home" >
            <div className="Home-content">
            <Nav_bar />
            <BackgroundSlider/>
            <About/>
            <Features/>
            <Team/>
            <FAQ/>
            <UpcomingFeatures/>
            <Contact/>
            </div>
        </div>
    )
}
export default Home