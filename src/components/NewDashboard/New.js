import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import { Route, Routes } from "react-router-dom";
import NewDashBoard from "./scenes/dashboard/NewDashBoard";
import NewVoters from "./scenes/voters/NewVoters";
import './New.css'


/*

*/
function New() {
    const [theme, colorMode] = useMode();
    return (<ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="appNew">
                <Sidebar />
                <main className="content">

                    <Topbar />
                    <NewDashBoard />
                    {/* <Routes>
                        <Route path="/newDashboard" element={<NewDashBoard/>}/>
                        <Route path="/NewVoters" element = {<NewVoters/>} />

                    </Routes> */}
                </main>
            </div>
        </ThemeProvider>
    </ColorModeContext.Provider>

    )
}

export default New;