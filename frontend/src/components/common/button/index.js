import React from "react";
import { ButtonContainer } from "./styles";

export default function Button({ onClick, title, disabled }){
    return(
        <ButtonContainer>
            <button onClick={onClick} disabled={disabled}>
                {title}
            </button>
        </ButtonContainer>
    );
}