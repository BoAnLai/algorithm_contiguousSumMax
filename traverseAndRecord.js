// given an profit[n], which value could be nagative, and number k.
// return a subarray[m] of which has max sum of each parameter, and m<=k.

const library = require('./library')
//library.getRandomArray(arrNum = 20, min = -100, range = 200)  return an array


function getMaxProfit(arr = [1, 1, 1, -5, 1, 1, 1, 5, 6, 8, 4, 2, -7], k = 3) {

  let n = arr.length
  let max = [0, 0, 0] //[started index, count, max value]

  for (let i = 0; i < n; i++) {
    let count = 0

    for (let j = 0; j < k && i + j < n; j++) {
      count += arr[i + j]

      if (count > max[2]) {
        max[0] = i
        max[1] = j + 1
        max[2] = count
      }
    }
  }

  return max
}

let testCase = library.getRandomArray()
// let testCase = [-15, -15, -59, 3, -89, -5, -6, 5, -97]

/*
console.log(`array: ${testCase}`)
let test = getMaxProfit(testCase)
console.log(test)
*/

let basicGetSum = getMaxProfit

// console.log(`array: ${testCase}`)
let test = basicGetSum(testCase)
// console.log(test)
module.exports = basicGetSum