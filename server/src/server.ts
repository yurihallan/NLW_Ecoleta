import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname,'..', 'uploads')));

app.listen(3333);

//Rota: Endereço completo da requisição
//Recurso: Qual entidade estamos acessando no sistema

//GET:Buscar uma ou mais informações do back-end
//POST: Criar uma nova informação no back-end
//PUT: Atualizar uma informação existente no back-end
//DELETE: Remover uma informação do back-end

//Request Params: Parâmetros que vem na própria rota que identificam um recurso
//Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação.
//Request Body: Parâmetros para criação/atualização de informações

//Tradicional: SELECT * From users WHERE name = 'Diego'
//Modelo Knex('users).where('name','Diego').select('*')  -> vai funcionar em todas os bancos


