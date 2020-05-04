# API Sync

Teste de um app para sincronizar os dados de uma API em um banco de dados.

## Pré-Requisitos

Para rodar o projeto deve-se utilizar os seguintes requisitos:
- Nodejs 
- NPM
- MongoDB

## Componentes

Os componentes utilizados neste projeto são:
- Nodejs v10.20.0
- NPM v6.14.4
- Mongoose v5.9.10
- Cron v1.8.2
- GraphQL v15.0.0

## Instalação

Para instalar basta rodar os comandos abaixo, lembrando que é necessário ter todos os pré-requisitos instalados.
- npm i
- npm start
- Acesse [http://localhost:4000](http://localhost:4000)

## Funcionalidades

Este teste tem as seguintes funcionalidades:
- Buscar os dados de uma API deste testes ([https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)).
- Sincronizar os dados de dois endpoints (posts e users).
- Excluir os dados mantendo sempre atualizado com os valores dos dados remotos.
- Rodar a rotina de sincronismo a cada 5 minutos.
- Acesso aos dados via API interna feita com GraphQL.

## Telas

### Sync
![Tela de Resultado do Sync](/images/api_sync01.png)

### Users (GraphQL)
![Tela Users (GraphQL)](/images/api_sync02.png)

### Posts (GraphQL)
![Tela de Posts (GraphQL)](/images/api_sync03.png)
