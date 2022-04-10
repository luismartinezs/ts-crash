{
  type PropEventSource<T> = {
    on<K extends string & keyof T>(
      eventName: `${K}Changed`,
      callback: (newValue: T[K]) => void
    ): void;
  };

  declare function makeWatchedObject<T>(obj: T): T & PropEventSource<T>;

  const person = makeWatchedObject({
    firstName: "Saoirse",
    lastName: "Ronan",
    age: 26,
  });

  person.on("firstNameChanged", (newName) => {
    console.log(`new name is ${newName.toUpperCase()}`);
  });

  person.on("ageChanged", (newAge) => {
    if (newAge < 0) {
      console.warn("warning! negative age");
    }
  });
}
