const numerocurtir = document.getElementById('ncurtidas');
const botaocurtir = document.getElementById('curtir');
const numTxt = numerocurtir.innerHTML;
const numInt = parseInt(numTxt);
const novoCurtirM = numInt + 1;
var bool = false;
function btnCurtirAtivo() {
    if (bool === false) {
        botaocurtir.classList.toggle('ativo');
        numCurtir(novoCurtirM);
        return bool = true;
    } else {
        botaocurtir.classList.toggle('ativo');
        numerocurtir.innerHTML = numTxt;
    } return bool = false;
}
botaocurtir.addEventListener('click', btnCurtirAtivo);
function numCurtir(number) {
    numerocurtir.innerText = number;
}
const come1 = document.getElementById('comentario');
function comentario(e) {
    if (e.key === 'Enter') {
        const come2 = document.getElementById('comentar');
        const m = come2.value;
        come1.innerHTML = m;
        if (m === '') {
            come1. innerHTML = 'comentário do usuário'
        }
    }

}
addEventListener("keypress", comentario);