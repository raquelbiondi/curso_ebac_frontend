const form = document.getElementById('form-validation')

form.addEventListener('submit', function e() {
    e.preventDefault();
    verify();
})


function verify() {
    const numA = document.getElementById('num-a');
    const numb1 = Number(numA.value);
    const numB = document.getElementById('num-b');
    const numb2 = Number(numB.value);
    const answer = document.getElementById('answer');
    if(numb1 < numb2){
        answer.innerHTML = 'O valor é VÁLIDO!';  
    } else{
        answer.innerHTML = 'O valor é INVÁLIDO. Tente novamente!';
    }
}