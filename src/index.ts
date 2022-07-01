import isObject from "@el3um4s/is-object";

const lowerCaseKeys = (
  data: Record<string, unknown>
): Record<string, unknown> => {
  // Converting Object to array
  const k = Object.entries(data);

  //  Apply toLowerCase function to all keys
  const l = k.map(function (t) {
    t[0] = t[0].toLowerCase();
    return t;
  });

  const result = Object.fromEntries(l);
  return result;
};

const lowerCaseKeysAll = (
  obj: Record<string, unknown>
): Record<string, unknown> => {
  const a: Record<string, unknown> = {};
  const result = Object.keys(obj).reduce((acc, key: string) => {
    const nk = key.toLowerCase();

    if (isObject(obj[key])) {
      // @ts-ignore
      acc[nk] = lowerCaseKeysAll(obj[key]);
    } else {
      acc[nk] = obj[key];
    }
    return acc;
  }, a);
  return result;
};

export { lowerCaseKeys, lowerCaseKeysAll };
