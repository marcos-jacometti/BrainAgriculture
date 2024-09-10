import React from "react";
import { Link } from "react-router-dom";
import { LogoContainer } from "./styles";

export default function Logo(){
    return(
        <Link to="/">
            <LogoContainer />
        </Link>
    );
}