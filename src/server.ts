import express from 'express';
const server = express();
const port = 3000;

console.log(__dirname);

server.get('/', (req, res) => res.sendFile('C:/Users/Renan/Code/exatolp-web-ui/src/views/static/index.html'));
server.get('/resources/svg', (req, res) => res.sendFile('C:/Users/Renan/Code/exatolp-web-ui/src/resources/exatolp-tentative-logo.svg'));
server.get('/resources/github', (req, res) => res.sendFile('C:/Users/Renan/Code/exatolp-web-ui/src/resources/github-invertocat-logo.svg'));
server.get('/resources/ufrgs', (req, res) => res.sendFile('C:/Users/Renan/Code/exatolp-web-ui/src/resources/ufrgs-logo.svg'));
server.get('/resources/inf', (req, res) => res.sendFile('C:/Users/Renan/Code/exatolp-web-ui/src/resources/inf-logo.svg'));

server.listen(port, () => console.log(`Express is listening at http://localhost:${port}`));
