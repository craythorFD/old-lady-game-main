import {Modal, StyleSheet, Text, Pressable, View} from 'react-native';

const InvalidMoveDialog = ({isOpen, onClickClose}) => {
  return (
    // Modal para exibir mensagem de movimento inválido
    <Modal
        animationType="fade"
        transparent={true}
        visible={isOpen}
    >
        {/* View centralizada para o modal */}
        <View style={styles.centeredView}>
            {/* View que contém o conteúdo do modal */}
            <View style={styles.modalView}>
                {/* Texto indicando que o movimento é inválido */}
                <Text style={styles.modalText}>
                    Não é possível jogar aqui!
                </Text>
                {/* Botão para fechar o modal */}
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={onClickClose}
                >
                    {/* Texto do botão */}
                    <Text style={styles.textStyle}>
                        Voltar
                    </Text>
                </Pressable>
            </View>
        </View>
    </Modal>
  );
};

// Estilos para o modal
const styles = StyleSheet.create({
  // View centralizada
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  // Estilos para a view do modal
  modalView: {
    margin: 20,
    backgroundColor: 'Orange',
    borderWidth: 2,
    borderColor: 'Red',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
  // Estilos para os botões
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  // Estilos para o botão de fechar
  buttonClose: {
    backgroundColor: 'white',
    textTransform: 'uppercase',
  },
  // Estilos para o texto dos botões
  textStyle: {
    color: 'Orange',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // Estilos para o texto da mensagem do modal
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'Orange',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default InvalidMoveDialog;
