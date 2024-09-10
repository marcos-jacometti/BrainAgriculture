import { css } from "styled-components";
import { device } from "../../../assets/styles/mediaQueries";

export const ToastMediaStyles = css`
    @media ${device.mobile} {
        width: 60vw;
        margin-top: 5vh;
        margin-left: 1vh;
    }
`;