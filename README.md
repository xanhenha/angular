## Backend

- `npm init -y` (cria o package.json)
- `npm i json-server` (inclui o json-server no package)
- criar o arquivo de dados `db.json` manualmente (json de dados)
- criar o script que starta o server 
```javascript
"scripts": {
	"start": "json-server --watch db.json --port 3001"
}
```
- `npm start` ( starta o DB Server na porta 3001 )

## Frontend

- `sudo npm i -g @angular/cli` - instala o CLI (Command-line interface) do Angular
- criando o projeto `ng new frontend --minimal` (cria a pasta e a instalacao minima) - Yes para rotas e escolher CSS
- `npm start`

## Uso
- Rodar o Backend (`npm start` diretorio backend)
- Rodar o Angular (`npm start` diretorio frontend)
- Outro terminal para rodar os comandos Angular

## Dependences
#### Usando o Angular Material UI
- frontend (tema para angular)
  - `ng add @angular/material`
  - Primeiro tema - Dark
  - Tipografia - Global sim
  - animacoes - sim


## Comandos Angular
- gerar componentes - `ng generate component $path` - alias `ng g c  $path` - Path ex: _components/template/header_
  - cria automaticamente as referencias, basta adicionar a tag app no `app.component.html` - Ex `<app-header></app-header>`

## Diretivas
- Attribute Directives - altera o atributo do elemento (decorator @Directive) "aparencia"
- Structural Dircetives - altera o layout, adicionando e removendo elementos dom (ex: *ngIf / *ngFor)


## Binding
- One way - [value]="nome" - nome: string
- Two way - [(ngModel)]="nome" - nome: string