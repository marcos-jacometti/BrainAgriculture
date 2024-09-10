import { css } from "styled-components";
import { device } from "../../assets/styles/mediaQueries";

export const MainContentMediaStyles = css`
    @media ${device.mobile} {
        min-width: 100vw;
        margin-left: 0;
    }
`;

export const FeaturesMediaStyles = css`
    @media ${device.mobile} {
        width: 100vw;
    }
`;

export const StyledButtonMediaStyles = css`
    @media ${device.mobile} {
        width: 10vw;
    }
`;

export const SvgMediaStyles = css`
    @media ${device.mobile} {
        font-size: 5vw;
    }
`;