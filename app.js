let table = ['','','','','','','','',''];
let emptyPositions = [0,1,2,3,4,5,6,7,8];
let player1 = {selector: 'X', name: 'Player'};
let player2 = {selector: 'O', name: 'PC'}
let count = 0;
let winner = null;

const blocks = document.querySelectorAll('.block')
const title = document.querySelector('.title');
const modal = document.querySelector('.modal');
const resultDiv = document.querySelector('.resultDisplay');
const clear = document.querySelector('#clearTable');

function check(){
    const xWin = 'X X X';
    const oWin = 'O O O';

    let AuxCases = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    AuxCases.forEach((cases)=>{
        let aux = `${table[cases[0]]} ${table[cases[1]]} ${table[cases[2]]}`;
        if (aux == xWin){
            winner = 'Player';
            console.log('X win');
            showResults(`${winner} wins`);
            printCase(winner, cases);
        }
        else if(aux == oWin){
            winner = 'PC';
            console.log('O win');
            showResults(`${winner} wins`);
            printCase(winner, cases);
        }
    })
    if (count == 9 && winner == null) {
        winner = 'Tied';
        showResults(`Game ${winner}`);
        printCase(winner, []);
    } 
}

function printCase(result, cases){
    if (result == 'Tied') {
        blocks.forEach((block)=>{
            block.setAttribute('style', 'background-color: rgb(134, 194, 218); color: rgb(34, 76, 131);')
        })
    }else{
        cases.forEach(element => {
            let divToPrint = document.getElementById(`${element}`);
            if(result == 'Player'){
                divToPrint.setAttribute('style', 'background-color: rgb(111, 180, 105); color: rgb(24, 110, 17);')
            }
            else if(result == 'PC'){
                divToPrint.setAttribute('style', 'background-color: rgb(238, 137, 137); color: rgb(218, 42, 42);')
            }
        });
    }
}

function display(selector, block){
    let selectionDiv = document.createElement('div');
    selectionDiv.setAttribute('class', 'blockSelected');
    selectionDiv.textContent = selector;
    block.appendChild(selectionDiv);
}

function showResults(winner){
    modal.style.display = 'block';
    resultDiv.textContent = winner;
    clear.innerHTML = 'Play again';
    if(winner == 'Player wins'){
        resultDiv.setAttribute('style', 'background-color: rgb(111, 180, 105); color: rgb(24, 110, 17);')
    }else if(winner == 'PC wins'){
        resultDiv.setAttribute('style', 'background-color: rgb(238, 137, 137); color: rgb(218, 42, 42);')
    }else if(winner = 'Game Tied'){
        resultDiv.setAttribute('style', 'background-color: rgb(134, 194, 218); color: rgb(34, 76, 131);')
    }
}

function selectBlock(player, blockSelected){
    table[blockSelected.id] = player.selector;
    count++;
    emptyPositions.splice(emptyPositions.indexOf(parseInt(blockSelected.id)), 1)
    display(player.selector, blockSelected);
    check();
}

//not using Player2 
function computerPlay(){
    if (emptyPositions.length){
        let computerSelection = emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
        table[computerSelection] = 'O';
        count++;
        emptyPositions.splice(emptyPositions.indexOf(computerSelection), 1)
        let blockDiv = document.getElementById(`${computerSelection}`);
        display('O', blockDiv);
        check();
    }
}


function clearTable(){
    console.log('cleaning');
    table = ['','','','','','','','',''];
    count = 0;
    emptyPositions = [0,1,2,3,4,5,6,7,8];
    winner = null;
    resultDiv.textContent = '';
    modal.style.display = 'none';
    clear.innerHTML = 'Clear';
    blocks.forEach((block)=>{
        if (block.firstChild != null){
            block.removeChild(block.firstChild);
            block.setAttribute('style', 'background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);');
        }
    })
}

blocks.forEach( (block) =>{
    block.addEventListener('click', ()=> {
        blockId = parseInt(block.id);
        if (table[blockId] == '' && count < 9 && winner == null){
            selectBlock(player1, block);
            computerPlay();
        }
    })
})


clear.addEventListener('click', clearTable);


// Change to Object oriented after it works


const player = (selector, name) =>{
    
    const test = () => console.log(`Hello ${name}`);
    return { selector, name, test}
}

const game = (() =>{
    let player1 = player('x', 'Seba');
    let player2 = player('O', 'Pc');
    let table = ['','','','','','','','',''];

    const printTable = () => console.log(table);

    const setMark = (player, tablePosition) =>{
        if (table[tablePosition] == '') {
            console.log(xd);
        }
    }
    const cleanTable = () => {}
    const gamePlay = () =>{}


    return {player1, player2, gamePlay}
})();


// let gamePlay = game();
