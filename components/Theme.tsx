import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({ cssVariables: true });

function App() {
  return <ThemeProvider theme={theme}>{/* ...your app */}</ThemeProvider>;
}