import React, { useContext } from "react";
import themeContext from "../../../assets/styles/theme";
import { Container } from "./styles";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

export default function ThemeBtn(){
    const [mode, setMode] = useContext(themeContext);

    return(
        <Container>
            <button onClick={() => setMode(!mode)}>
                {!mode ? <BsMoonFill /> : <BsSunFill />}
            </button>
        </Container>
    );
}