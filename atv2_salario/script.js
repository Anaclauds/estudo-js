function CalcularAumentoSalario() {
    // Obter valor do salário
    let salarioFuncionario = parseFloat(document.getElementById("salarioFuncionario").value);

    // Calcular o aumento do salário
    let aumento = (salarioFuncionario + (salarioFuncionario* 0.20));

    //Calcular o INSS do funcionario
    let inss = (aumento * 0.08);

    // salario final com INSS incluso
    let salarioFinal = (aumento - (aumento * 0.08))
    // Exibir o resultado na página
    document.getElementById("aumento").innerHTML = "O salário com aumento é: " + aumento;
    document.getElementById("salarioInicial").innerHTML = "O salário inicial é: " + salarioFuncionario;
    document.getElementById("inss").innerHTML = "O INSS é: " + inss;
    document.getElementById("salarioFinal").innerHTML = "O salário final é: " + salarioFinal;
}