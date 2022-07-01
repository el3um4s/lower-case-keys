export const obj = [
  {
    original: {
      Zero: 0,
      one: 1,
      TwO: 2,
    },
    expected: {
      zero: 0,
      one: 1,
      two: 2,
    },
    expectedRecursive: {
      zero: 0,
      one: 1,
      two: 2,
    },
  },
  {
    original: {
      Zero: 0,
      one: 1,
      TwO: 2,
      others: { a: "a", B: "B", _c: "_c", _D: "_D" },
    },
    expected: {
      zero: 0,
      one: 1,
      two: 2,
      others: { a: "a", B: "B", _c: "_c", _D: "_D" },
    },
    expectedRecursive: {
      zero: 0,
      one: 1,
      two: 2,
      others: { a: "a", b: "B", _c: "_c", _d: "_D" },
    },
  },
  { original: {}, expected: {}, expectedRecursive: {} },
  {
    original: { helloWorld: [0, 1, 2, 3] },
    expected: { helloworld: [0, 1, 2, 3] },
    expectedRecursive: { helloworld: [0, 1, 2, 3] },
  },
  {
    original: { A: { B: { C: { D: { E: { DATA: 0 } } } } } },
    expected: { a: { B: { C: { D: { E: { DATA: 0 } } } } } },
    expectedRecursive: { a: { b: { c: { d: { e: { data: 0 } } } } } },
  },
  {
    original: { A: undefined },
    expected: { a: undefined },
    expectedRecursive: { a: undefined },
  },
  {
    original: { A: undefined, B: { C: undefined } },
    expected: { a: undefined, b: { C: undefined } },
    expectedRecursive: { a: undefined, b: { c: undefined } },
  },
  {
    original: { A: null },
    expected: { a: null },
    expectedRecursive: { a: null },
  },
  {
    original: { A: {} },
    expected: { a: {} },
    expectedRecursive: { a: {} },
  },
];
