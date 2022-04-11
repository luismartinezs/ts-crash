type ExtractPII<T> = {
  [P in keyof T]: T[P] extends { pii: true } ? true : false;
};

type DBFields = {
  id: { format: "incrementing" };
  name: { pii: true };
};

type T1 = ExtractPII<DBFields>;

interface MyFunc {
  new (s: string): Date;
  (n?: number): Date;
}

type TypeOrArray<T> = T[] | T;

export {};
