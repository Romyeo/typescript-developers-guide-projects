class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfString {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

// Annotation
new ArrayOfAnything<string[]>([['a', 'b', 'c']]);

// Inference
new ArrayOfAnything(['a', 'b', 'c']);

// Generics with function
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Best practice, always put what type to be passed
printAnything<string>(['a', 'b', 'c']);

// Generic constraints
class House {
  print(): void {
    console.log('This is a house');
  }
}

class Car {
  print() {
    console.log('I am a car');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars([new House(), new Car()]);
