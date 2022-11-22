import { Request, Response } from 'express';
import UserModel from '../models/UserModel';

export const getUserList = async (_req: Request, res: Response) => {
  const userListFromUserDB = await UserModel.findAll();
  console.log(userListFromUserDB);

  return res.send({ message: 'ok' });
};
