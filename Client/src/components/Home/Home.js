import { Link } from "react-router-dom"
import Nav_bar from "../Navbar/Navbar"
import './CSS/home.css'
import frontimage from './Images/img2.jpg'
import frontimage2 from './Images/front image.jpg'
const Home = () => {
    return (
        <div className="Home" >
            <div className="Home-content">
                <Nav_bar />
                <div>
                    <img src={frontimage2}/>
                </div>
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