{
  interface StringArray {
    [index: number]: string;
  }
  const myArray: StringArray = { 0: "hey", 1: "jude", 2: "yah" };
  const secondItem = myArray[1];

  interface NotOkay {
    [x: number]: boolean;
    [x: string]: string;
  }

  interface NumberDictionary {
    [index: string]: number;
    length: number;
    name: string;
  }

  interface ReadonlyStringArray {
    readonly [index: number]: string;
  }

  let arr: ReadonlyStringArray = {
    0: "hello",
    1: "world",
  };

  arr[1] = "there";
}
