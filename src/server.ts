import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
