<div align="center">
    <img src="frontend/src/assets/images/lightLogo.png" />
</div>

![GitHub top language](https://img.shields.io/github/languages/top/marcos-jacometti/BrainAgriculture)
![GitHub repo size](https://img.shields.io/github/repo-size/marcos-jacometti/BrainAgriculture)
![GitHub last commit](https://img.shields.io/github/last-commit/marcos-jacometti/BrainAgriculture)


## What is Brain Agriculture Project?

Brain Agriculture project was a challenge that pushes me to get nice knowledges and programming skills. The first idea was create a code to register producers, farms and crops using [ReactJS](https://pt-br.legacy.reactjs.org/), [NodeJS](https://nodejs.org/en) and [PostgreSQL](https://www.postgresql.org/docs/).

The user can create, read, update and delete all the informations in the data base. Informations like:

- Producer's name
- Farm's name
- Farm's location (city and state)
- CPF / CNPJ
- Total area
- Planted area
- Reserved area
- Crops

The user also can see all the informations on a dashboard in the main page.

You can take a look clicking in the link https://brainagriculture.netlify.app/ 

But, if you want to see more informations, here we go!

## The Features

The challenge pushes me to create a code with ContextAPI features, one example of this was when I created two different themes (light and dark):

```
import { createContext } from "react";

const themeContext = createContext([false, () => {}]);

export default themeContext;
```

Create mock datas also was part of the challenge:

```
const crop = [
    { value: 'soja', label: 'Soja' },
    { value: 'milho', label: 'Milho' },
    { value: 'algodao', label: 'Algodão' },
    { value: 'cafe', label: 'Café' },
    { value: 'cana', label: 'Cana de Açúcar' }
];
```

And, I also got an API to be part of the project to get states and cities, the [BrasilAPI](https://brasilapi.com.br/): 

```
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
```

## Responsiveness

The project is very responsiveness, using the lib [React-Responsive](https://www.npmjs.com/package/react-responsive) I created media queries to adapt the system for all the devices

## Frontend technologies and libs

- [React.JS](https://pt-br.legacy.reactjs.org/)
- [Express](https://expressjs.com/pt-br/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Styled-Components](https://styled-components.com/)
- [React-router-dom](https://reactrouter.com/en/main)
- [React-toastify](https://www.npmjs.com/package/react-toastify)
- [React-icons](https://react-icons.github.io/react-icons/)
- [React Responsive](https://www.npmjs.com/package/react-responsive)
- [Apex Charts](https://apexcharts.com/docs/installation/)
- [Dotenv](https://www.dotenv.org/docs/)
- [React Select](https://react-select.com/home)

## Backend technologies and libs

- [Node.js](https://nodejs.org/en)
- [PostgreSQL](https://www.postgresql.org/docs/)
- [Express](https://expressjs.com/pt-br/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Cors](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)
- [Dotenv](https://www.dotenv.org/docs/)

## Contact me if you want

- Email: [Marcos Jacometti](marcosjacometti10@gmail.com)
- LinkedIn: [Marcos Jacometti](https://www.linkedin.com/in/marcos-vin%C3%ADcius-jacometti-675202202/)