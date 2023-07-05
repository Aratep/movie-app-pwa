import React from "react";

// MUI ITEMS
import { CircularProgress } from "@mui/material";
import styled from "styled-components";

type Props = {
  children: any;
  isLoading: boolean;
};

const LoaderWrapper = ({ children, isLoading }: Props) =>
  isLoading ? (
    <LoaderContainer>
      <CircularProgress />
    </LoaderContainer>
  ) : (
    children
  );

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;

export default LoaderWrapper;
