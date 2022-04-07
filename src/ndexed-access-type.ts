{
  type Person = { age: number; name: string; alive: boolean };
  type Age = Person["age"];
  // indexing type (the thing inside []) is a type, so any type can be used there:
  type I1 = Person["age" | "name"];
  type I2 = Person[keyof Person];
  type AliveOrName = "alive" | "name";
  type I3 = Person[AliveOrName];

  const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
  ];

  // capture the element type of an array with the number type (since array keys are numbers)
  type User = typeof MyArray[number];

  const key = "name";
  type Name = Person[key];
}
