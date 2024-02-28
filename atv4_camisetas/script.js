function calcularQuantidade() {
    // Obter valores das notas
    let camisetasGrandes = parseFloat(document.getElementById("camisetasGrandes").value);
    let camisetasMedias = parseFloat(document.getElementById("camisetasMedias").value);
    let camisetasPequenas = parseFloat(document.getElementById("camisetasPequenas").value);

    // Calcular a quantidade
    let valorGrande = camisetasGrandes * 15;
    let valorMedia = camisetasMedias * 12;
    let valorPequena = camisetasPequenas * 10;
    let valorArrecadado = valorGrande + valorMedia + valorPequena

    // Exibir o resultado na página
    document.getElementById("valorGrande").innerHTML = "O valor de camisetas grandes é: " + valorGrande;
    document.getElementById("valorMedia").innerHTML = "O valor de camisetas medias é: " + valorMedia;
    document.getElementById("valorPequena").innerHTML = "O valor de camisetas pequenas é: " + valorPequena;
    document.getElementById("valorArrecadado").innerHTML = "O valor total arrecadado é: " + valorArrecadado;

}