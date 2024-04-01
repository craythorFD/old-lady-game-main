import React from 'react';
import { View, StyleSheet } from 'react-native';
import Cell from './Cell';

const Table = ({ onCellClicked, tableState }) => {
    return (
        // Componente que representa a tabela do jogo
        <View style={styles.table}>
            {/* Linha 1 */}
            <View style={styles.row}>
                {/* Renderiza as células da primeira linha */}
                {tableState.slice(0, 3).map((cellState, id) => (
                    <Cell
                        key={id}
                        onClick={onCellClicked}
                        id={id}
                        cellState={cellState}
                    />
                ))}
            </View>
            {/* Linha 2 */}
            <View style={styles.row}>
                {/* Renderiza as células da segunda linha */}
                {tableState.slice(3, 6).map((cellState, id) => (
                    <Cell
                        key={id + 3}
                        onClick={onCellClicked}
                        id={id + 3}
                        cellState={cellState}
                    />
                ))}
            </View>
            {/* Linha 3 */}
            <View style={styles.row}>
                {/* Renderiza as células da terceira linha */}
                {tableState.slice(6).map((cellState, id) => (
                    <Cell
                        key={id + 6}
                        onClick={onCellClicked}
                        id={id + 6}
                        cellState={cellState}
                    />
                ))}
            </View>
        </View>
    );
}

// Estilos para a tabela e suas linhas
const styles = StyleSheet.create({
    table: {
        width: 300,
        height: 300,
    },
    row: {
        flexDirection: 'row', // Disposição das células em linha
        flexWrap: 'wrap', // Envolve as células caso excedam o tamanho da linha
        justifyContent: 'center', // Centraliza horizontalmente as células
        alignItems: 'center', // Centraliza verticalmente as células
        width: '100%', // A largura da linha é 100% da tabela
        height: '33.33%', // Cada linha ocupa 33.33% da altura da tabela
    },
});

export default Table;
