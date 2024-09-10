import React from "react";
import { Form, Button } from "../../../components/common/index";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

export default function DeletePopup({ visible, setVisible, producer, onDelete }) {
    const notify = (message, type) => {
        toast(message, { type: type });
    };

    const handleDeleteType = async (producerId) => {
        try {
            await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/delete/producer/${producerId}`);
            notify("Produtor excluído com sucesso", "success");
            onDelete(producerId);
        } catch (error) {
            console.error(error);
            notify("Erro ao deletar produtor", "error");
        }
    };

    return (
        <Form
            visible={visible}
            setVisible={setVisible}
            height="13vw"
            width="30vw"
            title="Certeza que deseja excluir o produtor?"
        >
            <Button
                onClick={() => handleDeleteType(producer.id)}
                title="Excluir"
            />
        </Form>
    );
}