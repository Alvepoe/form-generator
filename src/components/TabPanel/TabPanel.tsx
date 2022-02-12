import Box from '@mui/material/Box';
import { ReactNode } from 'react';

type TTabPanelProps = {
  children?: ReactNode;
  tabName: string;
  currentTabName: string;
};

export default function TabPanel(props: TTabPanelProps) {
  const { children, currentTabName, tabName, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={currentTabName !== tabName}
      id={`tabpanel-${tabName}`}
      aria-labelledby={`tab-${tabName}`}
      {...other}
    >
      {currentTabName === tabName && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
