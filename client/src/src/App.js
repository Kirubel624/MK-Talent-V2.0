import './App.css';
import NavBar from './Components/NavBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CenteredTabs from './Pages/Projects/tabs';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
    },
  },
});

function App() {

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <NavBar />
        <CenteredTabs />
        {/* <ProjectCard/> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
