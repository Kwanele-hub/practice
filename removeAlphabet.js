var itemList = [1, 5, 'fd', 6, 'as', 'a', 'cx', 43, 's', 51, 7];
var myNum = []
function getNumbers(array){
    for (var i = 0;i < array.length; i++)
    if (array < 0)
    return array -itemList
    else{
        return myNum.push(array)
    }

}
// console.log(myNum)

var sampleString = "aaa1211"  
var newnum =""
var newstr =""
for(var i=0;i<sampleString.length;i++){
 if(isNaN(sampleString[i])){

 newstr = newstr+sampleString[i]

   }else{

  newnum= newstr+sampleString[i]
  }

  }


  console.log(newnum,'') //1121
  console.log(newstr, '') //aaa