// Console Message Print
console.log("test")

// Variables for BG colour change
const greenCircle = document.getElementById("green");
const pinkCircle = document.getElementById("plum");
const blueCircle = document.getElementById("blue");
let interactionContainer = document.getElementById("interactionContainer");


// BG colour change functions
greenCircle.addEventListener("click", function () {
    console.log(interactionContainer)
    interactionContainer.style.backgroundColor = "green"
})

pinkCircle.addEventListener("click", function () {
    interactionContainer.style.backgroundColor = "pink"
})

blueCircle.addEventListener("click", function () {
    interactionContainer.style.backgroundColor = "blue"
})

// Variable for Loop Function
const loopContainer = document.getElementById("loopContainer")
const message = "potato";


// Loop Function
for (let i = 0; i < 10; i++) {
    console.log("brave");
    const textDiv = document.createElement("div");
    textDiv.innerHTML = message;
    loopContainer.appendChild(textDiv);

}

// Condition

const conditionContainer = document.getElementById("conditionContainer");
const square = document.getElementById("square");

conditionContainer.addEventListener("mouseover", function () {
    console.log("Hovering");
    square.style.backgroundColor = "green";
})

conditionContainer.addEventListener("mouseout", function () {
    square.style.backgroundColor = "lightsalmon";
})


