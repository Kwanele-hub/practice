const names = ['kwanele', 'siphelele', 'alwande'];

const removeItem = (names, newList) => {
    const newListNames = [];
    for(var i in names){

        if(names[i] !== newList){
            newListNames.push(names[i]);
    }
}
return  newListNames
}
const removeItem = (newList, newItem) => {
    return newList.filter(element=> element !==newItem)
}
console.log(removeItem(names, 'kwanele'));

