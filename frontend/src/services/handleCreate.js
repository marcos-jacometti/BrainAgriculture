import axios from "axios";

export const handleCreateFarmer = async (name, codeNumber) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/producers/create`, {
            name,
            codeNumber
        });
        
        return response.data;
    } catch (error) {
        console.error("Error creating producer", error);
        throw error;
    }
};

export const handleCreateFarm = async (name, state, city, totalArea, plantedArea, noUsedArea, producer_id) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/farms/create`, {
            name,
            state,
            city,
            totalArea,
            plantedArea,
            noUsedArea,
            producer_id
        });
        
        return response.data.farm;
    } catch (error) {
        console.error("Error creating farm", error);
        throw error;
    }
};

export const handleCreateCrop = async (name, farm_id) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/crops/create`, {
            name,
            farm_id
        });
        
        return response.data.crop;
    } catch (error) {
        console.error("Error creating crop", error);
        throw error;
    }
};

export const createFarmerAndFarm = async (farmerName, farmerCodeNumber, farmName, state, city, totalArea, plantedArea, noUsedArea, cropName) => {
    try {
        const producer = await handleCreateFarmer(farmerName, farmerCodeNumber);
        const farm = await handleCreateFarm(farmName, state, city, totalArea, plantedArea, noUsedArea, producer.id);
        const crop = await handleCreateCrop(cropName, farm.id);

        return { producer, farm, crop };
    } catch (error) {
        console.error("Error creating farmer, farm, and crop", error);
        throw error;
    }
};