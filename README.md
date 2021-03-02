# API Sync

Teste de um app para sincronizar os dados de uma API em um banco de dados.

## Pré-Requisitos

Para rodar o projeto deve-se utilizar os seguintes requisitos:
- Nodejs 
- NPM
- MongoDB (instalação local ou algum serviço online [Ex.: https://cloud.mongodb.com])

## Componentes

Os componentes utilizados neste projeto são:
- Nodejs v14.15.5
- NPM v6.14.11
- Mongoose v5.11.17
- Cron v1.8.2
- GraphQL v15.5.0

## Instalação

Para instalar basta rodar os comandos abaixo, lembrando que é necessário ter todos os pré-requisitos instalados.
- npm i
- Salve o arquivo env-example para .env inserindo neste as informações de conexão do MongoDB.
- npm start
- Acesse [http://localhost:8080](http://localhost:8080)

## Funcionalidades

Este teste tem as seguintes funcionalidades:
- Buscar os dados de uma API deste testes ([https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)).
- Sincronizar os dados de dois endpoints (posts e users).
- Excluir os dados mantendo sempre atualizado com os valores dos dados remotos.
- Rodar a rotina de sincronismo a cada 5 minutos.
- Acesso aos dados via API interna feita com GraphQL.

### Demonstração
Acesse um exemplo do app publicado no Google Cloud:
- [https://appsync-305515.uk.r.appspot.com](https://appsync-305515.uk.r.appspot.com)

## Telas

### Sync
![Tela de Resultado do Sync](/images/api_sync01.png)

### Users (GraphQL)
![Tela Users (GraphQL)](/images/api_sync02.png)

### Posts (GraphQL)
![Tela de Posts (GraphQL)](/images/api_sync03.png)
