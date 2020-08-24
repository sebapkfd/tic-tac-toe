const player = (selector, name) =>{
    
    const test = () => console.log(`Hello ${name}`);
    return { selector, name, test}
}

const game = (() =>{
    let player1 = player('x', 'Seba')
    let player2 = player('x', 'Pc')

    return {player1, player2}
})


let gamePlay = game();

console.log(gamePlay.player1, gamePlay.player2);// It works! :D