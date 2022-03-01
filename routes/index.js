//creating routes

const { Router } = require('express');
// const { route } = require('express/lib/application');
const controllers = require('../controllers')

const router = Router();

router.get('/', (req, res) => res.send("This is the route!"));

router.post('/plants', controllers.createPlant);

router.get('/plants', controllers.getAllPlants);//since plants name - used in post.. we can also use in get

router.get('/plants/:id', controllers.getPlantById);

router.put('/plants/:id', controllers.updatePlant);

router.delete('/plants/:id', controllers.deletePlant);

module.exports = router;