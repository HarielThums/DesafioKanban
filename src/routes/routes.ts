import Router from 'express';
import { authenticate } from '../app/controllers/UserController';
import UserController from '../app/controllers/CardController';
import { Auth } from '../app/middlewares/auth';
import { feedback } from '../app/middlewares/statusFeedback';

const route = Router();

route.get('/', (req, res) => {
  res.send({ Hello: 'World' });
});

// authenticate
route.post('/login', authenticate);

//cards
route.get('/cards', Auth, UserController.getCards);
route.post('/cards', Auth, UserController.createCard);
route.put('/cards/:id', Auth, UserController.updateCard, feedback);
route.delete('/cards/:id', Auth, UserController.deleteCard, feedback);

export default route;
