const toggleButton = document.getElementById("toggle-btn");
const calculatorButton = document.getElementById("calculator-btn");

function themeSwitcher() {
  document.body.classList.toggle("dark-mode");
}
calculatorButton.addEventListener("click", function calculateSum() {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  const operator = document.getElementById("operator").value;

  let result;

  switch (operator) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      console.log(result);
      break;
    case "/":
      if (number2 == 0) {
      } else {
        result = Math.floor(number1 / number2);
      }
      break;
    case "^":
      result = Math.pow(number1, number2);
      break;
    case "PI":
      result = Math.PI;
      break;
    case "E":
      result = Math.E;
      (document.getElementById("result").textContent = "Natural logarithm E"),
        result;
      break;
    default:
      result = "Invalid operator!";
      break;
  }

  document.getElementById("result").textContent = result;
});

toggleButton.addEventListener("click", themeSwitcher);
document
  .getElementById("calculator-btn")
  .addEventListener("click", function () {
    confetti(); // Dette skyter konfetti!
  });
