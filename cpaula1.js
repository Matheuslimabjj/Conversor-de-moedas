function conversor() {
    alert("Esse é um conversor de moedas Oros, digite apenas números!");

    let valorOros;

    do {
        valorOros = prompt("Digite o valor em Oros");
        // Verifica se o valor não é um número ou é vazio
        if (isNaN(valorOros) || valorOros.trim() === "") {
            alert("Por favor, digite apenas números!");
        }
    } while (isNaN(valorOros) || valorOros.trim() === "");

    // Taxa de conversão
    let umOro = 0.5;

    // Calcula o valor em reais
    let valorEmReais = valorOros * umOro;

    // Formata o valor em reais
    let valorFormatado = valorEmReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    // Exibe o valor formatado
    alert("O valor em reais é: " + valorFormatado);
}
