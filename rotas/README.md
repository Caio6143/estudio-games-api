# Estúdio Games API - RESTful Node.js

API RESTful desenvolvida em Node.js e Express com banco de dados MySQL para gerenciamento do acervo de jogos.

##  Tecnologias Utilizadas

- **Runtime:** Node.js
- **Framework:** Express
- **Banco de Dados:** MySQL
- **Dependências:** `mysql`, `body-parser`, `cors`, `morgan`
- **Desenvolvimento:** `nodemon`

---

##  Pré-requisitos

1. **Node.js** instalado (v14 ou superior).
2. Servidor **MySQL** ativo na máquina local.
3. vs code
4. postman
---

##  Como Executar o Projeto

### 1. Configuração do Banco de Dados
Execute o script SQL localizado em `./script.sql` no seu SGBD (MySQL Workbench) para criar a base de dados e a tabela:

```sql
CREATE DATABASE IF NOT EXISTS estudio_games;
USE estudio_games;

CREATE TABLE IF NOT EXISTS jogo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    plataforma VARCHAR(50) NOT NULL,
    genero VARCHAR(50) NOT NULL
);

```
---

### 2. Instalação das Dependências
No terminal do projeto, execute:

```bash
npm install

```

### 3. Configuração de Variáveis de Ambiente
Verifique o arquivo rotas/nodemon.json e ajuste as credenciais do MySQL se necessário:



```json
{
  "env": {
    "MYSQL_HOST": "localhost",
    "MYSQL_PORT": "3306",
    "MYSQL_USER": "root",
    "MYSQL_PASSWORD": "sua_senha_aqui",
    "MYSQL_DATABASE": "estudio_games"
  }
}

```

### 4. Inicialização do Servidor
Inicie o servidor em modo de desenvolvimento:

```bash
npm start

```

O servidor estará rodando em: http://localhost:3000
---

## Instruções para Testes (Endpoints HTTP)
Você pode testar a API utilizando Postman, SoapUI ou qualquer outro cliente HTTP.

1. Listar todos os jogos
Método: GET

URL: http://localhost:3000/api/jogo

2. Consultar jogo por ID
Método: GET

URL: http://localhost:3000/api/jogo/:id (Exemplo: http://localhost:3000/api/jogo/1)

3. Cadastrar novo jogo
Método: POST

URL: http://localhost:3000/api/jogo

Header: Content-Type: application/json


Body (raw JSON):

```json

{
  "titulo": "Elden Ring",
  "plataforma": "PC",
  "genero": "RPG"
}
```

4. Atualizar um jogo
Método: PUT

URL: http://localhost:3000/api/jogo/:id (Exemplo: http://localhost:3000/api/jogo/1)

Header: Content-Type: application/json

Body (raw JSON):

```json
{
  "titulo": "God of War Ragnarok",
  "plataforma": "PlayStation 5",
  "genero": "Ação/Aventura"
}

```
---

### 5. Excluir um jogo
Método: DELETE

URL: http://localhost:3000/api/jogo/:id (Exemplo: http://localhost:3000/api/jogo/2)

