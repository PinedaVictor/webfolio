import styled from "styled-components";
import { device } from "../../../theme";

export const SectionWrap = styled.section`
  background: #f8f8f8;
  margin-top: -110px;
  @media ${device.medium} {
    margin-top: 0;
    padding-top: 30px;
  }
`;
