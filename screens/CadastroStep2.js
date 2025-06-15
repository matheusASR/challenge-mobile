import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from '../styles/cadastro';

export default function CadastroStep2({ navigation, route }) {
  const { form } = route.params;
  const setPerfil = (perfil) => navigation.navigate('CadastroStep3', { form: { ...form, perfil } });

  return (
    <View style={styles.container}>
      <Image source={require('../assets/XP_Inc._Logo.svg.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Cadastro</Text>
      <Text style={styles.subTitle}>Como você considera seu perfil de investidor?</Text>
      {['Conservador', 'Moderado', 'Agressivo'].map((option, i) => (
        <TouchableOpacity key={i} onPress={() => setPerfil(option)} style={styles.option}>
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}