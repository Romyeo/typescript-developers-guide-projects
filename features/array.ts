const carMakers = ['ford', 'toyota', 'chevy']; // Inference
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'higher order functions'
carMakers.map((car: string): string => car);

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2013-10-10');
importantDates.push(new Date());
