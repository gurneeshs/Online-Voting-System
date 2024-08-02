import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { mockDataTeam } from "../../data/mockData";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import Header from "../../newComponents/Header";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";
import { tokens } from "../../theme";

const Calendar = () => {
    const formatDate = (date) => {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    };

    const [theme, colorMode] = useMode();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt("Please enter a new title for your event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            });
        }
    };

    const handleEventClick = (selected) => {
        if (
            window.confirm(
                `Are you sure you want to delete the event '${selected.event.title}'`
            )
        ) {
            selected.event.remove();
        }
    };
    const renderEventContent = (eventInfo) => {
        return (
            <div style={{ color: 'white', textDecoration: 'none' }}>
                <b>{eventInfo.timeText}</b>
                <i>{eventInfo.event.title}</i>
            </div>
        );
    };

    return (<ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="appNew">
                <Sidebar />
                <main className="content">
                    <Topbar />
                    <Box m="20px">
                        <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

                        <Box display="flex" justifyContent="space-between">
                            {/* CALENDAR SIDEBAR */}
                            <Box
                                flex="1 1 20%"
                                backgroundColor={colors.primary[400]}
                                p="15px"
                                borderRadius="4px"
                            >
                                <Typography variant="h5">Events</Typography>
                                <List>
                                    {currentEvents.map((event) => (
                                        <ListItem
                                            key={event.id}
                                            sx={{
                                                backgroundColor: colors.greenAccent[500],
                                                margin: "10px 0",
                                                borderRadius: "2px",
                                            }}
                                        >
                                            <ListItemText
                                                primary={event.title}
                                                secondary={
                                                    <Typography>
                                                        {formatDate(event.start, {
                                                            year: "numeric",
                                                            month: "short",
                                                            day: "numeric",
                                                        })}
                                                    </Typography>
                                                }
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>

                            {/* CALENDAR */}
                            <Box flex="1 1 100%" ml="15px">
                                <FullCalendar
                                    height="75vh"
                                    plugins={[
                                        dayGridPlugin,
                                        timeGridPlugin,
                                        interactionPlugin,
                                        listPlugin,
                                    ]}
                                    headerToolbar={{
                                        left: "prev,next today",
                                        center: "title",
                                        right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                                    }}
                                    initialView="dayGridMonth"
                                    editable={true}
                                    selectable={true}
                                    selectMirror={true}
                                    dayMaxEvents={true}
                                    select={handleDateClick}
                                    eventClick={handleEventClick}
                                    eventsSet={(events) => setCurrentEvents(events)}
                                    eventContent={renderEventContent} 
                                    initialEvents={[
                                        {
                                            id: "5123",
                                            title: "Timed event",
                                            date: "2022-09-28",
                                        },
                                    ]}
                                    dayCellClassNames={() => 'custom-day-cell'}
                                />
                            </Box>
                        </Box>
                    </Box>
                </main>
            </div>
            <style>
                {`
                    h2{
                        color:white;
                    }
                    a {
                        color: white;
                        text-decoration: none;
                    }
                    .custom-day-cell .fc-daygrid-day-top {
                        color: white;
                        text-decoration: none;
                    }
                    `}
            </style>
        </ThemeProvider>
    </ColorModeContext.Provider>

    )
};

export default Calendar;
