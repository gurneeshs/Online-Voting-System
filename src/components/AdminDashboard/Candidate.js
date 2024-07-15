import AdminNavbar from "../Navbar/AdminNav";
import './CSS/admin.css'
import CandidateTable from "./Admincomponents/Candidatetable";
const Candidate = () => {
    return (
        <div>
            <AdminNavbar />
            <div className="Admin-Body">
                <div className="Main-Content">
                    <CandidateTable />
                </div>

            </div>
        </div>
    )
}
export default Candidate;