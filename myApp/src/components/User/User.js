import UserNavbar from "../Navbar/UserNavbar";
import './CSS/user.css'
import UserCard from './Components/UserCard/userCard'
const user = () =>{
    return(
        <div className="User">
            <UserNavbar/>
            <div className="Heading2">
            <h3>Welcome User</h3>
            </div>
            <div className="userPage">
                <div className="userDetails">
                    <UserCard/>
                </div>
                <div className="upcomingElection">
                    <div className="ElectionContent">
                        <div className="electionListItem">
                            <h4>2024 Biennial Election in Council of State of Jharkhand</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default user;