import { css } from "styled-components";
import { device } from "../../../assets/styles/mediaQueries";

export const UpMediaStyles = css`
    @media ${device.mobile} {
        margin-left: 0;
        width: 80vw;
        min-height: 30vh;
        margin-bottom: 5vh;
    }
`;

export const SvgMediaStyles = css`
    @media ${device.mobile} {
        font-size: 5vw;
    }
`;

export const InputsMediaStyles = css`
    @media ${device.mobile} {
        width: 75vw;
        gap: 2vh;
    }
`;

export const SelectMediaStyles = css`
    @media ${device.mobile} {
        width: 50vw;
    }
`;