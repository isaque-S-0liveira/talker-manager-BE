# Talker manager

## Contexto

O projeto **Talker Manager** foi desenvolvido como parte do curso da **Trybe**, com o objetivo de praticar e consolidar os conceitos de **desenvolvimento de APIs** e operações **CRUD** (Create, Read, Update e Delete) utilizando o **Node.js** e o framework **Express**. O foco principal é criar uma aplicação de cadastro de palestrantes (talkers), onde será possível realizar operações de leitura, criação, atualização e exclusão de dados, além de implementar mecanismos de autenticação e validação de dados.

<details>
  <summary>O que é a Trybe?🤔</summary>
  A Trybe é uma escola de desenvolvimento web genuinamente comprometida com o sucesso profissional de seus estudantes. Com o Modelo de Sucesso Compartilhado (MSC) oferecido pela Trybe Fintech, uma instituição financeira autorizada pelo Banco Central do Brasil, os alunos têm a opção de pagar apenas quando estiverem trabalhando.
</details>

### Objetivos do Projeto:

1. **Desenvolvimento de uma API CRUD**: A aplicação permite o gerenciamento de palestrantes, com endpoints para **cadastrar**, **visualizar**, **editar** e **remover** palestrantes. 
2. **Manipulação de Arquivos**: A API lê e escreve em arquivos JSON utilizando o módulo **fs** do Node.js para simular um banco de dados simples.
3. **Autenticação Simples**: A implementação de um sistema de login retorna um token aleatório que é necessário para realizar operações protegidas.
4. **Validações de Dados**: Foram implementadas validações para garantir que os dados enviados nos endpoints estão no formato correto, incluindo verificação de email, senha e campos obrigatórios.

### Funcionalidades Implementadas:

- **GET /talker**: Retorna todos os palestrantes cadastrados.
- **GET /talker/:id**: Retorna um palestrante específico com base no seu ID.
- **POST /login**: Retorna um token aleatório ao receber email e senha válidos.
- **POST /talker**: Cadastra um novo palestrante.
- **PUT /talker/:id**: Atualiza as informações de um palestrante existente.
- **DELETE /talker/:id**: Remove um palestrante.

### Habilidades Desenvolvidas:

- **Node.js e Express**: Criação de uma API RESTful, uso de middlewares, rotas e manipulação de arquivos com o módulo `fs`.
- **CRUD**: Implementação completa das operações de **Create**, **Read**, **Update** e **Delete**.
- **Validação de Dados**: Aplicação de validações em dados de entrada utilizando middlewares.
- **Autenticação Simples**: Implementação de geração de tokens para autenticação.

Este projeto é uma excelente oportunidade para reforçar o uso de **APIs REST**, manipulação de dados em arquivos locais, além de introduzir conceitos básicos de integração com **bancos de dados relacionais**. A aplicação simula um ambiente real onde a organização e manipulação de dados são fundamentais para o bom funcionamento do sistema.

## Técnologias usadas

- [Node.js](https://nodejs.org/) - Plataforma para construir a API backend em JavaScript.
- [Express](https://expressjs.com/) - Framework para Node.js, utilizado para gerenciar rotas e middlewares.
- [MySQL](https://www.mysql.com/) - Banco de dados relacional utilizado para armazenar as informações de palestrantes.
- [Docker](https://www.docker.com/) - Ferramenta de conteinerização para rodar o ambiente de desenvolvimento de forma isolada.
- [fs (File System)](https://nodejs.org/api/fs.html) - Módulo nativo do Node.js utilizado para ler e escrever em arquivos JSON.



## Entre em contato:
<a href="mailto:zazac3179@gmail.com" target="_blank">
  <img align="center" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="E-mail" height="40" width="auto" />
</a>
<a href="https://www.linkedin.com/in/isaque-s-oliveira/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="isaque oliveira" height="30" width="40" /></a>
<a href="https://wa.me/5574981510614" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/whatsapp.svg" alt="WhatsApp" height="30" width="40" /></a>
