//getRandomArray(arrNum = 20, min = -100, range = 200)

const library = {
  getRandomArray: (arrNum = 20, min = -100, range = 200) => {
    let arr = []
    for (let i = 0; i < arrNum; i++) {
      arr[i] = min + Math.ceil(Math.random() * range)
    }
    return arr
  }
}

module.exports = library