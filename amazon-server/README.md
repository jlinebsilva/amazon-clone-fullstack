# Amazon Clone - Server Side

<!-- ## -->

## Rodando servidor
- Instale as dependências (sem risco de atualização de pacotes)

    ```bash
    npm ci
    ```

- Renomeie o arquivo `example.env` para `.env`, e digite as informações nas variáveis de ambiente

- Inicie o servidor

    ```bash
    npm run start
    ```

<!-- -  -->

## Endpoints

### Vendedor

> `POST /sellers`

> `GET /sellers`

> `PUT /sellers/:id`

> `DELETE /sellers/:id`

### Produto

> `POST /products`

> `GET /products`

> `PUT /products/:id`

> `DELETE /products/:id`

## Tecnologias / Ferramentas Usadas

- [Node.js](https://nodejs.org/pt-br)
- [Express](https://expressjs.com/)
- [Cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Sequelize](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Jest](https://jestjs.io/)
<!-- - [Swagger]() -->
<!-- - []() -->
<!-- - []() -->
<!-- - []() -->