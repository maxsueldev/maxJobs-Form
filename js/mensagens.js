const tiposDeErro = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooShort",
    "customError"
];

const mensagens = {
    name: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de email não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um email válido."
    },
    cep: {
        valueMissing: "O campo de CEP não pode estar vazio.",
        patternMismatch: "Por favor, preencha um CEP válido.",
        customError: "O CEP digitado não existe.",
        tooShort: "O campo de CEP não tem caractéres suficientes."
    },
    carree: {
        valueMissing: 'O campo de Cargo não pode estar vazio.',
        patternMismatch: "Por favor, preencha um Cargo válido.",
    },
    terms: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

export { tiposDeErro, mensagens};