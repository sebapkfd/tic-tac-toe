let table = ['','','','','','','','',''];
let emptyPositions = [0,1,2,3,4,5,6,7,8];
let player1 = {selector: 'X', name: 'Player'};
let player2 = {selector: 'O', name: 'PC'}
let count = 0;// max: 9


const blocks = document.querySelectorAll('.block')
const title = document.querySelector('.title');

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
    // Add cleaning of divs
    console.log('cleaning');
    table = ['','','','','','','','',''];
    count = 0;
    emptyPositions = [0,1,2,3,4,5,6,7,8];
}



blocks.forEach( (block) =>{
    block.addEventListener('click', ()=> {
        blockId = parseInt(block.id);
        if (table[blockId] == '' && count < 9){
            selectBlock(player1, block);
            computerPlay();
            console.log(table);
        }
    })
})


title.addEventListener('click', clearTable);




/*
Add functionalities to div
change title event listener to github
add clear button

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
