let table = ['','','','','','','','',''];
let emptyPositions = [0,1,2,3,4,5,6,7,8];
let player1 = {selector: 'X', name: 'Player'};
let player2 = {selector: 'O', name: 'PC'}
let count = 0;// max: 9


const blocks = document.querySelectorAll('.block')
const title = document.querySelector('.title');


function selectBlock(player, blockSelected){
    table[blockSelected] = player.selector;
    count++;
    emptyPositions.splice(emptyPositions.indexOf(blockSelected), 1)
    console.log(table);
    console.log(emptyPositions);
}

//not using Player2
function computerPlay(){
    if (emptyPositions.length){
        let computerSelection = emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
        console.log(computerSelection);
        table[computerSelection] = 'O';
        count++;
        emptyPositions.splice(emptyPositions.indexOf(computerSelection), 1)
        console.log(table);
    }
}


function clearTable(){
    console.log('cleaning');
    table = ['','','','','','','','',''];
    count = 0;
    emptyPositions = [0,1,2,3,4,5,6,7,8];
}



blocks.forEach( (block) =>{
    block.addEventListener('click', ()=> {
        blockId = parseInt(block.id);
        if (table[blockId] == '' && count < 9){
            selectBlock(player1, blockId);
            computerPlay();
        }
    })
})


title.addEventListener('click', clearTable);




/*
Add functionalities to divs
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
