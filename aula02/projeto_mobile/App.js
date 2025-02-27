import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import imagem from './assets/steve (1).png';
import imagem1 from './assets/user.png';


class App extends Component {
  render() {
    let nome = 'Luiz Riato';
    return (
      <View style={styles.container}>
        <Text>Olá Mundo</Text>
        <Text>Meu Primeiro App</Text>
        <Text style={{ color: '#FF0000', fontSize: 25, margin: 15 }}>
          Programador
        </Text>
        <Image source={imagem} style={styles.image} />
        <Image source={imagem1} style={styles.image} />
        <text>{nome}</text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    margin: 15,
  },
});

export default App;
