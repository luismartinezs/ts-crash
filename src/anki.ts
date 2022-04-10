{
  type Arrayish = {
    [n: number]: unknown;
  };

  type A = keyof Arrayish;

  type MapToBoolean<T extends { label: string }> = {
    [E in T as E["label"]]: E extends { name: string } ? true : false;
  };

  type T1 = MapToBoolean<
    | { label: "myLabel" }
    | { label: "otherLabel" }
    | { name: "Elmer"; label: "user" }
  >;
}
