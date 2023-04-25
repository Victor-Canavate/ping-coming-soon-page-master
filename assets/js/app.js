let form = document.getElementById('form');
let input = document.getElementById('input-email');
let button = document.getElementById('button-submit');
let mensagemErro = document.querySelector('.mensagem-vazia')

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if(input.value == ''){
        mensagemErro.classList.remove('desaparece')
    } else {
        mensagemErro.classList.remove('aparece')
        mensagemErro.classList.add('desaparece')
    }
})