import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import GameTable from './Table'; // Componente para renderizar a tabela de jogo
import TurnRecorder from './TurnRecorder'; // Componente para registrar o turno do jogador
import EndGameDialog from '../../components/EndGameDialog'; // Componente para exibir o diálogo de fim de jogo
import InvalidMoveDialog from '../../components/InvalidMoveDialog'; // Componente para exibir o diálogo de movimento inválido
import { initialTableState, fullTable, hasWinner, isValidPlay } from './gameRules'; // Funções relacionadas às regras do jogo

const PLAYERS_NAME = ['Jogador 1', 'Jogador 2']; // Nomes dos jogadores

const GameScreen = ({ navigation }) => {
  const [invalidMoveDialog, setInvalidMoveDialog] = useState(false); // Estado para controlar a exibição do diálogo de movimento inválido
  const [endGameDialog, setEndGameDialog] = useState(false); // Estado para controlar a exibição do diálogo de fim de jogo
  const [activePlayer, setActivePlayer] = useState(1); // Estado para controlar o jogador ativo
  const [table, setTable] = useState(initialTableState); // Estado para armazenar o estado atual da tabela de jogo

  // Texto para exibir no diálogo de fim de jogo
  const endGameText = hasWinner(table) ? `${PLAYERS_NAME[activePlayer - 1]} venceu!` : fullTable(table) ? 'Empate!' : '';

  // Função para reiniciar o jogo
  const resetGame = () => {
    setTable(initialTableState); // Reinicia a tabela
    setActivePlayer(1); // Define o jogador ativo como o jogador 1
    setEndGameDialog(false); // Fecha o diálogo de fim de jogo
    setInvalidMoveDialog(false); // Fecha o diálogo de movimento inválido
  }

  // Função chamada quando uma célula é clicada
  const onCellClicked = (cellId) => {
    if (!isValidPlay(cellId, table)) { // Verifica se o movimento é válido
      setInvalidMoveDialog(true); // Exibe o diálogo de movimento inválido
      return;
    }

    const newTable = [...table]; // Cria uma cópia da tabela atual
    newTable[cellId] = activePlayer; // Atualiza o estado da célula clicada
    setTable(newTable); // Atualiza o estado da tabela com a nova tabela

    if (hasWinner(newTable) || fullTable(newTable)) { // Verifica se há um vencedor ou se a tabela está cheia
      setEndGameDialog(true); // Exibe o diálogo de fim de jogo
      return;
    }

    setActivePlayer(activePlayer === 1 ? 2 : 1); // Alterna para o próximo jogador
  }

  return (
    <View style={styles.turnRecorder}>
      {/* Componente para registrar e exibir o turno do jogador */}
      <TurnRecorder
        playerName={PLAYERS_NAME[activePlayer - 1]} // Passa o nome do jogador ativo para o componente TurnRecorder
      />
      {/* Componente da tabela de jogo */}
      <GameTable
        onCellClicked={onCellClicked} // Passa a função de clique na célula para o componente GameTable
        tableState={table} // Passa o estado atual da tabela para o componente GameTable
      />
      {/* Componente para exibir o diálogo de fim de jogo */}
      <EndGameDialog
        isOpen={endGameDialog} // Passa o estado do diálogo de fim de jogo para o componente EndGameDialog
        resultText={endGameText} // Passa o texto a ser exibido no diálogo de fim de jogo para o componente EndGameDialog
        onClickYes={resetGame} // Passa a função para reiniciar o jogo para o botão "Sim" do diálogo de fim de jogo
        onClickNo={() => navigation.navigate('Home')} // Passa a função para voltar para a tela inicial para o botão "Não" do diálogo de fim de jogo
      />
      {/* Componente para exibir o diálogo de movimento inválido */}
      <InvalidMoveDialog
        isOpen={invalidMoveDialog} // Passa o estado do diálogo de movimento inválido para o componente InvalidMoveDialog
        onClickClose={() => setInvalidMoveDialog(false)} // Passa a função para fechar o diálogo de movimento inválido para o componente InvalidMoveDialog
      />
    </View>
  );
}

// Estilos para o componente GameScreen
const styles = StyleSheet.create({
  turnRecorder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'purple',
  },
});

export default GameScreen;
