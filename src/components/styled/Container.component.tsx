import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #181818;
  color: ${props => (props.color ? props.color : "#ffffff")};
  min-height: 100vh;
`;

export default Container;
