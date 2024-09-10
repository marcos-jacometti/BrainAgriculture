import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Input, Button } from "../../../components/common/index";
import { useValidation } from "../../../context/validationContext";
import Select from "react-select";
import { FaUser, FaTree } from "react-icons/fa";
import { GiCorn } from "react-icons/gi";
import { MdConfirmationNumber, MdAreaChart, MdLocationOn } from "react-icons/md";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getStates, getCitiesByState } from "../../../services/locationApi";
import { handleUpdateFarmer, handleUpdateFarm, handleUpdateCrop } from '../../../services/handleUpdate';

export default function Update({ visible, setVisible, producer, onUpdate }) {
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [crops, setCrops] = useState([]);
    const [farm, setFarm] = useState({
        name: "",
        totalarea: "",
        plantedarea: "",
        nousedarea: ""
    });

    const { errors, validateCpfCnpj, validateAreas } = useValidation();

    const [updatedProducer, setUpdatedProducer] = useState({
        name: producer.name,
        codenumber: producer.codenumber,
    });

    const notify = (message, type) => {
        toast(message, { type: type });
    };

    const cropOptions = [
        { value: 'soja', label: 'Soja' },
        { value: 'milho', label: 'Milho' },
        { value: 'algodao', label: 'Algodão' },
        { value: 'cafe', label: 'Café' },
        { value: 'cana', label: 'Cana de Açúcar' }
    ];

    useEffect(() => {
        const fetchStates = async () => {
            try {
                const statesData = await getStates();
                setStates(statesData);
            } catch (error) {
                console.error("Error fetching states", error);
            }
        };

        fetchStates();
    }, []);

    useEffect(() => {
        const fetchCities = async () => {
            if (selectedState) {
                try {
                    const citiesData = await getCitiesByState(selectedState.value);
                    setCities(citiesData);
                } catch (error) {
                    console.error("Error fetching cities", error);
                }
            } else {
                setCities([]);
            }
        };

        fetchCities();
    }, [selectedState]);

    useEffect(() => {
        const fetchProducerDetails = async () => {
            try {
                const producerResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/producers/${producer.id}`);
                
                const farmResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/farms/${producer.id}`);
                
                if (farmResponse.data.id) {
                    const cropsResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/crops/${farmResponse.data.id}`);
                    
                    setFarm(farmResponse.data);
                    setCrops(cropsResponse.data.map(crop => ({ value: crop.name, label: crop.name })));
                    
                    const state = states.find(state => state.value === farmResponse.data.state) || null;
                    setSelectedState(state);
                    
                    const city = cities.find(city => city.value === farmResponse.data.city) || null;
                    setSelectedCity(city);
                }
            } catch (error) {
                console.error("Error fetching producer details", error);
            }
        };
    
        if (producer) {
            fetchProducerDetails();
        }
    }, [producer, states]);

    const handleStateChange = (selected) => {
        setSelectedState(selected);
        setCities([]);
        setSelectedCity(null);
    };

    const handleCityChange = (selected) => {
        setSelectedCity(selected);
    };

    const handleCropsChange = (selected) => {
        setCrops(selected || []);
    };

    const handleSubmit = async () => {
        const isCpfCnpjValid = validateCpfCnpj(updatedProducer.codenumber);
        if (!isCpfCnpjValid) {
            notify("CPF ou CNPJ inválido", "error");
            return;
        }
    
        const isAreasValid = validateAreas(farm.totalarea, farm.plantedarea, farm.nousedarea);
        if (!isAreasValid) {
            notify("Área agricultável e de vegetação não podem ser maiores que a área total", "error");
            return;
        }
    
        try {
            await handleUpdateFarmer(producer.id, updatedProducer.name, updatedProducer.codenumber);
            await handleUpdateFarm(farm.id, farm.name, selectedState.value, selectedCity.value, farm.totalarea, farm.plantedarea, farm.nousedarea);
            
            await Promise.all(crops.map(crop => handleUpdateCrop(crop.value, farm.id)));
            
            notify("Dados atualizados com sucesso", "success");
            onUpdate();
        } catch (error) {
            console.error("Error updating data", error);
            notify("Erro ao atualizar dados", "error");
        }
    };    

    return (
        <Form visible={visible} setVisible={setVisible} height="80vh" width="50vw" title="Editar Produtor:">
            <Input
                id="name" 
                icon={<FaUser />}
                placeholder="Nome do Produtor"
                type="text"
                value={updatedProducer.name || ""}
                onChange={(e) => setUpdatedProducer({ ...updatedProducer, name: e.target.value })}
            />
            <Input
                id="farmName"
                icon={<GiCorn />}
                placeholder="Nome da Fazenda"
                type="text"
                value={farm.name || ""}
                onChange={(e) => setFarm({ ...farm, name: e.target.value })}
            />
            <Input
                id="codeNumber"
                icon={<MdConfirmationNumber />}
                placeholder="CPF ou CNPJ"
                type="text"
                value={updatedProducer.codenumber || ""}
                onChange={(e) => setUpdatedProducer({ ...updatedProducer, codenumber: e.target.value })}
            />
            <Select
                id="stateSelect"
                placeholder="Estado"
                classNamePrefix="react-select"
                options={states}
                onChange={handleStateChange}
                value={selectedState}
            />
            <Select
                id="citySelect"
                placeholder="Cidade"
                classNamePrefix="react-select"
                options={cities}
                onChange={handleCityChange}
                value={selectedCity}
            />
            <Input
                icon={<MdLocationOn />} 
                value={farm.city || ""}
            />
            <Input
                id="totalArea"
                icon={<MdAreaChart />}
                placeholder="Área Total em Hectares"
                type="text"
                value={farm.totalarea || ""}
                onChange={(e) => setFarm({ ...farm, totalarea: e.target.value })}
            />
            <Input
                id="plantedArea"
                icon={<MdAreaChart />}
                placeholder="Área Agricultável em Hectares"
                type="text"
                value={farm.plantedarea || ""}
                onChange={(e) => setFarm({ ...farm, plantedarea: e.target.value })}
            />
            <Input
                id="noUsedArea"
                icon={<FaTree />}
                placeholder="Área de Vegetação em Hectares"
                type="text"
                value={farm.nousedarea || ""}
                onChange={(e) => setFarm({ ...farm, nousedarea: e.target.value })}
            />
            <Select
                id="crops"
                placeholder="Culturas Plantadas"
                classNamePrefix="react-select"
                options={cropOptions}
                isMulti
                onChange={handleCropsChange}
                value={crops}
            />
            <Button
                title="Alterar"
                onClick={handleSubmit}
            />
        </Form>
    );
}