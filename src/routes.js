const express = require('express');
const routes = express.Router();
const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileContoller');
const SessionController = require('./controller/SessionController');


routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.listONG);

routes.get('/incidents', IncidentController.list);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.listEspecific);

routes.post('/sessions', SessionController.create);

module.exports = routes;