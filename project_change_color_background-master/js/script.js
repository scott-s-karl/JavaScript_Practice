var colorBtn = document.querySelector("button");
colorBtn.addEventListener("click", changeColor);

function changeColor(){
        var colorArray = ["Red", "Blue", "Green"]
        var randomItem = colorArray[Math.floor(Math.random()*colorArray.length)];
        var bodyElement = document.getElementsByTagName("BODY")[0];
        bodyElement.style.backgroundColor = randomItem;
}
