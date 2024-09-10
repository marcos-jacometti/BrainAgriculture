import { css } from "styled-components";
import { device } from "../../assets/styles/mediaQueries";

export const MainContentMediaStyles = css`
    @media ${device.mobile} {
        min-width: 100vw;
        margin-left: 0;
    }
`;