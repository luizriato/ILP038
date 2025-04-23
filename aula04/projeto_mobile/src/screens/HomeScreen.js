import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Ir para Cadastro"
        onPress={() => navigation.navigate('Cadastro', { itemId: 42 })}
      />
      <Button
        title="Ir para Consulta"
        onPress={() => navigation.navigate('Consulta', { itemId: 42 })}
      />
    </View>
  );
}
