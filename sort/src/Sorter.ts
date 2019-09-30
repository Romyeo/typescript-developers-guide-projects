export abstract class Sorter {
  abstract shouldSwap(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (!this.shouldSwap(j, j + 1)) continue;
        this.swap(j, j + 1);
      }
    }
  }
}
