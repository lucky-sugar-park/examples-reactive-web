import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

const GreyTheme = createTheme({
    palette: {
        mode: "dark",
        primary: grey,
        divider: grey[200],
        background: {
            default: grey[500],
            paper: grey[500],
        },
        text: {
            primary: '#fff',
            secondary: grey[500],
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

export default GreyTheme;
