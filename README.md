# lowerCaseKeys & lowerCaseKeysAll

Creates a new object from the specified object, where all the keys are in lowercase.

NPM link: [@el3um4s/lower-case-keys](https://www.npmjs.com/package/@el3um4s/lower-case-keys)

### Install and use the package

To use the package in a project:

```bash
npm i @el3um4s/lower-case-keys
```

and then in a file:

```ts
import { lowerCaseKeys, lowerCaseKeysAll } from "@el3um4s/lower-case-keys";

const obj = {
  Foo: "bar",
  bAr: "foo",
  casE: {
    camelCase: "snake_case",
    snake_case: "camelCase",
    PascalCase: "PascalCase",
  },
};

const lowerCaseObj = lowerCaseKeys(obj);
// {
//   foo: "bar",
//   bar: "foo",
//   case: {
//     camelCase: "snake_case",
//     snake_case: "camelCase",
//     PascalCase: "PascalCase",
//   },
// }

const lowerCaseAllObj = lowerCaseKeysAll(obj);
// {
//   foo: "bar",
//   bar: "foo",
//   case: {
//     camelcase: "snake_case",
//     snake_case: "camelCase",
//     pascalcase: "PascalCase",
//   },
// }
```
