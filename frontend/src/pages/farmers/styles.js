import styled from "styled-components";
import { FeaturesMediaStyles, MainContentMediaStyles, StyledButtonMediaStyles, SvgMediaStyles } from "./responsive";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MainContent = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    max-width: 82vw;
    height: 92.5vh;
    margin-left: 18vw;
    ${MainContentMediaStyles};
`;

export const Features = styled.div`
    display: flex;
    justify-content: center;
    width: 70vw;
    gap: 1vw;
    ${FeaturesMediaStyles};
`;

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6vh;
    width: 3vw;
    border-radius: 1vh;
    background-color: #006837;
    border: none;
    cursor: pointer;
    ${StyledButtonMediaStyles};

    &:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 15px 0 rgba(0, 0, 0, 0.3);
    }

    svg {
        fill: #fff;
        font-size: 1.5vw;
        ${SvgMediaStyles};
    }
`;