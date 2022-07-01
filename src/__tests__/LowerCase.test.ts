import { lowerCaseKeys, lowerCaseKeysAll } from "../index";

import { obj } from "./_Objects.data";

test.each(obj)("Check objects: only first level", (data) => {
  const { original, expected } = { ...data };
  const originalData = { ...original };

  const result = lowerCaseKeys(original);
  expect(original).toEqual(originalData);
  expect(result).toEqual(expected);
});

test.each(obj)("Check objects: recursive", (data) => {
  const { original, expectedRecursive } = { ...data };
  const originalData = { ...original };

  const result = lowerCaseKeysAll(original);
  expect(original).toEqual(originalData);
  expect(result).toEqual(expectedRecursive);
});
