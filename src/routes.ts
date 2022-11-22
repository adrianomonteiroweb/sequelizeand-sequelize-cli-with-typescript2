import { Router } from 'express';

const routes = Router();

routes.get('/', (_req, res) => {
  return res.send({ message: 'Get method!' });
});

routes.post('/', (_req, res) => {
  return res.send({ message: 'Post method!' });
});

routes.put('/', (_req, res) => {
  return res.send({ message: 'Put method!' });
});

routes.delete('/', (_req, res) => {
  return res.send({ message: 'Delete method!' });
});

routes.patch('/', (_req, res) => {
  return res.send({ message: 'Patch method!' });
});

export default routes;
