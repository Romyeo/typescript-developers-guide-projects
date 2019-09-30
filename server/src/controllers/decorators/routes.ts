import 'reflect-metadata';
import { Methods } from './enums/Methods';
import { Metadata } from './enums/Metadata';
import { RequestHandler } from 'express';

interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function routeBinder(method: string) {
  return function(path: string) {
    return function(
      target: any,
      key: string,
      desc: RouteHandlerDescriptor
    ): void {
      Reflect.defineMetadata(Metadata.Path, path, target, key);
      Reflect.defineMetadata(Metadata.Method, method, target, key);
    };
  };
}

export const get = routeBinder(Methods.Get);
export const put = routeBinder(Methods.Put);
export const post = routeBinder(Methods.Post);
export const patch = routeBinder(Methods.Patch);
export const del = routeBinder(Methods.Del);
