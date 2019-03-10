import React from "react";
import {border, colors, fontSizes, fontWeight} from "../../utils/variables";
import styled from "styled-components/macro";
import {px2rem} from "../../utils/helpers";

const PageNotFound = () => (
  <PageWrapper>
    <ContentWrapper>Page Not Found</ContentWrapper>
  </PageWrapper>
);

const PageWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${colors.lightGray};
`;

export const ContentWrapper = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  border-radius: ${border.small};
  padding: ${px2rem(20)};
  line-height: ${px2rem(20)};
  color: ${colors.darkGray};
  font-size: ${fontSizes.large};
  font-weight: ${fontWeight.bold};
`;

export default PageNotFound
