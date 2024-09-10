import styled from "styled-components";
import { ButtonMediaStyles, CardMediaStyles, SvgMediaStyles } from "./responsive";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    gap: 3vh;
    width: 100%;
`;

export const Card = styled.div`
    display: flex;
    align-items: center;
    min-height: 10vh;
    width: 65vw;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    border-radius: 1vh;
    padding: 2vh;
    color: ${props => props.theme.color};
    ${CardMediaStyles};

    &:hover {
        box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 12px 0 rgba(0, 0, 0, 0.3);
    }
`;

export const Details = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 80%;
    gap: 2vw;

    svg {
        font-size: 1.4vw;
        ${SvgMediaStyles};
    }
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 20%;
    height: 100%;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 3vw;
        border-radius: 50%;
        background-color: #f4f5f4;
        border: none;
        font-size: 1.1vw;
        cursor: pointer;
        ${ButtonMediaStyles};

        &:hover {
            color: #e7a811;
        }
    }
`;