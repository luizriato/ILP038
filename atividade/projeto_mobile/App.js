import React, { Component } from "react";
import {View, StyleSheet, Text, TextInput, Switch, Button, Alert, Platform} from "react-native";
import Slider from "@react-native-community/slider";
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      sexo: "",
      limiteConta: 0,
      isCasado: false,
    };
  }
 
  handleAbrirConta = () => {
    if (!this.state.nome.trim()) {
      if (Platform.OS === "web") {
        window.alert("Digite seu nome.");
      } else {
        Window.alert("Digite seu nome.");
      }
      return;
    }
 
    const mensagem = `
      Nome: ${this.state.nome}
      Sexo: ${this.state.sexo}
      Saldo: R$${this.state.limiteConta.toFixed(2)}
      Estado Civil: ${this.state.isCasado ? "Casado" : "Solteiro"}
    `;
 
    if (Platform.OS === "web") {
      window.alert(`Conta aberta com sucesso!\n${mensagem}`);
    } else {
      Window.alert("Sucesso", `Conta aberta com sucesso!\n${mensagem}`);
    }
  };
 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>App Banco</Text>
        <Text style={styles.label}>Digite seu Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu nome"
          value={this.state.nome}
          onChangeText={(texto) => this.setState({ nome: texto })}
        />
 
        <Text style={styles.label}>
          Digite seu Sexo (Masculino/Feminino/Outro):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Sexo"
          value={this.state.sexo}
          onChangeText={(texto) => this.setState({ sexo: texto })}
        />
 
        <Text style={styles.label}>
          Saldo: R${this.state.limiteConta.toFixed(2)}
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={10000}
          step={100}
          value={this.state.limiteConta}
          onValueChange={(valor) => this.setState({ limiteConta: valor })}
          minimumTrackTintColor="#00FF01"
          maximumTrackTintColor="#FF0010"
        />
        <Text style={styles.label}>
          Estado Civil: {this.state.isCasado ? "Casado" : "Solteiro"}
        </Text>
        <Switch
          value={this.state.isCasado}
          onValueChange={(valor) => this.setState({ isCasado: valor })}
          thumbColor={this.state.isCasado ? "#00FF01" : "#FF0010"}
        />
        <View style={styles.botaoContainer}>
          <Button
            title="Abrir Conta"
            onPress={this.handleAbrirConta}
            color="#1E90FE"
          />
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  label: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
    color: "#555",
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#FFF",
  },
  slider: {
    marginVertical: 10,
  },
  botaoContainer: {
    marginTop: 20,
  },
});
 
export default App;
 