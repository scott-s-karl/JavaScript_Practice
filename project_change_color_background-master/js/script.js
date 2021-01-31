const colorBtn = document.querySelector("button");
colorBtn.addEventListener("click", changeColor);

var colorArray = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']
var bodyElement = document.getElementsByTagName("body")[0];
bodyElement.style.backgroundColor = 'violet';

function changeColor(){
        var randomItem = colorArray[Math.floor(Math.random()*colorArray.length)];
        bodyElement.style.backgroundColor = randomItem;
}
