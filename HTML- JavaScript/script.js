const form = document.getElementById('form-deposito');
const nomedobeneficiario = document.getElementById('nome-beneficiario');

function validaNome(nomeCompleto) { //quando user preencher o campo Nome, vai receber o nome e sobrenome separados
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) { //evento que acontece quando user clica no botão Depositar
    let formValido = false;
    e.preventDefault();

    const numeroConta = document.getElementById('numero-conta');
    const valor = document.getElementById('valor-deposito');
    const msgSucesso = `Montante de: <b>${valor.value}</b> depositado para o cliente: <b>${nomedobeneficiario.value}</b> - conta: <b>${numeroConta.value}</b> com sucesso!`;

    formValido = validaNome(nomedobeneficiario.value); 
    if (formValido) {
        const containerMsgSucesso = document.querySelector('.msg-sucesso');
        containerMsgSucesso.innerHTML = msgSucesso;
        containerMsgSucesso.style.display = 'block';

        nomedobeneficiario.value = ' ';
        numeroConta.value = ' ';
        valor.value = ' ';

    } else {
        nomedobeneficiario.style.border = '1px solid red';
        document.querySelector('.error-msg').style.display = 'block';
    }
})

nomedobeneficiario.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formValido = validaNome(e.target.value);
    if (!formValido) {
        nomedobeneficiario.classList.add('error');
        document.querySelector('.error-msg').style.display = 'block';
    } else {
        nomedobeneficiario.classList.remove('error');
        document.querySelector('.error-msg').style.display = 'none';
    }
});