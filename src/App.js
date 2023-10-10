import React from 'react';
import { Box, CssBaseline, Stack, ThemeProvider, createTheme } from '@mui/material';

import Add from './components/Add';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

import GreenTheme from './themes/GreenTheme';
import GreyTheme from './themes/GreyTheme';
import StandardDarkTheme from './themes/StandardDarkTheme';
import StandardLightTheme from './themes/StandardLightTheme';

const THEME_NAMES = {
  STANDARD_LIGHT: "light-standard",
  STANDARD_DARK : "dark-standard",
  GREY : "grey",
  GREEN: "green"
}

function App() {
  const [theme, setTheme] = React.useState(StandardLightTheme);

  // const darkTheme = createTheme({
  //   palette: {
  //     mode: mode,
  //     // primary: {
  //     //   main: '#fefefe'
  //     // },
  //     // secondary: purple
  //     ...(
  //       mode==='dark'
  //       ? {
  //         primary: blue,
  //         divider: blue[200],
  //         background: {
  //           default: blue[900],
  //           paper: blue[100],
  //         }
          
  //       }
  //       : {
  //         primary: deepOrange,
  //         divider: deepOrange[700],
  //         background: {
  //           default: deepOrange[900],
  //           paper: deepOrange[900],
  //         },
  //         text: {
  //           primary: '#fff',
  //           secondary: grey[500],
  //         },
  //       }
  //     )
  //   },
  //   typography: {
  //     ...(
  //       mode==='dark'
  //       ?
  //       {
  //         fontFamily: 'Quicksand',
  //         fontWeightLight: 400,
  //         fontWeightRegular: 500,
  //         fontWeightMedium: 600,
  //         fontWeightBold: 700
  //       }
  //       :
  //       {}
  //     )
      
  //   }
  // })

  const handleThemeSelected = (selectedThemeName) => {
    if(selectedThemeName===THEME_NAMES.STANDARD_LIGHT) {
      setTheme(StandardLightTheme);
    } else if(selectedThemeName===THEME_NAMES.STANDARD_DARK) {
      setTheme(StandardDarkTheme);
    } else if(selectedThemeName===THEME_NAMES.GREY) {
      setTheme(GreyTheme);
    } else if(selectedThemeName===THEME_NAMES.GREEN) {
      setTheme(GreenTheme);
    } else {
      setTheme(StandardLightTheme);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar onThemeChanged={handleThemeSelected}/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
