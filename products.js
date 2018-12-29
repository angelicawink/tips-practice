// function get_products_of_all_ints_except_at_index(array){
//   let productsArray = [];
//
//   for (let i = 0; i < array.length; i++){
//     let slicedArray = [...array.slice(0, i), ...array.slice(i+1, array.length)];
//
//     let product = slicedArray.reduce((a, b) => a * b);
//     productsArray.push(product)
//
//   }
//   return productsArray
// }

///////////////////////////////////////////////

function findHighestPossibleProductFromAnyThreeIntegers(listOfInts){
  let intsHighestToLowest = listOfInts.sort((a,b)=> b-a);

  let largetsThreeInts = intsHighestToLowest.slice(0, 3);

  let highestProduct = largetsThreeInts.reduce((a,b) => a*b)
  return highestProduct
}

console.log(findHighestPossibleProductFromAnyThreeIntegers([6,10,1,2,3,9]))

/////////////////////////////////////
// function mergeRanges(listOfMettingTimes){
//   let sorted = listOfMettingTimes.sort((a, b) => a.startTime - b.startTime)
//
//   let condensedMeetingTimes = [sorted[0]]
//
//   for (let i = 0; i < sorted.length; i++){
//     for (let n = i+1; n < sorted.length; n++){
//       if ((sorted[n].startTime <= sorted[i].endTime) && (sorted[n].endTime > sorted[i].endTime)){
//         condensedMeetingTimes[i].endTime = sorted[n].endTime
//       }
//       else if ((sorted[n].startTime > sorted[i].endTime)){
//           condensedMeetingTimes.push(sorted[n])
//       }
//     }
//   }
//
// return condensedMeetingTimes
//
// }
