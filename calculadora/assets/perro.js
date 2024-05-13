const form = document.getElementById("perro-form");
const humanoInput = document.getElementById("humano-edad");
const resultDiv = document.getElementById("resultado");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const humanoedad = parseInt(humanoInput.value);
    let edadperro = 0;

    if (humanoedad <= 1) {
        edadperro = humanoedad * 20;
    } else if (humanoedad == 2) {
        edadperro = 20 + 8;
    } else if (humanoedad > 2 && humanoedad <= 15) {
        edadperro = 28 + (humanoedad - 2) * 4;
    } else {
        edadperro = "mas de 15 años humanos";
    }

    resultDiv.textContent = `Tu perro tiene aproximadamente ${edadperro}`;
});