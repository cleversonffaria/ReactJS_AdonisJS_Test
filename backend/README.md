# Netseg API

## Setup

### Clonando o projeto 

```bash
git clone https://github.com/cleversonffaria/netseg.git
```
entre na pasta após o clone do projeto: 
```bash
cd netseg/backend
```
Instale as dependências do projeto

```bash
npm install && npm audit fix --force
```

```bash
yarn
```

### Dependencias globais
Consultando se o adonis está instalado:
```js
adonis --version
```

Caso nao esteja é necessário instalar rodando o comando:
```js
npm i -g @adonisjs/cli
```

Para a verificação, rode o primeiro comando de consuta.


### Migrations

O banco de dados é criado através das migrations. O banco de dados utilizado é o postgres, verifique se a sua versão do [Postgres](https://www.postgresql.org/download/) é >=11. 

Para criar ou atualizar o banco de dados,  rode o comando:

```js
adonis migration:run
```

### Rodando a aplicação

Para rodar a aplicação alterar duplique o arquivo e renomeie de .env.example para .env e configurare as variaveis de acordo com seu banco de dados.

```js
adonis serve --dev
```
 ou 

 ```js
yarn start
```


### Bugs 

Na instalação pode da bug no adonis no node_modules. caso o comando adonis nao funcione rode:

Para deletar a pasta node_modules:
```bash
rm -r -f node_modules
```

e logo após rode novamente dentro da pasta backend:

```js
npm i -g @adonisjs/cli
yarn install
```
