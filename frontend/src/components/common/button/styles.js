import styled from "styled-components";
import { ButtonMediaStyles } from "./responsive";

export const ButtonContainer = styled.div`
    
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 5vh;
        width: 20vw;
        border-radius: 1vh;
        font-size: 1vw;
        font-weight: bold;
        background-color: #006837;
        border: none;
        color: #fff;
        cursor: pointer;
        ${ButtonMediaStyles};

        &:hover {
            box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.4), 0 1px 1px 0 rgba(0, 0, 0, 0.3);
        }
    }
`;