import AdminNavbar from "../Navbar/AdminNav";
import './CSS/admin.css'
import SideNav from "./Admincomponents/SideNav";
import Dashboard from './Admincomponents/Dashboard'
import Vote from './Admincomponents/Vote'
const Votes = () => {
    return (
        <div>
            <AdminNavbar />
            <div className="Admin-Body">
                <div className="Main-Content">
                    <Vote />
                </div>

            </div>
        </div>
    )
}
export default Votes;