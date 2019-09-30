import 'reflect-metadata';
import { Metadata } from './enums/Metadata';

export function validator(...keys: string[]) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(Metadata.Validator, keys, target, key);
  };
}
