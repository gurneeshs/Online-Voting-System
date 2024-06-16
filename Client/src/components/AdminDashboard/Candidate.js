import AdminNavbar from "../Navbar/AdminNav";
import './CSS/admin.css'
import SideNav from "./Admincomponents/SideNav";
import CandidateTable from "./Admincomponents/Candidatetable";
const Candidate = () => {
    return (
        <div>
            <AdminNavbar />
            <div className="Admin-Body">
                <div className="SideNavA">
                    <SideNav />
                </div>
                <div className="Main-Content">
                    <CandidateTable />
                </div>

            </div>
        </div>
    )
}
export default Candidate;