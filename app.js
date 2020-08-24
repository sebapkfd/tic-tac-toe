let table = ['','','','','','','','',''];
let player1 = {selector: 'X', name: 'Player'};
let player2 = {selector: 'O', name: 'PC'}


const blocks = document.querySelectorAll('.block')
const title = document.querySelector('.title');


function selectBlock(player, blockSelected){
    blockId = parseInt(blockSelected.id);
    if (table[blockId] == ''){
        table[blockId] = player.selector;
        console.log(table);
    }
}

function clearTable(){
    table.forEach( (block) =>{
        block = '';
    })
}



blocks.forEach( (block) =>{
    block.addEventListener('click', ()=> {
        console.log(block.id);
        selectBlock(player1, block)
    })
})


title.addEventListener('click', clearTable);












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
