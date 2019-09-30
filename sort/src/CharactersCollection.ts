import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  shouldSwap(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');
    const leftHand = characters[leftIndex];
    const rightHand = characters[rightIndex];

    characters[leftIndex] = rightHand;
    characters[rightIndex] = leftHand;

    this.data = characters.join('');
  }

  get length(): number {
    return this.data.length;
  }

  print(): void {
    console.log(this.data);
  }
}
