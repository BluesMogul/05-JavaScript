let canAfford = (itemPrice, accountBalance) => {
    return itemPrice > accountBalance ?
        'Cannot afford! You are $${itemPrice - accountBalance} short'
        : "You can afford it!"
}

console.log(canAfford(55, 10000))

//PROBLEM 1
let oldEnough = (currentAge) => {
    return currentAge >= 18 ?
        "You are good to go!"
        : "Sorry! You must be 18 or older!"
}
console.log(oldEnough(21))

//PROBLEM 2
let rainyDay = (isRaining)  => {
    return isRaining ? "Get your rain jacket!" : "No rain in today's forecast!"
}
console.log(rainyDay(false))


//PROBLEM 3
let isEven = (num) => {
    return num % 2 == 0 ?
        "That's an even number!" : "That's an odd number!"
}
console.log(isEven(21))


//PROBLEM 4
let numCheck = (num1, num2) => {
    {{ return num1 > num2 ?
        num1 + " is more than " + num2 : num1 + " is less than " + num2 }}
}
console.log(numCheck(1, 2))

