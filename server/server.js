const http = require('http');
const app = require('./app');

const httpServer = http.createServer(app);

const port = process.env.PORT || 3000;

httpServer.listen(port, () => {
  console.log('SERVER STARTED AT PORT: ' + port);
});
