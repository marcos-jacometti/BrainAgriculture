import styled from "styled-components";

export const Container = styled.div`
    display: flex;
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    height: 100vh;
    width: 18vw;
    background-color: ${props => props.theme.backgroundColor2};
`;

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 27vh;
    width: 100%;
`;