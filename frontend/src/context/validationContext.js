import React, { createContext, useState, useContext } from 'react';

const ValidationContext = createContext();

export const ValidationProvider = ({ children }) => {
    const [errors, setErrors] = useState({});

    const validateCpfCnpj = (value) => {
        if (value.length !== 11 && value.length !== 14) {
            setErrors((prev) => ({ ...prev, codeNumber: 'CPF ou CNPJ inválido' }));
            return false;
        }
        setErrors((prev) => ({ ...prev, codeNumber: '' }));
        return true;
    };

    const validateAreas = (totalArea, plantedArea, noUsedArea) => {
        if (parseFloat(plantedArea) + parseFloat(noUsedArea) > parseFloat(totalArea)) {
            setErrors((prev) => ({ ...prev, area: 'A soma da área agricultável e de vegetação não pode ser maior que a área total' }));
            return false;
        }
        setErrors((prev) => ({ ...prev, area: '' }));
        return true;
    };

    return (
        <ValidationContext.Provider value={{ errors, validateCpfCnpj, validateAreas }}>
            {children}
        </ValidationContext.Provider>
    );
};

export const useValidation = () => useContext(ValidationContext);