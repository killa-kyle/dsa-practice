const array = [1, 2, 3, 4, 5];

const mappingFunction = (v) => v + 1;
const mappedArray = array.map(mappingFunction);

console.log(mappedArray);

const customMapping = (array, mappingFunction) => {
  return array.reduce(
    (accumulator, value) => [...accumulator, mappingFunction(value)],
    []
  );
};

console.log(customMapping(array, mappingFunction));

// filter duplicates from flat array

const basket = [
  "apple",
  "pear",
  "pineapple",
  "apple",
  "pear",
  "banana",
  "apple",
];
const filterFunc = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) === index);
console.log(filterFunc(basket));

// filter using reduce
const reduceFunc = (arr) =>
  arr.reduce(
    (accumulator, value) =>
      accumulator.includes(value) ? accumulator : [...accumulator, value],
    []
  );

console.log(reduceFunc(basket));

// remove duplicates with Set

const set = [...new Set(basket)];
console.log(set);

const setFunction = (arr) => [...new Set(arr)];
console.log(setFunction(basket));

// flatten nested array with reduce
const nestedArray = [1, 2, [3], [4, [5]]];

const flattenArray = (array) =>
  array.reduce(
    (accumulator, value) =>
      Array.isArray(value)
        ? [...accumulator, ...flattenArray(value)]
        : [...accumulator, value],
    []
  );
console.log(flattenArray(nestedArray));

// reverse integer
const int = -42442;

const reverseInt = (int) => {
  const reversed = int.toString().split("").reverse().join("");
  console.log(parseInt(reversed) * Math.sign(int));
};
reverseInt(int);
