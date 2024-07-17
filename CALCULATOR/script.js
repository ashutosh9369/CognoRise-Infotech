let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let calculator = {
  displayValue: "",
  firstOperand: null,
  secondOperand: null,
  operator: null,
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.id) {
      case "clear":
        calculator.displayValue = "";
        calculator.firstOperand = null;
        calculator.secondOperand = null;
        calculator.operator = null;
        break;
      case "divide":
      case "multiply":
      case "subtract":
      case "add":
        calculator.operator = button.id;
        calculator.firstOperand = parseFloat(calculator.displayValue);
        calculator.displayValue = "";
        break;
      case "equals":
        calculator.secondOperand = parseFloat(calculator.displayValue);
        let result = calculate(
          calculator.firstOperand,
          calculator.secondOperand,
          calculator.operator
        );
        calculator.displayValue = result.toString();
        calculator.firstOperand = null;
        calculator.secondOperand = null;
        calculator.operator = null;
        break;
      default:
        calculator.displayValue += button.textContent;
    }
    display.value = calculator.displayValue;
  });
});

function calculate(a, b, operator) {
  switch (operator) {
    case "divide":
      return a / b;
    case "multiply":
      return a * b;
    case "subtract":
      return a - b;
    case "add":
      return a + b;
    default:
      return 0;
  }
}
