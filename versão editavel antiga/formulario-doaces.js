// Função para selecionar um valor fixo
function selecionarValor(valor) {
    const outroValor = document.getElementById("outro-valor");
    outroValor.value = ""; // Limpa o campo "Outro valor" se um botão for clicado
    atualizarTotal(valor);
}

// Atualiza o valor total exibido na página
function atualizarTotal(valor) {
    const valorTotal = document.getElementById("valor-total");
    valorTotal.textContent = `R$ ${valor.toFixed(2)}`;
}

// Evento para atualizar o valor total caso o usuário digite no campo "Outro valor"
document.addEventListener("DOMContentLoaded", () => {
    const outroValor = document.getElementById("outro-valor");
    if (outroValor) {
        outroValor.addEventListener("input", () => {
            const valorDigitado = parseFloat(outroValor.value);
            if (!isNaN(valorDigitado) && valorDigitado > 0) {
                atualizarTotal(valorDigitado);
            } else {
                atualizarTotal(0);
            }
        });
    }
});
