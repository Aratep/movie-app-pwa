import * as React from "react";
// MUI ITEMS
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import styled from "styled-components";

// COMPONENTS
import { IsVisible } from "components";
// UTILS
import { generateUUID, generateCardImage } from "utils/helper-functions";

type Props = {
  item: any;
  visibleInfoItems: any;
  titleVariant?: any;
  posterHeight?: string;
};

const MADetailCard = ({
  item,
  visibleInfoItems,
  titleVariant = "h6",
  posterHeight = "300",
}: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledCard>
        <CardContent>
          {visibleInfoItems.map((det: any) => {
            return (
              <React.Fragment key={generateUUID()}>
                <IsVisible isVisible={det.isImg}>
                  <CardContent>
                    <CardMedia
                      component="img"
                      alt={item[det.title]}
                      height={posterHeight}
                      image={generateCardImage(item.Poster)}
                    />
                  </CardContent>
                </IsVisible>
                <IsVisible isVisible={det.isTitle}>
                  <Typography
                    gutterBottom
                    variant={titleVariant}
                    component="div"
                  >
                    {item[det.title]}
                  </Typography>
                </IsVisible>
                <IsVisible isVisible={det.isVisible}>
                  <StyledTypography variant="body1">
                    <StyledSpan>{det.title}:</StyledSpan> {item[det.title]}
                  </StyledTypography>
                </IsVisible>
              </React.Fragment>
            );
          })}
        </CardContent>
      </StyledCard>
    </ThemeProvider>
  );
};

const StyledCard = styled(Card)`
  background-color: #181818 !important;
  color: #a3a3a3 !important;
  height: fit-content;
`;

const StyledSpan = styled.span`
  font-weight: bold;
`;

const StyledTypography = styled(Typography)`
  max-width: 60%;
`;

const theme = createTheme({
  components: {
    MuiCardMedia: {
      styleOverrides: {
        img: {
          objectFit: "unset",
          width: "unset",
          borderRadius: "1rem",
        },
      },
    },
  },
});

export default MADetailCard;
