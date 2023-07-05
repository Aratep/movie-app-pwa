import * as React from "react";
// MUI ITEMS
import { Typography } from "@mui/material";
import styled from "styled-components";

type Props = {
  text: string;
  color?: string;
  variant?: any;
};

const NoItemComponent = ({ text, color = "#fff", variant = "h5" }: Props) => {
  return (
    <StyledTypography
      color={color}
      variant={variant}
    >
      {text}
    </StyledTypography>
  );
};

const StyledTypography = styled(Typography)`
  text-align: center;
  padding: 1rem;
`;

export default NoItemComponent;
