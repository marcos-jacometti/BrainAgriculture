import React from "react";
import { SearchContainer } from "./styles";
import { FaSearch } from "react-icons/fa";

export default function Search({placeholder, value, onChange}){
    return(
        <SearchContainer>
            <FaSearch />
            <input 
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </SearchContainer>
    );
}