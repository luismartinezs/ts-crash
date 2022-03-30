## Ubuntu / Mac

https://www.youtube.com/watch?v=BCg4U1FzODs&t=478s

Setup typescript

`npm install -g typescript`

Use it

`tsc -v`

Open VSCODE, create a `index.ts` file

```ts
let id: number = 5;
```

Compile ts to js

In the console: `tsc index`

Note: `tsc` will compile any ts files in the project

Notice a new file `index.js`

Alternatively watch a file: `tsc --watch index`

Generate config file: `tsc --init`

Edit config file:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "es2022",
    "typeRoots": ["@types", "node_modules/@types"],
    "esModuleInterop": true,
    "strict": true
  }
}
```
