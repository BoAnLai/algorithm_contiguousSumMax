const library = require('./library')               //library.getRandomArray(arrNum = 20, min = -100, range = 200)
const basicGetSum = require('./traverseAndRecord') //basicGetSum(arr,k=3)
const getMaxProfit = require('./contiguousSumMax') //getMaxProfit(arr,k=3)

let arr = library.getRandomArray()
let k = 3
let expectOutput = basicGetSum(arr, k)
let caseOutput = getMaxProfit(arr, k)

// console.log(`input == ${input}`)
// console.log(`expectOutput == ${expectOutput}`)

/*
test(`input arr = ${arr}, k = ${k}, expect output = ${expectOutput}`, () => {
  expect(input).toEqual(expectOutput);
});
*/
test(`input arr = ${arr}, k = ${k}, expectOutput = ${expectOutput}, caseOutput = ${caseOutput}`, () => { expect(getMaxProfit(arr, k)).toEqual(expectOutput) })


//npm test