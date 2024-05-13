const form = document.getElementById("bmi-form");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100;
    const bmi = (weight / height ** 2).toFixed(2);

    if (bmi < 18.5) {
        resultDiv.textContent = `Tu IMC es ${bmi}. Estas Bajo de Peso.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultDiv.textContent = `Tu IMC es ${bmi}. Tienes un Peso Normal.`;
    } else if (bmi >= 25 && bmi <= 29.9) {
        resultDiv.textContent = `Tu IMC es ${bmi}. Tienes Sobrepeso.`;
    } else {
        resultDiv.textContent = `Tu IMC es ${bmi}. Estas Obeso.`;
    }
    });