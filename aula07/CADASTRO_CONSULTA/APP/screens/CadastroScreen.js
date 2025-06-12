import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const CadastroScreen = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  const handleCadastro = async () => {
    try {
      const response = await axios.post('http://10.68.153.31:3000/cadastro', {
        nome,
        email,
        senha,
      });
      console.log(response.data);
      setNome('');
      setEmail('');
      setSenha('');
      fetchUsuarios(); // Atualiza a lista
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  const fetchUsuarios = async () => {
    try {
      const response = await axios.get('http://10.68.153.31:3000/usuarios');
      setUsuarios(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  useEffect(() => {
      fetchUsuarios();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de usuário</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Senha"
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <Button title="Cadastrar" onPress={handleCadastro} color="#6200ee" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    marginBottom: 12,
  },
});

export default CadastroScreen;
