import 'reflect-metadata';

import { AppRouter } from '../../AppRouter';
import { Methods } from './enums/Methods';
import { Metadata } from './enums/Metadata';
import { Request, Response, NextFunction, RequestHandler } from 'express';

function validators(keys: string[]): RequestHandler {
  return function(req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send('Invalid request');
      return;
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`Missing field ${key}`);
        return;
      }
    }

    next();
  };
}

export function controller(route: string) {
  return function(target: Function) {
    const router = AppRouter.instance;

    for (let key in target.prototype) {
      const handler = target.prototype[key];
      const path = Reflect.getMetadata(Metadata.Path, target.prototype, key);

      const method: Methods = Reflect.getMetadata(
        Metadata.Method,
        target.prototype,
        key
      );

      const middlewares =
        Reflect.getMetadata(Metadata.Middleware, target.prototype, key) || [];

      const validateProps =
        Reflect.getMetadata(Metadata.Validator, target.prototype, key) || [];

      const validatorMiddleware = validators(validateProps);

      if (path) {
        router[method](
          route + path,
          ...middlewares,
          validatorMiddleware,
          handler
        );
      }
    }
  };
}
