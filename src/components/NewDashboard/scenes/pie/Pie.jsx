import { Box } from "@mui/material";
import { tokens } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import Header from "../../newComponents/Header";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";
import VoterbyAge from "../../newComponents/VoterbyAge";
import VoterbyState from "../../newComponents/VoterbyState";

const Pie = () => {
    const [theme, colorMode] = useMode();
    return (<ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="appNew">
                <Sidebar />
                <main className="content">
                    <Topbar />
                    <Box display="grid" gridTemplateColumns="1fr 1fr">
                        <Box m="20px">
                            <Header title="Voters According to Age Group" />
                            <Box height="71vh" mt="30px">
                                <VoterbyAge/>
                            </Box>
                        </Box>
                        <Box m="20px">
                            <Header title="Voters from Different States"  />
                            <Box height="71vh" mt="30px">
                                <VoterbyState />
                            </Box>
                        </Box>

                    </Box>
                </main>
            </div>
        </ThemeProvider>
    </ColorModeContext.Provider>

    )
};

export default Pie;
