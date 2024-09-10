import React from "react";
import { InputContainer } from "./styles";

export default function Input({icon, type, id, placeholder, value, onChange}){
    return(
        <InputContainer>
            {icon}
            <input 
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </InputContainer>
    );
}