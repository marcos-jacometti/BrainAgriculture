import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import { ToastMediaStyles } from "./responsive";

export const StyledToast = styled(ToastContainer)`
    &&&.Toastify__toast-container {
        width: 20vw;
        ${ToastMediaStyles};
    }

    .Toastify__toast {
        background: ${props => props.theme.backgroundColor2};
        color: ${props => props.themecolor};
    }
`;