# LifeCycle

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Projeto: Lista de Compras com Angular
=====================================

Este projeto consiste em uma aplicação web de lista de compras desenvolvida com Angular. A aplicação possui um campo de entrada de texto para adicionar novos itens, um botão para salvar os itens, uma lista com os itens para compra e cada item tem uma caixa de seleção para marcar como comprado, um ícone de lixeira para excluir o item e um ícone de lápis para editar.

A aplicação utiliza conceitos do ciclo de vida do Angular para gerenciar a instância do componente. O Angular instancia a classe do componente quando a aplicação é carregada, e chama diferentes métodos ao longo da vida do componente, como ngOnInit() para inicializar o componente e ngOnDestroy() para destruí-lo quando não é mais utilizado.

O objetivo deste projeto é demonstrar como utilizar os hooks do ciclo de vida do Angular para criar uma aplicação interativa e responsiva. O código está disponível no repositório do Github, juntamente com instruções de instalação e utilização da aplicação.
