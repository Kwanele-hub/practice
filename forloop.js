 const array =[{name:"kwanele",mark:45},{name:"sipho",mark:55},{name:"zee",mark:75}];
 
 function average(array) {
    var sum = 0;
    for(var i = 0; i < array.length;i++){
        sum += array[i];
    }
    return sum / array.length;
}
console.log(average(sum))