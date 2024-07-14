import AdminNavbar from "../Navbar/AdminNav";
import './CSS/admin.css'
import SideNav from "./Admincomponents/SideNav";
import Voter from "./Admincomponents/Voter";
const Voters = () => {
    return (
        <div>
            <div>
                <AdminNavbar />
            </div>
            <div className="Admin-Body">
                <div className="Main-Content">
                    <Voter />
                </div>
            </div>
        </div>
    )
}
export default Voters;