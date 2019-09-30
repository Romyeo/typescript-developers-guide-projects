import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  shouldSwap(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    const rightHand = this.data[rightIndex];

    this.data[leftIndex] = rightHand;
    this.data[rightIndex] = leftHand;
  }

  get length(): number {
    return this.data.length;
  }

  print(): void {
    console.log(this.data);
  }
}
