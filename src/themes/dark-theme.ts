import { createTheme } from '@mui/material';
import { blueGrey, red } from '@mui/material/colors';


export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: blueGrey[50] 
        },
        secondary: {
            main: '#19857b'
        },
        error: {
            main: red.A400
        }
    },
    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    backgroundColor: '#4a148c'
                }
            }
        }
    }
});