function isInteger(x){
  if (x !== x){
    return false
  } else if (typeof x === "number" && Math.round(x) === x){
    // alternatively check if Math.floor(x) === x
    // or Math.ceil(x) === x
    // or x % 1 === 0
    // or Number.isInteger(x) === true
      return true
  } else {
    return false
  }
}

console.log(isInteger(3))
console.log(isInteger(-4))
console.log(isInteger(0))
console.log(isInteger("dog"))
console.log(isInteger(NaN))
console.log(isInteger(null))
console.log(isInteger(undefined))
console.log(isInteger(0.4))
