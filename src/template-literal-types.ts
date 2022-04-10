{
  // type World = "world";
  // type Greeting = `hello ${World}`;
  type EmailLocaleIds = "welcome_email" | "email_heading";
  type FooterLocaleIds = "footer_title" | "footer_sendoff";
  type AllLocaleIds = `${EmailLocaleIds | FooterLocaleIds}_id`;
  type Lang = "en" | "ja" | "pt";
  type LocaleMessageIds = `${Lang}_${AllLocaleIds}`;

  type Hello = "Hello" | "Hi"
  type World = "World" | "There"
  type Greeting = `${Hello} ${World}`

  type OnKey<T> = {
    [P in keyof T as `on${Capitalize<string & P>}Change`]: T[P]
  }

  const obj1 = {
    label: "user",
    name: "Josh",
    age: 26
  }

  type OnKeyed = OnKey<typeof obj1>

  type PropEventSource<T> = {
    on(
      eventName: `${string & keyof T}Changed`,
      callback: (newValue: any) => void
    ): void;
  };

  declare function makeWatchedObject<T>(obj: T): T & PropEventSource<T>;

  const person = makeWatchedObject({
    firstName: "Saoirse",
    lastName: "Ronan",
    age: 26,
  });

  person.on("firstNameChanged", (newValue) => {
    console.log(`firstName was changed to ${newValue}!`);
  });

  person.on("lastName", (newValue) => {
    console.log(`firstName was changed to ${newValue}!`);
  });

  person.on("frstNameChanged", (newValue) => {
    console.log(`firstName was changed to ${newValue}!`);
  });
}
