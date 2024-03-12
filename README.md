<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Application Business Architecture
![Business Architecture Image](https://iili.io/JW25agj.png "Order Manager Business Architecture")

Basically it shows a customer who can be registered or not, and he can place an order for our fast-food restaurant through the "Order Manager System". 

The order manager system uses a External Payment Gateway (that is mocked in our case) to effectivate the order payment. Last of all, the Order Manager system sends the order to the tracker system, which notifies the customer of their status updates.


## Application Infrastructure Requirements
![Infrastructure Requirements Image](https://iili.io/JW27e6u.png "Order Manager Infrastructure Requirements")

The infraestructure requirements imagem basically shows all the components that must be created for the application to work correctly. Some of the components present in this architecture are: services, persistent volumes, hpas, configmaps, pods, deployments, among others.


## Description

This application was developed to help a fast-food restaurant which needs to improve the management of the customer orders.

## API Guide

You should follow the order requests below (start creating a customer or a product, you decide!):

```
1. Create a Customer (OPTIONAL): 

  - HTTP METHOD -> POST
  - ENDPOINT -> http://localhost:30001/customers
  - BODY EXAMPLE -> {
      "email": "usuario.teste@hotomail.com",
      "cpf": "18160100025",
      "name": "Usuario Teste"
    }

  * EXPECTED RESPONSE -> {
      "name": "Usuario Teste",
      "cpf": "18160100025",
      "email": "usuario.teste@hotomail.com",
      "_id": "65b64f961a0ba24ea7668dbb",
      "__v": 0
    }


2. Create a Product: 

  - HTTP METHOD -> POST
  - ENDPOINT -> http://localhost:30001/products
  - BODY EXAMPLE -> {     
        "name": "Coca",
        "category": "bebidas",
        "value": 10.5,
        "quantity": 1,
        "description": "Uma bebidinha gelada Majin Boo hi hi hi" 
    }

  * EXPECTED RESPONSE -> {
      "name": "Coca",
      "category": "bebidas",
      "value": 10.5,
      "quantity": 0,
      "description": "Uma bebidinha gelada Majin Boo hi hi hi",
      "_id": "65b64e65a2f4b2369354d6e1",
      "__v": 0
    }


3. Create Payment Method:

  - HTTP METHOD -> POST
  - ENDPOINT -> http://localhost:30001/payments
  - BODY EXAMPLE -> {     
        "name": "CASH",     
        "description": "Cash Payment Method" 
    }

  * EXPECTED RESPONSE -> {
      "name": "CASH",
      "description": "Cash Payment Method",
      "_id": "65b64ecaa2f4b2369354d6ee",
      "__v": 0
    }


4. Create a Cart: 

  - HTTP METHOD -> POST
  - ENDPOINT -> http://localhost:30001/carts
  - BODY EXAMPLE -> N/A

  * EXPECTED RESPONSE -> {
      "total": 0,
      "_id": "65b64e27a2f4b2369354d6dd",
      "products": [],
      "__v": 0
    }


5. Add products to the Cart:

  - HTTP METHOD -> PUT
  - ENDPOINT -> http://localhost:30001/carts/${CART_ID}/products/${PRODUCT_ID}
  - BODY EXAMPLE -> {
      "quantity": 3
    }

  * EXPECTED RESPONSE -> {
      "_id": "65b64e27a2f4b2369354d6dd",
      "total": 31.5,
      "products": [
        {
          "name": "Coca",
          "category": "bebidas",
          "value": 10.5,
          "quantity": 3,
          "description": "Uma bebidinha gelada Majin Boo hi hi hi",
          "_id": "65b64e65a2f4b2369354d6e1",
          "__v": 0
        }
      ],
      "__v": 0
    }

6. Add the Customer owner of the Cart (OPTIONAL):

  - HTTP METHOD -> PUT
  - ENDPOINT -> http://localhost:30001/carts/${CART_ID}/customers/${CUSTOMER_ID}
  - BODY EXAMPLE -> N/A

  * EXPECTED RESPONSE -> {
      "_id": "65b64e27a2f4b2369354d6dd",
      "total": 31.5,
      "products": [
        {
          "name": "Coca",
          "category": "bebidas",
          "value": 10.5,
          "quantity": 3,
          "description": "Uma bebidinha gelada Majin Boo hi hi hi",
          "_id": "65b64e65a2f4b2369354d6e1",
          "__v": 0
        }
      ],
      "__v": 0,
      "paymentMethod": {
        "name": "CASH",
        "description": "Cash Payment Method",
        "_id": "65b64ecaa2f4b2369354d6ee",
        "__v": 0
      },
      "customer": {
        "name": "Yuri Cordeiro",
        "cpf": "18160100025",
        "email": "yuricordeiroc@hotomail.com",
        "_id": "65b64f961a0ba24ea7668dbb",
        "__v": 0
      }
    }


7. Add Payment Method to the Cart:

  - HTTP METHOD -> PUT
  - ENDPOINT -> http://localhost:30001/carts/${CART_ID}/payments/${PAYMENT_METHOD_ID}
  - BODY EXAMPLE -> N/A

  * EXPECTED RESPONSE -> {
      "_id": "65b64e27a2f4b2369354d6dd",
      "total": 31.5,
      "products": [
        {
          "name": "Coca",
          "category": "bebidas",
          "value": 10.5,
          "quantity": 3,
          "description": "Uma bebidinha gelada Majin Boo hi hi hi",
          "_id": "65b64e65a2f4b2369354d6e1",
          "__v": 0
        }
      ],
      "__v": 0,
      "paymentMethod": {
        "name": "CASH",
        "description": "Cash Payment Method",
        "_id": "65b64ecaa2f4b2369354d6ee",
        "__v": 0
      }
    }


  8. Create a Order (You need a cart to have been created before): 

  - HTTP METHOD -> POST
  - ENDPOINT -> http://localhost:30001/orders/cart/${CART_ID}
  - BODY EXAMPLE -> N/A

  * EXPECTED RESPONSE -> {
      "products": [
        {
          "name": "Coca",
          "category": "bebidas",
          "value": 10.5,
          "quantity": 3,
          "description": "Uma bebidinha gelada Majin Boo hi hi hi",
          "_id": "65b64e65a2f4b2369354d6e1",
          "__v": 0
        }
      ],
      "paymentMethod": {
        "name": "CASH",
        "description": "Cash Payment Method",
        "_id": "65b64ecaa2f4b2369354d6ee",
        "__v": 0
      },
      "status": "Em Preparação",
      "value": 31.5,
      "queuePosition": 1,
      "_id": "65b64fee1a0ba24ea7668dcc",
      "__v": 0
    }


```

## 1. Topic for Teachers
<details>
  <summary>Click here</summary>

## Running the dockerized application
```bash
# runs application container and mongoose database container
$ docker-compose up -d

# depending on your docker compose version, you should run instead
$ docker compose up -d
```

Now the application should be accessible by the following URL: http://localhost:3000

The Application Swagger should be accessible by the following URL: http://localhost:3000/api#/
</details>


## 2. Topic for Developers
<details>
  <summary>Click here</summary>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode/
$ npm run start:prod
```

Now the application should be accessible by the following URL: http://localhost:3000

The Application Swagger should be accessible by the following URL: http://localhost:3000/api#/

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
</details>

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
