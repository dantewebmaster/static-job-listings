export const uniq = (array: any[]) => array.filter(
  (value, index, array) => array.indexOf(value) === index
);

export const pullAll = (arr: any[], values: any[]) => arr.filter(a => !values.includes(a));
