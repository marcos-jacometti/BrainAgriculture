import { css } from "styled-components";
import { device } from "../../../assets/styles/mediaQueries";

export const ButtonMediaStyles = css`
    @media ${device.mobile} {
        font-size: 3.2vw;
        width: 50vw;
    }
`;