import * as React from 'react';
import  { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import Cesta from './index';
import mock from './src/mocks/Cesta';

export default function App(){
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <Cesta {...mock}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
