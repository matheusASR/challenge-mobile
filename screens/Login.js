import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/XP_Inc._Logo.svg.png')} // substitua com o nome real do arquivo da logo
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#000"
        style={styles.input}
      />

      <TextInput
        placeholder="Senha"
        placeholderTextColor="#000"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.buttonEntrar}
        onPress={() => navigation.navigate('MenuPrincipal')}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}} style={{ marginTop: 10 }}>
        <Text style={styles.link}>Não tem uma conta?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CadastroStep1')}
      >
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 180,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#ddd',
    padding: 12,
    borderRadius: 5,
    marginBottom: 15,
  },
  link: {
    color: 'rgb(45, 114, 198)',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 15,
    backgroundColor: 'rgb(45, 114, 198)',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: 150
  },
  buttonEntrar: {
    marginTop: 5,
    marginBottom: 30,
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: '100%'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
