import styled from "styled-components";

export const Container = styled.div`
  width: 1170px;
  padding: 0 15px;
  margin: 0 auto;

  @media only screen and (max-width: 1350px) {
    width: 1170px;
  }

  @media only screen and (max-width: 1199px) {
    width: 970px;
  }
  @media only screen and (max-width: 991px) {
    width: 750px;
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
