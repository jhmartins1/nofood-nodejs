'use strict'

const app = require('../NoFood.Api/bin/express');
const variables = require('../NoFood.Api/bin/configuration/variables');

app.listen(variables.Api.port, () => {
    console.info(`Api inicializada com sucesso na porta ${variables.Api.port}`);
});