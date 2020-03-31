/**
 * Neste arquivo estão tambem anotações da semana omnistack
 */
const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;



/**
 * Rota/ Recurso
 */
/**
 * Métodos HTTP:
 * GET: Buscar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de paràmetros:
  * 
  * Query params: Parametros nomeados enviados na rota após o ? (Filtros, paginação)
  * -/users?name=Lucas&idade=18
  * -Isso será o request da route, por exemplo no inicio da arrow function do app.get('/'), coloca-se:
  * const params = request.query;
  * 
  * route params: Parametros utilizados para identificar recursos
  * muda o acima para:
  * app.get('/users/:id') [...]
  * const params = request.params;    => isto retornara oq foi inserido pelo usuario apos a /, no lugar do :id
  * 
  * Request Body: Corpo da requisição, usado para criar ou alterar recursos. (possui formato JSON), é mandado por um POST:
  * {
  *     nome: Lucas,
  *     idade: 18
  * }
  */

  /**
   * Abordagens para comunicação com DB:
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where() ferramenta: Knex
   */

