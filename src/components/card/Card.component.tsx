import * as React from "react";
// MUI ITEMS
import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import styled from "styled-components";

// COMPONENTS
import { MAButton } from "components";
// UTILS
import { generateCardImage } from "utils/helper-functions";

type Props = {
  item: any;
  btnTitle?: string;
  titleVariant?: any;
  onButtonClick?: any;
  imgHeight?: number;
};

const MACard = ({
  item,
  btnTitle = "More Details",
  titleVariant = "h6",
  onButtonClick,
  imgHeight,
}: Props) => {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        alt={item.Title}
        height={imgHeight}
        image={generateCardImage(item.Poster)}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant={titleVariant}
          component="div"
        >
          {item.Title}
        </Typography>
        <Typography variant="body2">{item.Year}</Typography>
      </CardContent>
      <CardActions>
        <MAButton
          onClick={() => onButtonClick(item.imdbID)}
          size="small"
        >
          {btnTitle}
        </MAButton>
      </CardActions>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default MACard;
