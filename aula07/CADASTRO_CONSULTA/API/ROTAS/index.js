const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

//middleware
app.use(bodyParser.json());


//rotas
app.use('/api', userRoutes);

//iniciar o servidor
app.listen(PORT, ()=> {
    console.log (`Servidor rodando na porta ${PORT}`);
});