import axios from "axios";

export const getStates = async () => {
    try {
        const response = await axios.get("https://brasilapi.com.br/api/ibge/uf/v1");
        return response.data.map((uf) => ({
            value: uf.sigla,
            label: uf.nome
        }));
    } catch (error) {
        console.error("Error to get UFs", error);
        return [];
    }
};

export const getCitiesByState = async (uf) => {
    try {
        const response = await axios.get(`https://brasilapi.com.br/api/ibge/municipios/v1/${uf}`);
        return response.data.map((city) => ({
            value: city.nome,
            label: city.nome
        }));
    } catch (error) {
        console.error("Error to get cities", error);
        return [];
    }
};