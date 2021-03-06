const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
//routes.delete('/ongs:id', OngController.delete);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/', (request, response) => {
    console.log('Hello world!');
    return response.send('Hello world !!!');
});
 
/*
// ex: http://localhost:3333/users/1?name=roberto&page=1
routes.post('/users/:id', (request, response) => {
const params = request.query; // captura as querystrings
const body = request.body; // captura o body enviado em json

console.log(params);
console.log(body); // a visualização correta desse json só será possível devido ao app.use(express.json()); no inicio da app

    return response.json({
        evento: 'Semana OminiStack 11.0',
        aluno: 'Roberto Gentile'
    })
})
*/

module.exports = routes; // assim você consegue tornar "público" a variável