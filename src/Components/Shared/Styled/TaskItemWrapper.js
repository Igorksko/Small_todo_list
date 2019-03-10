import styled from "styled-components/macro";
import {px2rem} from "../../../utils/helpers";
import {colors} from "../../../utils/variables";

export const TaskItemWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    width: 25%;
    padding-left: ${px2rem(10)};
    border-right: ${px2rem(2)} solid ${colors.lightGray};
    :last-child {
      border: none;
    }
  }
`;
