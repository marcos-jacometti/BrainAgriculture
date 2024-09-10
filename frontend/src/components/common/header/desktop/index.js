import React from "react";
import { Container, HeaderContainer, NavContainer } from "./styles";
import { Logo } from "../../index";
import { NavButton, UserFeature } from "../../../specific/index";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GiCorn} from "react-icons/gi";

export default function DesktopHeader(){
    return(
        <Container>
            <HeaderContainer>
                <Logo />
                <NavContainer>
                    <NavButton 
                        svg={ <MdOutlineSpaceDashboard /> }
                        title="Dashboard"
                        link="/"
                    />
                    <NavButton 
                        svg={ <GiCorn /> }
                        title="Produtores"
                        link="/farmer"
                    />
                </NavContainer>
            </HeaderContainer>
            <UserFeature />
        </Container>
    );
}