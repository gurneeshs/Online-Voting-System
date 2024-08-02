import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../helper';


const VoterbyState = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [stateData, setStateData] = useState([]);

    const groupVotersByState = (voters) => {
        const stateGroups = {};

        voters.forEach(voter => {
            if (stateGroups[voter.state]) {
                stateGroups[voter.state]++;
            } else {
                stateGroups[voter.state] = 1;
            }
        });

        return Object.entries(stateGroups).map(([key, value]) => ({
            id: key,
            label: key,
            value: value,
        }));
    };

    useEffect(() => {
        const fetchVoterData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/getVoter`); // Replace with your actual endpoint
                const voterData = response.data.voter;
                const groupedData = groupVotersByState(voterData);
                setStateData(groupedData);
            } catch (err) {
                console.log("Error Fetching Data", err);
            }
        };

        fetchVoterData();
    }, []);
    return (
        stateData.length > 0 && (
            <ResponsivePie
                data={stateData}
                theme={{
                    axis: {
                        domain: {
                            line: {
                                stroke: colors.grey[100],
                            },
                        },
                        legend: {
                            text: {
                                fill: colors.grey[100],
                            },
                        },
                        ticks: {
                            line: {
                                stroke: colors.grey[100],
                                strokeWidth: 1,
                            },
                            text: {
                                fill: colors.grey[100],
                            },
                        },
                    },
                    legends: {
                        text: {
                            fill: colors.grey[100],
                        },
                    },
                }}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderColor={{
                    from: "color",
                    modifiers: [["darker", 0.2]],
                }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor={colors.grey[100]}
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: "color" }}
                enableArcLabels={false}
                arcLabelsRadiusOffset={0.4}
                arcLabelsSkipAngle={7}
                arcLabelsTextColor={{
                    from: "color",
                    modifiers: [["darker", 2]],
                }}
                defs={[
                    {
                        id: "dots",
                        type: "patternDots",
                        background: "inherit",
                        color: "rgba(255, 255, 255, 0.3)",
                        size: 4,
                        padding: 1,
                        stagger: true,
                    },
                    {
                        id: "lines",
                        type: "patternLines",
                        background: "inherit",
                        color: "rgba(255, 255, 255, 0.3)",
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10,
                    },
                ]}
            />)

    );
};

export default VoterbyState;