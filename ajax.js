var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','file:///home/tcg/my-workspace/practice/json.js');
ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData[0]);
};
ourRequest.send();