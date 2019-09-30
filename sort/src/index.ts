import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// Numbers
const numbers = new NumbersCollection([100000, 3, -5, 5]);
numbers.sort();

// String
const characters = new CharactersCollection('ZsdwQzxcsFgsqq');
characters.sort();

// Linked list
const linkedList = new LinkedList();
const counter = 10;
let i = 0;

while (i < counter) {
  linkedList.add(Math.random() * 1000000);
  i++;
}

numbers.print();
characters.print();
linkedList.print();
