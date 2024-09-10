import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "../../../components/common/index";
import { useValidation } from "../../../context/validationContext";
import Select from "react-select";
import { FaUser, FaTree } from "react-icons/fa";
import { GiCorn } from "react-icons/gi";
import { MdConfirmationNumber, MdAreaChart } from "react-icons/md";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getStates, getCitiesByState } from "../../../services/locationApi";
import { handleCreateFarmer, handleCreateFarm, handleCreateCrop } from '../../../services/handleCreate';

export default function Create({ visible, setVisible, onProducersUpdated }) {
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [crops, setCrops] = useState([]);

    const { errors, validateCpfCnpj, validateAreas } = useValidation();

    const notify = (message, type) => {
        toast(message, { type: type });
    };

    const crop = [
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
                    setSelectedCity(null);
                } catch (error) {
                    console.error("Error fetching cities", error);
                }
            } else {
                setCities([]);
                setSelectedCity(null);
            }
        };
        fetchCities();
    }, [selectedState]);

    const handleStateChange = (selected) => {
        setSelectedState(selected);
        setCities([]);
        setSelectedCity(null);
    };

    const handleCityChange = (selected) => {
        setSelectedCity(selected);
    };

    const handleCropsChange = (selected) => {
        setCrops(selected);
    };

    const handleSubmit = async () => {
        const name = document.getElementById('name').value.trim();
        const codeNumber = document.getElementById('codeNumber').value.trim();
        const farmName = document.getElementById('farmName').value.trim();
        const totalArea = document.getElementById('totalArea').value.trim();
        const plantedArea = document.getElementById('plantedArea').value.trim();
        const noUsedArea = document.getElementById('noUsedArea').value.trim();
        const selectedCulturesValues = crops.map(crop => crop.value);

        const isCpfCnpjValid = validateCpfCnpj(codeNumber);
        const areAreasValid = validateAreas(totalArea, plantedArea, noUsedArea);

        if (!name || !codeNumber || !farmName || !totalArea || !plantedArea || !noUsedArea || !selectedState || !selectedCity || selectedCulturesValues.length === 0) {
            notify("Por favor, preencha todos os campos", "error");
            return;
        }

        if (!isCpfCnpjValid) {
            notify("CPF ou CNPJ inválido", "error");
            return;
        }

        if (!areAreasValid) {
            notify("Área agricultável e de vegetação não podem ser maiores que a área total", "error");
                return;
            }
    
            try {
                const farmer = await handleCreateFarmer(name, codeNumber);
                const farm = await handleCreateFarm(farmName, selectedState.value, selectedCity.value, totalArea, plantedArea, noUsedArea, farmer.id);
                const cropsPromises = selectedCulturesValues.map(culture => handleCreateCrop(culture, farm.id));
    
                await Promise.all(cropsPromises);
                notify("Produtor cadastrado com sucesso", "success");
                if (onProducersUpdated) {
                    onProducersUpdated();
                }
            } catch (error) {
                notify("Erro ao cadastrar produtor", "error");
            }
        };
    
        return (
            <Form visible={visible} setVisible={setVisible} height="80vh" width="50vw" title="Cadastrar Produtor:">
                <Input
                    id="name"
                    icon={<FaUser />}
                    placeholder="Nome do Produtor"
                    type="text"
                />
                <Input
                    id="farmName"
                    icon={<GiCorn />}
                    placeholder="Nome da Fazenda"
                    type="text"
                />
                <Input
                    id="codeNumber"
                    icon={<MdConfirmationNumber />}
                    placeholder="CPF ou CNPJ"
                    type="text"
                    error={errors.codeNumber}
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
                    isDisabled={!selectedState}
                />
                <Input
                    id="totalArea"
                    icon={<MdAreaChart />}
                    placeholder="Área Total em Hectares"
                    type="text"
                    error={errors.area}
                />
                <Input
                    id="plantedArea"
                    icon={<MdAreaChart />}
                    placeholder="Área Agricultável em Hectares"
                    type="text"
                />
                <Input
                    id="noUsedArea"
                    icon={<FaTree />}
                    placeholder="Área de Vegetação em Hectares"
                    type="text"
                />
                <Select 
                    id="crops"
                    placeholder="Culturas Plantadas"
                    classNamePrefix="react-select"
                    options={crop}
                    isMulti
                    onChange={handleCropsChange}
                    value={crops}
                />
                <Button 
                    title="Cadastrar"
                    onClick={handleSubmit}
                />
            </Form>
        );
    }    