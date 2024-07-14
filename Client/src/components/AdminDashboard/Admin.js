import AdminNavbar from "../Navbar/AdminNav";
import './CSS/admin.css'
import SideNav from "./Admincomponents/SideNav";
import Dashboard from './Admincomponents/Dashboard'

const admin = () => {
    return (
        <div>
            <AdminNavbar />
            <div className="Admin-Body">
                <div className="Main-Content">
                    <Dashboard />
                </div>

            </div>
        </div>
    )
}
export default admin;