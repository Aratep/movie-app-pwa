// MUI ITEMS
import { Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const MAButton = (props: any) => (
  <ThemeProvider theme={theme}>
    <Button {...props} />
  </ThemeProvider>
);

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
  },
});

export default MAButton;
