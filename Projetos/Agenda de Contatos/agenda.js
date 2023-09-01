const form = document.getElementById('form-dados');
//para adicionar todos os contatos que o usuário inserir na tabela, eu crio uma variável em escopo global:
const nome = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault(); //chama a função que previne o comportamento de reiniciar os campos do form ao clicar no botão Add
    //a responsabilidade desse Evento vai ser chamar a função de adicionar as linhas:
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome-contato'); //para capturar os valores dos campos
    const inputTel = document.getElementById('telefone-contato');

    if(nome.includes(inputNome.value)) {
        alert(`O nome ${inputNome.value} já foi inserido. Adicione um sobrenome`);
    } else{
        nome.push(inputNome.value);
        telefone.push(parseFloat(inputTel.value));
    
        //agora para adicionar as informações do form no corpo da tabela/table fazemos:
        let linha = `<tr>`;
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTel.value}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    
        inputNome.value = ''; //pra resetar os campos após serem adicionados na tabela
        inputTel.value = '';
    }
    
}

//A responsabilidade de atualizar o contéudo da tabela vai ficar separada em outra função:
function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas; 
}
