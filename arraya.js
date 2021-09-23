// var myArray = [4, -5, 0, 2, -67, 8, 10, -34];
// var positiveNum = [];
// function positiveNumbers(num){
//   for( var i = 0; i< num.length; i++){
//     if (num[i] < 0) {
//       return myArray.push(positiveNum)
//     }
    
//   }
//   c onsole.log(newNumber)
//     if (num >= 0)
//     return num
//     else{
//        return  newNumber <= myArray
//     } 
// }

// console.log(positiveNumbers(myArray));


// function positiveNumbers(array) {
  //   return array.filter(num=> num >= 0);
  // }
var myArray = [4, -5, 0, 2, -67, 8, 10, -34];
var positiveNum = [];
 myArray.forEach(function(num) {
  if (num < 0) {
    return num
  } else {
    positiveNum.push(num)
  }
});

console.log(positiveNum)