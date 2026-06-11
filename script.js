document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove a classe ativa de todos os botões
            tabs.forEach(btn => btn.classList.remove('active'));
            // Esconde todos os conteúdos das abas
            contents.forEach(content => content.classList.remove('active'));

            // Adiciona a classe ativa no botão clicado
            tab.classList.add('active');
            
            // Pega o ID do conteúdo correspondente e o exibe
            const targetId = tab.getAttribute('data-tab');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});