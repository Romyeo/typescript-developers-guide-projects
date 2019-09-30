@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError('Boat has sunk')
  pilot(@parameterDecorator speed: string): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log('[CLASS DECORATOR]', constructor);
}

function testDecorator(target: any, key: string): void {
  console.log('Target:', target);
  console.log('Key:', key);
}

function parameterDecorator(target: any, key: string, index: number): void {
  console.log('[PARAMETER DECORATOR]', target);
  console.log('[PARAMETER DECORATOR]', key);
  console.log('[PARAMETER DECORATOR]', index);
}

function logError(errorMessage: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function() {
      try {
        method();
      } catch (err) {
        console.log(errorMessage);
      }
    };
  };
}
