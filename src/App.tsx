import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import { Header } from "./components/Header/Header";
import PageTabs from "./components/PageTabs/PageTabs";

function App() {
  return (
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
         <Header />
         <PageTabs />
      </Box>
  );
}

export default App;
