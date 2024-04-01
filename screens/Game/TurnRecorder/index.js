import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TurnRecorder = ({ playerName }) => {
    return (
        // Componente que registra e exibe o turno do jogador atual
        <View style={styles.container}>
            {/* Texto que exibe o nome do jogador atual */}
            <Text style={styles.text}>{`${playerName}`}</Text>
        </View>
    );
}

// Estilos para o componente TurnRecorder
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red', // Cor de fundo do componente
        padding: 10, // Espaçamento interno
        borderRadius: 5, // Borda arredondada
    },
    text: {
        color: 'white', // Cor do texto
        fontSize: 24, // Tamanho da fonte
        fontWeight: 'bold', // Negrito
        textTransform: 'uppercase', // Transforma o texto em maiúsculas
    },
});

export default TurnRecorder;
