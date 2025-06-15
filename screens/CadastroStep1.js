import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { styles } from '../styles/cadastro';

export default function CadastroStep1({ navigation }) {
  const [form, setForm] = useState({ nome: '', nascimento: '', cpf: '', email: '', senha: '' });

  return (
    <View style={styles.container}>
      <Image source={require('../assets/XP_Inc._Logo.svg.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Cadastro</Text>
      {['Nome Completo', 'Data de Nascimento', 'CPF', 'Email', 'Senha'].map((field, i) => (
        <TextInput
          key={i}
          placeholder={field}
          secureTextEntry={field === 'Senha'}
          style={styles.input}
          onChangeText={text => setForm({ ...form, [field.toLowerCase().replace(/ /g, '')]: text })}
        />
      ))}
      <TouchableOpacity onPress={() => navigation.navigate('CadastroStep2', { form })} style={styles.button}>
        <Text style={styles.buttonText}>Seguinte</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
