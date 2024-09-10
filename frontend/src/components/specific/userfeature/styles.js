import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: end;
    height: 7.5vh;
    width: 82vw;
    margin-left: 18vw;
    border-bottom: 0.2vh solid #fff;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 25vw;
`;

export const User = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    width: 15vw;
    
    span {
        font-size: 0.8vw;
        color: ${props => props.theme.color};
    }
`;

export const Picture = styled.div`
    background-image: url(${props => props.$background});
    background-size: cover;
    background-position: center;
    height: 5vh;
    width: 2.5vw;
    border-radius: 50%;
`;
