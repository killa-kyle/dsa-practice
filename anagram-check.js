const anagramOne = "astronomer"
const anagramTwo = "moon starer"
const notAnagram = "Hello World"
const partialAnagram = "lunch at noon"

const anagramCheck = (stringOne, stringTwo) => {
    const modifystring = string => string.toLowerCase().split("").sort().filter(char => char.match(/[a-zA-z]/)).join("")
    console.log(modifystring(stringOne))
    console.log(modifystring(stringTwo))

    return modifystring(stringOne) === modifystring(stringTwo)
}

console.log(anagramCheck(anagramOne,anagramTwo))
console.log(anagramCheck(anagramOne,partialAnagram))