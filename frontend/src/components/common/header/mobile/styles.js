import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 9.5vh;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    z-index: 9999;
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    width: 60%;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 8vh;
        width: 12vw;
        font-size: 8vw;
        background-color: transparent;
        border: none;
        
        svg {
            fill: #000;
        }

        .link {
            display: flex;
            align-items: center;
            color: inherit;
            text-decoration: none;
            gap: 1vh;
            width: 100%;
        }
    }
`;