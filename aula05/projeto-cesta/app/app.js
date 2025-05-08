import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import Cesta from '../src/telas/Cesta';

export default function App(){
    return (
        <SafeAreaView>
        <StatusBar/>
        <Cesta/>
        <SafeAreaView/>
        </SafeAreaView>
    )
}