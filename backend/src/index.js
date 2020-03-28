// para não ter que ficar abrindo e fechando o server, instalar o nodemon
// essa dependencia entra como devDepencies (apenas para o uso em dev)
// é mecessário inserir na package.json em scripts o nodemon index.js
// e depois colocar na aplicação npm start e entao vai ficar monitorando
// se quiser parar, basta control + c

const express = require('express');
const routes = require('./routes'); // ./ para referenciar a mesma pasta atual e nao um modulo externo

const app = express();

app.use(express.json()); // isso diz que o body de todas as requisições será em json
app.use(routes); // faz com que o routes.js seja chamado!
 
/*
    Rotas / Recurso
*/

/*
    Métodos HTTP:

    GET: Buscar uma infromação do back-end
    POST: Criar uma informação no back-end
    PUT: Alterar uma informação no back-end
    DELETE: Deletar uma informação no back-end

    Tipos de parâmetros:

    Query params: parametros nomeados para busca registros ou realizar filtragens
    Route params: parametros nomeados para buscar recursos
    Request body: 

    QueryBuilder mais utilizado no Node chama-se KNEX.JS

    npm install knex
    npm install sqlite3
    npx knex init

    quando executar o ultimo, será criado o knexfile.js que tem as infos do banco
    
    Para rodar o projeto
    node index.js
    npm start (se tiver instalado o nodemon e o script na packages.json)

*/



app.listen(3333); // servidor