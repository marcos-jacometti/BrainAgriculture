import { css } from "styled-components";
import { device } from "../../../assets/styles/mediaQueries";

export const InputContainerMediaStyles = css`
    @media ${device.mobile} {
        width: 50vw;
        gap: 1vw;
    }
`;

export const SvgMediaStyles = css`
    @media ${device.mobile} {
        font-size: 2vw;
    }
`;

export const InputMediaStyles = css`
    @media ${device.mobile} {
        font-size: 2.5vw;
    }
`;