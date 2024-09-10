import React from "react";
import { Buttons, Container } from "./styles";
import { Link } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GiCorn} from "react-icons/gi";

export default function MobileHeader(){
    return(
        <Container>
            <Buttons>
                <button>
                    <Link to="/" className="link">
                        <MdOutlineSpaceDashboard />
                    </Link>
                </button>
                <button>
                    <Link to="/farmer" className="link">
                        <GiCorn />
                    </Link>
                </button>
            </Buttons>
        </Container>
    );
}