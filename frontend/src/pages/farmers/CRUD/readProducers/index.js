import React, { useEffect, useState } from "react";
import { Buttons, Card, Container, Details } from "./styles";
import { GiCorn } from "react-icons/gi";
import { FaPen, FaTrash } from "react-icons/fa";
import axios from "axios";
import Update from "../update";
import DeletePopup from "../delete";
import { ValidationProvider } from "../../../../context/validationContext";

export default function Producers({ searchTerm, onProducersUpdated }) {
    const [producers, setProducers] = useState([]);
    const [visible, setVisible] = useState(false);
    const [deleteVisible, setDeleteVisible] = useState(false);
    const [selectedProducer, setSelectedProducer] = useState(null);

    const fetchProducers = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/producers`);
            setProducers(response.data);
        } catch (error) {
            console.error('Error fetching producers', error);
        }
    };

    useEffect(() => {
        fetchProducers();
    }, [onProducersUpdated]);

    const handleEditClick = (producerId) => {
        setSelectedProducer(producerId);
        setVisible(true);
    };

    const handleDeleteProducer = (producerId) => {
        setProducers((prevProducers) => prevProducers.filter(producer => producer.id !== producerId));
    };

    const handleDeleteClick = (producer) => {
        setSelectedProducer(producer);
        setDeleteVisible(true)
    }

    const handleUpdate = () => {
        fetchProducers();
    };

    const filteredData = producers.filter(producer =>
        producer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container>
            {filteredData.map((producer) => (
                <Card key={producer.id}>
                    <Details>
                        <GiCorn />
                        <span>{producer.name}</span>
                    </Details>
                    <Buttons>
                        <button onClick={() => handleEditClick(producer)}>
                            <FaPen />
                        </button>
                        <button onClick={() => handleDeleteClick(producer)}>
                            <FaTrash />
                        </button>
                    </Buttons>
                </Card>
            ))}
            <ValidationProvider>
                {visible && selectedProducer && (
                    <Update
                        visible={visible}
                        setVisible={setVisible}
                        producer={selectedProducer}
                        onUpdate={handleUpdate}
                    />
                )}
            </ValidationProvider>
            {deleteVisible && selectedProducer && (
                <DeletePopup
                    visible={deleteVisible}
                    setVisible={setDeleteVisible}
                    producer={selectedProducer}
                    onDelete={handleDeleteProducer}
                />
            )}
        </Container>
    );
}