import {NextFunction, Request, Response} from 'express';
import {RedisDb} from './redis';
import {PrismaDb} from './prisma';

export class DataBases {
  prisma = new PrismaDb();
  redis = new RedisDb();
  constructor() {}
}

const db = new DataBases();

const extendContextWithDb = (req: Request, _: Response, next: NextFunction) => {
  req.context = db;

  next();
};

export {extendContextWithDb};
