import styled from "styled-components";
import { InputsMediaStyles, SelectMediaStyles, SvgMediaStyles, UpMediaStyles } from "./responsive";

export const Container = styled.div`
    ${props => props.$visible && `
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
    `}
`;

export const Up = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1vh;
    background-color: ${props => props.theme.backgroundColor2};
    height: ${props => props.$height};
    width: ${props => props.$width};
    border-radius: 2vh;
    position: relative;
    margin-left: 18vw;
    color: ${props => props.theme.color};
    ${UpMediaStyles};
`;

export const Close = styled.div`
    position: absolute;
    right: 1vw;
    top: 1vh;

    :hover {
        fill: #006837;
    }

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    svg {
        font-size: 2vw;
        fill: ${props => props.theme.fill};
        ${SvgMediaStyles};
    }
`;

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 0.8rem;
    gap: 1.1vw;
    color: ${props => props.theme.color};
    width: 70%;
    max-height: 60vh;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    ${InputsMediaStyles};

    &::-webkit-scrollbar {
        width: 0.4vw;
        border-radius: 1vh;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 1vh;
    }

    &::-webkit-scrollbar-track {
        background-color: #f5f5f5;
        border-radius: 1vh;
    }
    
    .react-select__control {
        width: 20vw;
        background-color: ${props => props.theme.backgroundColor2};
        color: ${props => props.theme.color};
        ${SelectMediaStyles};
    }

    .react-select__option {
        background-color: ${props => props.theme.backgroundColor2};
    }
`;