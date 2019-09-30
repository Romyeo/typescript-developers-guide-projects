import 'reflect-metadata';

const plane = {
  color: 'red'
};

Reflect.defineMetadata('note', 'hi there', plane, 'color');
// Reflect.defineMetadata('note', 'hi there', plane);
Reflect.defineMetadata('height', 10, plane);

console.log(plane);

const note = Reflect.getMetadata('note', plane, 'color');
const height = Reflect.getMetadata('height', plane);

console.log(note);
console.log(height);

@printMetadata
class Plane {
  color: string = 'red';

  @markFunction('Test')
  fly(): void {
    console.log('flaps wings');
  }
}

@controller
class PlaneController {
  color: string = 'red';

  @get('/login')
  fly(): void {}
}

function get(path: string) {
  return function(target: PlaneController, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  };
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    // const middleware = Reflect.getMetadata('middleware', target.prototype, key);
    // router.get(path, middleware, target.prototype[key]);
  }
}

function markFunction(secretInfo: string) {
  return function(target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log('[CLASS]', secret);
  }
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
console.log(secret);
