function appendToDisplay (value) {
    let display = document.getElementById("display");
    display.value += value;
}

function clearDisplay (value) {
    let display = document.getElementById("display");
    display.value = " ";
}

function calcularResultado (value) {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value ="Erro";
    }
}