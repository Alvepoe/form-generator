import { SyntheticEvent, useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {TabPanel} from "../TabPanel/TabPanel";

enum TAB_NAMES {
    CONFIG = 'config',
    RESULT = 'result'
}

export default function PageTabs() {
    const [activeTab, setActiveTab] = useState<string>(TAB_NAMES.CONFIG);

    const handleChange = (event: SyntheticEvent, newValue: string) => {
        setActiveTab(newValue);
    };

    function a11yProps(index: string) {
        return {
            id: `tab-${index}`,
            'aria-controls': `tabpanel-${index}`,
        }
    }

    return (
        <Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={activeTab} onChange={handleChange}>
                    <Tab value={TAB_NAMES.CONFIG} label="Config" {...a11yProps(TAB_NAMES.CONFIG)} />
                    <Tab value={TAB_NAMES.RESULT}  label="Result" {...a11yProps(TAB_NAMES.RESULT)} />
                </Tabs>
            </Box>
            <TabPanel currentTabName={activeTab} tabName={TAB_NAMES.CONFIG}>
                Config
            </TabPanel>
            <TabPanel currentTabName={activeTab} tabName={TAB_NAMES.RESULT}>
                Result
            </TabPanel>
        </Box>
    );
}