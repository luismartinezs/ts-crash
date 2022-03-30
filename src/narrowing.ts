function multiplyAll(
  values: number[] | undefined,
  factor: number
): number[] | undefined {
  if (!values) {
    return values;
  } else {
    return values.map(
      (x) => x * factor
    );
  }
}

function printAll(
  strs: string | string[] | null
) {
  if (
    strs &&
    typeof strs === "object"
  ) {
    for (const s of strs) {
      console.log(s);
    }
  } else if (
    typeof strs === "string"
  ) {
    console.log(strs);
  } else {
    // do nothing
  }
}

function example(
  x: string | number,
  y: string | boolean
) {
  if (x === y) {
    // ts knows that here x and y must be strings to be equal
    x.toUpperCase();
    y.toLowerCase();
    if (typeof x === "number") {
      return x; // never
    }
  } else {
    if (typeof x === "number") {
      console.log(x); // number
    } else {
      console.log(x); // string
      console.log(y);
    }
  }
}

function printAll2(
  strs: string | string[] | null
) {
  // !!!!!!!!!!!!!!!!
  //  DON'T DO THIS!
  //   KEEP READING
  // !!!!!!!!!!!!!!!!
  if (strs) {
    // '' left out!!
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (
      typeof strs === "string"
    ) {
      console.log(strs);
    }
  }
}

// SOLUTION = check for null explicitly
function printAll3(
  strs: string | string[] | null
) {
  if (strs !== null) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (
      typeof strs === "string"
    ) {
      console.log(strs);
    }
  }
}

// losse equality checks if something is null OR undefined
interface Container {
  value: number | null | undefined;
}

function multiplyValue(
  value: number | null | undefined,
  factor: number
) {
  if (value != null) {
    // remove both null and undefined from the type
    console.log(value);
    value *= factor;
  }
}

// in operator narrowing
// "value" in x
// true branch narrows to x which have optional or required value prop
// false branch narrows to x which have optional or missing value prop

// type Fish = { swim: () => void };
// type Bird = { fly: () => void };

// function move(animal: Fish | Bird) {
//   if ("swim" in animal) {
//     return animal.swim(); // type Fish, because it must have swim
//   }

//   return animal.fly(); // type Bird by exclusion
// }

// instanceof

function logValue(x: Date | string) {
  if (x instanceof Date) {
    // narrow down to Date, similar to type of
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

function narrowingNull(
  strs: string[] | null
) {
  if (typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  }
}

function example(
  x: string | number,
  y: string | boolean
) {
  if (x === y) {
    // equality narrowing
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
    y.toLowerCase();
  } else {
    console.log(x);
    console.log(y);
  }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = {
  swim?: () => void;
  fly?: () => void;
};

function move(
  animal: Fish | Bird | Human
) {
  if ("swim" in animal) {
    animal;
  } else {
    animal;
  }
}

let x =
  Math.random() < 0.5
    ? 10
    : "hello world!";
x = 10;
x = "Bye!";
x = true;

// Control flow  analysis

function example() {
  let x: string | number | boolean;

  x = Math.random() < 0.5;

  // after this if, x must be either string or number
  if (Math.random() < 0.5) {
    x = "hello";
  } else {
    x = 100;
  }

  return x; // x: string | number
}

// a function takes pet as arg, returns true if it is a fish (swim is defined), else, returns false
// pet types can be Bird and Fish

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(
  pet: Bird | Fish
): pet is Fish {
  return (
    (pet as Fish).swim !== undefined
  );
}

let pet: Bird | Fish;

pet = {
  fly: () => null,
};

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

function isNumber(
  x: string | number
): x is number {
  return typeof x === "number";
}

// Discriminated unions
{
  interface Shape {
    kind: "circle" | "square"; // type literal union, rather than "string"
    radius?: number;
    sideLength?: number;
  }

  function handleShape(shape: Shape) {
    if (shape.kind === "rect") {
      // erros, because condition is always false
    }
  }

  function getArea(shape: Shape) {
    if (shape.kind === "circle") {
      return (
        Math.PI * shape.radius ** 2
      );
      // Object is possibly 'undefined', ts doesn't know that a kind circle must have a radius, the interface definition is not right
    }
  }
}
// refactor
{
  interface Circle {
    kind: "circle";
    radius: number;
  }

  interface Square {
    kind: "square";
    sideLength: number;
  }

  type Shape = Circle | Square;

  function getArea(shape: Shape) {
    switch (shape.kind) {
      case "circle":
        return (
          // it doesn't complain now, becuase if kind is circle, radius must exist
          Math.PI * shape.radius ** 2
        );
      case "square":
        return shape.sideLength ** 2;
      default:
        // exhausitveness checking, could be used to make sure we've handled all cases.
        // If we add one more shape and don't handle it above, ts will raise a complaint here
        const _exhaustiveCheck: never =
          shape;
        return _exhaustiveCheck;
    }
  }
}
