{
  type OptionsFlags<T> = {
    [Property in keyof T]: boolean;
  };

  type FeatureFlags = {
    darkMode: () => void;
    newUserProfile: () => void;
  };

  // map FeatureFlags properties to booleans
  type FeatureOptions = OptionsFlags<FeatureFlags>;
  // keyof T becomes "darkMode" | "newUserProfile"
  // [Property in keyof T] is then [Property in "darkMode" | "newUserProfile"]
  // so we have:
  // ["darkMode"]: boolean
  // ["newUserProfile"]: boolean

  type NoReadonlyOrOptional<T> = {
    -readonly [P in keyof T]-?: T[P];
  };

  type T1 = {
    readonly id: string;
    readonly name: string;
    readonly age?: number;
  };

  type T2 = NoReadonlyOrOptional<T1>;

  type T3 = {
    name: string;
    age: number;
  };

  type IdentityMap<T> = {
    [P in keyof T]: T[P];
  };

  type T4 = IdentityMap<T3>;
}
