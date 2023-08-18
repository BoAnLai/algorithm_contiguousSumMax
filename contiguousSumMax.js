// given an profit[n], which value could be nagative, and number k.
// return a subarray[m] of which has max sum of each element, and m<=k.

/*
algorithm description:
merge adjacent element to create new mArr for k times,
use the final result fArr to get the max sum.

>>>>>>>>>> this is not a 100% correct algorithm <<<<<<<<<<
*/


/*
uppgrade dirrection (not implement yet):
1.add automation test, check the accuracy
2.case handle: multiple fArr element max
3.case handle: if all element of fArr is negative but there is positive number in oArr
3.
*/

const library = require('./library')

function getMaxProfit(arr = library.getRandomArray(), k = 3) {

  let n = arr.length
  let oArr = arr
  let fArr = []

  //
  console.log(`input array = ${arr}, n = ${n}, k = ${k}`)
  // 

  for (let j = 0; j < k; j++) {

    // console.log(`j = ${j}, oArr = ${oArr}`)
    let mArr = []

    for (let i = 0; i < n; i++) {
      if (i === 0) {
        mArr[i] = oArr[0] + oArr[1]
      } else if (i === (n - 1)) {
        mArr[i] = oArr[i] + oArr[i - 1]
      } else {
        mArr[i] = oArr[i] + oArr[i + 1] + oArr[i - 1]
      }
    }
    // console.log(`j = ${j}, mArr = ${mArr}`)
    oArr = mArr
    fArr = mArr
  }

  //if multiple max >> create another array and store each of the case 
  console.log(`fArr == ${fArr}`)


  let maxValue = Math.max(...fArr)
  let maxIndex = fArr.findIndex(element => element === maxValue)
  let indexArr = []
  let a = maxIndex - 1
  let b = maxIndex + 1
  //if maxValue < 0, but oArr[?] > 0
  indexArr.push(maxIndex)

  while (indexArr.length < k) {

    //margin case
    if (a < 0) {

      if (fArr[b] >= 0) {
        indexArr.push(b)
        b += 1
      } else {
        break
      }

    } else if (b > n - 1) {

      if (fArr[a] >= 0) {
        indexArr.push(a)
        a += 1
      } else {
        break
      }

    }

    // basic case
    if (fArr[a] > 0 || fArr[b] > 0) {
      if (fArr[a] > fArr[b]) {
        indexArr.push(a)
        a -= 1
      } else if (fArr[a] < fArr[b]) {
        indexArr.push(b)
        b += 1
      } else {
        indexArr.push(a)
        a -= 1
        console.log(`the mergeArr has same value`)
      }
    } else {
      console.log(`both side of fArr is negative`)
      break
    }
  }

  //sort array
  let output = []
  output[0] = Math.min(...indexArr)
  output[1] = indexArr.length
  output[2] = 0

  for (let i = 0; i < output[1]; i++) {
    output[2] += arr[indexArr[i]]
  }

  return output //[init index,count,max value]
}

let testCase = library.getRandomArray()
// let testCase = [-15, -15, -59, 3, -89, -5, -6, 5, -97]
console.log(`array: ${testCase}`)
let test = getMaxProfit(testCase)
console.log(test)

module.exports = getMaxProfit