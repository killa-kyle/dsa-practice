// check if string is palindrome
const testString = "Rotor"
const badString = "notAPalidrome"

const palindromeCheck = string =>  {
    const stringLowercased = string.toLowerCase();

    const reversedString = stringLowercased.split("").reverse().join('')
    console.log(reversedString);
    return stringLowercased === reversedString
}

console.log(palindromeCheck(testString));
console.log(palindromeCheck(badString));