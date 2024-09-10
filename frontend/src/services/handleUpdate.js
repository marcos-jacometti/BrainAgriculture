import axios from "axios";

export const handleUpdateFarmer = async (farmerId, name, codeNumber) => {
    try {
        const response = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/update/producer/${farmerId}`, {
            name,
            codeNumber
        });
        return response.data;
    } catch (error) {
        console.error("Error updating producer", error);
        throw error;
    }
};

export const handleUpdateFarm = async (farmId, name, state, city, totalArea, plantedArea, noUsedArea) => {
    try {
        const response = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/update/farm/${farmId}`, {
            name,
            state,
            city,
            totalArea,
            plantedArea,
            noUsedArea
        });
        return response.data.farm;
    } catch (error) {
        console.error("Error updating farm", error);
        throw error;
    }
};

export const handleUpdateCrop = async (name, farmId) => {
    try {
        const response = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/update/crops/crop/${farmId}`, {
            name,
        });
        return response.data.crop;
    } catch (error) {
        console.error("Error updating crop", error);
        throw error;
    }
};