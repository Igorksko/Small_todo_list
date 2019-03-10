import styled from "styled-components/macro";
import {px2rem} from "../../../utils/helpers";
import {border, fontWeight} from "../../../utils/variables";

export const Button = styled.button`
  max-width: ${px2rem(200)};
  width: 100%;
  height: ${px2rem(50)};
  font-weight: ${fontWeight.bold};
  border-radius: ${border.small};
`;
