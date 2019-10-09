### `yarn` Or `npm install`

Para iniciar o projeto.<br>

### `yarn start` Or `npm start`

Executa o aplicativo no modo de desenvolvimento.<br>
Open [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

### `yarn add eslint -D`

Instala o Eslint para desenvolvimento.<br>

.eslintrc.js Já esta configurado para utilização do EsLint! <br>

### `Plugins`

Voce precisa ter os plugins instalados:<br>
<strong>Eslint</strong><br>
<strong>Prettier - Code Formatter</strong>
<strong>EditorConfig</strong>

### `OpenSettings.Json`

Ctrl + Shift + P = Digite Open Settings para abrir as configurações Json do VSCODE <br>
Após abrir as configurações copie e cole todos codigos a baixo.

<pre>
{
// Define o tema do VSCode
"workbench.colorTheme": "Dracula",
// Configura tamanho e família da fonte
"editor.fontSize": 12,
"editor.lineHeight": 24,
"editor.fontFamily": "Fira Code",
"editor.fontLigatures": true,
// Aplica linhas verticais para lembrar de quebrar linha em códigos muito grandes
"editor.rulers": [
80,
120
],
"editor.formatOnSave": true,
"eslint.autoFixOnSave": true,
"eslint.validate": [
{
"language": "javascript",
"autoFix": true
},
{
"language": "javascriptreact",
"autoFix": true
},
{
"language": "typescript",
"autoFix": true
},
{
"language": "typescriptreact",
"autoFix": true
}
],
"prettier.eslintIntegration": true,
// Aplica um sinal visual na esquerda da linha selecionada
"editor.renderLineHighlight": "gutter",
// Aumenta a fonte do terminal
"terminal.integrated.fontSize": 14,
// Define o tema dos ícones na sidebar
"workbench.iconTheme": "material-icon-theme",
"workbench.startupEditor": "newUntitledFile",
"editor.tabSize": 2,
"window.zoomLevel": 0,
"extensions.ignoreRecommendations": false,
"emmet.syntaxProfiles": {
"javascript": "jsx",
"nunjucks": "html"
},
"emmet.includeLanguages": {
"javascript": "javascriptreact",
"nunjucks": "html"
},
"javascript.updateImportsOnFileMove.enabled": "never",
"gitlens.codeLens.recentChange.enabled": false,
"gitlens.codeLens.authors.enabled": false,
"gitlens.codeLens.enabled": false,
"breadcrumbs.enabled": true,
"git.enableSmartCommit": true,
"editor.parameterHints.enabled": false,
"typescript.updateImportsOnFileMove.enabled": "never",
"terminal.integrated.shell.osx": "/bin/zsh",
"explorer.confirmDragAndDrop": false,
"liveshare.featureSet": "insiders",
"explorer.confirmDelete": false,
// "typescript.tsserver.log": "verbose",
"terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
"enableTelemetry": true,
"trello.token": "trello token",
"[javascript]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
}
}
</pre>
