const bmiForm = document.getElementById("bmi-form");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const calculateBtn = document.getElementById("calculate-btn");
const bmiResult = document.getElementById("bmi-result");
const bmiCategory = document.getElementById("bmi-category");

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);

  if (isNaN(weight) || isNaN(height)) {
    alert("Error: Please enter valid numbers for weight and height.");
    return;
  }

  const bmi = calculateBMI(weight, height);

  bmiResult.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
  bmiCategory.textContent = getBMICategory(bmi);
});

function calculateBMI(weight, height) {
  return weight / height ** 2;
}

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal weight";
  } else if (bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
