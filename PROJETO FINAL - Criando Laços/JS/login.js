document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o usuário está logado
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn) {
        // Exibe o link de perfil
        document.getElementById('perfilLink').style.display = 'inline';
    }
});

// Função para simular o login (você pode substituir isso com a lógica real de login)
function login() {
    localStorage.setItem('isLoggedIn', true);
    window.location.href = 'PF.html';
}

// Função para simular o logout
function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'PF.html';
}