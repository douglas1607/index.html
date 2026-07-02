// ========================================================
// 1. SELECIONANDO OS ELEMENTOS DO HTML
// ========================================================
const navbar = document.querySelector('.nav-bar');
const btnMenu = document.getElementById('btn-menu');
const menuLinks = document.getElementById('menu-links');

// ========================================================
// 2. EFEITO DE SCROLL (Mudar o menu ao rolar a página)
// ========================================================
// O JavaScript fica "ouvindo" a rolagem da página pelo navegador
window.addEventListener('scroll', () => {
    // window.scrollY mede quantos pixels o usuário já rolou para baixo
    if (window.scrollY > 50) {
        // Se rolou mais de 50px, adiciona a classe que deixa o menu destacado (solidifica o bege)
        navbar.classList.add('nav-rolando');
    } else {
        // Se voltou lá para o topo, remove a classe
        navbar.classList.remove('nav-rolando');
    }
});

// ========================================================
// 3. MENU MOBILE (Abrir e fechar o menu hambúrguer no celular)
// ========================================================
// Escuta o clique no botão hambúrguer
if (btnMenu && menuLinks) {
    btnMenu.addEventListener('click', () => {
        // O 'toggle' funciona como um interruptor: liga e desliga a classe "ativo"
        menuLinks.classList.toggle('ativo');
    });

    // Fecha o menu automaticamente quando o usuário clica em qualquer link de dentro dele
    const linksInternos = menuLinks.querySelectorAll('a');
    linksInternos.forEach(link => {
        link.addEventListener('click', () => {
            menuLinks.classList.remove('ativo');
        });
    });
}