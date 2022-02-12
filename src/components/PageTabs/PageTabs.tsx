import {FormEvent, SyntheticEvent, useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {TabPanel} from "../TabPanel/TabPanel";
import {ConfigTab} from "../ConfigTab/ConfigTab";
import {useJsonScheme} from "./hooks/useJsonScheme";
import {ResultTab} from "../ResultTab/ResultTab";

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

    const { extractConfig, configString } = useJsonScheme();

    const handleConfigSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        extractConfig(event.target as HTMLFormElement);
        setActiveTab(TAB_NAMES.RESULT);
    }

    return (
        <Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={activeTab} onChange={handleChange}>
                    <Tab value={TAB_NAMES.CONFIG} label="Config" {...a11yProps(TAB_NAMES.CONFIG)} />
                    <Tab value={TAB_NAMES.RESULT}  label="Result" {...a11yProps(TAB_NAMES.RESULT)} disabled={!configString} />
                </Tabs>
            </Box>
            <TabPanel currentTabName={activeTab} tabName={TAB_NAMES.CONFIG}>
                <ConfigTab handleConfigSubmit={handleConfigSubmit}  configString={configString} />
            </TabPanel>
            <TabPanel currentTabName={activeTab} tabName={TAB_NAMES.RESULT}>
                <ResultTab configString={configString} />
            </TabPanel>
        </Box>
    );
}