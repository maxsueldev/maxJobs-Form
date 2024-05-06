import { tiposDeErro, mensagens } from './mensagens.js';
import validaEmail from './validadorEmail.js';
import validaCep from './validadorCep.js';

const formulario = document.querySelector('[data-form]');
const camposFormulario = document.querySelectorAll('[required]');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const listaRespostas = {
        "email": event.target.elements['email'].value,
        "name": event.target.elements['name'].value,
        "cep": event.target.elements['cep'].value,
        "carree": event.target.elements['carree'].value
    }

    localStorage.setItem('cadastro', JSON.stringify(listaRespostas));
});

camposFormulario.forEach(campo => {
    campo.addEventListener('blur', () => verificaCampo(campo));
    campo.addEventListener('invalid', event => event.preventDefault());
});

function verificaCampo(campo) {
    let mensagem = '';

    if(campo.name == 'email') {
        validaEmail(campo);
    }

    if(campo.name == 'cep' && campo.value.length >= 8) {
        validaCep(campo);
    }

    tiposDeErro.forEach(erro => {
        if(campo.validity[erro]) {
            console.log(erro);
            mensagem = mensagens[campo.name][erro];
        }
    });   

    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorInput = campo.checkValidity();

    if(!validadorInput) {
        mensagemErro.textContent = mensagem;
        campo.style.border = "1px solid red";
    } else {
        mensagemErro.textContent = "";
        campo.style.border = "1px solid #757575";
    }
}