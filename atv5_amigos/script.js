function calcularDivisao() {
    let valorTotal = parseFloat(document.getElementById("valorTotal").value);

    let valorSemCentavos = Math.floor(valorTotal / 3); // Divide o valor total em 3 partes iguais sem os centavos
    let centavosRestantes = valorTotal - (valorSemCentavos * 3); // Calcula os centavos restantes

    // Distribui os valores para cada amigo
    let carlos = valorSemCentavos;
    let andre = valorSemCentavos;
    let felipe = valorSemCentavos + centavosRestantes;

    // Exibe o resultado na página
    document.getElementById("valorCarlos").innerHTML = "O valor de Carlos é: " + carlos;
    document.getElementById("valorAndre").innerHTML = "O valor de Andre é: " + andre;
    document.getElementById("valorFelipe").innerHTML = "O valor de Felipe é: " + felipe;
}
