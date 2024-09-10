import styled from "styled-components";
import { ContainerMediaStyles } from "./responsive";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.backgroundColor2};
    border-radius: 1vh;
    width: ${props => props.$width};
    padding: 1.5rem;
    max-height: ${props => props.$maxHeight};
    min-height: ${props => props.$minHeight};
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 3px 6px 0 rgba(0, 0, 0, 0.19);
    ${ContainerMediaStyles};

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
`;