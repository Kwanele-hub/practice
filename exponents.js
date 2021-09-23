
var exponent = function(a, n) 
{
   if (n === 0) 
   {
    return 1;
    }
  else 
  {
    return a * exponent(a, n-1);
  }
};

console.log(exponent(4, 2));
// ---------------------------

function log(num){
    if(num > 5){
        return;
    }
    console.log(num);
    log(num + 1);
}

log(1);


