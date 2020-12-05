import styled from "styled-components";
import { device } from "../../../theme";

export const SectionWrap = styled.div`
  padding-top: 20px;
  padding-bottom: 105px;
  background: #f8f8f8;
  @media ${device.medium} {
    padding-top: 80px;
    padding-bottom: 45px;
  }
  @media ${device.small} {
    padding-top: 60px;
    padding-bottom: 25px;
  }
`;

export const HeaderWrap = styled.div`
  margin-right: 3rem;
  @media ${device.medium} {
    margin-bottom: 20px;
  }
`;
