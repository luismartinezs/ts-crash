{
  type NewKeyType = string;
  type MappedTypeWithNewProperties<Type> = {
    [Properties in keyof Type as NewKeyType]: Type[Properties];
  };

  type Options = {
    name: string;
    age: number;
    0: number;
  };

  type T1 = MappedTypeWithNewProperties<Options>;

  type Getters<Type> = {
    [Property in keyof Type as `get${string & Property}`]: () => Type[Property];
  };

  interface Person {
    name: string;
    age: number;
    location: string;
  }

  type LazyPerson = Getters<Person>;

  type TypeOrNever<T, U> = Exclude<T, U>;
  type T2 = TypeOrNever<"hello", string>;

  type RemoveKindField<T> = {
    [P in keyof T as Exclude<P, "kind">]: T[P];
  };

  interface Circle {
    kind: "circle";
    radius: number;
  }

  type KindlessCircle = RemoveKindField<Circle>;

  type RemoveName<T> = {
    [P in keyof T as P extends "name" ? never : P]: T[P];
  };

  type T3 = RemoveName<{ name: string; age: number }>;

  // map over arbitrary unions of any type
  type EventConfig<Events extends { kind: string }> = {
    [E in Events as E["kind"]]: (event: E) => void;
  };

  type SquareEvent = { kind: "square"; x: number; y: number };
  type CircleEvent = { kind: "circle"; radius: number };

  type Config = EventConfig<SquareEvent | CircleEvent>;

  //

  type MapToBooleanNotOk<T> = {
    [P in T]: boolean;
  };

  // keys must be number, string or symbol types
  type MapToBooleanOk<T extends { label: string }> = {
    [P in T as T["label"]]: boolean;
  };

  //

  type ExtractPII<T> = {
    [P in keyof T]: T[P] extends { pii: true } ? true : false;
  };

  type DBFields = {
    id: { format: "incrementing" };
    name: { type: string; pii: true };
  };

  type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>
}
