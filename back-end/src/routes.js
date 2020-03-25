const express = require('express');

const Ongcontroller = require('./controllers/OngController');

const IncidentController = require('./controllers/IncidentController');

const ProfilleController = require('./controllers/ProfilleController');

const SessionLogin = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionLogin.create);
routes.get('/ongs', Ongcontroller.index);
routes.post('/ongs', Ongcontroller.create);
routes.get('/profile', ProfilleController.index);
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;