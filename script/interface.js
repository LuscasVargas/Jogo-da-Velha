//Eventlistener para garantir que o jogo seja executado após ter sido totalmente carregado.
//querysellectorALL, para selecionar os elementos da classe square.
//pega os elementos e adiciona o evento forEach, para cada elemento clicado.
document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})
var btn = document.querySelector(".botao");
btn.addEventListener("click", function() {
    
    location.reload();
});
function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)){
        setTimeout(()=>{
            alert("O Jogo Acabou - O vencedor foi " +playerTime );
    },10)};
    updateSquares();
}
function updateSquares() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol !='') {// Se symbol for diferente de vazio '', preenche square com symbol da vez;
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}