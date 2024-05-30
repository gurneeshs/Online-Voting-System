import { Link } from "react-router-dom"
import Nav_bar from "../Navbar/Navbar"
import './CSS/home.css'
// import frontimage from './Images/img2.jpg'
// import frontimage2 from './Images/front image.jpg'
import HomeComponent from "./BackgroundSlider"
import BackgroundSlider from "./BackgroundSlider"
import About from "./About"
import Features from "./Features"
import Contact from "./Contact"
import FAQ from "./FAQ"

const Home = () => {
    return (
        <div className="Home" >
            <div className="Home-content">
            <Nav_bar />
            <BackgroundSlider/>
            <About/>
            <Features/>
            <FAQ/>
            {/* <Contact/> */}
                {/* <div>
                    <h1>Welcome to Online Voting System</h1>
                    <p>This is a platform where you can participate in various online voting events.</p>
                    <div>
                        <h2>Available Voting Events:</h2>
                        <ul>
                            <li>
                                <Link to="/voting/event1">Event 1</Link>
                            </li>
                            <li>
                                <Link to="/voting/event2">Event 2</Link>
                            </li>
                        </ul>
                    </div>

                </div> */}

            </div>
        </div>
    )
}
export default Home