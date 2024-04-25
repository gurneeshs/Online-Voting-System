import AdminNavbar from "../Navbar/AdminNav";
import './CSS/admin.css'
import SideNav from "./Admincomponents/SideNav";
import Dashboard from './Admincomponents/Dashboard'
// import Dashboardnew from "../../Dashboardnew";
// import { MaterialUIControllerProvider } from "context";
// import App from './DashBoardNew/App'

const admin = () => {
    return (
        <div>
            <AdminNavbar />
            <div className="Admin-Body">
                <div className="SideNav">
                    <SideNav />

                </div>
                <div className="Main-Content">
                    {/* <MaterialUIControllerProvider> */}
                        {/* <App /> */}
                    {/* </MaterialUIControllerProvider> */}
                    <Dashboard />
                </div>

            </div>
        </div>
    )
}
export default admin;