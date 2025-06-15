import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../styles/cadastro';

export default function CadastroStep3({ navigation, route }) {
  const { form } = route.params;

  const finalizarCadastro = async (objetivo) => {
    const usuario = { ...form, objetivo };
    try {
      await AsyncStorage.setItem('usuario', JSON.stringify(usuario));
      Alert.alert('Sucesso', 'Cadastro finalizado!', [
        { text: 'OK', onPress: () => navigation.navigate('Login') },
      ]);
    } catch (e) {
      Alert.alert('Erro', 'Não foi possível salvar os dados.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/XP_Inc._Logo.svg.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Cadastro</Text>
      <Text style={styles.subTitle}>Que tipo de investimentos você procura?</Text>
      {['Curto Prazo', 'Médio Prazo', 'Longo Prazo'].map((tipo, i) => (
        <TouchableOpacity key={i} onPress={() => finalizarCadastro(tipo)} style={styles.option}>
          <Text style={styles.optionText}>{tipo}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}