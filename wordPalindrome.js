
function palindrome(str) {
    var splitedStr = str.toLowerCase().split('')
    var reversedStr = splitedStr.reverse('').join(' '||','||'.')
    if (reversedStr == str.toLowerCase()) {
        return true;
    } else {
        return false
    }
}


console.log(palindrome('Do geese see God'))