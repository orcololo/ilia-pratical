# **ilia-tmdb-microservice**

[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://gitHub.com/orcololo/)

É um micro serviço dockerizado com network compartilhada entre a aplicação e banco de dados, capaz de capturar e indexar informações sobre filmes e legendas usando a API pública themoviedb.org

### Tecnologias e dependências utilizadas:

- JavaScript
- Node.js
- Express.js
- Frisby
- Jest
- MongoDB
- Mongoose
- Docker
- Docker-compose

## **Pré requisitos**:

- [docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/)

## **Passos**:

### 1) Clone o repositório na sua máquina:

```
git clone https://github.com/orcololo/ilia-pratical
cd ilia-pratical
```

### 2) Popule o arquivo `.env.example` e depois o renomeie para .env.

### 3) Rode a aplicação com docker-compose:

`docker-compose up -d`

### 4) Fim

As requisições já podem ser feitas para os endpoints:  
`http://localhost/movies/:id`  
`http://localhost/movies/translations/:id`

Para mais detalhes, você também pode acessar a documentação da api em Swagger no endereço local: **http://localhost/api-docs**

## **Testes**:

Após rodar o servidor via **`docker-compose up -d`**, você pode rodar **`npm run test`** para rodar os testes unitários da aplicação.
