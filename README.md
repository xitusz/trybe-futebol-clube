# Trybe Futebol Clube
[9/12] [Desenvolvimento Back-end](https://github.com/xitusz/Trybe/tree/main/03_Desenvolvimento-Back-end)

---

## Sumário

- [Contexto](#contexto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Clonando Repositório](#clonando-repositório)
- [Instalando Dependências](#instalando-dependências)
- [Executando Aplicação](#executando-aplicação)
- [Executando Testes](#executando-testes)

---

## Contexto

* Projeto desenvolvido para colocar em prática tudo que foi utlizado nos projetos anteriores

---

## Tecnologias Utilizadas

* TypeScript
* JWT
* Node
* MySQL

---

## Clonando Repositório:

* Clone o repositório
  ```sh
    git clone git@github.com:xitusz/trybe-futebol-clube.git
  ```

---

## Instalando Dependências

* Entre na pasta do repositório que você clonou:
  ```sh
    cd trybe-futebol-clube
  ```

* Instale as dependências
  ```sh
    npm install
  ```

---

## Executando Aplicação

* Aplicação front-end foi desenvolvida pela [Trybe](https://www.betrybe.com/)

* Utilize o [Docker](https://www.docker.com/)

* Entre na pasta do repositório que você clonou:
  ```sh
    cd trybe-futebol-clube/app/
  ```

* Inicie o projeto:
  ```sh
    docker build -t tfcbackend ./backend/
  ```

  ```sh
    docker build -t tfcfrontend ./frontend/
  ```

  ```sh
    docker-compose up --build -d
  ```

* Acesse o endereço em seu navegador:
  ```sh
    http://localhost:3000/
  ```

---

## Executando Testes

* Testes removidos pelo fato de terem sido criados pela [Trybe](https://www.betrybe.com/)

---
