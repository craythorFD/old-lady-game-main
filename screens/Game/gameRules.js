// Estado inicial da tabela de jogo, representado por um array de 9 elementos preenchidos com 0
export const initialTableState = Array(9).fill(0);

// Verifica se é uma jogada válida em uma determinada célula
export const isValidPlay = (selectedCell, tableState) => tableState[selectedCell] === 0;

// Verifica se a tabela está cheia
export const fullTable = (tableState) => !tableState.some(cell => cell === 0);

// Verifica se há um vencedor na tabela de jogo
export const hasWinner = (tableState) => {
    // Condições de vitória, representando as combinações de células que levam à vitória
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],
    ];

    // Itera sobre as condições de vitória
    for (const condition of winConditions) {
        const [a, b, c] = condition;
        // Verifica se há uma combinação vencedora na tabela de jogo
        if (tableState[a] !== 0 && tableState[a] === tableState[b] && tableState[a] === tableState[c]) {
            return true; // Retorna verdadeiro se houver um vencedor
        }
    }

    return false; // Retorna falso se não houver um vencedor
}
