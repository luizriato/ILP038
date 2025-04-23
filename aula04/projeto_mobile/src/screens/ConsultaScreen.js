import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

export default function ConsultaScreen() {
  const handleConsulta = () => {
    alert('Consulta realizada!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consulta de Usuário</Text>
      <Button title="Consultar" onPress={handleConsulta} color="#00CED1" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
});