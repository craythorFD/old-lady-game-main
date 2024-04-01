import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Jogo da Velha</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Game')}
            >
                <Text style={styles.buttonText}>Jogar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    title: {
        color: 'white',
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 70,
    },
    button: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});

export default HomeScreen;