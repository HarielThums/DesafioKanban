import { NextFunction, Request, Response } from 'express';
import { Cards } from '../models/Card';
import moment from 'moment';

interface CardInterface {
  titulo: string;
  conteudo: string;
  lista: string;
}

class UserController {
  public async createCard(req: Request, res: Response): Promise<Response> {
    try {
      const { titulo, conteudo, lista }: CardInterface = req.body;

      if (!titulo || !conteudo || !lista) return res.status(400).send({ message: 'Invalid values for Card' });

      const card = await Cards.create({ titulo, conteudo, lista });

      await Cards.save(card);

      console.log();

      return res.status(201).json(card);
    } catch (error) {
      return res.status(400).send({ message: 'Cannot create a card' });
    }
  }

  public async getCards(req: Request, res: Response): Promise<Response> {
    try {
      const cards = await Cards.find();

      return res.json(cards);
    } catch (error) {
      return res.status(400).send({ message: 'Cannot find cards' });
    }
  }

  public async updateCard(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const { titulo, conteudo, lista }: CardInterface = req.body;
      const id = req.params.id;

      const card = await Cards.findOne({ id });

      if (!card) return res.status(404).send({ message: 'Card doesnt exists' });

      if (!titulo || !conteudo || !lista) return res.status(400).send({ message: 'Invalid values for Card' });

      await Cards.update(id, { titulo, conteudo, lista });

      res.locals.CardTitle = titulo;
      res.locals.date = moment().format('DD/MM/YYYY HH:mm:ss');

      res.send();

      next();
    } catch (error) {
      return res.status(400).send({ message: 'Cannot update card' });
    }
  }

  public async deleteCard(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const id = req.params.id;

      const card = await Cards.findOne({ id });

      if (!card) return res.status(404).send({ message: 'Card doesnt exists' });

      res.locals.CardTitle = card.titulo;
      res.locals.date = moment().format('DD/MM/YYYY HH:mm:ss');

      await Cards.delete(id);

      res.send();

      next();
    } catch (error) {
      return res.status(400).send({ message: 'Cannot delete card' });
    }
  }
}

export default new UserController();
