import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Picker,
  Slider,
  Switch,
  Button,
  Alert,
  StyleSheet
} from 'react-native';

export default function App() {
  // Estados para armazenar os dados do formulário
  const [nome, setNome] = useState('');
  const [sexo, setSexo] = useState('Masculino');
  const [limite, setLimite] = useState(500);
  const [isCasado, setIsCasado] = useState(false);

  // Função para abrir conta
  const abrirConta = () => {
    const mensagem = `
      Conta aberta com sucesso!
      Nome: ${nome}
      Sexo: ${sexo}
      Limite: R$${limite.toFixed(2)}
      Estado Civil: ${isCasado ? 'Casado' : 'Solteiro'}
    `;
    Alert.alert('Sucesso', mensagem);
    
    // Opcional: Limpar formulário após abrir conta
    setNome('');
    setSexo('Masculino');
    setLimite(500);
    setIsCasado(false);
  };

  return (
    <View style={styles.container}>
      {/* Input para o nome */}
      <Text>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
      />

      {/* Picker para sexo */}
      <Text>Sexo:</Text>
      <Picker
        selectedValue={sexo}
        style={styles.picker}
        onValueChange={(itemValue) => setSexo(itemValue)}
      >
        <Picker.Item label="Masculino" value="Masculino" />
        <Picker.Item label="Feminino" value="Feminino" />
      </Picker>

      {/* Slider para limite */}
      <Text>Limite da Conta: R${limite.toFixed(2)}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={5000}
        step={100}
        value={limite}
        onValueChange={setLimite}
      />

      {/* Switch para estado civil */}
      <View style={styles.switchContainer}>
        <Text>Estado Civil: {isCasado ? 'Casado' : 'Solteiro'}</Text>
        <Switch
          value={isCasado}
          onValueChange={setIsCasado}
        />
      </View>

      {/* Botão para abrir conta */}
      <Button
        title="Abrir Conta"
        onPress={abrirConta}
        disabled={!nome} // Desabilita se o nome estiver vazio
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 15,
    borderRadius: 4,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 15,
  },
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 15,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});