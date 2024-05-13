const calculateButton = document.getElementById("calculate");
const resultDiv = document.getElementById("result");
const dogAgeElement = document.getElementById("dogAge");

calculateButton.addEventListener("click", () => {
    const humanAge = document.getElementById("humanAge").value;
    const dogAge = humanAge * 7;
    dogAgeElement.textContent = dogAge;
    resultDiv.style.display = "block";
});