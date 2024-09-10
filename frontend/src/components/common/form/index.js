import React from "react";
import { Close, Container, Up, Inputs } from "./styles";
import { IoClose } from "react-icons/io5";
import { StyledToast } from "../toast/styles";
import 'react-toastify/dist/ReactToastify.css';

export default function Form({ visible, setVisible, title, children, height, width }){
    return(
        <Container $visible={visible}>
            <Up $height={height} $width={width}>
                <Close>
                    <button onClick={() => setVisible(false)}>
                        <IoClose />
                    </button>
                </Close>
                <h5>{title}</h5>
                <Inputs>
                    {children}
                </Inputs>
                <StyledToast />
            </Up>
        </Container>
    );
}