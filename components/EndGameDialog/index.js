import {Modal, StyleSheet, Text, Pressable, View} from 'react-native';

const EndGameDialog = ({resultText, isOpen, onClickYes, onClickNo}) => {
  return (
    // Modal que é mostrado ao fim do jogo
    <Modal
        animationType="fade"
        transparent={true}
        visible={isOpen}
    >
        {/* View centralizada para o modal */}
        <View style={styles.centeredView}>
            {/* View que contém o conteúdo do modal */}
            <View style={styles.modalView}>
                {/* Título do modal, exibindo o resultado do jogo */}
                <Text style={styles.modalTitle}>
                    {resultText}
                </Text>
                {/* Mensagem perguntando se deseja jogar novamente */}
                <Text style={styles.modalText}>
                    {'Tentar novamente?'}
                </Text>
                {/* View com botões de "Sim" e "Não" */}
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                  {/* Botão "Sim" */}
                  <Pressable
                      style={[styles.button, styles.buttonYes]}
                      onPress={onClickYes}
                  >
                      {/* Texto do botão "Sim" */}
                      <Text style={styles.buttonText}>
                          Sim
                      </Text>
                  </Pressable>
                  {/* Botão "Não" */}
                  <Pressable
                      style={[styles.button, styles.buttonNo]}
                      onPress={onClickNo}
                  >
                      {/* Texto do botão "Não" */}
                      <Text style={styles.buttonText}>
                          Não
                      </Text>
                  </Pressable>
                </View>
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
    backgroundColor: 'purple',
    borderWidth: 2,
    borderColor: 'red',
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
  // Estilos para o botão "Sim"
  buttonYes: {
    backgroundColor: 'black',
  },
  // Estilos para o botão "Não"
  buttonNo: {
    backgroundColor: 'black',
  },
  // Estilos para o texto dos botões
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  // Estilos para o texto da mensagem do modal
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'orange',
  },
  // Estilos para o texto do título do modal
  modalTitle: {
    marginBottom: 15,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'yellow',
    textTransform: 'uppercase',
  },
});

export default EndGameDialog;
