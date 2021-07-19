# Desafio dos Cards

O objetivo desse projeto é aprofundar conhecimentos no desenvovilmento backend com Node.js e Typescript, juntamente com o SQLite.

### Tecnologias :star: :

- Typescript
- Express
- SQLite

### Ferramentas utilizadas :hammer_and_wrench: :

- JsonWebToken
- bcryptjs
- moment.js
- TypeORM
- dotenv
- uuid

### Rodando o projeto:

- Requisitos:

  - Node.js
  - Yarn
  - Insomnia ou Postman


- Passo 1: `Rode o comando 'yarn'`
- Passo 2: `Rode o comando 'yarn typeorm migration:run'`
- Passo 3: `Rode 'yarn dev'`
- Passo 4: `Acesse as rotas no seu insomnia ou postman`

- Rotas:

  - BaseURL: `http://localhost:5000`

  - (POST) Login: `/login`

  - (POST) Create Card: `/cards`
  - (GET) List Cards: `/cards`
  - (PUT) Update Card: `/cards`
  - (DELETE) Delete Card: `/cards`
