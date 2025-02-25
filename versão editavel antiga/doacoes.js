document.getElementById('formas-doacao').addEventListener('click', function () {
    const additionalOptions = document.getElementById('formas-adicionais');
    additionalOptions.style.display = additionalOptions.style.display === 'block' ? 'none' : 'block';
});

function exibirInformacoes(tipo) {
    const infoDiv = document.getElementById('informacoes-doacao');
    const infos = {
        necessidades: "Você pode doar alimentos não perecíveis, roupas ou produtos de higiene básica. Leve até nossa sede no centro de Massapê.",
        "notas-fiscais": "Doe suas notas fiscais e ajude a ONG a arrecadar recursos através de campanhas estaduais.",
        eventos: "Participe de nossos eventos beneficentes. Confira a programação no site oficial.",
        bazar: "Compre produtos em nosso bazar beneficente! Todo o valor arrecadado será usado para apoiar nossas causas.",
        voluntariado: "Junte-se ao nosso time de voluntários! Entre em contato pelo telefone ou pelo site para mais informações."
    };

    infoDiv.textContent = infos[tipo] || "Informações não disponíveis.";
}
