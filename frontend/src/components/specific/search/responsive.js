import { css } from "styled-components";
import { device } from "../../../assets/styles/mediaQueries";

export const SearchContainerMediaStyles = css`
    @media ${device.mobile} {
        width: 80vw;
        gap: 1.5vw;
    }
`;

export const InputMediaStyles = css`
    @media ${device.mobile} {
        font-size: 3vw;
    }
`;

export const SvgMediaStyles = css`
    @media ${device.mobile} {
        font-size: 3vw;
    }
`;