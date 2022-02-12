import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import {ReactNode} from "react";

type TabPanelProps = {
    children?: ReactNode;
    tabName: string;
    currentTabName: string;
}

export function TabPanel(props: TabPanelProps) {
    const { children, currentTabName, tabName, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={currentTabName !== tabName}
            id={`tabpanel-${tabName}`}
            aria-labelledby={`tab-${tabName}`}
            {...other}
        >
            {currentTabName === tabName && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}