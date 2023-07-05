import * as React from "react";
// MUI ITEMS
import { Box, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import styled from "styled-components";

// UTILS
import { generateUUID } from "utils/helper-functions";

type Props = {
  items: any;
  renderItem?: any;
  columnCount?: number;
};
const MAGridBox = ({ items = [], columnCount = 4, renderItem }: Props) => {
  const lgSize = 12 / columnCount;
  const secondSize = Math.round(lgSize);
  const smSize = lgSize + secondSize;

  return (
    <ThemeProvider theme={theme}>
      <StyledBox>
        <StyledGrid
          container
          spacing={2}
        >
          {items.length > 0 &&
            items.map((item: any) => (
              <Grid
                item
                xs={smSize + 1}
                sm={smSize}
                md={lgSize}
                lg={lgSize}
                key={generateUUID()}
              >
                {renderItem(item)}
              </Grid>
            ))}
        </StyledGrid>
      </StyledBox>
    </ThemeProvider>
  );
};

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

const StyledGrid = styled(Grid)`
  width: 70% !important;
`;

const theme = createTheme({
  components: {
    MuiGrid: {
      styleOverrides: {
        container: {
          marginTop: 0,
          width: "100%",
          marginLeft: 0,
          padding: "1rem",
        },
        item: {
          padding: "1rem",
        },
      },
    },
  },
});

export default MAGridBox;
