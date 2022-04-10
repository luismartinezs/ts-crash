{
  interface Animal {
    live(): void;
  }

  interface Dog extends Animal {
    woof(): void;
  }

  type Ex1 = Dog extends Animal ? number : string;
  type Ex2 = RegExp extends Animal ? number : string;

  interface IdLabel {
    id: number;
  }

  interface NameLabel {
    name: string;
  }

  // too long and cumbersome:
  // function createLabel(id: number): IdLabel;
  // function createLabel(name: string): NameLabel;
  // function createLabel(nameOrId: string | number): IdLabel | NameLabel;
  // function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  //   throw "unimplemented";
  // }

  // better:
  type NameOrId<T extends number | string> = T extends number
    ? IdLabel
    : NameLabel;

  function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
    throw "unimplemented";
  }

  let a = createLabel("hello"); // NameLabel
  let b = createLabel(123.4); // IdLabel

  type Message<T extends { message: unknown }> = T["message"];

  type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

  interface Email {
    message: string;
  }
  interface Dog {
    bark(): void;
  }

  type EmailMessage = MessageOf<Email>; // string
  type DogMessage = MessageOf<Dog>; // never

  type Flatten<T> = T extends any[] ? T[number] : T;
  type Str1 = Flatten<string[]>; // string
  type Num1 = Flatten<number>; // number

  // we use infer to helps us not have to dig up how to get the element type in the true branch
  type Flatten2<T> = T extends Array<infer Item> ? Item : T;

  type ReturnNum = () => number;
  type ReturnStr = (x: string) => string;

  type GetReturnType<T> = T extends () => infer Return ? Return : never;

  type Num = GetReturnType<() => number>;
  type Str = GetReturnType<(x: string) => string>;
  type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;
  type Never = GetReturnType<(...args: unknown[]) => never>;

  function stringOrNum(x: string): number;
  function stringOrNum(x: number): string;
  function stringOrNum(x: string | number): string | number;
  function stringOrNum(x: string | number) {
    return x; // implementation
  }

  type ReturnType<T> = T extends (...args: any) => infer R ? R : any;

  type T1 = ReturnType<typeof stringOrNum>;

  // Distributive Conditional Types
  type ToArray<T> = T extends any ? T[] : never;
  type T2 = ToArray<string | number>;

  type ToArrayNonDist<T> = [T] extends [any] ? T[] : never;
  type T3 = ToArrayNonDist<string | number>;
  let arr1: T2 = [1, 2, 3, "hello"]; // error
  let arr2: T3 = [1, 2, 3, "hello"]; // OK
}
