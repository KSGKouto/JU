document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o botão pelo ID
    var botao = document.getElementById("botaoRedirecionar");

    // Adiciona um evento de clique para redirecionar
    botao.addEventListener("click", function () {
        window.location.href = "new.html"; // Altere para o caminho correto, se necessário
    });
});
