import { createTheme } from '@mui/material';

const theme = createTheme({
  spacing: 10,
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
      }
    }
  }
});

export default theme;