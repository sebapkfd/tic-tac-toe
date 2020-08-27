const player = (selector, name) =>{
    return {
        selector,
        name
    }
}

const graphicDisplay = () =>{
    let DarkModeOn = false;
    let borderColor = 'black';
    const blocks = document.querySelectorAll('.block')
    const modal = document.querySelector('.modal');
    const resultDiv = document.querySelector('.resultDisplay');
    const clear = document.querySelector('#clearTable');
    const color = document.querySelector('#colorMode');
    const link = document.querySelector("a");

    const changeTheme = () =>{
        DarkModeOn = !DarkModeOn;
        if (DarkModeOn){
            color.innerHTML = 'Light Mode';
            document.body.style.backgroundColor = "#1f2637";
            document.body.style.color = 'white';
            link.style.color = 'white';
            borderColor = 'white';
            blocks.forEach((block) => {
                block.setAttribute('style', `border: 1px solid ${borderColor};`)
            });
        }else{
            color.innerHTML = 'Dark Mode';
            document.body.style.backgroundColor = "white";
            document.body.style.color = 'black';
            link.style.color = '#413D3D';
            borderColor = 'black';
            blocks.forEach((block) => {
                block.setAttribute('style', `border: 1px solid ${borderColor};`)
            });
        }
    }

    const printCase = (result, cases) =>{
        if (result == 'Tied') {
            blocks.forEach((block)=>{
                block.setAttribute('style', `background-color: rgb(134, 194, 218); color: rgb(34, 76, 131); border: 1px solid ${borderColor};`)
            })
        }else{
            cases.forEach(element => {
                let divToPrint = document.getElementById(`${element}`);
                if(result == 'Player'){
                    divToPrint.setAttribute('style', `background-color: rgb(111, 180, 105); color: rgb(24, 110, 17); border: 1px solid ${borderColor};`)
                }
                else if(result == 'PC'){
                    divToPrint.setAttribute('style', `background-color: rgb(238, 137, 137); color: rgb(218, 42, 42); border: 1px solid ${borderColor};`)
                }
            });
        }
    }

    const display = (selector, block) => {
        let selectionDiv = document.createElement('div');
        selectionDiv.setAttribute('class', 'blockSelected');
        selectionDiv.textContent = selector;
        block.appendChild(selectionDiv);
    }

    const showResults = (winner) => {
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

    const clearDisplay = () =>{
        resultDiv.textContent = '';
        modal.style.display = 'none';
        clear.innerHTML = 'Clear';
        blocks.forEach((block)=>{
            if (block.firstChild != null){
                block.removeChild(block.firstChild);
            }
            if(!DarkModeOn){
                block.setAttribute('style', 'background-color: white; color: black; border: 1px solid black;');
            }else if(DarkModeOn){
                block.setAttribute('style', 'background-color: #1f2637; color: white; border: 1px solid white;');
            }
        })
    }

    return {
        blocks,
        clear,
        color,
        changeTheme,
        printCase,
        display,
        showResults,
        clearDisplay
    }

};


const game = (() =>{
    let player1 = player('X', 'Player');
    let player2 = player('O', 'PC');
    let interface = graphicDisplay();
    let table = ['','','','','','','','',''];
    let emptyPositions = [0,1,2,3,4,5,6,7,8];
    let count = 0;
    let winner = null;
    
    const check = () =>{
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
                interface.showResults(`${winner} wins`);
                interface.printCase(winner, cases);
            }
            else if(aux == oWin){
                winner = 'PC';
                console.log('O win');
                interface.showResults(`${winner} wins`);
                interface.printCase(winner, cases);
            }
        })
        if (count == 9 && winner == null) {
            winner = 'Tied';
            interface.showResults(`Game ${winner}`);
            interface.printCase(winner, []);
        } 
    }

    const selectBlock = (player, blockSelected) =>{
        table[blockSelected.id] = player.selector;
        count++;
        emptyPositions.splice(emptyPositions.indexOf(parseInt(blockSelected.id)), 1)
        interface.display(player.selector, blockSelected);
        check();
    }

    const computerPlay = () =>{
        if (emptyPositions.length && winner == null){
            let computerSelection = emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
            let blockDiv = document.getElementById(`${computerSelection}`);
            selectBlock(player2, blockDiv);
        }
    }

    const clearTable = () =>{
        table = ['','','','','','','','',''];
        count = 0;
        emptyPositions = [0,1,2,3,4,5,6,7,8];
        winner = null;
        interface.clearDisplay();
    }
    
    const gamePlay = () =>{
        interface.blocks.forEach( (block) =>{
            block.addEventListener('click', ()=> {
                blockId = parseInt(block.id);
                if (table[blockId] == '' && count < 9 && winner == null){
                    selectBlock(player1, block);
                    computerPlay();
                }
            })
        })
        
        interface.clear.addEventListener('click', clearTable);
        interface.color.addEventListener('click', () => interface.changeTheme());
    }
    return {gamePlay}
})();

game.gamePlay();
