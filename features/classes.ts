class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep boop');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('rrrrrrmmmrrrmmm');
  }

  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();
