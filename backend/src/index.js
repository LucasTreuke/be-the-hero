const express = require('express');
const cors = require('cors');
const routes = require('./routes');
/**
 * no caminho, só pra lembrar:
 * 'nome'       -isso é um pacote
 * './nome'     -isso é um arquivo nessa pasta
 * '../nome'    -isso é um arquivo uma pasta atrás
 */

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
