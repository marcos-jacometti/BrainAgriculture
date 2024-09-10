require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const producerRoutes = require('./controllers/producerController/createProducer');
const farmRoutes = require('./controllers/farmController/createFarm');
const cropRoutes = require('./controllers/cropController/createCrop');
const producersApi = require('./api/producersApi');
const updateProducer = require('./controllers/producerController/updateProducer');
const updateFarm = require('./controllers/farmController/updateFarm');
const updateCrop = require('./controllers/cropController/updateCrop');
const farmApi = require('./api/farmApi');
const cropApi = require('./api/cropApi');
const deleteProducer = require('./controllers/producerController/deleteProducer');
const producersById = require('./api/producersByIdApi');
const farmToChart = require('./api/chartsApi/farmApi');
const cropToChart = require('./api/chartsApi/cropApi');

app.use(cors());
app.use(express.json());

app.use('/producers', producerRoutes);
app.use('/farms', farmRoutes);
app.use('/crops', cropRoutes);
app.use('/api', producersApi);
app.use('/update', updateProducer);
app.use('/update', updateFarm);
app.use('/update/crops', updateCrop);
app.use('/api/farms', farmApi);
app.use('/api/crops', cropApi);
app.use('/delete', deleteProducer);
app.use('/api/producers', producersById);
app.use('/api/charts', farmToChart);
app.use('/api/charts', cropToChart);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});