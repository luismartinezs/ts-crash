{
  class Point {
    x: number = 0;
    y: number = 0;
  }

  const pt = new Point();
  pt.x = 0;
  pt.y = 0;

  class OKGreeter {
    // "!" to prevent error if not initialized
    name!: string;
  }

  class Greeter {
    // readonly prevents reassigning value outside of constructor
    readonly name: string = "hello";

    constructor(otherName?: string) {
      if (otherName !== undefined) {
        this.name = otherName;
      }
    }

    err() {
      this.name = "not ok";
    }
  }

  // constructors can be overloaded
  // constructors can't have type parameters
  // constructors can't have return types
  class Point3 {
    x = 10;
    y = 10;

    constructor(x: number, y: number);
    constructor(s: string);
    constructor(xs: any, y?: any) {
      // TBD
    }

    scale(n: number): void {
      this.x *= n;
      this.y *= n;
    }
  }

  class Base {
    k = 4;
  }

  class Derived extends Base {
    constructor() {
      super();
      console.log(this.k);
    }
  }

  interface Pingable {
    ping(): void;
  }

  // Sonar needs to have ping method
  // types of implemented interfaces don't affect
  class Sonar implements Pingable {
    ping() {
      console.log("ping!");
    }
  }

  class Visibility {
    // public is default modifier
    public greet() {
      console.log("Hi");
    }
    protected getName() {
      return "hi";
    }
    private x = 0;
    static y = 0;
  }

  class Derived3 extends Visibility {
    howdy() {
      return this.getName(); // can access protected things
    }
    showX() {
      console.log(this.x); // can't access private things
    }
  }

  const g = new Visibility();
  g.greet();
  g.getName(); // no
  console.log(Visibility.y);

  // can turn constructor param into class property
  class Params {
    constructor(
      public readonly x: number,
      protected y: number,
      private z: number
    ) {
      // No body necessary
    }
  }
  const a = new Params(1, 2, 3);
  console.log(a.x);

  // class expressions
  const someClass = class<T> {
    content: T;
    constructor(value: T) {
      this.content = value;
    }
  };

  const m = new someClass("Hello world");

  // abstract classes
  // define what should be implemented, but not how
  // can't be instantiated
  abstract class Base2 {
    abstract getName(): string;

    printName() {
      console.log("Hello, " + this.getName());
    }
  }

  // Derived2 class needs to implement getName method
  class Derived2 extends Base2 {
    getName() {
      return "world";
    }
  }

  // classes can be used as types
  class Point1 {
    x = 0;
    y = 0;
  }

  class Point2 {
    x = 0;
    y = 0;
  }

  // OK
  const p: Point1 = new Point2();
}
