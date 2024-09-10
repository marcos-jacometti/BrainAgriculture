import styled from "styled-components";
import { InputContainerMediaStyles, InputMediaStyles, SvgMediaStyles } from "./responsive";

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5vw;
    border-radius: 1vh;
    box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0.4), 0 3px 8px 0 rgba(0, 0, 0, 0.3);
    padding: 1rem;
    height: 6vh;
    width: 20vw;
    position: relative;
    ${InputContainerMediaStyles};

    svg {
        font-size: 1vw;
        ${SvgMediaStyles};
    }

    input {
        border: none;
        background-color: transparent;
        width: 100%;
        font-size: 0.8vw;
        outline: none;
        color: ${props => props.theme.color};
        ${InputMediaStyles};
    }

    input::placeholder {
        color: ${props => props.theme.color};
    }
`;