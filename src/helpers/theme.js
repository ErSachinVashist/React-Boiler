import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/deepPurple';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: pink,
        error: red,
    },
    typography: {
        fontFamily:"'Niramit', sans-serif",
        useNextVariants: true
    }
});

export default theme;
