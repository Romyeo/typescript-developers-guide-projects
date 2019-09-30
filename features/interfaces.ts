interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,

  summary(): string {
    return `${this.name} - ${this.year} - ${this.broken}`;
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,

  summary(): string {
    return `${this.color} - ${this.carbonated} - ${this.sugar}`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
