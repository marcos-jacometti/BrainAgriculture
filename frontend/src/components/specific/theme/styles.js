import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3vw;
    height: 4vh;
    
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        outline: none;
        border: none;
        cursor: pointer;
        font-size: 1vw;
        height: 4vh;

        svg {
            fill: ${(props) => props.theme.fill};
        }
    }

    .active svg {
            fill: ${(props) => props.theme.activeFill};
    }
`;