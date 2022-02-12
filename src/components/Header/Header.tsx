import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import logo from '../../logo.svg';

export default function Header() {
  return (
    <AppBar
      sx={{ flexDirection: 'row', alignItems: 'center' }}
      position="sticky"
    >
      <img src={logo} className="App-logo" alt="logo" />
      <Typography variant="h6" component="div">
        Form Generator
      </Typography>
    </AppBar>
  );
}
