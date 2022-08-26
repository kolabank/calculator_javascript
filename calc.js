var numberButton = document.querySelectorAll(".calcButton");
const displayScreen = document.querySelector("#head");
var isLeft = true;
var leftNumber;
var rightNumber;
var clickedValue = ""
var operator;
var listenerFunction;

//Add the same event listener to all the buttons
for (number of numberButton) {

    number.addEventListener("click", numberClickedLeft);
}


//This function is to handle click event for the left hand number
function numberClickedLeft() {

    if (!isLeft) { numberClickedRight(this) } //This checks if this is actually the left or right number. If right, control is transfered to the numberClickedRight function
    else {

        clickedValue = clickedValue + this.outerText; // Concactenate the clicked numbers together

        const lastClicked = clickedValue.charAt(clickedValue.length - 1) //tests if a character that is not a number is clicked

        if (Number.isInteger(parseInt(lastClicked))) {
            const intValue = parseInt(clickedValue)
            console.log(intValue); ////
            displayScreen.value = intValue;
            displayScreen.style.textAlign = "right"

            leftNumber = intValue;

        } else if (!Number.isInteger(parseInt(lastClicked))) {
            isLeft = false;
            switch (lastClicked) {
                case "x":
                    operator = "multiply";
                    break;

                case "/":
                    operator = "divide";
                    break;

                case "+":
                    operator = "add";
                    break;

                case "-":
                    operator = "minus";
                    break;

                case "=":
                    equality;
                    break;

                case "C":
                    resetFunction();

                    break;


                default:
                    operator = "";

            }

            clickedValue = ""
        }


    }
}



function numberClickedRight(param) {

    console.log("We got to the right number click function") /////////////////////////////////

    clickedValue = clickedValue + param.outerText;
    const intValue = parseInt(clickedValue)

    const lastClicked = clickedValue.charAt(clickedValue.length - 1) //tests if a character that is not a number is clicked
    console.log(lastClicked); /////
    if (Number.isInteger(parseInt(lastClicked))) {
        // if (Number.isInteger(intValue)) {
        const intValue = parseInt(clickedValue)
        console.log(intValue); ////
        displayScreen.value = intValue;
        displayScreen.style.textAlign = "right"

        rightNumber = intValue;

    } else {
        isLeft = false;
        switch (lastClicked) {
            case "=":
                {
                    equality();
                    console.log("we got to equality sign") //////////////////////////////////////////
                }
                break;

            case "C":
                resetFunction();

                break;

            default:
                console.log("No valid input");


        }
    }

}



//Operator functions here
function multiplyFunction(a, b) {
    return a * b;
}

function divideFunction(a, b) {
    return a / b;
}

function addFunction(a, b) {
    return a + b;
}

function minusFunction(a, b) {
    return a - b;
}



//Equality function here
function equality() {
    console.log("The equality function is called")
    console.log(operator)
    switch (operator) {
        case "multiply":

            displayScreen.value = multiplyFunction(leftNumber, rightNumber);
            break;

        case "divide":
            displayScreen.value = divideFunction(leftNumber, rightNumber);
            break;

        case "add":
            displayScreen.value = addFunction(leftNumber, rightNumber);
            break;

        case "minus":
            displayScreen.value = minusFunction(leftNumber, rightNumber);
            break;

        default:
            console.log("We have nothing to print")
    }

    leftNumber = parseFloat(displayScreen.value)
    console.log(`left number is now ${leftNumber}`)

}

//Reset function

function resetFunction() {

    displayScreen.value = "";
    leftNumber = "";
    rightNumber = "";


}