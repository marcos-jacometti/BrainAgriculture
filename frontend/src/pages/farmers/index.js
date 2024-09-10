import React, { useState } from "react";
import { Container, Features, MainContent, StyledButton } from "./styles";
import { Header, Content } from "../../components/common/index";
import { Search } from "../../components/specific/index";
import { IoMdAddCircle } from "react-icons/io";
import Create from "./CRUD/create";
import Producers from "./CRUD/readProducers/index";
import { ValidationProvider } from "../../context/validationContext";

export default function FarmersPage() {
    const [visible, setVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [updateProducers, setUpdateProducers] = useState(false);

    const handleBtnClick = () => {
        setVisible(true);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value || "");
    };

    const handleProducersUpdated = () => {
        setUpdateProducers(prevState => !prevState);
    };

    return (
        <Container>
            <Header />
            <MainContent>
                <Features>
                    <Search 
                        placeholder="Procure por um produtor rural"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <StyledButton onClick={handleBtnClick}>
                        <IoMdAddCircle />
                    </StyledButton>
                    <ValidationProvider>
                        {visible && <Create visible={visible} setVisible={setVisible} onProducersUpdated={handleProducersUpdated} />}
                    </ValidationProvider>
                </Features>
                <Content maxHeight="70vh" minHeight="70vh" width="70vw">
                    <Producers searchTerm={searchTerm} onProducersUpdated={handleProducersUpdated} />
                </Content>
            </MainContent>
        </Container>
    );
}