import { css } from "styled-components";
import { device } from "../../../../assets/styles/mediaQueries";

export const CardMediaStyles = css`
    @media ${device.mobile} {
        width: 80vw;
    }
`;

export const SvgMediaStyles = css`
    @media ${device.mobile} {
        font-size: 4vw;
    }
`;

export const ButtonMediaStyles = css`
    @media ${device.mobile} {
        width: 8vw;
        font-size: 2.5vw;
    }
`;