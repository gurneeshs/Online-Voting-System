import { Box } from "@mui/material";
// import { tokens } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import BarChart from "../../newComponents/BarChart";
import Header from "../../newComponents/Header";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";


const Result = () => {
    const [theme, colorMode] = useMode();
    return (<ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="appNew">
                <Sidebar />
                <main className="content">
                    <Topbar />
                    <Box m="20px">
                        <Header title="RESULTS" subtitle="Election Result" />
                        <Box height="75vh">
                            <BarChart />
                        </Box>
                    </Box>
                </main>
            </div>
        </ThemeProvider>
    </ColorModeContext.Provider>

    )
};

export default Result;
