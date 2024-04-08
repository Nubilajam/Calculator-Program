
// Getting the display element
const display = document.getElementById("display");

// function to append input to the display
function toBeDisplay(input) {
    display.value += input;
}

//function to clear screen
function clearDisplay() {
    display.value = "";
}

// for calculating
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

