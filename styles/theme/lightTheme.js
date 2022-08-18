import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#000',
        },
        secondary: {
          main: '#d1a000',
        },
      },
      typography: {
        h5: {
          fontFamily: 'Ubuntu',
          color: '#000'
        },
        button: {
          fontFamily: 'Ubuntu',
          color: '#000'
        },
        body2: {
          fontFamily: 'Ubuntu',
          color: '#000'
        },
        body1: {
          fontFamily: 'Ubuntu',
          color: '#000'
        },
        subtitle2: {
          fontFamily: 'Ubuntu',
          color: '#000'
        },
        subtitle1: {
          fontFamily: 'Ubuntu',
          color: '#000'
        },
        fontFamily: 'Ubuntu',
        color: '#000'
      },
      overrides: {
        MuiAppBar: {
          colorInherit: {
            backgroundColor: '#f3f3f3bf',
        color: '#00478F',
          },
        },
      },
      props: {
        MuiAppBar: {
          color: 'inherit',
        },
      },
});

export default lightTheme;