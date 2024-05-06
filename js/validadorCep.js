export default function validaCep(campo) {
    const cep = campo.value;
    const respostaAPI = fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resp => resp.json())
        .then(resp => resp)
        .catch(errData => {
            const error = new Error('O CEP digitado não existe');
            error.data = errData;
            // campo.setCustomValidity('Erro');
            throw error;
            
        })
    return respostaAPI;
}