// Selecionando os elementos pelos IDs definidos no HTML
const btnVerde = document.getElementById('btn-verde');
const btnVermelho = document.getElementById('btn-vermelho');
const btnRetorna = document.getElementById('btn-retorna');
const btnMsg = document.getElementById('btn-msg');

// Função para mudar a cor de fundo para verde
btnVerde.addEventListener('click', () => {
    document.body.style.backgroundColor = 'green';
});

// Função para mudar a cor de fundo para vermelho
btnVermelho.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
});

// Função para resetar a cor (retorna ao branco original)
btnRetorna.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white';
});

// Função para exibir um alerta no navegador
btnMsg.addEventListener('click', () => {
    alert('Olá! Você clicou no botão de mensagem.');
});
