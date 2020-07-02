import express from 'express';
import path from 'path';
import routes from './routes';

const app = express();
app.use(express.json()); // Expressa não sabe que é APIRest, JSON no corpo da requisição
// Add funcionalidade para o Express passar a entender JSON
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// Tipos de requisições
// GET: Buscar uma ou mais informações no back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// POST http://localhost:3333/users = Criar um novo usuário
// GET http://localhost:3333/users = Listar usuários
// GET http://localhost:3333/users/6 = Buscar informação do usuário de ID 6

// Request Params: Parâmetro que vem na própria rota que identifica um recurso
// Query Params: Parâmetros que vêm na própria rota geralmente opcionais para filtros, paginação etc
// Request Body: Parâmetros para criação e atualização de informação. Ex.: Nome, endereço, senha (Tem que vir pelo parâmetro) 

/* const users = [
    'Heyver', // 0
    'Jorge', // 1
    'Gomes', // 2
    'Willi', // 3
    'Davi', // 4
    'Helena', // 5
    'Theo', // 6
]

app.get('/users', (request, response) => {
    console.log('Listagem de Usuários');
    return response.json(users);

});

// Exemplo de Query Params
app.get('/users', (request, response) => {
    const search = String(request.query.search);
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);

});

// Exemplo de Request Params
app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    const user = users[id];
    return response.json(user);

})

// Exemplo de Request Body
app.post('/users', (request, response) => {
    const data = request.body;
    console.log(data);

    const user = {
        name: data.name,
        email: data.email,
    };

    return response.json(user);
})

app.post('/users', (request, response) => {
    const user = {
        name: 'Heyver',
        email: 'heyver@gmail.com'
    };

    return response.json(user);
})
 */