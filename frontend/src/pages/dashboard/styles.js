import styled from "styled-components";
import { MainContentMediaStyles } from "./responsive";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MainContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2vh;
    flex-wrap: wrap;
    max-width: 82vw;
    height: auto;
    margin-left: 18vw;
    padding: 4vh;
    ${MainContentMediaStyles};
`;