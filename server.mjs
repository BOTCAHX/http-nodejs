import { createServer } from 'http';

createServer((req, res) => {
  res.write('get apikey : https://botcahx-rest-api.herokuapp.com');
  res.end();
}).listen(process.env.PORT);
