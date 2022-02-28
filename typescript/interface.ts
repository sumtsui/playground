interface IVehicle {
  brand: string
  honk: () => void
  type: string
  readonly year?: string
}

const car: IVehicle = {
  honk() {
    console.log('tuut tuut');
  },
  brand: 'Ford',
  year: '1998',
  type: 'Sedan',
  // excessKey: ''  // 'excessKey' does not exist in type 'IVehicle'.
};

car.honk();
// car.year = '0'   // Cannot assign to 'year' because it is a read-only property.

/**
readonly vs const

The easiest way to remember whether to use readonly or const is to ask whether you’re using it on a variable or a property. Variables use const whereas properties use readonly.
**/

/**
 * Excess Property Checks
 */

interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || 'red',
    area: config.width ? config.width * config.width : 20,
  };
}

const mySquare = createSquare({ colour: 'red', width: 100 });

/**
 * One final way to get around these checks, which might be a bit surprising, is to assign the object to another variable: Since squareOptions won’t undergo excess property checks, the compiler won’t give you an error.
 * 
 * so strange
 */
const squareOptions = { colour: 'red', width: 100 };
const mySquare2 = createSquare(squareOptions);

/**
 * Class Types
 */

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(h: number, m: number) {}
  currentTime: Date = new Date();
  setTime(d) {
    this.currentTime = d;
  }
  setYou() {
    return {};
  }
}



