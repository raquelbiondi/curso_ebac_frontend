const form = document.getElementById('form-notas');
const imgAprovado = '<img src="images/aprovado.png" alt="emoji comemorando"/>';
const imgReprovado = '<img src="images/reprovado.png" alt="emoji decepcionado"/>';
//para adicionar todas as atividades que o usuário inserir na tabela, eu crio uma variável em escopo global:
const atividades = [];
const notas = [];
//criar uma variavel p/ aparecer a tag <span> customizada como fiz no CSS:
const spanAprovado = '<span  class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span  class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota mínima:'));

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault(); //chama a função que previne o comportamento de reiniciar os campos do form ao clicar no botão Add
    //a responsabilidade desse Evento vai ser chamar a função de adicionar as linhas:
    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
    calculaMediaFinal();
});

function adicionaLinha() {
    const inputAtividade = document.getElementById('nome-atividade'); //para capturar os valores dos campos
    const inputNota = document.getElementById('nota-atividade');

    if(atividades.includes(inputAtividade.value)) {
        alert(`A atividade ${inputAtividade.value} já foi inserida`);
    } else{
        atividades.push(inputAtividade.value);
        notas.push(parseFloat(inputNota.value));
    
        //agora pra adicionar as informações do form no corpo da tabela/table fazemos:
        let linha = `<tr>`;
        linha += `<td>${inputAtividade.value}</td>`;
        linha += `<td>${inputNota.value}</td>`;
        linha += `<td>${inputNota.value >= notaMinima ? imgAprovado : imgReprovado}</td>`; //uso do operador ternário
        linha += `</tr>`;
    
        linhas += linha;
    
        inputAtividade.value = ''; //pra resetar os campos após serem adicionados na tabela
        inputNota.value = '';
    }
    
}

//A responsabilidade de atualizar o contéudo da tabela vai ficar separada em outra função:
function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas; 
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for(let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length; 
}