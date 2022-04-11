type MPartial<T> = {
  [P in keyof T]?: T[P];
};

type T1 = MPartial<{ id: 1; name: "Luis" }>;

type MRequired<T> = {
  [P in keyof T]-?: T[P];
};

type T2 = MRequired<{ id?: 1; name?: "Luis" }>;

type MRecord<K extends number | string | symbol, T> = {
  [Key in K]: {
    [P in keyof T]: T[P];
  };
};

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: MRecord<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris;

type MPick<T, K> = {
  [P in keyof T as P extends K ? P : never]: T[P];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = MPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

type MOmit<T, K> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type TodoPreview2 = Omit<Todo, "description">;

const todo2: TodoPreview2 = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};

type MExclude<U, E> = U extends E ? never : U;

type T0 = MExclude<"a" | "b" | "c", "a">;

type MExtract<T, U> = T extends U ? T : never;

type T3 = MExtract<"a" | "b" | "c", "a" | "f">;
type T4 = Extract<string | number | (() => void), Function>;

type MNonNullable<T> = T extends null ? never : T;

type T5 = NonNullable<string[] | null | undefined | string | number>;

type MParameters<T> = T extends { (...args: Array<infer P>): unknown }
  ? P
  : unknown;

type T6 = MParameters<(s: string) => void>;
type T7 = MParameters<any>;
type T8 = MParameters<never>;
type T9 = MParameters<<T>(arg: T) => T>;

type MReturnType<T> = T extends (args: any) => infer R ? R : any;
type TR0 = MReturnType<() => string>;
type TR1 = MReturnType<(s: string) => void>;
type TR2 = MReturnType<<T>() => T>;
type TR3 = MReturnType<<T extends U, U extends number[]>() => T>;

type MOmitThisParameter<T> = T extends {
  (this: any, ...args: infer A): infer R;
}
  ? { (...args: A): R }
  : T;

function toHex(this: Number) {
  return this.toString(16);
}

const fiveToHex: MOmitThisParameter<typeof toHex> = toHex.bind(5);

console.log(fiveToHex());

export {};
