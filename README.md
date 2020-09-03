## Backend

- npm init -y (cria o package.json)
- npm i json-server (inclui o json-server no package)
- criar o arquivo de dados `db.json` manualmente (json de dados)
- criar o script que starta o server `"scripts": { "start": "json-server --watch db.json --port 3001"}`
- npm start ( starta o DB Server na porta 3001 )

## Frontend

- `sudo npm i -g @angular/cli` - instala o CLI (Command-line interface) do Angular
- criando o projeto `ng new frontend --minimal` (cria a pasta e a instalacao minima) - Yes para rotas e escolher CSS
- `npm start`

## Uso
- Rodar o Backend (`npm start` diretorio backend)
- Rodar o Angular (`npm start` diretorio frontend)
- Outro terminal para rodar os comandos Angular
