{
  // Prefer parameters with union types instead of overloads, when possible
  function len(s: string): number;
  function len(arr: any[]): number;
  function len(x: any) {
    return x.length;
  }

  len(Math.random() > 0.5 ? "hello" : [0]); // doesn't work, because ts can't resolve to both overloads, only one at a time. Param must be either string or any[], but not potentially both

  // In this case, both overloads have the same argument count and same return type, so we can write a non-overloaded function, e.g.
  function len2(x: any[] | string) {
    return x.length;
  }
}
