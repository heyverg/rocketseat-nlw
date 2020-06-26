import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de Usuários');
    response.json([
        'Heyver',
        'Jorge',
        'Gomes',
        'Willi',
        'Davi',
        'Helena',
        'Theo',
    ]);
});

app.listen(3333);