// Get the slider
var redSlider = document.getElementById('redRange');
var greenSlider = document.getElementById('greenRange');
var blueSlider = document.getElementById('blueRange');

//Get the output
var redOutput = document.getElementById('redVal');
var greenOutput = document.getElementById('greenVal');
var blueOutput = document.getElementById('blueVal');

var pVals = document.getElementsByTagName('p');

// Define the value initial value shown on the output
redOutput.innerHTML = redSlider.value;
greenOutput.innerHTML = greenSlider.value;
blueOutput.innerHTML = blueSlider.value;

// Get the document body
var body = document.querySelector('Body');
body.style.background =  "rgb(" + 127 + "," + 127 + "," + 127 + ")";

// Loop through p's and change the colors
for (let i = 0; i < pVals.length; i++) {
    pVals[i].style.color = "rgb(" + (255-redSlider.value) + "," + (255-greenSlider.value) + "," + (255-blueSlider.value) + ")";
}

redSlider.oninput = function(){
        redOutput.innerHTML = this.value;
        changeRGB(this.value, greenSlider.value, blueSlider.value);
}
greenSlider.oninput = function(){
        greenOutput.innerHTML = this.value;
        changeRGB(redSlider.value, this.value, blueSlider.value);
}
blueSlider.oninput = function(){
        blueOutput.innerHTML = this.value;
        changeRGB(redSlider.value, greenSlider.value, this.value);
}

function changeRGB(red,green,blue){
        // Change the color of the background
        body.style.background = "rgb(" + red + "," + green + "," + blue + ")";

        //Change the color of the text
        for (let i = 0; i < pVals.length; i++) {
            pVals[i].style.color = "rgb(" + (255 - red) + "," + (255-green) + "," + (255-blue) + ")";
        }


}
