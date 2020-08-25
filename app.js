let table = ['','','','','','','','',''];
let emptyPositions = [0,1,2,3,4,5,6,7,8];
let player1 = {selector: 'X', name: 'Player'};
let player2 = {selector: 'O', name: 'PC'}
let count = 0;// max: 9
let winner = null;

const blocks = document.querySelectorAll('.block')
const title = document.querySelector('.title');

function check(){
    const xWin = 'X X X';
    const oWin = 'O O O';
    let winCases = [
        `${table[0]} ${table[1]} ${table[2]}`,
        `${table[3]} ${table[4]} ${table[5]}`,
        `${table[6]} ${table[7]} ${table[8]}`,
        `${table[0]} ${table[3]} ${table[6]}`,
        `${table[1]} ${table[4]} ${table[7]}`,
        `${table[2]} ${table[5]} ${table[8]}`,
        `${table[0]} ${table[4]} ${table[8]}`,
        `${table[2]} ${table[4]} ${table[6]}`,
    ];

    winCases.forEach((cases) => {
        if (cases == xWin){
            winner = 'Player'
            console.log('X win');
        }
        else if(cases == oWin){
            winner = 'PC'
            console.log('O win');
        }
    })    
}

function display(selector, block){
    let selectionDiv = document.createElement('div');
    selectionDiv.setAttribute('class', 'blockSelected');
    selectionDiv.textContent = selector;
    block.appendChild(selectionDiv);
}

function selectBlock(player, blockSelected){
    table[blockSelected.id] = player.selector;
    count++;
    emptyPositions.splice(emptyPositions.indexOf(parseInt(blockSelected.id)), 1)
    display(player.selector, blockSelected);
}

//not using Player2 
function computerPlay(){
    if (emptyPositions.length){
        let computerSelection = emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
        console.log(computerSelection);
        table[computerSelection] = 'O';
        count++;
        emptyPositions.splice(emptyPositions.indexOf(computerSelection), 1)
        let blockDiv = document.getElementById(`${computerSelection}`);
        display('O', blockDiv);
    }
}


function clearTable(){
    console.log('cleaning');
    table = ['','','','','','','','',''];
    count = 0;
    emptyPositions = [0,1,2,3,4,5,6,7,8];
    winner = null;
    blocks.forEach((block)=>{
        if (block.firstChild != null){
            block.removeChild(block.firstChild)
        }
    })
}



blocks.forEach( (block) =>{
    block.addEventListener('click', ()=> {
        blockId = parseInt(block.id);
        if (table[blockId] == '' && count < 9 && winner == null){
            selectBlock(player1, block);
            computerPlay();
            console.log(table);
            check();
        }
    })
})


title.addEventListener('click', clearTable);




/*
footer
add clear button
block size changing
*/

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
