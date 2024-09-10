import React from "react";
import { Container } from "./styles";

export default function Content({ maxHeight, minHeight, width, children }){
    return(
        <Container $maxHeight={maxHeight} $minHeight={minHeight} $width={width}>
            {children}
        </Container>
    );
}