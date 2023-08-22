# Sistema de consulta DATASUS <br/>
 Este projeto frontend com angular está realizando requisições HTTP à um projeto spring. Por sua vez o programa em java busca os dados persistidos em um banco de dados físico. Toda a implementação é baseda em localhost, portanto, caso necessário modifique as configurações para o IP do seu servidor.

O SGBD utilizado é o mysql que se conecta ao spring por um usuário dedicado a este fim. Dessa forma, o springboot utiliza as configurações do application.propeties para realizar a conexão.

A integração do front é realizada através de um redirecionamento utilizando proxy. O arquivo proxy.config.js possui os parâmetros para efetuar o redirecionamento.

## Angular CancerDeMama

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

