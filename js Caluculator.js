let display = document.getElementById('display');
function appendNumber(number) {
  display.value += number;
}
function setOperation(operation) {
  display.value += operation;
}
function clearDisplay() {
  display.value = '';
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}
