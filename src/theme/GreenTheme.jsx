import { createTheme } from '@mui/material';
import { green } from '@mui/material/colors';

const GreenTheme = createTheme({
    palette: {
        mode: "light",
        primary: green,
        divider: green[200],
        background: {
            default: green[900],
            paper: green[100],
        },
        text: {
            primary: '#fff',
            secondary: green[500],
        },
    },
    typography: {
        fontFamily: 'Quicksand',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700
    }
}); 

export default GreenTheme;
