// iniciando as variaveis
//let border identifica os campos de jogo
//player time identifica o jogador
// symbols identifica o jogador, se for o jogador 0 será usado o symbol "O", se for o jogador 1"x".
let board=['','','','','','','','',''];
let playerTime=0;
let symbols=['o','x'];
let GameOver= false;
let WinState =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
function handleMove(position){

    if (GameOver){
        return;
    }

    if (board[position]==''){
        board[position]= symbols[playerTime];

        GameOver= isWin(); //Verifica se houve vencedor

    if (GameOver==false){
        playerTime=(playerTime==0)?1:0; //If ternario
    }
}

    return GameOver;
}
function isWin(){


    for(let i=0; i<WinState.length; i++){
        let seq= WinState[i];

        let pos1= seq[0];
        let pos2= seq[1];
        let pos3= seq[2];
        
        if (board[pos1] == board[pos2]&& // verifica se as posições são iguais para retornar o vencerdor
            board[pos1] == board[pos3]&&
            board[pos1] !=''){

                return true;
            }
    }
    return false;
}