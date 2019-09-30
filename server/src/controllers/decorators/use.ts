import 'reflect-metadata';
import { RequestHandler } from 'express';
import { Metadata } from './enums/Metadata';

export function use(middleware: RequestHandler) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    const middlewares =
      Reflect.getMetadata(Metadata.Middleware, target, key) || [];
    Reflect.defineMetadata(
      Metadata.Middleware,
      [...middlewares, middleware],
      target,
      key
    );
  };
}
