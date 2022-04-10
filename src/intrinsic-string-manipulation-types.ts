{
  type Shout = Uppercase<"hello">;

  type ASCIICacheKey<Str extends string> = `ID_${Uppercase<Str>}`;
  type MainID = ASCIICacheKey<"my_app">;
}
